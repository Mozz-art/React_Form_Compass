import { InputPosition } from "./input.styled.js";
import { Error } from "./../error/error.styled.js";

const Input = ({
  label,
  type,
  placeholder,
  error,
  required,
  onChange,
  onBlur,
  show,
  onSelect
}) => {
  return (
    <InputPosition>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        onSelect={onSelect}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Error show={show}>
        <p>{error}</p>
      </Error>
    </InputPosition>
  );
};

export default Input;
