import React, { useEffect, useRef, useState } from 'react';
import birthdaySong from '../Component/birthdaySong.mp3';

const MusicPlayer = () => {
  const audioRef = useRef(new Audio(birthdaySong));
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((error) => {
        console.log("Autoplay blocked. User interaction may be required.");
      });
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true; // Set the audio to loop indefinitely

    // Cleanup: pause and reset audio when component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div>
      <button onClick={togglePlay}>
        {isPlaying ? 'Stop Music' : 'Play Birthday Song'}
      </button>
    </div>
  );
};

export default MusicPlayer;
