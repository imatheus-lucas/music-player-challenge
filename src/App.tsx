import { ThemeProvider } from "styled-components";
import { useTheme } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyle";
export function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
