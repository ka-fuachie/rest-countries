import React, {useContext, useState} from 'react'

const ApiContext = React.createContext()
export const useApi = () => (useContext(ApiContext))


// TODO: Add try catch for error handling to async funcs
const fetchCountries = async(callback) => {
    let data = []
    try{
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,nativeName,subRegion,tld,languages,currencies,flag,flags,borders,cca3')

        data = res.json()
        return data
    }catch(e){
        return data
    }finally{
        callback()
    }
}

const fetchCountry = async(name, callback) => {
    let data = {}

    try{
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,region,nativeName,subRegion,tld,languages,currencies,flag,flags,borders,cca3`)

        data = res.json()    
    }catch(e){
        return data
    }finally{
        callback()
    }

}

const ApiProvider = ({children}) => {
    const [cache, setCache] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isProcessing, setIsProcessing] = useState(true)
    
    const getCountries = async () => {
        if(cache.countries != null) return cache.countries

        setIsLoading(true)
        const countries = await fetchCountries(() => setIsLoading(false))
        setCache((prevValue) => (
            {countries}
        ))
        return countries
    }

    const getCountry = async (name) => {
        let country = cache?.countries?.filter(country => country?.name == name)
        if(country != null) return country

        setIsLoading(true)
        country = await fetchCountry(name, () => setIsLoading(false))
        setCache((prevValue) => (
            {countries: [...country]}
        ))

        return country
    }


    return (
        <ApiContext.Provider value={{
            getCountries,
            getCountry,
            isLoading,
            isProcessing
        }} >
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider
