import { Container, Form, BackgroundImg } from "./styles";
import { HiOutlineMail, HiArrowSmLeft } from "react-icons/hi";
import { CgLock } from "react-icons/cg";
import { FiUser } from "react-icons/fi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../service/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let buttonDisabled = !name || !password || !email;

  function handleBack() {
    navigate(-1);
  }

  async function handleNewUser(event) {
    buttonDisabled = true;
    event.preventDefault();

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!regex.test(email)) {
      return alert("Formato de email invalido!");
    }

    if (!name || !password || !email) {
      return alert("Todos os campos devem ser preenchidos");
    }

    try {
      const response = await api.post("/users", { name, email, password });
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      }
      alert("Erro ao criar usuário");
    }
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <strong>Aplicação para acompanhar tudo que assistir.</strong>

        <h2>Crie sua conta</h2>
        <Input
          icon={FiUser}
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          icon={HiOutlineMail}
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          icon={CgLock}
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          title="Cadastar"
          onClick={handleNewUser}
          disabled={buttonDisabled}
        ></Button>

        <a onClick={handleBack}>
          <HiArrowSmLeft />
          Voltar para o Login
        </a>
      </Form>
      <BackgroundImg />
    </Container>
  );
}
