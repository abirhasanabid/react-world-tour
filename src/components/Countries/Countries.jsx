import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Contries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    // flag
    const [visitedFlags,setFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const handleVisitedCountries = country =>{
        const copingArray = [...visitedCountries,country];
        setVisitedCountries(copingArray); 
    }
    // flag handler

    const handlerFlag = flags=>{
        const newFlag = [...visitedFlags,flags];
        setFlags(newFlag);
    }

    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <div>
                <p>visited contries : {visitedCountries.length}</p>
                <ul>
                    {
                        visitedCountries.map(visitedCountry=><li key={visitedCountry?.ccn3}>Country Name : {visitedCountry?.name?.common}</li>)
                    }
                </ul>
            </div>

            {/* flag */}
            <div className="flag-container">
                {
                    visitedFlags.map((flag,idx)=><img key={idx} src={flag.png}></img>)
                }
            </div>
            <div className='countries-container'>
                {
                    countries.map(country => <Country 
                        handlerFlag={handlerFlag} handleVisitedCountries={handleVisitedCountries} key={country?.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;