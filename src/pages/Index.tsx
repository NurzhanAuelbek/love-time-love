import { useState } from "react";
import { motion } from "framer-motion";
import RosePetals from "@/components/RosePetals";
import Timeline from "@/components/Timeline";
import PhotoModal from "@/components/PhotoModal";
import SurpriseCard from "@/components/SurpriseCard";
import MusicPlayer from "@/components/MusicPlayer";
import LoveCounter from "@/components/LoveCounter";
import Confetti from "@/components/Confetti";
import LoveReasons from "@/components/LoveReasons";
import SpecialPlaces from "@/components/SpecialPlaces";
import PhotoPuzzle from "@/components/PhotoPuzzle";
import PhotoGallery from "@/components/PhotoGallery";

const events = [
  {
    date: "12 шілде 2024",
    title: "Бірінші кездесуіміз",
    description: "Сол күні біз бірінші рет кездестік. Сол кештің әрбір бөлшектері, сенің күлкің мен көздеріңдегі ұшқын есімде...",
    image: "/images/photo_2025-02-13_01-14-36.jpg"

  },
  {
    date: "14 шілде 2024",
    title: "Бірінші бірге серуендеуіміз",
    description: "Екеуміз бірге жүрдік, уақыт тоқтап қалғандай болды. Әрбір сәт ерекше мағынаға толы болды.",
    image: "/images/photo_2025-02-13_01-41-39.jpg",
  },
  {
    date: "17 шілде 2024",
    title: "Первый шаг (цветы)",
    description: "Бұл күн менің жүрегімде мәңгі сақталады. Біздің сезімдеріміз күшейе түсті...",
    image: "/images/photo_2025-02-13_01-13-18.jpg",
  },
  {
    date: "17 тамыз 2024",
    title: "Ерекше күн капшагай",
    description: "Бұл күн менің жүрегімде мәңгі сақталады. Біздің сезімдеріміз күшейе түсті...",
    image: "/images/photo_2025-02-13_01-13-13.jpg",
  },
  {
    date: "27 тамыз 2024",
    title: "Бірге болған ұмытылмас уақыт",
    description: "Сенімен өткен әр күн қуаныш",
    image: "/images/photo_2025-02-13_01-13-13 (2).jpg",
  }
];

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSurpriseClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-romantic-soft to-romantic-peach">
      <RosePetals />
      <MusicPlayer />
      <Confetti isActive={showConfetti} />
      
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl md:text-6xl mb-4">
            Біздің махаббат хикаямыз
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Сенімен өткен әрбір сәт менің жүрегімде сақталған асыл естелік.
          </p>
        </motion.div>

        <LoveCounter />
        <Timeline events={events} onImageClick={setSelectedImage} />
        <PhotoGallery />
        <LoveReasons />
        <div onClick={handleSurpriseClick}>
          <SurpriseCard />
        </div>
      </div>

      <PhotoModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export default Index;
