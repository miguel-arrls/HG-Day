import React, { useState } from 'react'
import { Button } from './ui/button'

const BirthdayIntro = ({ onComplete }) => {
  const [candlesLit, setCandlesLit] = useState(false)
  const [showBlowButton, setShowBlowButton] = useState(false)
  const [showSmoke, setShowSmoke] = useState(false)
  const [isBlowing, setIsBlowing] = useState(false)

  const lightCandles = () => {
    setCandlesLit(true)
    setTimeout(() => {
      setShowBlowButton(true)
    }, 1000)
  }

  const blowCandles = () => {
    setIsBlowing(true)
    setCandlesLit(false)
    setShowBlowButton(false)
    setShowSmoke(true)

    // After smoke animation, load main page
    setTimeout(() => {
      onComplete()
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Advanced Smoke Animation */}
      {showSmoke && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Background smoke clouds */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={`bg-cloud-${i}`}
                className="absolute animate-cloud-drift opacity-30"
                style={{
                  left: `${-30 + i * 12}%`,
                  top: `${5 + i * 6}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '4s'
                }}
              >
                <div
                  className="bg-gray-300 rounded-full blur-2xl"
                  style={{
                    width: `${150 + i * 25}px`,
                    height: `${80 + i * 15}px`
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Mid-layer smoke */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={`mid-cloud-${i}`}
                className="absolute animate-cloud-rise opacity-60"
                style={{
                  left: `${5 + i * 10}%`,
                  bottom: `${-15 + i * 4}%`,
                  animationDelay: `${0.3 + i * 0.3}s`,
                  animationDuration: '3.5s'
                }}
              >
                <div
                  className="bg-gray-400 rounded-full blur-xl"
                  style={{
                    width: `${100 + i * 20}px`,
                    height: `${60 + i * 12}px`
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Intense foreground smoke details */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={`fg-smoke-${i}`}
                className="absolute animate-smoke-swirl opacity-80"
                style={{
                  left: `${10 + i * 5}%`,
                  bottom: `${20 + i * 3}%`,
                  animationDelay: `${0.8 + i * 0.15}s`,
                  animationDuration: '3s'
                }}
              >
                <div
                  className="bg-gray-500 rounded-full blur-lg"
                  style={{
                    width: `${25 + i * 4}px`,
                    height: `${25 + i * 4}px`
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Heavy foreground particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={`heavy-smoke-${i}`}
                className="absolute animate-heavy-smoke opacity-90"
                style={{
                  left: `${15 + i * 6}%`,
                  top: `${30 + i * 4}%`,
                  animationDelay: `${1.2 + i * 0.1}s`,
                  animationDuration: '2.5s'
                }}
              >
                <div
                  className="bg-gray-600 rounded-full blur-md"
                  style={{
                    width: `${40 + i * 6}px`,
                    height: `${40 + i * 6}px`
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Dramatic screen overlay effect */}
          <div
            className="absolute inset-0 bg-gray-700 animate-dramatic-overlay"
            style={{
              animationDelay: '1.8s',
              animationDuration: '1.2s'
            }}
          ></div>

          {/* Final immersive veil */}
          <div
            className="absolute inset-0 bg-gray-800 animate-final-veil"
            style={{
              animationDelay: '2.5s',
              animationDuration: '0.8s'
            }}
          ></div>
        </div>
      )}

      <div className="text-center">
        {/* Birthday Cake */}
        <div className="relative mb-8">
          {/* Cake Base */}
          <div className="relative">
            {/* Cake Layers */}
            <div className="w-64 h-32 bg-gradient-to-b from-amber-200 to-amber-300 rounded-t-3xl mx-auto border-4 border-amber-400 shadow-2xl">
              {/* Cake Decoration */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-56 h-4 bg-pink-300 rounded-full"></div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-52 h-3 bg-red-400 rounded-full"></div>
            </div>

            {/* Cake Bottom */}
            <div className="w-64 h-12 bg-gradient-to-b from-amber-300 to-amber-400 mx-auto border-4 border-amber-400 border-t-0 shadow-2xl"></div>

            {/* Candles */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="relative">
                  {/* Candle */}
                  <div className="w-2 h-12 bg-gradient-to-b from-red-400 to-red-600 rounded-full shadow-lg"></div>

                  {/* Wick */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gray-800 rounded-full"></div>

                  {/* Flame */}
                  {candlesLit && !isBlowing && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-3 h-6 bg-gradient-to-t from-yellow-400 via-orange-400 to-red-500 rounded-full animate-pulse shadow-lg">
                        <div className="w-2 h-4 bg-gradient-to-t from-yellow-300 to-orange-300 rounded-full mx-auto animate-bounce"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-6">
          {!candlesLit && !showBlowButton && !showSmoke && (
            <Button
              onClick={lightCandles}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl transform transition-all duration-200 hover:scale-105"
            >
              🔥 Acenda as Velinhas
            </Button>
          )}

          {showBlowButton && (
            <div className="space-y-4">
              <p className="text-white text-lg mb-4 max-w-md mx-auto">
                Tá na hora de apagar as velinhas, bb. Feche os olhos e faça um
                desejo!
              </p>
              <Button
                onClick={blowCandles}
                className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl transform transition-all duration-200 hover:scale-105"
              >
                💨 Apagar as Velas
              </Button>
            </div>
          )}

          {showSmoke && (
            <div className="text-white text-xl animate-pulse">
              ✨ Fazendo o desejo... ✨
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BirthdayIntro
