import { CheckBoxPosition } from "./checkbox.styled.js";
import { Error } from "./../error/error.styled.js";
const CheckBox = ({ label, placeholder, error, onChange, show }) => {
  return (
    <CheckBoxPosition>
      <input onChange={onChange} type="checkbox" placeholder={placeholder} />
      <label>{label}</label>
      <Error show={show}>
        <p>{error}</p>
      </Error>
    </CheckBoxPosition>
  );
};

export default CheckBox;
