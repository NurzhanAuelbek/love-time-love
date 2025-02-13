import { motion, AnimatePresence } from "framer-motion";

interface PhotoModalProps {
  image: string | null;
  onClose: () => void;
}

const PhotoModal = ({ image, onClose }: PhotoModalProps) => {
  if (!image) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-white p-4 rounded-lg shadow-lg"
          style={{ display: "inline-block" }} // АВТОМАТИЧЕСКАЯ ШИРИНА
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full"
            onClick={onClose}
          >
            ✕
          </button>
          <img
            src={image}
            alt="Romantic moment"
            className="rounded-lg"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }} // Ограничиваем по экрану
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PhotoModal;
