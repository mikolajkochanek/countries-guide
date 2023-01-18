import Pyramids from './images/pyramids.jpg'
import GreatWall from './images/GreatWall.jpg'
import MexicoCity from './images/mexico-city.jpg'
import Eiffel from './images/Eifel.jpg'

const continentData = {

    africa : {
        description: "Africa is the second-largest continent in the world, covering about 30.2 million square kilometers. It is home to a diverse population of over 1.3 billion people, representing thousands of ethnic groups and languages. Africa is known for its rich cultural heritage, natural resources, and wildlife, including iconic species such as lions, elephants, and gorillas.",
        countryExample: {
            countryName: "Egypt",
            countryDescription: "Discover the mysteries of ancient Egypt on your next vacation. Explore the pyramids of Giza, the temples of Luxor, and the tombs of the pharaohs. Uncover the secrets of the Nile on a river cruise, and marvel at the treasures of the Cairo Museum. Experience the history and culture of one of the world's most fascinating civilizations."
        }
    },
    europe:  { 
        description: "Well known for its culture, gastronomy and legendary Chic France is a natural choice for highly motivating incentives. Who has not dreamt of sipping a glass of Champagne while watching the Eiffel tower sparkle ? Its glamourous capital Paris has become even greener and has reinvented itself with soustainable activities and added two major museums to its already impressive portfolio of must see landmarks and museums.",
        countryExample: {
            countryName: "France",
            countryDescription:"Well known for its culture, gastronomy and legendary Chic France is a natural choice for highly motivating incentives. Who has not dreamt of sipping a glass of Champagne while watching the Eiffel tower sparkle ? Its glamourous capital Paris has become even greener and has reinvented itself with soustainable activities and added two major museums to its already impressive portfolio of must see landmarks and museums."
        }
    },
    asia: {
        description: "Asia is the largest continent in the world, covering about 17.2 million square miles. It is home to more than 4.5 billion people, representing over 60% of the world's population, and is home to some of the world's most populous countries, such as China and India. It is known for its diverse cultures, religions, and languages, as well as its varied geography, including deserts, mountains, and tropical rainforests.",
        countryExample: {
            countryName: "China",
            countryDescription:"Experience the beauty and rich culture of China. From the iconic Great Wall and Terracotta Army to the bustling streets of Beijing, there's something for everyone to discover. Immerse yourself in the ancient traditions and modern advancements of the world's most populous country."
        }
    },
    america:{
        description: "America is a continent consisting of the landmasses of North America and South America. It is located primarily in the Western Hemisphere and mostly in the Northern Hemisphere. North America is home to countries such as the United States, Canada and Mexico, while South America is home to countries such as Brazil, Argentina and Chile, and is known for its diverse cultures, languages, and landscapes",
        countryExample: {
            countryName: "Mexico",
            countryDescription: "Escape to the colorful, vibrant culture of Mexico. Indulge in delicious traditional cuisine, relax on picturesque beaches, and explore ancient ruins of the Mayan and Aztec civilizations. Discover the rich history and lively traditions of this beautiful country. From the bustling streets of Mexico City to the tranquil beauty of the Yucatan Peninsula"
        }
    }
  
  }

  const continentImage = {

    europe: Eiffel,
    asia: GreatWall,
    america: MexicoCity,
    africa: Pyramids

  }

  export { continentData, continentImage } 
