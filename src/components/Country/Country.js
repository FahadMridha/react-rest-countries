import React from 'react';
import'./Country.css'
const Country = (props) => {
    // console.log(props);
  const  {name,population,area,region,flags
} = props.country
  const{common,official}=name
    return (
        <div className='country'>
            <h2>Country Name:{common}</h2>
            <img src={flags.png} alt="" />
            <h4>People:{population}</h4>
            <p><small> Region: {region}</small></p>
            <h3>Official:{official}</h3>
            <p><small>Area:{area}</small></p>
        </div>
    );
};

export default Country;