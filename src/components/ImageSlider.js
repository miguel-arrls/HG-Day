import React, { useState, useEffect } from 'react'

const ImageSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = index => {
    setCurrentIndex(index)
  }

  if (images.length === 0) {
    return (
      <div className="relative w-full h-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl shadow-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-pink-200 rounded-full flex items-center justify-center mb-4 mx-auto">
            <span className="text-4xl">📸</span>
          </div>
          <p className="text-gray-600 text-lg"></p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    {image.caption}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-pink-500 shadow-lg transform scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
