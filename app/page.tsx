"use client";

import { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  const [showMessage, setShowMessage] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [
    "/photos/photo1.jpeg",
    "/photos/photo2.jpeg",
    "/photos/photo3.jpeg",
  ];

  const handleClick = () => setShowMessage(true);
  const nextPhoto = () => setCurrentPhoto((prev) => (prev + 1) % photos.length);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex flex-col items-center justify-center text-center overflow-hidden">
      <Confetti numberOfPieces={300} />

      <audio autoPlay loop>
        <source src="/music/birthday.mp3" type="audio/mpeg" />
      </audio>

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 bg-pink-400 rounded-full"
          animate={{ y: [0, 600, 0], x: [0, 50, -50, 0] }}
          transition={{ repeat: Infinity, duration: 6 + i, ease: "easeInOut" }}
        />
      ))}

      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6 text-pink-600"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Happy Birthday, Shanjida! 🎉
      </motion.h1>

      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-lg md:text-2xl text-purple-700">
          Today is your special day, and I hope it's filled with love and joy! 💖
        </p>
      </motion.div>

      {!showMessage ? (
        <motion.button
          onClick={handleClick}
          className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Click to see your surprise!
        </motion.button>
      ) : (
        <motion.div
          className="mt-6 p-6 bg-white rounded-2xl shadow-xl max-w-md text-purple-800 text-lg md:text-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          🎂 Shanjida, you are the most amazing person in my life. Thank you for being you! I wish you all the happiness, love, and success today and always. ❤️ Love You
        </motion.div>
      )}

      <div className="mt-10">
        <motion.div
          className="relative w-64 h-64 md:w-96 md:h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
          onClick={nextPhoto}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={photos[currentPhoto]}
            alt="Memory photo"
            fill
            className="object-cover"
          />
        </motion.div>
        <p className="mt-2 text-purple-700">Click the photo to see the next memory 💌</p>
      </div>
    </div>
  );
}
