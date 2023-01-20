import './SearchBar.css';



function SearchBar({value, onChange, onSubmit}) {


    return (
      <form onSubmit={onSubmit}>
        <div className={'searchbar-container'}>
        <input
          type="text"
          placeholder="Search country"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <button onClick={onSubmit}>Search</button>
      </div>

      </form>
      
    );
  }

  export default SearchBar