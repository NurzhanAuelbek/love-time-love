
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CatchHeart = () => {
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        x: Math.random() * (window.innerWidth - 50),
        y: -50,
      };
      setHearts(prev => [...prev, newHeart]);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) return;

    const animation = setInterval(() => {
      setHearts(prev => prev.filter(heart => heart.y < window.innerHeight).map(heart => ({
        ...heart,
        y: heart.y + 5,
      })));
    }, 50);

    return () => clearInterval(animation);
  }, [isPlaying]);

  const catchHeart = (id: number) => {
    setScore(prev => prev + 1);
    setHearts(prev => prev.filter(heart => heart.id !== id));
  };

  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-playfair mb-4">Поймай сердечки любви</h2>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-6 py-2 bg-romantic-rose text-white rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          {isPlaying ? "Остановить игру" : "Начать игру"}
        </button>
        {isPlaying && (
          <p className="mt-4 text-2xl font-playfair text-romantic-rose">
            Очки: {score}
          </p>
        )}
      </div>

      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            style={{
              position: 'fixed',
              left: heart.x,
              top: heart.y,
              cursor: 'pointer',
            }}
            onClick={() => catchHeart(heart.id)}
            className="text-4xl"
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CatchHeart;
