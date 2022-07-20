import { Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { MovieTag } from "../../components/MovieTag";

export function NewMovie() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <Link to="/">
            <HiArrowSmLeft size={20} />
            Voltar
          </Link>

          <h1>Novo filme</h1>
          <div className="col-2">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <TextArea placeholder="Observações" />
          <span>Marcadores</span>
          <div className="tags">
            <MovieTag value={"React"} />
            <MovieTag value={"React"} />
            <MovieTag value={"React"} />
            <MovieTag value={"React"} />
            <MovieTag value={"React"} />
            <MovieTag value={"React"} />
            <MovieTag value={"Este e um marcador"} />
            <MovieTag isNew placeholder="Novo marcador" />
          </div>
          <Button title="Criar nota de filme" />
        </Form>
      </main>
    </Container>
  );
}
