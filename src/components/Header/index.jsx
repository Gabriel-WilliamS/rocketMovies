import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";
import { useState } from "react";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
export function Header({ onChange }) {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  let location = useLocation();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <Container>
      <h2>RocketMovies</h2>
      {location.pathname === "/" ? (
        <Input placeholder="Pesquisar pelo título" onChange={onChange} />
      ) : (
        <></>
      )}
      <Profile>
        <div>
          <p>{user.name}</p>
          <a onClick={handleSignOut}>sair</a>
        </div>
        <a onClick={() => navigate("/profile")}>
          <img src={avatar} alt="Imagem do usuário" />
        </a>
      </Profile>
    </Container>
  );
}
