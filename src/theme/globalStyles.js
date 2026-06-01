import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-display: "Inter", system-ui, sans-serif;
    --font-body: "Inter", system-ui, sans-serif;
    --font-mono: "JetBrains Mono", ui-monospace, monospace;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 22px;
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
    background-image:
      linear-gradient(${({ theme }) => theme.gridLine} 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.gridLine} 1px, transparent 1px);
    background-size: 64px 64px;
    background-position: center top;
  }

  #root::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background:
      radial-gradient(
        80% 50% at 50% -10%,
        ${({ theme }) => theme.accentMesh1},
        transparent 55%
      ),
      radial-gradient(
        60% 40% at 100% 0%,
        ${({ theme }) => theme.accentMesh2},
        transparent 50%
      );
  }
`;
