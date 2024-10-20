import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Contries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const handleVisitedCountries = country =>{
        console.log(country);
    }

    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <div>
                <p>hi this is me </p>
            </div>
            <div className='countries-container'>
                {
                    countries.map(country => <Country handleVisitedCountries={handleVisitedCountries} key={country?.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;