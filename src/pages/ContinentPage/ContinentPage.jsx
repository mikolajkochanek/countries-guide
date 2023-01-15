import './ContinentPage.css'
import {useRef, useEffect} from 'react'
import {data} from '../../utils'
import SearchBar from '../../components/SearchBar/SearchBar';


function ContinentPage({continentName, image,}) {

    const searchSection = useRef(null);

    const {name, description} = data[continentName].countryExample;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
    <div>
        <section className='hero' style={{background: `url(${image})`, backgroundSize: 'cover',
        backgroundPosition: 'center right', backgroundRepeat: 'no-repeat'}}>
            <div className='info'>
                <h2>{name}</h2>
                <p>{description}</p>
                <button onClick={() => {searchSection.current.scrollIntoView({ behavior: "smooth" })}}>
                    Discover other countries
                </button>
            </div>      
        </section>
        <section style={{width: '100%', height: '15vh'}}>
            <SearchBar></SearchBar>
        </section>

        <section style={{height: '40vh', width: '100%'}} className="results" id="search" ref={searchSection} >
            a
        </section>
    </div>

    )


}

export default ContinentPage