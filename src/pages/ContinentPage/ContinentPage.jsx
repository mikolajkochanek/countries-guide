import {useRef, useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import SearchBar from '../../components/SearchBar/SearchBar';
import CountriesList from '../../components/CountriesList/CountriesList';
import { continentData, continentImage } from '../../utils'
import './ContinentPage.css'


function filterBySubstring(array, substring) {
    console.log(typeof array, typeof substring)

    return array.filter(el => el.name.common.includes(substring) || el.name.official.includes(substring));

}




function ContinentPage() {

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState("");

    const [searchValue, setSearchValue] = useState('');

    const [countriesList, setCountriesList] = useState([]);

    const { continentName } = useParams();

    const {countryName, countryDescription} = continentData[continentName].countryExample;

    const countriesSection = useRef(null);

    const image = continentImage[continentName];


    useEffect(() => {
        const getCountriesByContinent = async () => {
            try {
              
              const res = await fetch(`https://restcountries.com/v3.1/region/${continentName}`);
      
              if (!res.ok) throw new Error("Could not found!");
      
              const data = await res.json();

              console.log(data)

              setCountriesList(data);

              setIsLoading(false);

            } catch (error) {

              setIsLoading(false);

              setError(error.message);
            }
          };
      
          getCountriesByContinent();
        
        return () => {
            window.scroll(0,0)
        };
      }, [continentName]);



    const handleSubmit = () => {
        const list = filterBySubstring(countriesList, searchValue)
        console.log(searchValue)
        setCountriesList(list)
    }
   

    return (
    <div>
        <section className='hero' style={{background: `url(${image})`, backgroundSize: 'cover',
        backgroundPosition: 'center right', backgroundRepeat: 'no-repeat'}}>
            <div className='info'>
                <h2>{countryName}</h2>
                <p>{countryDescription}</p>
                <button onClick={() => {countriesSection.current.scrollIntoView({ behavior: "smooth" })}}>
                    Discover other countries
                </button>
            </div>      
        </section>
        <section style={{width: '100%', height: '15vh'}}>
            
            <SearchBar value={searchValue} onChange={setSearchValue} onClick={handleSubmit}/>
        </section>
        <div ref={countriesSection}>
        
            <CountriesList countriesList={countriesList} isLoading={isLoading} error={error} />

        </div>
        


    </div>

    )


}

export default ContinentPage