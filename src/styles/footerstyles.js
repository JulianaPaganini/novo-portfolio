import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 26px 0;
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(6px);
  margin-top: 80px;
`;

export const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  color: #ccc;
  font-size: 14px;

  span {
    color: #7c5cff;
    font-weight: 600;
  }
`;
