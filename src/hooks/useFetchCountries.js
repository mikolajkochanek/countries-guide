import {useState} from 'react'

function useFetchCountries(initialValue, apiPath  ) {

    const [isLoading, setIsLoading] = useState(true);

    const [isError, setError] = useState('');

    const [countriesList, setCountriesList] = useState(initialValue);

   
    const getCountriesByContinent = async () => {
        try {

            
            const res = await fetch(`https://restcountries.com/v3.1/region/${apiPath}`);

            if (!res.ok) throw new Error("Could not found!");

            const data = await res.json();

            setCountriesList(data);
        
            setIsLoading(false);
            
            return data;

        } catch (error) {

            setIsLoading(false);

            setError(error.message);
            }
        
    
          };

    return {
        isLoading, 
        isError,
        countriesList,
        getCountriesByContinent
    }
      
     
        
   

}


export default useFetchCountries