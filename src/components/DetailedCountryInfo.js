import React from 'react'

const Language = ({ language }) => {
  return <li>{language}</li>
}

const DetailedCountryInfo = ({ countryData }) => {  
  return (
    <div>
      <h2>{countryData.name}</h2>
      <p><b>Capital:</b> {countryData.capital}</p>
      <p><b>Population:</b> {countryData.population}</p>
      <p><b>Official languages:</b></p>
      <ul>
        {countryData.languages
          .map(language => <Language language={language.name} key={language.name} />
        )}
      </ul>
      <br />
      <img src={countryData.flag} alt="flag" width="200" />
    </div>
  )
}

export default DetailedCountryInfo