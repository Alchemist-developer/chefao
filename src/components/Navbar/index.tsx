import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Logo from "../../assets/logo-horizontal-colorido.png";
import * as S from "./styled";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/users";

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const handleLogout =() => {
    dispatch(signOut())
    alert("Deslogado")
  }
  return (
    <S.NavbarComponent>
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} width="235" alt="Parrot Logo" />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <div>
            <S.SpanNavbar className="pe-3">Olá, usuário</S.SpanNavbar>
            <S.LinkNavbar href="" onClick={handleLogout} className="ps-3"> <a href="">Sair</a> </S.LinkNavbar>
          </div>
        </Navbar.Collapse>
      </Container>
    </S.NavbarComponent>
  );
};

export default Header;
