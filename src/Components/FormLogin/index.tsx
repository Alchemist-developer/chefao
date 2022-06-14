import React from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css";
import Logo from "../../assets/logo-colorido.png";
import { User } from "../../types";
import { useFormik } from "formik";
import * as Yup from 'yup';


const FormLogin: React.FC = () => {
    
  return (
    <div className="background">
        <div className="containerForm">
        <div className="divImage">
        <img src={Logo} alt="" />
        </div>
        <h3>LOGIN</h3>
        <Form className="form">
          <Form.Group className="mb-1">
            <Form.Control id="email" type="email" placeholder="email"/>
          </Form.Group>
          <Form.Group className="mb-1" >
            <Form.Control id="senha" type="password" placeholder="senha"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            entrar
          </Button>
        </Form>
        <div className="divLinkCadastro">
        <a href="">cadastre-se</a>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;