import { Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { MovieTag } from "../../components/MovieTag";
import { useState } from "react";
import { api } from "../../service/api";

export function NewMovie() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();
  let buttonDisabled = !title || !rating || !description || tags.length == 0;

  function handleBack() {
    navigate(-1);
  }

  function handleNewTag() {
    if (tags.includes(newTag)) {
      return alert("Já existe essa tag descrita");
    }
    setTags((oldTags) => [...oldTags, newTag]);
    setNewTag("");
  }

  function handleDeleteTag(deleteTag) {
    setTags((oldTags) => oldTags.filter((tag) => tag != deleteTag));
  }

  async function handleNewMovie() {
    buttonDisabled = true;
    if (newTag) {
      const confirm = confirm(
        "Existe uma tag que foi escrita mais não foi salva, deseja continuar mesmo assim ?"
      );

      if (!confirm) {
        setNewTag("");
        return;
      }
    }
    if (!title || !rating || !description || tags.length == 0) {
      return alert(
        "Para criar uma nota de filme todos os campos devem ser preenchidos!"
      );
    }

    try {
      const response = await api.post("/movies-notes/", {
        title,
        description,
        rating,
        tags
      });
      if (response.data) {
        alert(response.data.message);
        handleBack();
      } else {
        alert("Nota de filme criada com sucesso!");
        handleBack();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao criar a nota");
      }
    }
  }

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
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value.toUpperCase())}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
          <span>Marcadores</span>
          <div className="tags">
            {tags &&
              tags.map((tag, index) => (
                <MovieTag
                  key={index}
                  value={tag}
                  onClick={(event) => handleDeleteTag(tag)}
                />
              ))}
            <MovieTag
              isNew
              placeholder="Novo marcador"
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleNewTag}
              value={newTag}
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  handleNewTag();
                }
              }}
            />
          </div>
          <Button
            title="Criar nota de filme"
            onClick={handleNewMovie}
            disabled={buttonDisabled}
          />
        </Form>
      </main>
    </Container>
  );
}
