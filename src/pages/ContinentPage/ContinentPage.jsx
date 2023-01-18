import {useRef, useEffect} from 'react'
import { useParams } from "react-router-dom";

import SearchBar from '../../components/SearchBar/SearchBar';
import CountryInfo from '../../components/CountryInfo/CountryInfo';
import { continentData, continentImage } from '../../utils'
import './ContinentPage.css'


function ContinentPage() {

    const { continentName } = useParams();

    const {countryName, countryDescription} = continentData[continentName].countryExample;

    const searchSection = useRef(null);

    const image = continentImage[continentName];

    useEffect(() => {
        
        return () => {
            window.scroll(0,0)
        };
      }, []);

   

    return (
    <div>
        <section className='hero' style={{background: `url(${image})`, backgroundSize: 'cover',
        backgroundPosition: 'center right', backgroundRepeat: 'no-repeat'}}>
            <div className='info'>
                <h2>{countryName}</h2>
                <p>{countryDescription}</p>
                <button onClick={() => {searchSection.current.scrollIntoView({ behavior: "smooth" })}}>
                    Discover other countries
                </button>
            </div>      
        </section>
        <section style={{width: '100%', height: '15vh'}}>
            <SearchBar></SearchBar>
        </section>
        <CountryInfo/>


    </div>

    )


}

export default ContinentPage