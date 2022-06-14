import React from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css";
import Logo from "../../assets/logo-colorido.png";
import { User } from "../../types"
import {useFormik} from 'formik';


interface FormRegisterProps {
  createUser: (user: Omit<User, "id">) => void;
}


const FormRegister: React.FC<FormRegisterProps> = ({createUser}) => {

  const formik = useFormik({
    initialValues: {
      nome: '',
      email:'',
      senha: '',
      apartamento: '',
      imagem: ''
    },
    onSubmit: values => {
      createUser({
        nome: values.nome,
        email: values.email,
        senha: values.senha,
        apartamento: values.apartamento,
        imagem: values.imagem
      })
    }
  })

  return (
    <div className="background">
      <div className="containerForm">
        <div className="divImage">
        <img src={Logo} alt="" />
        </div>
        <h3>CADASTRO</h3>
        <Form className="registerForm" onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-1">
            <Form.Control id="nome" type="text" placeholder="nome" value={formik.values.nome} onChange={formik.handleChange}/>
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Control id="email" type="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange}/>
          </Form.Group>
          <Form.Group className="mb-1" >
            <Form.Control id="senha" type="password" placeholder="senha" value={formik.values.senha} onChange={formik.handleChange}/>
          </Form.Group>
          <Form.Group className="mb-1" >
            <Form.Control id="senha" type="password" placeholder="confirmar senha" />
          </Form.Group>
          <Form.Group className="mb-1" >
            <Form.Control id="apartamento" type="text" placeholder="unidade/apartamento" value={formik.values.apartamento} onChange={formik.handleChange}/>
          </Form.Group>
          <Form.Group className="mb-1" >
            <Form.Control id="imagem" type="text" placeholder="link da foto" value={formik.values.imagem} onChange={formik.handleChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default FormRegister;
