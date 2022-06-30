import { CheckBoxPosition } from './checkbox.styled.js'
import { Error } from "./../error/error.styled.js";
const CheckBox = ({label,placeholder, error, onClick}) => {
  
  return (
    <CheckBoxPosition>
      <input onBlur={onClick} type="checkbox" placeholder={placeholder}/>
      <label>{label}</label>
      <Error><p>{error}</p></Error>
    </CheckBoxPosition>
  );
};

export default CheckBox;
