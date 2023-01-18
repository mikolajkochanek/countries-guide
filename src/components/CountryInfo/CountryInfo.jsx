import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './CountryInfo.css'

function CountryInfo()  {


  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const {continentName} = useParams()



  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/region/${continentName}`);

      

        if (!res.ok) throw new Error("Could not found!");

        const data = await res.json();


        setCountry(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [continentName]);

  return (
    <section className="results">
      {isLoading && !error && <h4>Loading........</h4>}
      {error && !isLoading && { error }}

      {country?.map((country, index) => (
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

export default CountryInfo;









/* 
<button>
        <Link to="/">Back</Link>
      </button>

    
    */