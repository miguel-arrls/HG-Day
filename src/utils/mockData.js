export const mockBirthdayData = {
  person: {
    name: 'Anjo',
    age: 25,
    message:
      'Hoje e todos os outros dias sempre serão dias para celebrar a pessoa incrível que és. Sua beleza ilumina todos os lugares por onde passa, tal qual ouro cintilante ao redor do bronze monótono. És uma pessoa de personalidade singular, sempre me cativa com seu jeito sincero e integro de ser. Você uma moça de extrema força, que seu dia seja tão radiante quanto o seu sorriso e tão especial quanto o brilho que você traz ao mundo. Feliz aniversário, Hanna! 🎉🎂🎈'
  },

  music: {
    src: 'https://customer-assets.emergentagent.com/job_silly-napier-1/artifacts/asucjp3x_caneta-azul-meus-parabens.mp3',
    title: 'Musiquinha de Aniversário'
  },

  images: [
    {
      src: 'https://imgur.com/2L1YYS9.jpg',
      alt: 'Paz e amor versão Hanna',
      caption: 'Mais um ano de vida com paz e amor!'
    },
    {
      src: 'https://i.imgur.com/YQ0ZxEl.jpg',
      alt: 'Versão Mini Hanna',
      caption: 'Muito fofinha você!'
    },
    {
      src: 'https://i.imgur.com/UG87P2O.jpg',
      alt: 'A Branquinha Que Mais Amo',
      caption: 'A Branquinha Que Mais Amo'
    },
    {
      src: 'https://i.imgur.com/VSdm9UK.jpg',
      alt: 'Foto Emoldurada',
      caption: 'Te amo muito!'
    }
  ]
}

export const getPersonData = () => mockBirthdayData.person
export const getMusicData = () => mockBirthdayData.music
export const getImagesData = () => mockBirthdayData.images
