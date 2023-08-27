import React from "react";
import { Container, Row } from "../../../../Ui/Layout/Container.tsx";
import RegisterBox from "./Components/RegisterBox.tsx";
import LogoBox from "./Components/LogoBox.tsx";
import Navbar from "./Components/Navbar.tsx";
function Header() {
  return (
    <>
      <header>
        <Container>
          <Row>
            <RegisterBox></RegisterBox>
            <LogoBox />
            <Navbar />
          </Row>
        </Container>
      </header>
    </>
  );
}

export default Header;
