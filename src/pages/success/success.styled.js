import styled from "styled-components";

const LogoImg = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 38px;
    font-family: "Inter";
  }
`;
export { LogoImg };

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container };

const PageSuccess = styled.div`
  text-align: center;
  width: 40%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Inter";
  @media (max-width: 1300px) {
    width: 60%;
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  Button {
    font-size: 36px;
    width: 6em;
    height: 4em;
    margin: 3em 0 0 0;
    font-family: "Nunito";
  }
`;

export { PageSuccess };
