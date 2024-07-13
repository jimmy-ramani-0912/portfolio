import { ThemeProvider } from "styled-components";
import { Suspense, useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar/index";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./routes.jsx";
import styled, { keyframes } from "styled-components";
import Cursor from "./components/Cursor/Cursor.jsx";

export const LoaderWrapper = styled.div`
  height: 100dvh;
  width: 100vw;
  overflow: hidden;
  z-index: 100;

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
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 2px solid #a395e9;
  border-top: 2px solid #171721;
  border-radius: 50%;
  width: 3rem;
  aspect-ratio: 1/ 1;
  animation: ${spin} 1s linear infinite;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Cursor />
      <Suspense
        fallback={
          <LoaderWrapper>
            <LoaderWrapperSpinner>
              <Spinner />
            </LoaderWrapperSpinner>
          </LoaderWrapper>
        }
      >
        <Router>
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
