import { ButtonPosition } from "./button.styled.js";

const Button = ({ button }) => {
  return (
    <ButtonPosition>
      <button type="submit">{button}</button>
    </ButtonPosition>
  );
};

export default Button;
