import React, { useEffect, useState } from 'react'

const PartyAnimations = ({ isActive = true }) => {
  const [confetti, setConfetti] = useState([])
  const [balloons, setBalloons] = useState([])

  // Generate confetti particles
  useEffect(() => {
    if (!isActive) return

    const generateConfetti = () => {
      const colors = [
        '#ff6b6b',
        '#4ecdc4',
        '#45b7d1',
        '#f9ca24',
        '#f0932b',
        '#eb4d4b',
        '#6c5ce7',
        '#fd79a8'
      ]
      const newConfetti = []

      for (let i = 0; i < 50; i++) {
        newConfetti.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 3,
          animationDuration: 2 + Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: Math.random() > 0.5 ? 'circle' : 'square',
          size: 4 + Math.random() * 8
        })
      }
      setConfetti(newConfetti)
    }

    // Generate balloons
    const generateBalloons = () => {
      const balloonColors = [
        '#ff6b6b',
        '#4ecdc4',
        '#45b7d1',
        '#f9ca24',
        '#f0932b',
        '#6c5ce7',
        '#fd79a8',
        '#55efc4'
      ]
      const newBalloons = []

      for (let i = 0; i < 15; i++) {
        newBalloons.push({
          id: i,
          left: Math.random() * 90,
          animationDelay: Math.random() * 2,
          animationDuration: 8 + Math.random() * 4,
          color:
            balloonColors[Math.floor(Math.random() * balloonColors.length)],
          size: 30 + Math.random() * 20
        })
      }
      setBalloons(newBalloons)
    }

    generateConfetti()
    generateBalloons()

    // Regenerate confetti periodically
    const confettiInterval = setInterval(generateConfetti, 6000)

    return () => {
      clearInterval(confettiInterval)
    }
  }, [isActive])

  if (!isActive) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {/* Confetti */}
      {confetti.map(piece => (
        <div
          key={`confetti-${piece.id}`}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.animationDelay}s`,
            animationDuration: `${piece.animationDuration}s`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            borderRadius: piece.shape === 'circle' ? '50%' : '0',
            transform: 'rotate(45deg)'
          }}
        />
      ))}

      {/* Balloons */}
      {balloons.map(balloon => (
        <div
          key={`balloon-${balloon.id}`}
          className="absolute animate-balloon-float"
          style={{
            left: `${balloon.left}%`,
            animationDelay: `${balloon.animationDelay}s`,
            animationDuration: `${balloon.animationDuration}s`,
            bottom: '-100px'
          }}
        >
          {/* Balloon */}
          <div
            className="relative"
            style={{
              width: `${balloon.size}px`,
              height: `${balloon.size * 1.2}px`,
              backgroundColor: balloon.color,
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              position: 'relative',
              boxShadow: `inset -10px -10px 0 rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.2)`
            }}
          >
            {/* Balloon highlight */}
            <div
              className="absolute top-2 left-2 bg-white opacity-40 rounded-full"
              style={{
                width: `${balloon.size * 0.3}px`,
                height: `${balloon.size * 0.3}px`
              }}
            />

            {/* Balloon string */}
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-600"
              style={{
                width: '1px',
                height: '60px'
              }}
            />
          </div>
        </div>
      ))}

      {/* Floating sparkles */}
      <div className="absolute top-10 left-10 animate-bounce text-yellow-400 text-2xl">
        ✨
      </div>
      <div className="absolute top-20 right-20 animate-pulse text-pink-400 text-3xl">
        🎊
      </div>
      <div
        className="absolute bottom-32 left-16 animate-bounce text-purple-400 text-2xl"
        style={{ animationDelay: '1s' }}
      >
        🎉
      </div>
      <div
        className="absolute top-40 left-1/2 animate-pulse text-blue-400 text-2xl"
        style={{ animationDelay: '2s' }}
      >
        ✨
      </div>
      <div
        className="absolute bottom-20 right-10 animate-bounce text-green-400 text-3xl"
        style={{ animationDelay: '0.5s' }}
      >
        🎊
      </div>
      <div
        className="absolute top-60 right-1/3 animate-pulse text-red-400 text-2xl"
        style={{ animationDelay: '1.5s' }}
      >
        🎉
      </div>
    </div>
  )
}

export default PartyAnimations
