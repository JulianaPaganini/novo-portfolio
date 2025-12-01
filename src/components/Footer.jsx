import React from "react";
import { FooterWrapper, FooterContent, Text } from "../styles/footerstyles";

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <Text>
          © {new Date().getFullYear()} <span>Juliana Paganini</span>. Todos os direitos reservados.
        </Text>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;

