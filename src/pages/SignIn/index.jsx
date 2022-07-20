import { Container, Form, BackgroundImg } from "./styles";
import { HiOutlineMail } from "react-icons/hi";
import { CgLock } from "react-icons/cg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <strong>Aplicação para acompanhar tudo que assistir.</strong>

        <h2>Faça seu login</h2>
        <Input icon={HiOutlineMail} type="email" placeholder="E-mail" />
        <Input icon={CgLock} type="password" placeholder="Senha" />
        <Button title="Entrar"></Button>
        <Link to="/register">Criar conta</Link>
      </Form>
      <BackgroundImg />
    </Container>
  );
}
