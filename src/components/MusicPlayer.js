import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

const MusicPlayer = ({ src, title = 'Happy Birthday Song' }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current

    const setAudioData = () => {
      setDuration(audio.duration)
      setCurrentTime(audio.currentTime)
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime)

    if (audio) {
      audio.addEventListener('loadeddata', setAudioData)
      audio.addEventListener('timeupdate', setAudioTime)

      return () => {
        audio.removeEventListener('loadeddata', setAudioData)
        audio.removeEventListener('timeupdate', setAudioTime)
      }
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const audio = audioRef.current
    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleProgressClick = e => {
    const audio = audioRef.current
    const clickX = e.nativeEvent.offsetX
    const width = e.currentTarget.offsetWidth
    const newTime = (clickX / width) * duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = time => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="relative">
      {/* Cassette Tape Background */}
      <div className="relative bg-gradient-to-b from-amber-100 to-amber-200 rounded-2xl p-8 shadow-2xl border-4 border-amber-300">
        {/* Cassette Body */}
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 shadow-inner">
          {/* Tape Reels */}
          <div className="flex justify-between items-center mb-6">
            <div className="w-16 h-16 bg-gray-700 rounded-full border-4 border-gray-600 flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
            </div>
            <div className="w-16 h-16 bg-gray-700 rounded-full border-4 border-gray-600 flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
            </div>
          </div>

          {/* Tape Window */}
          <div className="bg-gray-900 rounded-lg p-4 mb-6 border-2 border-gray-600">
            <div className="bg-amber-900 h-8 rounded opacity-80 relative overflow-hidden">
              <div
                className="bg-amber-700 h-full transition-all duration-300"
                style={{
                  width: `${duration ? (currentTime / duration) * 100 : 0}%`
                }}
              ></div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            {/* Title */}
            <h3 className="text-amber-100 text-center font-bold text-lg">
              {title}
            </h3>

            {/* Play/Pause Button */}
            <div className="flex justify-center">
              <button
                onClick={togglePlay}
                className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div
                className="bg-gray-600 h-2 rounded-full cursor-pointer overflow-hidden"
                onClick={handleProgressClick}
              >
                <div
                  className="bg-red-500 h-full transition-all duration-100"
                  style={{
                    width: `${duration ? (currentTime / duration) * 100 : 0}%`
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-amber-200 text-sm">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Volume Control */}
            <div className="flex justify-center">
              <button
                onClick={toggleMute}
                className="text-amber-200 hover:text-white transition-colors duration-200"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} />
    </div>
  )
}

export default MusicPlayer
