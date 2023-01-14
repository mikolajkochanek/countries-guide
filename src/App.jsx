import {Route, Routes, Link} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import MainPage from './pages/MainPage';
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
        </Routes>
        
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
