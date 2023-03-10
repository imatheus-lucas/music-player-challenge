import { Moon, Sun } from "phosphor-react";
import { Cover } from "../../components/Cover";
import { Player } from "../../components/Player";
import { PlayerContextProvider } from "../../contexts/PlayerContext";
import { useTheme } from "../../contexts/ThemeContext";
import { ChooseThemeButton, Container } from "./styles";
function Home() {
  const { toogleTheme, theme } = useTheme();
  return (
    <Container>
      <ChooseThemeButton onClick={toogleTheme}>
        {theme.title === "light" ? (
          <Sun weight="fill" size={24} color={theme.colors.secondary} />
        ) : (
          <Moon weight="fill" size={24} color={theme.colors.secondary} />
        )}
      </ChooseThemeButton>
      <PlayerContextProvider>
        <Cover />
        <Player />
      </PlayerContextProvider>
    </Container>
  );
}

export default Home;
