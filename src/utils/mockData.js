export const mockBirthdayData = {
  person: {
    name: 'Anjo',
    age: 25,
    message:
      'Hoje e todos os outros dias sempre serão dias para celebrar a pessoa incrível que és. Sua beleza ilumina todos os lugares por onde passa tal qual ouro cintilante ao redor do bronze monótono. És uma pessoa de personalidade singular, sempre me cativa com seu jeito sincero e integro de ser. Você uma moça de extrema força, Que seu dia seja tão radiante quanto o seu sorriso e tão especial quanto o brilho que você traz ao mundo. Feliz aniversário, Hanna! 🎉🎂🎈'
  },

  music: {
    src: 'https://customer-assets.emergentagent.com/job_silly-napier-1/artifacts/asucjp3x_caneta-azul-meus-parabens.mp3',
    title: 'Musiquinha de Aniversário'
  },

  images: [
    {
      src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop',
      alt: 'Birthday celebration',
      caption: 'Celebrating another amazing year!'
    },
    {
      src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=400&fit=crop',
      alt: 'Birthday cake',
      caption: 'Make a wish!'
    },
    {
      src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=400&fit=crop',
      alt: 'Birthday party',
      caption: 'Friends and memories'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop',
      alt: 'Birthday gifts',
      caption: 'Special surprises'
    }
  ]
}

export const getPersonData = () => mockBirthdayData.person
export const getMusicData = () => mockBirthdayData.music
export const getImagesData = () => mockBirthdayData.images
