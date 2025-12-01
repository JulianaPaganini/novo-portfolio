import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #0f172a;
    --color-bg: #0b1220;
    --color-accent: #7c5cff;
    --color-muted: #6b7280;
    --color-glass: rgba(255,255,255,0.04);
    --font-body: Inter, system-ui, -apple-system, 'Segoe UI', Roboto;
    --font-heading: Inter, system-ui, -apple-system, 'Segoe UI', Roboto;
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-round: 999px;
  }

  :root { box-sizing: border-box; }
  *, *::before, *::after { box-sizing: inherit; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: var(--font-body);
    background: var(--color-bg);
    color: #e6eef8;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a { color: inherit; text-decoration: none; }
`;