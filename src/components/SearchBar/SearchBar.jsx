import './SearchBar.css';
import { FiFilter } from 'react-icons/fi';


function SearchBar({value, onChange, onClick}) {


    return (
      <div className="search-container">
        <FiFilter style={{width: '2rem', height: '2rem'}}/>
        <input
          type="text"
          placeholder="Search country"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <button onClick={onClick}>Search</button>
      </div>
    );
  }

  export default SearchBar