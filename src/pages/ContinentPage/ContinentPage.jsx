import {useRef, useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import SearchBar from '../../components/SearchBar/SearchBar';
import CountriesList from '../../components/CountriesList/CountriesList';
import { continentData } from '../../utils'
import Dropdown from '../../components/DropDown/DropDown';
import useFetchCountries from '../../hooks/useFetchCountries'
import './ContinentPage.css'


function filterBySubstring(array, substring) {
    
    const array2 =  array.filter(el => el.name.common.toLowerCase().includes(substring.trim().toLowerCase()) || el.name.official.toLowerCase().includes(substring.trim().toLowerCase()));

    return array2;

}


function ContinentPage() {

    const { continentName } = useParams();

    const {isError, isLoading, countriesList, getCountriesByContinent  } = useFetchCountries([], continentName );

    const [filteredCountriesList, setFilteredCountriesList] = useState([]);
   
    const [searchValue, setSearchValue] = useState('');

    const [sortCriteria, setSortCriteria] = useState('population');

    const countriesSection = useRef(null);

    const { countryName, countryDescription, image} = continentData[continentName].countryExample;

    const dropdownOptions = [
        {label: "population", value: "population"},
        {label: "alphabet", value: "alphabet"}, 
    ]

   

    useEffect(() => {

     getCountriesByContinent().then(countries => 
        {
         setFilteredCountriesList(countries)
        
        });
        
        return () => {
            window.scroll(0,0)
        }
    }, [])


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
            
            <p>Search by</p>

            <Dropdown options={dropdownOptions} />

            <SearchBar value={searchValue} onChange={setSearchValue} onClick={handleSubmit}/>

        </section>
        <div ref={countriesSection}>
    
            <CountriesList countriesList={filteredCountriesList} isLoading={isLoading} isError={isError} />
 
        </div>
        


    </div>

    )


}

export default ContinentPage