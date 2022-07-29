import { Container, Tags } from "./styles";
import { Tag } from "../Tag";
import { Rating } from "../Rating";
export function Movie({ data, ...rest }) {
  var student = {
    arrey: [
      {
        class1: {
          morning: {
            name: "Anamika Rai",
            age: 14,
            gender: "female"
          }
        }
      }
    ]
  };

  return (
    <Container {...rest}>
      <strong>{data.title}</strong>

      <Rating rate={data.rating} />

      <p>{data.description}</p>

      <Tags>
        {data.tags.map((tag) => (
          <Tag name={tag.name} key={tag.id} />
        ))}
      </Tags>
    </Container>
  );
}
