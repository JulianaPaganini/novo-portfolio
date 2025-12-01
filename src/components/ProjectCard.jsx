import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255,255,255,0.02);
  border-radius: 14px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.3);
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.45);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.h3`
  margin: 0;
  color: #fff;
`;

const Desc = styled.p`
  margin: 0;
  font-size: 14px;
  color: #94a3b8;
`;

const Buttons = styled.div`
  margin-top: auto;
  display: flex;
  gap: 10px;
`;

const Btn = styled.a`
  padding: 8px 12px;
  border-radius: 8px;
  background: linear-gradient(90deg, #7c5cff, #5a3cff);
  color: #fff;
  font-weight: 600;
`;

export default function ProjectCard({ project }) {
  return (
    <Card>
      <Image src={project.image} alt={project.title} />

      <Title>{project.title}</Title>

      <Desc>{project.description}</Desc>

      <Buttons>
        {project.demo && <Btn href={project.demo} target="_blank">Demo</Btn>}
        <Btn href={project.github} target="_blank">Código</Btn>
      </Buttons>
    </Card>
  );
}
