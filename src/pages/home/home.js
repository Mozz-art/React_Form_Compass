import React, { useState } from "react";
import Input from "../../components/input/input";
import { InputName } from "../../components/input/input.styled.js";
import { InputEmail } from "../../components/input/input.styled.js";
import { InputPhone } from "../../components/input/input.styled.js";
import { InputPassword } from "../../components/input/input.styled.js";
import { InputBirthday } from "../../components/input/input.styled.js";
import { PageOne } from "./home.styled.js";
import logoImg from "../../assets/data 1.png";
import { LogoImg } from "./home.styled.js";
import CheckBox from "../../components/checkbox/checkbox";
import Button from "../../components/button/button";
import { Container } from "./home.styled.js";
import { useNavigate } from "react-router-dom";
import { Footer } from "./home.styled.js";

const Home = () => {

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorBirthday, setErrorBirthday] = useState("");
  const [errorCheckbox, setErrorCheckbox] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [checked, setChecked] = useState(false);

  const navigation = useNavigate();

  const handleBlurName = ({ target }) => {
    const regex = /[A-Za-z]{4} /;
    if (!regex.test(target.value)) {
      setErrorName("visible");
    } else {
      setErrorName("");
      setName(target.value);
    }
  };
  const handleBlurEmail = ({ target }) => {
    const regex = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/;
    if (!regex.test(target.value)) {
      setErrorEmail("visible");
    } else {
      setErrorEmail("");
      setEmail(target.value);
    }
  };
  const handleBlurPhone = ({ target }) => {
    const regex =  /^[0-9]{11,12}$/;
    if (!regex.test(target.value)) {
      setErrorPhone("visible");
    } else {
      setErrorPhone("");
      setPhone(target.value);
    }
  };
  const handleBlurPassword = ({ target }) => {
    const regex = /^[0-9]{6,9}$/;
    if (!regex.test(target.value)) {
      setErrorPassword("visible");
    } else {
      setErrorPassword("");
      setPassword(target.value);
    }
  };
  const handleBlurBirthday = ({ target }) => {
    const regex =  /^\d{4}-\d{2}-\d{2}$/
    if (!regex.test(target.value)) {
      setErrorBirthday("visible");
    } else {
      setErrorBirthday("");
      setBirthday(target.value);
      console.log(birthday);
    }
  };
  const handleClickCheckbox = ({ target }) => {
    if (setChecked(target.checked)) {
      setErrorCheckbox("visible");
      console.log("notChecked");
      
    } else {
      setErrorCheckbox("");
      console.log("checked");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && phone && password && birthday && checked === true) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
      localStorage.setItem("password", password);
      localStorage.setItem("birthday", birthday);
      navigation("/success");
    } else {
      alert("Preencha os campos corretamente");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <PageOne>
          <LogoImg>
            <img src={logoImg} alt="logo" />
            <h1>Intern Sign Up</h1>
          </LogoImg>
          <InputName>
            <Input
              value={name}
              onBlur={handleBlurName}
              type="text"
              placeholder="Name"
              label="Full Name *"
              error="Full name invalid"
              required={true}
              show={errorName}
            />
          </InputName>
          <InputEmail>
            <Input
              value={email}
              onBlur={handleBlurEmail}
              type="email"
              placeholder="foo@bar.com"
              label="Email *"
              error="Email invalid"
              required={true}
              show={errorEmail}
            />
          </InputEmail>
          <InputPhone>
            <Input
              value={phone}
              onBlur={handleBlurPhone}
              type="tel"
              placeholder="(83) 00000-0000"
              label="Phone"
              error="Phone invalid"
              required={false}
              show={errorPhone}
            />
          </InputPhone>
          <InputPassword>
            <Input
              value={password}
              onBlur={handleBlurPassword}
              type="password"
              placeholder=""
              label="Password *"
              error="Password invalid"
              required={true}
              show={errorPassword}
            />
          </InputPassword>
          <InputBirthday>
            <Input
              value={birthday}
              onBlur={handleBlurBirthday}
              type="date"
              placeholder="yyyy/mm/dd"
              label="Birthday *"
              error="Age invalid"
              min="2012-01-01"
              max="1900-02-18"
              required={true}
              show={errorBirthday}
            />
          </InputBirthday>
          <Footer>
            <CheckBox
              checked={checked}
              onClick={handleClickCheckbox}
              value="Checkbox"
              label=" I accept the terms and privacy"
              error="You must accept the terms"
              show={errorCheckbox}
            />
            <Button button="Register" />
          </Footer>
        </PageOne>
      </Container>
    </form>
  );
};

export default Home;
