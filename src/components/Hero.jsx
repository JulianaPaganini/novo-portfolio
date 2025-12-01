import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import avatar from '../assets/foto.jpg';


const HeroSection = styled.section`
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 32px;
  align-items: center;

    @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    }
`;

const Headline = styled.h1`
  font-size: 40px;
  line-height: 1.04;
  margin: 0 0 16px 0 ;
  color: #ffffff;
`;

const Sub = styled.p`
  margin: 0 0 24px 0;
  color: var(--color-muted);
  font-size: 18px;
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 10px;
  background: linear-gradient(90deg, var(--color-accent), #5a3cff);
  color: white;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(124,92,255,0.18);
`;

const SecondaryBtn = styled.a`
display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 10px;
  background: linear-gradient(90deg, var(--color-accent), #5a3cff);
  color: white;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(124,92,255,0.18);
`;

const AvatarCard = styled(motion.div)`
  border-radius: 20px;
  padding: 18px;
  background: linear-gradient(to bottom right, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

    @media (max-width: 768px) {
    margin: 0 auto;
  }

  
  
`;

const MobileSocialsInside = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: absolute;
    right: -55px;
    top: 50%;
    transform: translateY(-50%);
  }

  a {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 22px;
    backdrop-filter: blur(8px);
  }
`;



const Avatar = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 999px;
  object-fit: cover;
  border: 4px solid rgba(255,255,255,0.06);

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

const Role = styled.div`
  margin-top: 12px;
  font-weight: 600;
`;

export default function Hero() {
  return (
    <HeroSection aria-label="Hero">
      <Content>
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Headline>Sou Juliana Paganini,</Headline>
           <Sub> Desenvolvedora Full Stack. Construo interfaces rápidas e experiências incríveis aos usuários, com uma paixão por transformar ideias complexas em soluções digitais robustas e escaláveis.
            <br />
            <br />
            Minha especialidade reside na intersecção entre o desenvolvimento moderno e a Inteligência Artificial (IA), construindo aplicações completas e inteligentes.
            <br />
            <br />
            Front-End: Expertise em React para criar interfaces de usuário reativas e de alta performance.
            <br />
            <br />
            Back-End: Proficiência em Node.js para arquitetar APIs seguras e escaláveis.
            <br />
            <br />
            Automação & Integração: Experiência em n8n para automatizar fluxos de trabalho e integrar sistemas de forma eficiente.
          </Sub>
          
          <CTAGroup>
            <PrimaryBtn href="#projects" role="button">Ver projetos</PrimaryBtn>
            <SecondaryBtn href="#contact" role="button">Contato</SecondaryBtn>
          </CTAGroup>
        </motion.div>

        <AvatarCard
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Avatar src={avatar} alt="Foto profissional" />
          <Role>Full Stack Developer</Role>

          <MobileSocialsInside>
    <a href="https://github.com/JulianaPaganini" target="_blank">
      <i className="bi bi-github"></i>
    </a>
    <a href="https://www.linkedin.com/in/julianapaganini" target="_blank">
      <i className="bi bi-linkedin"></i>
    </a>
    <a href="https://wa.me/55SEUNUMERO" target="_blank">
      <i className="bi bi-whatsapp"></i>
    </a>
  </MobileSocialsInside>

          </AvatarCard>
      </Content>
    </HeroSection>
  );
}