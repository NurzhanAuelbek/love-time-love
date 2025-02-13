import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Автоматически пытаемся запустить музыку, если браузер позволяет
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.warn("Автозапуск заблокирован браузером, ждём действия пользователя");
        }
      }
    };

    playAudio();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={togglePlay}
        className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-romantic-rose" />
        ) : (
          <VolumeX className="w-6 h-6 text-romantic-rose" />
        )}
      </button>
      <audio ref={audioRef} src="https://cdn4.deliciouspeaches.com/get/music/20240927/Bisariev_Dastan_Orazbekov_-_ANT_78243089.mp3" loop />
    </div>
  );
};

export default MusicPlayer;
