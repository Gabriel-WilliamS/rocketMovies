import { Container, Form, BackgroundImg } from "./styles";
import { HiOutlineMail } from "react-icons/hi";
import { CgLock } from "react-icons/cg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  function handleSignIn(event) {
    event.preventDefault();
    if (!email || !password) {
      alert("Todos os campos tem que ser preenchidos");
    } else {
      signIn({ email, password });
    }
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <strong>Aplicação para acompanhar tudo que assistir.</strong>

        <h2>Faça seu login</h2>
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
        <Button title="Entrar" onClick={handleSignIn}></Button>
        <Link to="/register">Criar conta</Link>
      </Form>
      <BackgroundImg />
    </Container>
  );
}
