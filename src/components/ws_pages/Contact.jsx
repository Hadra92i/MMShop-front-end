import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "90%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  outline: none;
  ${mobile({
    width: "100%",
  })}
`;

const Textarea = styled.textarea`
  width: 100%;
  min-width: 40%;
  margin: 20px 10px 10px 0;
  padding: 20px;
  outline: none;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  outline: none;
  padding: 15px;
  background-color: #4869ee;
  color: white;
  cursor: pointer;
  ${mobile({
    width: "100%",
  })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Envoyez nous un message</Title>
        <Form>
          <Input placeholder="Nom" />
          <Input placeholder="Prénom" />
          <Input placeholder="email" />
          <Input placeholder="Téléphone" />
          <Textarea placeholder="Votre message"></Textarea>
          <Button>Valider</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
