import React from 'react';

import {Container, Navbar as NavbarComponent, Row} from "react-bootstrap";
import Logo2 from "../../assets/parrot-logo2.png"

const Navbar: React.FC = () => {
  return (
    <NavbarComponent>
        <Container fluid style={{padding: "0 10rem"}} className="d-flex justify-content-end">
            <div>
                <img src={Logo2} alt="" />
            </div>
            <div className='d-flex'>
                <h5 className='border-end'>Olá, usuário</h5>
                <a>sair</a>
            </div>
        </Container>

    </NavbarComponent>
  );
}

export default Navbar;