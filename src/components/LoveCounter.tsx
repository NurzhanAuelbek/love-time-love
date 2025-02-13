
import { motion } from 'framer-motion';

const LoveCounter = () => {
  const startDate = new Date('2023-02-14'); // Измените на вашу дату
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center mb-8"
    >
      <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
        <span className="text-romantic-rose font-playfair">
          210 күн бірге ❤️
        </span>
      </div><div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
        <span className="text-romantic-rose font-playfair">
          139 күн қалды ❤️
        </span>
      </div>
    </motion.div>
  );
};

export default LoveCounter;
