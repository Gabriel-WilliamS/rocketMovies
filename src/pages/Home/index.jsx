import { Container, Cards } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Movie } from "../../components/Movie";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <div className="title">
          <h1>Meus filmes</h1>
          <Link to="/new-movie">
            <Button icon={HiPlus} title="Adicionar filme" />
          </Link>
        </div>
        <Cards>
          <Movie
            data={{
              name: "Interestellar",
              note: 3,
              description: ` A Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper., ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, desconhecidadesconhecida ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombr`,
              tags: [
                "Ficção Cientifica",
                "Drama",
                "Drama",
                "Drama",
                "Drama",
                "Drama",
                "Drama",
                "Drama",
                "Drama"
              ]
            }}
          />
          <Movie
            data={{
              name: "Interestellar",
              note: 3,
              description: ` A Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper., ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, desconhecidadesconhecida ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombr`,
              tags: [
                "Ficção Cientifica",
                "Drama",
                "Drama",
                "Drama",
                "Drama",
                "Drama",
                "Drama",
                "Drama",
                "Drama"
              ]
            }}
          />

          <Movie
            data={{
              name: "Interestellar",
              note: 2,
              description: ` A Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper., ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, desconhecidadesconhecida ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombr`,
              tags: ["Ficção Cientifica", "Drama", "Família"]
            }}
          />
        </Cards>
      </main>
    </Container>
  );
}
