// src/components/PhotoGallery.tsx

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

interface Photo {
  id: number;
  url: string;
  description: string;
}

const PhotoGallery = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const photos: Photo[] = [
    { id: 1, url: "/images/photo_2025-02-13_01-14-36.jpg", description: "Біздің Думандағы алғашқы кездесуіміз" },
    { id: 2, url: "/images/photo_2025-02-13_01-13-18.jpg", description: "Первый шаг (цветы)" },
    { id: 3, url: "/images/photo_2025-02-13_01-41-39.jpg", description: "Бірінші бірге серуендеуіміз" },
    { id: 4, url: "/images/photo_2025-02-13_01-13-13.jpg", description: "Ерекше күн капшагай" },
    { id: 5, url: "/images/photo_2025-02-13_01-13-13 (2).jpg", description: "Бірге болған ұмытылмас уақыт" },
    { id: 6, url: "/images/photo_2025-02-13_01-10-40.jpg", description: "Пока - Жаңа жылға дейін" },
    { id: 7, url: "/images/photo_2025-02-13_01-10-42.jpg", description: "Туған күн" },
    { id: 8, url: "/images/photo_2025-02-13_01-10-43.jpg", description: "Арамызда ара-қашықтық" },
    { id: 9, url: "/images/photo_2025-02-13_01-13-15.jpg", description: "Арамызда ара-қашықтық" },
    { id: 10, url: "/images/photo_2025-02-13_01-10-43 (2).jpg", description: "Қош келдін" },
    { id: 11, url: "/images/photo_2025-02-13_01-13-26.jpg", description: "Қош келдін" },
    { id: 12, url: "/images/photo_2025-02-13_01-10-44.jpg", description: "Ұйқысыз түндер" },
    { id: 13, url: "/images/photo_2025-02-13_01-10-45.jpg", description: "Маңызды күн" },
    { id: 14, url: "/images/photo_2025-02-13_01-13-28.jpg", description: "Махаббатым" },
    { id: 15, url: "/images/photo_2025-02-13_01-10-46.jpg", description: "Жаңа жыл" },
    { id: 16, url: "/images/photo_2025-02-13_01-10-47.jpg", description: "Келесі кездескенше" }
  ];

  const handlePhotoClick = (id: number) => {
    setSelectedId(id === selectedId ? null : id);
    toast("Прекрасный момент! ❤️");
  };

  return (
    <div className="py-12">
      <h2 className="text-3xl font-playfair text-center mb-8">
        Наши прекрасные моменты
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            onClick={() => handlePhotoClick(photo.id)}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: Math.min(photo.id * 0.1, 2),
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            {/* Переносим layoutId на изображение */}
            <motion.img
              layoutId={`photo-${photo.id}`}
              src={photo.url}
              alt={photo.description}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 left-4 text-white text-sm">
                {photo.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Контейнер для модального окна с ограничением по размеру */}
            <motion.div
              className="relative bg-white rounded-xl overflow-auto p-2"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
              }}
            >
              <motion.img
                layoutId={`photo-${selectedId}`}
                src={photos.find((photo) => photo.id === selectedId)?.url}
                alt={
                  photos.find((photo) => photo.id === selectedId)?.description ||
                  "Фото"
                }
                className="object-contain"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "80vh",
                }}
              />
              <motion.button
                className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center"
                onClick={() => setSelectedId(null)}
                whileHover={{ scale: 1.1 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;
