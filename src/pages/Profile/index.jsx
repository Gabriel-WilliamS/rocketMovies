import { Container, Avatar, Form } from "./styles";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { HiArrowSmLeft, HiOutlineMail } from "react-icons/hi";
import { FiCamera, FiUser } from "react-icons/fi";
import { CgLock } from "react-icons/cg";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <HiArrowSmLeft size={20} />
          Voltar
        </Link>
      </header>
      <Form>
        <Avatar>
          <img
            src="https://github.com/gabriel-williams.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera size={20} />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input icon={FiUser} placeholder="Nome" />
        <Input type="email" icon={HiOutlineMail} placeholder="E-mail" />
        <Input type="password" icon={CgLock} placeholder="Senha atual" />
        <Input type="password" icon={CgLock} placeholder="Nova senha" />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
