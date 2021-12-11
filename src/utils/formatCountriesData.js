import { arrayToString, numberWithCommas } from "./utilities"


const formatCountryData = (country) => {
    return{
        name: country.name.common,

        flag: country.flags.svg,

        nativeName: Object.values(country.name.nativeName).map(value => value.common)[Object.values(country.name.nativeName).length - 1],

        population: numberWithCommas(country.population),

        region: country.region,

        subRegion: country.subregion,

        capital: arrayToString(country.capital),

        tld: arrayToString(country.tld),

        currencies: arrayToString(Object.values(country.currencies).map(currency => currency.name )),

        languages: arrayToString(Object.values(country.languages)),

        borders: country.borders
    }
}

// currencies: Object.values(Object.values(country.currencies)[0]),


export default formatCountryData