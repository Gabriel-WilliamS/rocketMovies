import { Container, Avatar, Form } from "./styles";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { HiArrowSmLeft, HiOutlineMail } from "react-icons/hi";
import { FiCamera, FiUser } from "react-icons/fi";
import { CgLock } from "react-icons/cg";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../service/api";

export function Profile() {
  const { user, userUpdate } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleUpdateProfile(event) {
    event.preventDefault();
    userUpdate({ name, email, password, newPassword, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];

    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }
  return (
    <Container>
      <header>
        <a onClick={handleBack}>
          <HiArrowSmLeft size={20} />
          Voltar
        </a>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera size={20} />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input
          icon={FiUser}
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          type="email"
          icon={HiOutlineMail}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>
          <small>A senha é obrigatória para qualquer modificação*</small>
        </label>
        <Input
          type="password"
          icon={CgLock}
          placeholder="Senha atual"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          icon={CgLock}
          placeholder="Nova senha"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdateProfile} />
      </Form>
    </Container>
  );
}
