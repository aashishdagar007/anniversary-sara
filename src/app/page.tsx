import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Calendar } from 'lucide-react';

export default function AnniversaryWebsite() {
  const [hearts, setHearts] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setShowMessage(true);
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2
      };
      setHearts(prev => [...prev.slice(-20), newHeart]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 overflow-hidden relative">
      {/* Floating hearts background */}
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute bottom-0 text-pink-400 opacity-60 pointer-events-none"
          style={{
            left: `${heart.left}%`,
            animation: `float ${heart.duration}s ease-in infinite`,
            animationDelay: `${heart.delay}s`
          }}
        >
          <Heart className="w-6 h-6" fill="currentColor" />
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <div
          className={`max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-1000 ${
            showMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Header with sparkles */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              <Heart className="w-12 h-12 text-pink-500 animate-bounce" fill="currentColor" />
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Happy 1 Month Anniversary!
          </h1>

          {/* Date badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Calendar className="w-5 h-5 text-purple-600" />
            <p className="text-lg text-gray-600 font-medium">
              October 7 - November 7, 2024
            </p>
          </div>

          {/* Names */}
          <div className="text-center mb-8">
            <p className="text-3xl font-bold text-purple-700 mb-2">
              Aashish Dagar
            </p>
            <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" fill="currentColor" />
            <p className="text-3xl font-bold text-pink-700">
              Sara Sharma
            </p>
          </div>

          {/* Message */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-6">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              To my dearest Sara,
              <br /><br />
              One month ago, my life changed in the most beautiful way. Every moment with you has been filled with joy, laughter, and love. You make every day brighter, and I'm so grateful to have you by my side.
              <br /><br />
              Here's to many more months, years, and a lifetime of memories together. Thank you for being you.
              <br /><br />
              With all my love,
              <br />
              Aashish ❤️
            </p>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-pink-100 rounded-xl p-4">
              <p className="text-3xl font-bold text-pink-600">30</p>
              <p className="text-sm text-gray-600">Days Together</p>
            </div>
            <div className="bg-purple-100 rounded-xl p-4">
              <p className="text-3xl font-bold text-purple-600">720</p>
              <p className="text-sm text-gray-600">Hours of Happiness</p>
            </div>
            <div className="bg-pink-100 rounded-xl p-4">
              <p className="text-3xl font-bold text-pink-600">∞</p>
              <p className="text-sm text-gray-600">Love for You</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}