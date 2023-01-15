import React, {useState} from 'react'
import './SearchBar.css';


function SearchBar() {
    const [searchText, setSearchText] = useState('');
  
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <button>Search</button>
      </div>
    );
  }

  export default SearchBar