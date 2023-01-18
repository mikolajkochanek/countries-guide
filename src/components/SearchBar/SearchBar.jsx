import './SearchBar.css';



function SearchBar({value, onChange, onClick}) {


    return (
      <div className="search-container">
      
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