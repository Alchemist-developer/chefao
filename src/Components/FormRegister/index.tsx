import React from "react";
import { Button, Form, Alert } from "react-bootstrap";
import "./style.css";
import Logo from "../../assets/logo-colorido.png";
import { User } from "../../types";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  nome: Yup.string().required('Por favor preencha com seu nome'),
  email: Yup.string().email('Por favor preencha com um email válido').required('Por favor preencha com seu email'),
  senha: Yup.string().required('Por favor preencha com uma senha').min(8, 'Sua senha deve ter no mínimo 8 caracteres').max(12, 'Sua senha deve ter no máximo 12 caracteres'),
  confirmarSenha: Yup.string().oneOf([Yup.ref('senha'), null], 'As senhas não são iguais').required('Por favor preencha com uma senha'),
  apartamento: Yup.string().required('Por favor preencha com o número do seu apartamento'),
  imagem: Yup.string().required('Por favor preencha com um link para sua foto')
})


interface FormRegisterProps {
  createUser: (user: Omit<User, "id">) => void;
}


const FormRegister: React.FC<FormRegisterProps> = ({ createUser }) => {

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      apartamento: '',
      imagem: ''
    },
    validationSchema,
    onSubmit: values => {
      createUser({
        nome: values.nome,
        email: values.email,
        senha: values.senha,
        confirmarSenha: values.confirmarSenha,
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
        <Form className="form" onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-1">
            <Form.Control id="nome" type="text" placeholder="nome" value={formik.values.nome} onChange={formik.handleChange} isInvalid={formik.touched.nome && !!formik.errors.nome} isValid={formik.touched.nome && !formik.errors.nome} />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Control id="email" type="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} isInvalid={formik.touched.email && !!formik.errors.email} isValid={formik.touched.email && !formik.errors.email} />
          </Form.Group>
          <Form.Group className="mb-1" >
            <Form.Control id="senha" type="password" placeholder="senha" value={formik.values.senha} onChange={formik.handleChange} isInvalid={formik.touched.senha && !!formik.errors.senha} isValid={formik.touched.senha && !formik.errors.senha} />
          </Form.Group>
          <Form.Group className="mb-1" >
            <Form.Control id="confirmarSenha" type="password"
              value={formik.values.confirmarSenha} onChange={formik.handleChange} placeholder="confirmar senha" isInvalid={formik.touched.confirmarSenha && !!formik.errors.confirmarSenha} isValid={formik.touched.confirmarSenha && !formik.errors.confirmarSenha} />
          </Form.Group>
          <Form.Group className="mb-1" >
            <Form.Control id="apartamento" type="text" placeholder="unidade/apartamento" value={formik.values.apartamento} onChange={formik.handleChange} isInvalid={formik.touched.apartamento && !!formik.errors.apartamento} isValid={formik.touched.apartamento && !formik.errors.apartamento} />
          </Form.Group>
          <Form.Group className="mb-1" >
            <Form.Control id="imagem" type="text" placeholder="link da foto" value={formik.values.imagem} onChange={formik.handleChange} isInvalid={formik.touched.imagem && !!formik.errors.imagem} isValid={formik.touched.imagem && !formik.errors.imagem} />
          </Form.Group>
          <Button variant="primary" type="submit">
            entrar
          </Button>
          {formik.errors.email && formik.touched.email
            && (
              <Alert style={{ marginTop: 15 }} variant="danger">
                {formik.errors.email}
              </Alert>
            )}
          {formik.errors.senha && formik.touched.senha
            && (
              <Alert style={{ marginTop: 15 }} variant="danger">
                {formik.errors.senha}
              </Alert>
            )}
          {formik.errors.confirmarSenha && formik.touched.confirmarSenha
            && (
              <Alert style={{ marginTop: 15 }} variant="danger">
                {formik.errors.confirmarSenha}
              </Alert>
            )}
          <div>
            <a className="" href="/">Voltar</a></div>
        </Form>
      </div>
    </div>
  );
};

export default FormRegister;
