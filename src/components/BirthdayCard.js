import React from 'react'
import { Card } from './ui/card'
import { Heart, Sparkles, Gift } from 'lucide-react'

const BirthdayCard = ({ name = 'Special Person', message, age }) => {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 shadow-2xl">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 rounded-full opacity-20 translate-y-12 -translate-x-12"></div>

      <div className="relative p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Sparkles className="text-pink-500" size={24} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Feliz Aniversário!
            </h1>
            <Sparkles className="text-purple-500" size={24} />
          </div>

          {age && (
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 text-white rounded-full text-2xl font-bold shadow-lg mb-4">
              {age}
            </div>
          )}
        </div>

        {/* Name */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Meu {name},
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Message */}
        <div className="text-center mb-8">
          <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto">
            {message ||
              'Que seu dia especial seja preenchido com felicidade, amor e todas as suas coisas favoritas. Aqui está mais um ano de lembranças maravilhosas e aventuras emocionantes à frente!'}
          </p>
        </div>

        {/* Decorative Icons */}
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <Heart className="text-pink-500" size={20} />
            </div>
            <span className="text-sm text-gray-600">Muito amor</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Gift className="text-purple-500" size={20} />
            </div>
            <span className="text-sm text-gray-600">Muita Paz</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <Sparkles className="text-pink-500" size={20} />
            </div>
            <span className="text-sm text-gray-600">Felicidade</span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Estarás sempre em minhas orações para que tudo dê certo pra você! 🎉
          </p>
        </div>
      </div>
    </Card>
  )
}

export default BirthdayCard
