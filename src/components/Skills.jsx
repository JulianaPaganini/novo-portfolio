import React from 'react';
import styled from 'styled-components';
import { CodeBracketIcon, ServerIcon, CircleStackIcon, Cog6ToothIcon, CloudIcon, CommandLineIcon, CubeIcon, BoltIcon } from '@heroicons/react/24/outline';

const Section = styled.section`
  padding: 100px 24px;
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: 32px;
`;

const Title = styled.h2`
  margin: 0 0 8px 0;
  font-size: 28px;
  color: #ffffff;
`;

const Subtitle = styled.p`
  margin: 0;
  color: #636464;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(2,6,23,0.06);
  display: flex;
  gap: 12px;
  align-items: center;
`;

const IconWrap = styled.div`
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: rgba(37,99,235,0.08);
`;

const SkillText = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillName = styled.div`
  font-weight: 600;
  color: #0f172a;
`;

const SkillDesc = styled.div`
  font-size: 13px;
  color: #64748b;
`;

const skills = [
  { name: 'React', desc: 'UI e componentes modernos', icon: CodeBracketIcon },
  { name: 'Node.js', desc: 'APIs e backend', icon: ServerIcon },
  { name: 'PostgreSQL', desc: 'Banco relacional', icon: CircleStackIcon },
  { name: 'Docker', desc: 'Containers e CI/CD', icon: CubeIcon },
  { name: 'TypeScript', desc: 'Tipagem estática', icon: BoltIcon },
  { name: 'HTML & CSS', desc: 'Markup e estilos', icon: Cog6ToothIcon },
  { name: 'DevOps', desc: 'Deploy e automação', icon: CloudIcon },
  { name: 'CLI & Scripts', desc: 'Produtividade', icon: CommandLineIcon }
];

export default function Skills() {
  return (
    <Section aria-label="Skills">
      <Header>
        <Title>Habilidades Técnicas</Title>
        <Subtitle>Tecnologias que utilizo no meu dia a dia para desenvolver soluções modernas e escaláveis.</Subtitle>
      </Header>

      <Grid>
        {skills.map((s) => (
          <Card key={s.name}>
            <IconWrap>
              <s.icon style={{ width: 24, height: 24, color: '#2563eb' }} aria-hidden="true" />
            </IconWrap>
            <SkillText>
              <SkillName>{s.name}</SkillName>
              <SkillDesc>{s.desc}</SkillDesc>
            </SkillText>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
