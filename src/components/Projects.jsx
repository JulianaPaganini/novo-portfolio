import React from 'react';
import styled from 'styled-components';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Section = styled.section`
  padding: 80px 24px;
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

export default function Projects() {
  return (
    <Section id="projects">
      <Title>Projetos</Title>
      <Grid>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Grid>
    </Section>
  );
}