import React, {useContext, useState, useEffect} from 'react'

const ApiContext = React.createContext()
export const useApi = () => (useContext(ApiContext))


// TODO: Add try catch for error handling to async funcs
const fetchCountries = async() => {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,nativeName,subRegion,tld,languages,currencies,flag,flags,borders,cca3')

    const data = res.json()
    return data
}

const fetchCountry = async(name) => {
    const res = await fetch(`https://restcountries.com/v3.1/flag/${name}?fields=name,capital,population,region,nativeName,subRegion,tld,languages,currencies,flag,flags,borders,cca3`)

    const data = res.json()
    return data
}

const ApiProvider = ({children}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const countries = await fetchCountries()
            setData(countries)
        }

        fetchData()
    }, [])

    // TODO: Add a loading value
    return (
        <ApiContext.Provider value={{data}} >
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider
