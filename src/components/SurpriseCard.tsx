
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SurpriseCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-center mt-12">
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-3 bg-romantic-rose text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
      >
        Сюрприз
      </button>

      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
              <div className="text-center">
                <h3 className="font-playfair text-2xl mb-4">Менің махаббатым...</h3>
                <p className="text-gray-600 leading-relaxed">
                  Сенімен өткен әр күн ерекше мағынаға толы. Сен менің өмірімді жарқын етесің, ал армандарымды жақындатасың. Өмірімде болғаныңа рахмет. Мен сені сүйемін!
                </p>
                <div className="mt-6 text-6xl">❤️</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SurpriseCard;
