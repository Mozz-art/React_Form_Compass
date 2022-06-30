import styled from "styled-components";
const InputPosition = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 1%;
    color: #767676;
  }
  input {
    height: 3em;
    border-radius: 5px;
    border-color: #767676;
    opacity: 60%;
    :focus {
      outline: none;
    }
    ::placeholder  {
        padding: 1%;
      font-size: 16px;
    }
  }
`;

export { InputPosition };

const InputName = styled.div`
  width: 90%;
`;

export { InputName };

const InputEmail = styled.div`
  margin: 0 5% 0 0;
  width: 60%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0;
    order: 0;
  }
`;

export { InputEmail };

const InputPhone = styled.div`
  width: 25%;
  @media (max-width: 768px) {
    width: 42%;
    margin: 0 5% 0 0;
    order: 1;
  }
`;

export { InputPhone };

const InputPassword = styled.div`
  margin: 0 5% 0 0;
  width: 60%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0;
    order: 0;
  }
`;

export { InputPassword };

const InputBirthday = styled.div`
  width: 25%;
  @media (max-width: 768px) {
    width: 42%;
    order: 1;
  }


`;

export { InputBirthday };

