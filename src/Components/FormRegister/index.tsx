import React from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css"
import Logo from "../../assets/logo-colorido.png"

// import { Container } from './styles';

const FormRegister: React.FC = () => {
  return (
    <div className="background">
      <div className="containerForm">
        <div className="divImage">
        <img src={Logo} alt="" />
        </div>
        <h3>CADASTRO</h3>
        <Form className="registerForm" action="">
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="nome" />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Control type="email" placeholder="email" />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="senha" />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="confirmar senha" />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="unidade/apartamento" />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="link da foto" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
          <div><a href="/">Voltar</a></div>
        </Form>
      </div>
    </div>
  );
};

export default FormRegister;
