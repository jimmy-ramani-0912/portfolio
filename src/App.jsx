import { ThemeProvider } from "styled-components";
import { Suspense, useEffect, useState } from "react";
import { darkTheme, lightTheme, readStoredTheme, THEME_STORAGE_KEY } from "./utils/Themes.js";
import { GlobalStyle } from "./theme/globalStyles.js";
import Navbar from "./components/Navbar/index";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./routes.jsx";
import styled, { keyframes } from "styled-components";
import Cursor from "./components/Cursor/Cursor.jsx";
import SeoManager from "./seo/SeoManager.jsx";

export const LoaderWrapper = styled.div`
  height: 100dvh;
  width: 100vw;
  overflow: hidden;
  z-index: 100;
  position: fixed;
  inset: 0;
  background:
    radial-gradient(
      70% 55% at 50% 0%,
      ${({ theme }) => `${theme.primary}22`},
      transparent 72%
    ),
    ${({ theme }) => theme.bg};

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const LoaderWrapperSpinner = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.6;
    transform: scale(0.96);
  }
  50% {
    opacity: 1;
    transform: scale(1.04);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`;

export const SpinnerCore = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0 20px ${({ theme }) => `${theme.primary}aa`};
  animation: ${pulse} 1.4s ease-in-out infinite;
`;

export const SpinnerRing = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: ${({ theme }) => theme.primary};
  border-right-color: ${({ theme }) => `${theme.primary}99`};
  animation: ${rotate} ${({ $speed }) => $speed || "1.1s"} linear infinite;
`;

export const Spinner = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
`;

export const LoaderText = styled.p`
  margin: 0;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  background: linear-gradient(
    100deg,
    ${({ theme }) => theme.text_primary} 0%,
    ${({ theme }) => theme.primary} 45%,
    ${({ theme }) => theme.accent} 60%,
    ${({ theme }) => theme.text_primary} 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: ${shimmer} 1.9s linear infinite;
`;

function App() {
  const [darkMode, setDarkMode] = useState(readStoredTheme);

  useEffect(() => {
    const mode = darkMode ? "dark" : "light";
    document.documentElement.dataset.theme = mode;
    document.documentElement.style.colorScheme = mode;
    window.localStorage.setItem(THEME_STORAGE_KEY, mode);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", darkMode ? "#030711" : "#FFFFFF");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Cursor />
      <Suspense
        fallback={
          <LoaderWrapper>
            <LoaderWrapperSpinner>
              <Spinner>
                <SpinnerRing $speed="1.2s" />
                <SpinnerRing $speed="1.9s" />
                <SpinnerCore />
              </Spinner>
              <LoaderText>Loading...</LoaderText>
            </LoaderWrapperSpinner>
          </LoaderWrapper>
        }
      >
        <Router>
          <SeoManager />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            {PublicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
