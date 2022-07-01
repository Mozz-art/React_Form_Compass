import logoImg from "../../assets/data 1.png";
import { LogoImg } from "./success.styled.js";
import Button from "../../components/button/button";
import { Container } from "./success.styled.js";
import { PageSuccess } from "./success.styled.js";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <Container>
      <PageSuccess>
        <LogoImg>
          <img src={logoImg} alt="logo" />
          <h1>Success</h1>
          <Link to="/Home">
            <Button className="successButton" button="Go Back!" />
          </Link>
        </LogoImg>
      </PageSuccess>
    </Container>
  );
};

export default Success;
