import {Route, Routes, Link} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import MainPage from './pages/MainPage';
import ContinentPage from './pages/ContinentPage/ContinentPage';
import './App.css'

const navLinks= [
  <Link to="/countries-guide/">Continents</Link>, 
  
]


function App() {
  
  return (
    <div>
      <NavBar navItems={navLinks} />
      <main>
        <Routes>
          <Route path='/countries-guide/' element={<MainPage/>}/>
          <Route path='/countries-guide/continent/:continentName' element={<ContinentPage/>}/>
        </Routes>
        
      </main>
      
     
      
   
      
     
    </div>
  );
}



export default App;


