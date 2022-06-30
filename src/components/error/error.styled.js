import styled from "styled-components";
const Error = styled.div`
    p {
        font-family: "Nunito";
        font-size: 16px;
        margin-top: 1%;
        color: red;
        visibility: ${props => props.show === "visible" ? "visible" : "hidden"};
        @media (max-width: 768px) {
        font-size: 14px;
    }
  
      }

`;
export { Error };
