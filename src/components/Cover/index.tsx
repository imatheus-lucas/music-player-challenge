import { usePlayer } from "../../contexts/PlayerContext";
import { Container, CoverDescription } from "./styles";
export function Cover() {
  const { musics } = usePlayer();
  const music = musics[0];
  return (
    <Container>
      {music && (
        <>
          <img src={music.thumbnail} alt="Cover" />
          <CoverDescription>
            <h1>{music.title}</h1>
            <p>{music.description}</p>
          </CoverDescription>
        </>
      )}
    </Container>
  );
}
