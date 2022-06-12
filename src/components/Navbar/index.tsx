import React from "react";
import { Container, Navbar as NavbarComponent } from "react-bootstrap";
import Logo from "../../assets/logo-horizontal-colorido.png";
import * as S from "./styled"

const Navbar: React.FC = () => {
  return (
    <NavbarComponent className="shadow p-0 bg-body rounded">
      <Container>
        <NavbarComponent.Brand href="#home">
          <img src={Logo} width="245" alt="Parrot Logo" />
        </NavbarComponent.Brand>
        <NavbarComponent.Collapse className="justify-content-end">
          <div>
            <S.SpanNavbar className="pe-3">Olá, usuário</S.SpanNavbar>
            <S.LinkNavbar href="" className="ps-3">sair</S.LinkNavbar>
          </div>
        </NavbarComponent.Collapse>
      </Container>
    </NavbarComponent>
  );
};

export default Navbar;
