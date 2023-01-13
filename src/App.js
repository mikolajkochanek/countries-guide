import {Route, Routes, Link} from 'react-router-dom'
import NavBar from "./components/Header/NavBar";

const navLinks= [
  <Link to="/">Test</Link>, 
  <Link to="/">Test</Link>,
  <Link to="/">Test</Link>, 
  <Link to="/">Test</Link>,
]

function App() {
  
  return (
    <div className="App">
      <NavBar navItems={navLinks} >
      </NavBar>
      <Routes>
        <Route path="/">main page</Route>
      </Routes>
   
      
     
    </div>
  );
}

export default App;
