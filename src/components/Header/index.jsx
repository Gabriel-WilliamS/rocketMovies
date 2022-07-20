import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>
      <Input placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <p>Gabriel William</p>
          <Link to="/">sair</Link>
        </div>
        <Link to="/profile">
          <img
            src="https://github.com/gabriel-williams.png"
            alt="Imagem do usuário"
          />
        </Link>
      </Profile>
    </Container>
  );
}
