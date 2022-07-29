import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../service/api";
const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/session", { email, password });
      const { user, token } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
      localStorage.setItem("@roketmovies:user", JSON.stringify(user));
      localStorage.setItem("@roketmovies:token", token);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao autenticar o usuário");
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@roketmovies:user");
    localStorage.removeItem("@roketmovies:token");
    setData({});
  }

  async function userUpdate({
    name,
    email,
    password,
    newPassword,
    avatarFile
  }) {
    const { user } = data;

    if (!name || !email) {
      return alert("O campo de nome e email devem estar preenchidos.");
    }

    if (!password) {
      return alert(
        "Para salvar qualquer modificação necessário passar a senha atual"
      );
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      const response = await api.put("/users/", {
        name,
        email,
        password,
        newPassword
      });

      alert(response.data.message);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao atualizar usuário.");
      }
    }

    setData({ user });
    localStorage.setItem("@roketmovies:user", JSON.stringify(user));
  }

  useEffect(() => {
    const user = localStorage.getItem("@roketmovies:user");
    const token = localStorage.getItem("@roketmovies:token");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
        userUpdate
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
