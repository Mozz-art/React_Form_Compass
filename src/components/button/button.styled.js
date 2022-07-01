import styled from "styled-components";
const ButtonPosition = styled.div`
  button {
    width: 7em;
    height: 3em;
    border-radius: 5px;
    background: #0dbdbd;
    border: none;
    color: white;
    cursor: pointer;
    margin: 0 0 2em 20em;
    font-family: "Nunito";
    @media (max-width: 1800px) {
      margin: 0 0 2em 15em;
    }
    @media (max-width: 1600px) {
      margin: 0 0 2em 13em;
    }
    @media (max-width: 1450px) {
      margin: 0 0 2em 10em;
    }
    @media (max-width: 1400px) {
      margin: 0 0 2em 8em;
    }
    @media (max-width: 1300px) {
      margin: 0 0 2em 20em;
    }
    @media (max-width: 1200px) {
      margin: 0 0 2em 18em;
    }
    @media (max-width: 1100px) {
      margin: 0 0 2em 15em;
    }
    @media (max-width: 970px) {
      margin: 0 0 2em 12em;
    }
    @media (max-width: 900px) {
      margin: 2em 0 2em 0;
      width: 80vw;
    }
  }
`;
export { ButtonPosition };
