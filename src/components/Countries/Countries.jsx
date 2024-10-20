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
        const copingArray = [...visitedCountries,country];
        setVisitedCountries(copingArray); 
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
            <div className='countries-container'>
                {
                    countries.map(country => <Country handleVisitedCountries={handleVisitedCountries} key={country?.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;