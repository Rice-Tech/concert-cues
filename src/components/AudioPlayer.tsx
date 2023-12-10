import React, { useEffect, useRef } from "react";

interface Props {
  isPlaying: boolean;
}
const AudioPlayer = ({ isPlaying }: Props) => {
  const audioRef = useRef(null);
  useEffect(() => {
    if (audioRef) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);
  return (
    <audio ref={audioRef} preload="auto">
      <source
        src="https://rice-tech.github.io/sounds/bells.mp3"
        type="audio/mp3"
      />
    </audio>
  );
};

export default AudioPlayer;
