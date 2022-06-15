import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const SpanNavbar = styled.span`
  font-size: 24px;
  color: #76bb4c;
  border-right: 2px solid #76bb4c;
`;

export const LinkNavbar = styled.span`
  text-decoration: none;
  font-size: 16px;
  color: #6033aa;
  cursor: pointer;
  display: inline-block;
`;

export const NavbarComponent = styled(Navbar)`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  height: 86px;
  padding: 0;
  margin: 0;
`;
