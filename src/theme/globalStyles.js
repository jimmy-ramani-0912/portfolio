import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-display: "Space Grotesk", "Inter", system-ui, sans-serif;
    --font-body: "Inter", system-ui, sans-serif;
    --font-mono: "JetBrains Mono", ui-monospace, monospace;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 20px;
  }

  html {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-body);
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: ${({ theme }) => theme.selectionBg};
    color: ${({ theme }) => theme.selectionText};
  }

  ::-moz-selection {
    background-color: ${({ theme }) => theme.selectionBg};
    color: ${({ theme }) => theme.selectionText};
  }

  input::selection,
  textarea::selection {
    background-color: ${({ theme }) => theme.selectionBg};
    color: ${({ theme }) => theme.selectionText};
  }

  input::-moz-selection,
  textarea::-moz-selection {
    background-color: ${({ theme }) => theme.selectionBg};
    color: ${({ theme }) => theme.selectionText};
  }

  #root {
    min-height: 100dvh;
    position: relative;
    isolation: isolate;
    background-color: ${({ theme }) => theme.bg};
  }

  h1, h2, h3, h4 {
    font-family: var(--font-display);
  }
`;
