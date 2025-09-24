import React from 'react'
import MusicPlayer from '../components/MusicPlayer'
import ImageSlider from '../components/ImageSlider'
import BirthdayCard from '../components/BirthdayCard'
import PartyAnimations from '../components/partyAnimations'
import { getPersonData, getMusicData, getImagesData } from '../utils/mockData'
import { Sparkles, Star, Heart } from 'lucide-react'

const BirthdayPage = ({ showAnimations = true }) => {
  const personData = getPersonData()
  const musicData = getMusicData()
  const imagesData = getImagesData()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Party Animations - only show if enabled */}
      <PartyAnimations isActive={showAnimations} />

      {/* Floating Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-20 left-10 text-pink-300 animate-party-bounce">
          <Sparkles size={24} />
        </div>
        <div className="absolute top-32 right-20 text-purple-300 animate-bounce">
          <Star size={20} />
        </div>
        <div className="absolute bottom-40 left-20 text-pink-400 animate-pulse">
          <Heart size={28} />
        </div>
        <div
          className="absolute top-60 right-10 text-purple-400 animate-party-bounce"
          style={{ animationDelay: '1s' }}
        >
          <Sparkles size={32} />
        </div>
        <div className="absolute bottom-20 right-32 text-pink-300 animate-pulse">
          <Star size={24} />
        </div>
        <div
          className="absolute top-80 left-1/4 text-yellow-400 animate-bounce"
          style={{ animationDelay: '2s' }}
        >
          <Sparkles size={20} />
        </div>
        <div
          className="absolute bottom-60 right-1/4 text-blue-400 animate-party-bounce"
          style={{ animationDelay: '0.5s' }}
        >
          <Star size={26} />
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-party-bounce">
            🎉 Feliz Aniversário 🎉
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hoje e sempre será dia para celebrar você e todas as coisas fodas
            que você é!
          </p>
        </div>

        <div className="grid gap-12 max-w-6xl mx-auto">
          {/* Music Player Section */}
          <section className="flex justify-center">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                🎵 Melhor Musica de Aniversário
              </h2>
              <MusicPlayer src={musicData.src} title={musicData.title} />
            </div>
          </section>

          {/* Birthday Card Section */}
          <section className="flex justify-center">
            <div className="w-full max-w-2xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                💝 Mensagem de Muito Carinho
              </h2>
              <BirthdayCard
                name={personData.name}
                age={personData.age}
                message={personData.message}
              />
            </div>
          </section>

          {/* Image Slider Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              📸 Fotinhas Tops
            </h2>
            <ImageSlider images={imagesData} />
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pb-8">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <Heart className="text-pink-400" size={16} />
            <span className="text-sm">
              Feito com carinho por mim para você!
            </span>
            <Heart className="text-pink-400" size={16} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BirthdayPage
