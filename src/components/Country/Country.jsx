import { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    // console.log(country);
    const { name, flags, region, continents, cca2 } = country;

    const [visited, setVisited] = useState(false);

    const handlerVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className='country'>
            <h2>Name : {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Region: {region}</p>
            <p>Continents: {continents}</p>
            <p>Code: {cca2}</p>
            <button onClick={handlerVisited}>{visited?'Visited':'Going'}</button>
            {visited ? 'I have visited this country':'I want to visite one Day'}
        </div>
    );
};

export default Country;