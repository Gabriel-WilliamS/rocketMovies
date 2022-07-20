import { Container } from "./styles";
import { HiX, HiOutlinePlus } from "react-icons/hi";
export function MovieTag({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest}></input>

      <button
        onClick={onClick}
        type="button"
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <HiOutlinePlus size={20} /> : <HiX size={20} />}
      </button>
    </Container>
  );
}
