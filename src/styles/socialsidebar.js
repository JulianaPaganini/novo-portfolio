
import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 18px;
  z-index: 2000;

   @media (max-width: 768px) {
    position: absolute;    /* <-- Muda aqui! */
    right: 50%;
    top: 132%;             /* Fica logo abaixo da foto */
    transform: translateX(50%);
    flex-direction: row;
    gap: 16px; 
  }
`;

export const IconLink = styled.a`
  font-size: 32px;
  color: #fff;
  background: #111;
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s;

  &:hover {
    transform: scale(1.15);
    background: #2c2c2c;
    color: #00e0ff;
  }
`;
