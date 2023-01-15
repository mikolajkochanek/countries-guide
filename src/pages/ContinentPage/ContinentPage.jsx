import './ContinentPage.css'
import {useRef} from 'react'
import {data} from '../../utils'


function ContinentPage({continentName, image,}) {
    const searchSection = useRef(null);

    const {name, description} = data[continentName].countryExample;

    return (
    <div>
        <section className='hero' style={{background: `url(${image})`, backgroundSize: 'cover',
        backgroundPosition: 'center right', backgroundRepeat: 'no-repeat'}}>
            <div className='info'>
                <h2>{name}</h2>
                <p>{description}</p>
                <button onClick={
                    () => {
                        searchSection.current.scrollIntoView({ behavior: "smooth" })
                    }
                }>Discover other countries</button>
            </div>
                    
        </section>
        <section style={{width: '100%', height: '15vh'}}></section>

        <section style={{height: '40vh', width: '100%'}} className="results" id="search" ref={searchSection} >
            a
        </section>
    </div>

    )


}

export default ContinentPage