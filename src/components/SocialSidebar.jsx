
import React from "react";
import { SidebarContainer, IconLink } from "../styles/socialsidebar";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <SidebarContainer>
      <IconLink
        href="https://github.com/JulianaPaganini"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </IconLink>

      <IconLink
        href="https://www.linkedin.com/in/juliana-paganinii/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </IconLink>

      <IconLink
        href="https://wa.me/5519982839572" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </IconLink>
    </SidebarContainer>
  );
};

export default SocialSidebar;
