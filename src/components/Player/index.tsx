import { FastForward, Pause, Play, Rewind } from "phosphor-react";
import RCSlider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { usePlayer } from "../../contexts/PlayerContext";
import { Container, Controls, Progress, Timer } from "./styles";
export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [progress, setProgress] = useState(0);

  const { musics, isPlaying, playMusic, pauseMusic } = usePlayer();

  const [currentMusicDuration, setCurrentMusicDuration] = useState(0);
  const music = musics[0];

  function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
      .map((unit) => String(unit).padStart(2, "0"))
      .join(":");

    return timeString;
  }
  function endedMusic() {
    if (!audioRef.current) {
      return;
    }
    audioRef.current.currentTime = 0;
    setProgress(0);
    pauseMusic();
  }

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  function setupProgressListener(
    metadata: React.SyntheticEvent<HTMLAudioElement, Event>
  ) {
    if (!audioRef.current) {
      return;
    }
    audioRef.current.currentTime = 0;

    const { duration } = metadata.currentTarget;

    setCurrentMusicDuration(Math.floor(duration));
    audioRef.current.addEventListener("timeupdate", () => {
      if (!audioRef.current) {
        return;
      }
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function RewindMusic() {
    if (!audioRef.current) {
      return;
    }
    audioRef.current.currentTime = 0;
    setProgress(0);
  }

  function FastForwardMusic() {
    if (!audioRef.current) {
      return;
    }
    audioRef.current.currentTime = currentMusicDuration;
    setProgress(currentMusicDuration);
  }

  function handleSeek(value: number | number[]) {
    if (!audioRef.current) {
      return;
    }
    const amount = Number(value);

    audioRef.current.currentTime = amount;

    setProgress(amount);
  }

  const { colors } = useTheme();

  return (
    <Container>
      <Controls>
        <div>
          <button type="button" onClick={RewindMusic}>
            <Rewind size={24} weight="fill" />
          </button>

          {isPlaying ? (
            <button type="button" onClick={pauseMusic}>
              <Pause size={32} weight="fill" />
            </button>
          ) : (
            <button type="button" onClick={playMusic}>
              <Play size={32} weight="fill" />
            </button>
          )}

          <button type="button" onClick={FastForwardMusic}>
            <FastForward size={24} weight="fill" />
          </button>
        </div>
      </Controls>

      {music && (
        <audio
          src={music?.file.url}
          autoPlay
          ref={audioRef}
          loop={true}
          onLoadedMetadata={setupProgressListener}
          onPlay={playMusic}
          onEnded={endedMusic}
          onPause={pauseMusic}
        />
      )}

      <Progress>
        {music && (
          <RCSlider
            trackStyle={{ backgroundColor: colors.secondary }}
            railStyle={{ backgroundColor: "#a5a5a5" }}
            handleStyle={{ borderBlockColor: colors.primary, borderWidth: 0 }}
            onChange={handleSeek}
            max={currentMusicDuration}
            value={progress}
          />
        )}
      </Progress>
      <Timer>
        <span>{convertDurationToTimeString(progress)}</span>
        <span>{convertDurationToTimeString(currentMusicDuration)}</span>
      </Timer>
    </Container>
  );
}
