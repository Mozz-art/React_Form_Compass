import styled from "styled-components";
const PageOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 90%;
  border-radius: 20px;
  background-color: #fff;
  @media (max-width: 1300px) {
    width: 55%;
    height: 90%;
  }
  @media (max-width: 900px) {
      margin: 2em 0 2em 0;
      width: 82vw;
    }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  button {
    @media (max-width: 900px) {
      margin: 2em 0 2em 0;
      width: 80vw;
    }
  }
`;

export { PageOne };

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    order: 1;
  }
`;

export { Footer };

const LogoImg = styled.div`
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
  background: #E5E5E5;
`;

export { Container };
