import { Container, Cards } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Movie } from "../../components/Movie";
import { HiPlus } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../service/api";

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState([]);

  const navigate = useNavigate();

  function handleMoviePreview(id) {
    navigate(`/movie-preview/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get("/movies-notes/");
      const notes = response.data;
      setNotes(notes);
    }
    fetchNotes();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movies-notes?title=${search}`);
      const notes = response.data;
      setNotes(notes);
    }
    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />
      <main>
        <div className="title">
          <h1>Meus filmes</h1>
          <Link to="/new-movie">
            <Button icon={HiPlus} title="Adicionar filme" />
          </Link>
        </div>
        <Cards>
          {notes &&
            notes.map((note) => (
              <Movie
                key={note.id}
                data={note}
                onClick={() => handleMoviePreview(note.id)}
              />
            ))}
        </Cards>
      </main>
    </Container>
  );
}
