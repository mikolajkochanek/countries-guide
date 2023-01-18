import './CountriesList.css'

function CountriesList({countriesList, isLoading, error})  {



  return (

    <section className="results">

      {isLoading && !error && <h4>Loading........</h4>}
      {error && !isLoading && { error }}

      {countriesList?.map((country, index) => (
        <div className="country-info-container" key={index}>
          <div className="country-info-img">
            <img src={country.flags.png} alt="" />
          </div>

          <div className="country-info">
            <h3>{country.name.common}</h3>

            <div className="country-info-left">
              <h5>
                Population:{" "}
                <span>
                  {new Intl.NumberFormat().format(country.population)}
                </span>
              </h5>
              <h5>
                Region: <span>{country.region}</span>
              </h5>
              <h5>
                Sub Region: <span>{country.subregion}</span>
              </h5>
              <h5>
                Capital: <span>{country.capital}</span>
              </h5>
            </div>
          </div>
        </div>
      ))}
      
    </section>
  );

      
}

export default CountriesList;








