import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Logo from "../../assets/logo-horizontal-colorido.png";
import * as S from "./styled";

const Header: React.FC = () => {
  return (
    <S.NavbarComponent>
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} width="235" alt="Parrot Logo" />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <div>
            <S.SpanNavbar className="pe-3">Olá, usuário</S.SpanNavbar>
            <S.LinkNavbar href="" className="ps-3">sair</S.LinkNavbar>
          </div>
        </Navbar.Collapse>
      </Container>
    </S.NavbarComponent>
  );
};

export default Header;
