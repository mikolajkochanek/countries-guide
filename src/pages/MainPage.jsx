import ContinentCard from '../components/ContinentCard/ContinentCard';
import Africa from "../images/africa.png"
import Europe from "../images/europe.jpg"
import Asia from "../images/asia.png"
import America from "../images/americas.png"
import { data }  from "../utils"


function MainPage() {

    return (
        <>
            <h2>Select continent to explore...</h2>
            <div className='continent-card-container' >
            <ContinentCard continentImage={Africa} title="Africa" description={data.africa.description} linkTo='/continent/africa'/>
            <ContinentCard continentImage={Europe}  title="Europe" description={data.europe.description} linkTo='/continent/europe'/>
            <ContinentCard continentImage={Asia}  title="Asia" description={data.asia.description} linkTo='/continent/asia'/>
            <ContinentCard continentImage={America} title="America" description={data.america.description} linkTo='/continent/america'/>
            </div>
        </>
    )
    
}

export default MainPage