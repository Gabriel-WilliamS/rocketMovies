import { Container, Form, BackgroundImg } from "./styles";
import { HiOutlineMail, HiArrowSmLeft } from "react-icons/hi";
import { CgLock } from "react-icons/cg";
import { FiUser } from "react-icons/fi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <strong>Aplicação para acompanhar tudo que assistir.</strong>

        <h2>Crie sua conta</h2>
        <Input icon={FiUser} placeholder="Nome" />
        <Input icon={HiOutlineMail} type="email" placeholder="E-mail" />
        <Input icon={CgLock} type="password" placeholder="Senha" />
        <Button title="Cadastar"></Button>
        <Link to="/">
          <HiArrowSmLeft />
          Voltar para o Login
        </Link>
      </Form>
      <BackgroundImg />
    </Container>
  );
}
