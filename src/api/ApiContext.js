import React, {useContext, useState} from 'react'

const ApiContext = React.createContext()
export const useApi = () => (useContext(ApiContext))


// TODO: Add try catch for error handling to async funcs
const fetchCountries = async(callback) => {
    let data = []
    try{
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,nativeName,subregion,tld,languages,currencies,flag,flags,borders,cca3')

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
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,region,nativeName,subregion,tld,languages,currencies,flag,flags,borders,cca3`)

        data = res.json()  
        return data  
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
        setIsProcessing(true)
        let country = cache?.countries?.filter(country => country.name.common.toLowerCase() === name)[0]
        if(country != null) {
            setIsProcessing(false)
            return country
        }

        country = await fetchCountry(name, () => setIsProcessing(false))

        return country[0]
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
