import { createContext, ReactNode, useContext, useState } from "react";
import { musics as ListSongs } from "../../musics.json";
type PlayerContextData = {
  musics: IMusic[];
  isPlaying: boolean;
  playMusic: () => void;
  pauseMusic: () => void;
};

export const PlayerContext = createContext({} as PlayerContextData);

type PlayerContextProviderProps = {
  children: ReactNode;
};

interface File {
  url: string;
  type: string;
}

export interface IMusic {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  file: File;
}

export function PlayerContextProvider({
  children,
}: PlayerContextProviderProps) {
  const [musics, setMusics] = useState<IMusic[]>([...ListSongs]);
  const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:3333/musics")
  //     .then((response) => response.json())
  //     .then((data) => setMusics(data));
  // }, []);

  function playMusic() {
    setIsPlaying(true);
  }
  function pauseMusic() {
    setIsPlaying(false);
  }

  return (
    <PlayerContext.Provider
      value={{
        musics,
        isPlaying,
        playMusic,
        pauseMusic,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  return useContext(PlayerContext);
};
