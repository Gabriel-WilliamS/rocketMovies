import { Header } from "../../components/Header";
import { Container, Tags } from "./styles";
import { HiArrowSmLeft } from "react-icons/hi";
import { WiTime3 } from "react-icons/wi";
import { Link } from "react-router-dom";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { useAuth } from "../../hooks/auth";

export function MoviePreview() {
  const [data, setData] = useState({});

  const { user } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movies-notes/${params.note_id}`);

      setData(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        {data.note && (
          <>
            <a onClick={handleBack}>
              <HiArrowSmLeft size={20} />
              Voltar
            </a>

            <div className="title">
              <h1>{data.note.title}</h1>
              <Rating rate={data.note.rating} />
            </div>

            <div className="title-stats">
              <span>
                <img
                  src="https://github.com/gabriel-williams.png"
                  alt="Imagem do usuário"
                />
                Por {user.name}
              </span>

              <span>
                <WiTime3 />
                {data.note.created_at}
              </span>
            </div>

            <Tags>
              {data.tags.map((tag, i) => (
                <Tag name={tag.name} key={tag.id} />
              ))}
            </Tags>

            <p>{data.note.description}</p>
          </>
        )}
      </main>
    </Container>
  );
}
