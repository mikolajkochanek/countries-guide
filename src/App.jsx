import {Route, Routes, Link} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import MainPage from './pages/MainPage';
import ContinentPage from './pages/ContinentPage/ContinentPage';
import './App.css'

const navLinks= [
  <Link to="/">Continents</Link>, 
  
]


function App() {
  
  return (
    <div>
      <NavBar navItems={navLinks} />
      <main>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/continent/:continentName' element={<ContinentPage/>}/>
        </Routes>
        
      </main>
      
     
      
   
      
     
    </div>
  );
}



export default App;


