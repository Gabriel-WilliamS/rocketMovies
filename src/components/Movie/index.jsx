import { Container, Tags } from "./styles";
import { Tag } from "../Tag";
import { Rating } from "../Rating";
export function Movie({ data }) {
  return (
    <Container to="/movie-preview">
      <strong>{data.name}</strong>

      <Rating rate={data.note} />

      <p>{data.description}</p>

      <Tags>
        {data.tags.map((tagname, i) => (
          <Tag name={tagname} key={i} />
        ))}
      </Tags>
    </Container>
  );
}
