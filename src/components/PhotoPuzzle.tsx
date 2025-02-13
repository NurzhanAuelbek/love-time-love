
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from "sonner";

interface PuzzlePiece {
  id: number;
  currentPosition: number;
  correctPosition: number;
  url: string;
}

const PhotoPuzzle = () => {
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const puzzleImages = [
    { url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800", name: "Наша первая встреча" },
    { url: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800", name: "Романтический ужин" },
    { url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800", name: "Прогулка по набережной" },
    { url: "https://images.unsplash.com/photo-1503516459261-40c66117780a?w=800", name: "Закат на пляже" },
    { url: "https://images.unsplash.com/photo-1605493666596-f490bad4b510?w=800", name: "Пикник в парке" },
  ];

  const gridSize = 3; // 3x3 puzzle

  const initializePuzzle = () => {
    const newPieces: PuzzlePiece[] = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
      const row = Math.floor(i / gridSize);
      const col = i % gridSize;
      newPieces.push({
        id: i,
        currentPosition: i,
        correctPosition: i,
        url: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), 
              url(${puzzleImages[selectedImageIndex].url}) ${-col * 100}% ${-row * 100}%`,
      });
    }

    // Перемешиваем кусочки
    const shuffled = [...newPieces].sort(() => Math.random() - 0.5);
    shuffled.forEach((piece, index) => {
      piece.currentPosition = index;
    });

    setPieces(shuffled);
    setIsStarted(true);
    setIsComplete(false);
    toast("Пазл начат! Собери фотографию вместе! ❤️");
  };

  const handlePieceClick = (position: number) => {
    if (selectedPiece === null) {
      setSelectedPiece(position);
      toast("Выберите кусочек, с которым хотите поменять местами");
    } else {
      // Меняем местами два выбранных кусочка
      setPieces(prev => {
        const newPieces = [...prev];
        const piece1 = newPieces.find(p => p.currentPosition === selectedPiece)!;
        const piece2 = newPieces.find(p => p.currentPosition === position)!;
        
        const temp = piece1.currentPosition;
        piece1.currentPosition = piece2.currentPosition;
        piece2.currentPosition = temp;
        
        return newPieces;
      });
      setSelectedPiece(null);
    }
  };

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
    setIsStarted(false);
    setPieces([]);
    setIsComplete(false);
    setSelectedPiece(null);
  };

  useEffect(() => {
    // Проверяем, собран ли пазл
    if (isStarted && pieces.length > 0) {
      const isCompleted = pieces.every(piece => piece.currentPosition === piece.correctPosition);
      if (isCompleted) {
        setIsComplete(true);
        toast("Поздравляем! Пазл собран! ❤️");
      }
    }
  }, [pieces, isStarted]);

};

export default PhotoPuzzle;
