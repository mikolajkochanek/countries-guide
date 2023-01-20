import ContinentCard from '../components/ContinentCard/ContinentCard';
import Africa from "../images/africa.png"
import Europe from "../images/europe.jpg"
import Asia from "../images/asia.png"
import America from "../images/americas.png"
import { continentData }  from "../utils"


function MainPage() {

    return (
        <>
            <h2>Select continent to explore...</h2>
            <div className='continent-card-container' >
            <ContinentCard continentImage={Africa} title="Africa" description={continentData.africa.description} linkTo='/countries-guide/continent/africa'/>
            <ContinentCard continentImage={Europe}  title="Europe" description={continentData.europe.description} linkTo='/countries-guide/continent/europe'/>
            <ContinentCard continentImage={Asia}  title="Asia" description={continentData.asia.description} linkTo='/countries-guide/continent/asia'/>
            <ContinentCard continentImage={America} title="America" description={continentData.america.description} linkTo='/countries-guide/continent/america'/>
            </div>
        </>
    )
    
}

export default MainPage