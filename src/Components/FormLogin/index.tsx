import React from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css"
import Logo from "../../assets/logo-colorido.png"

// import { Container } from './styles';

const FormLogin: React.FC = () => {
  return (
    <div className="background">
      <div className="containerForm">
        <div className="divImage">
        <img src={Logo} alt="" />
        </div>
        <h3>CADASTRO</h3>
        <Form className="loginForm" action="">
          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Control type="email" placeholder="email" />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="senha" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Entrar
          </Button>
          <div><a href="/register">Cadastre-se</a></div>
        </Form>
      </div>
    </div>
  );
};

export default FormLogin;