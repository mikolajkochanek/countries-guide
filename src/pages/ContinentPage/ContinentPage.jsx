import {useRef, useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import SearchBar from '../../components/SearchBar/SearchBar';
import CountriesList from '../../components/CountriesList/CountriesList';
import { continentData, continentImage } from '../../utils'
import Dropdown from '../../components/DropDown/DropDown';
import { AiFillFilter} from 'react-icons/ai'
import './ContinentPage.css'


function filterBySubstring(array, substring) {
    

    const array2 =  array.filter(el => el.name.common.toLowerCase().includes(substring.trim().toLowerCase()) || el.name.official.toLowerCase().includes(substring.trim().toLowerCase()));

    return array2;

}


function ContinentPage() {

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState('');

    const [searchValue, setSearchValue] = useState('');

    const [countriesList, setCountriesList] = useState([]);

    const [filteredCountriesList, setFilteredCountriesList] = useState([]);

    const { continentName } = useParams();

    const countriesSection = useRef(null);

    const {countryName, countryDescription} = continentData[continentName].countryExample;

    const image = continentImage[continentName];

    const options = [
        {label: "Population", value: "1111"},
        {label: "Druga opcja", value: "22222"}, ]


    useEffect(() => {
        const getCountriesByContinent = async () => {
            try {
              
              const res = await fetch(`https://restcountries.com/v3.1/region/${continentName}`);
      
              if (!res.ok) throw new Error("Could not found!");
      
              const data = await res.json();

              setCountriesList(data);
              setFilteredCountriesList(data);

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
  
        setFilteredCountriesList(list)
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
        <section style={{width: '100%',}} className="search-container">
            
            <p className='search-container'>Search by</p>
            <Dropdown options={options} ></Dropdown>
            <SearchBar value={searchValue} onChange={setSearchValue} onClick={handleSubmit}/>
        </section>
        <div ref={countriesSection}>
        
            <CountriesList countriesList={filteredCountriesList} isLoading={isLoading} error={error} />
 
        </div>
        


    </div>

    )


}

export default ContinentPage