import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handlerFlag }) => {
    // console.log(country);
    const { name, flags, region, continents, cca2 } = country;

    const [visited, setVisited] = useState(false);

    const handlerVisited = () => {
        setVisited(!visited);
    }

    // flg
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{ color: visited && '#006400' }}>Name : {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Region: {region}</p>
            <p>Continents: {continents}</p>
            <p>Code: {cca2}</p>
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <button onClick={()=> handlerFlag(flags)}>Flag</button>
            <br />
            <button onClick={handlerVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visite one Day'}
        </div>
    );
};

export default Country;