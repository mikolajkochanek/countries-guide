import {Route, Routes, Link} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import ContinentCard from './components/ContinentCard/ContinentCard';
import Africa from "./images/africa.png"
import Europe from "./images/europe.jpg"
import Asia from "./images/asia.png"
import America from "./images/americas.png"
import './App.css'

const navLinks= [
  <Link to="/">Test</Link>, 
  <Link to="/">Test</Link>,
  <Link to="/">Test</Link>, 
  <Link to="/">Test</Link>,
]

const descriptions = {

  africa : "Africa is the second-largest continent in the world, covering about 30.2 million square kilometers. It is home to a diverse population of over 1.3 billion people, representing thousands of ethnic groups and languages. Africa is known for its rich cultural heritage, natural resources, and wildlife, including iconic species such as lions, elephants, and gorillas.",
  europe: "Europe is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, and the Mediterranean Sea to the south. It is home to over 50 countries, including well-known nations such as France, Germany, Italy, Spain, and the United Kingdom, and it is often considered the birthplace of Western civilization.",
  asia: "Asia is the largest continent in the world, covering about 17.2 million square miles. It is home to more than 4.5 billion people, representing over 60% of the world's population, and is home to some of the world's most populous countries, such as China and India. It is known for its diverse cultures, religions, and languages, as well as its varied geography, including deserts, mountains, and tropical rainforests.",
  america: "America is a continent consisting of the landmasses of North America and South America. It is located primarily in the Western Hemisphere and mostly in the Northern Hemisphere. North America is home to countries such as the United States, Canada and Mexico, while South America is home to countries such as Brazil, Argentina and Chile, and is known for its diverse cultures, languages, and landscapes"

}

function App() {
  
  return (
    <div>
      <NavBar navItems={navLinks} >
      </NavBar>
      <main>
        <div>

        </div>
        <h2>Select continent to explore...</h2>
        <div className='continent-card-container' >
          <ContinentCard continentImage={Africa} title="Africa" description={descriptions.africa}></ContinentCard>
          <ContinentCard continentImage={Europe}  title="Europe" description={descriptions.europe}></ContinentCard>
          <ContinentCard continentImage={Asia}  title="Asia" description={descriptions.asia}></ContinentCard>
          <ContinentCard continentImage={America} title="America" description={descriptions.america}></ContinentCard>
        </div>
      </main>
      
     
      
   
      
     
    </div>
  );
}



export default App;

/*
<Routes>
        <Route path="/">main page</Route>
      </Routes>
      */
