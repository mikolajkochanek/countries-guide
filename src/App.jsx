import {Route, Routes, Link} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import MainPage from './pages/MainPage';
import ContinentPage from './pages/ContinentPage/ContinentPage';
import Pyramids from './images/pyramids.jpg'
import GreatWall from './images/GreatWall.jpg'
import MexicoCity from './images/mexico-city.jpg'
import Eifel from './images/Eifel.jpg'
import './App.css'

const navLinks= [
  <Link to="/">Test</Link>, 
  <Link to="/">Test</Link>,
  <Link to="/">Test</Link>, 
  <Link to="/">Test</Link>,
]


function App() {
  
  return (
    <div>
      <NavBar navItems={navLinks} />
      <main>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/continent/africa' element={<ContinentPage continentName="africa" image={Pyramids} />}/>
          <Route path='/continent/asia' element={<ContinentPage continentName="asia" image={GreatWall}  />}/>
          <Route path='/continent/europe' element={<ContinentPage continentName="europe" image={Eifel}  />}/>
          <Route path='/continent/america' element={<ContinentPage continentName="america" image={MexicoCity}  />}/>
        
        </Routes>
        
      </main>
      
     
      
   
      
     
    </div>
  );
}



export default App;


