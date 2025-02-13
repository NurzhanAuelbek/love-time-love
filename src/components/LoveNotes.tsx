
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const loveNotes = [
  "Ты - мое самое большое счастье",
  "Каждый день с тобой - это подарок",
  "Ты делаешь меня лучше",
  "Твоя улыбка - мое любимое чудо",
  "С тобой я чувствую себя особенной",
  "Ты - моя любимая история",
];

const LoveNotes = () => {
  const [visibleNotes, setVisibleNotes] = useState<number[]>([]);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const showNewNote = () => {
      setVisibleNotes(prev => {
        if (prev.length >= loveNotes.length) return prev;
        const availableIndices = Array.from(Array(loveNotes.length).keys())
          .filter(i => !prev.includes(i));
        if (availableIndices.length === 0) return prev;
        const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        return [...prev, randomIndex];
      });
    };

    const handleScroll = () => {
      if (Math.random() < 0.1) { // 10% chance to show a note on scroll
        showNewNote();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <motion.div style={{ opacity }} className="w-full h-full">
        {visibleNotes.map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: Math.random() * 20 - 10 }}
            transition={{ duration: 0.5 }}
            className="absolute bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg"
            style={{
              left: `${Math.random() * 60 + 20}%`,
              top: `${Math.random() * 60 + 20}%`,
              maxWidth: '200px',
            }}
          >
            <p className="text-romantic-rose font-playfair text-center">
              {loveNotes[index]}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LoveNotes;
