import React, {useContext, useState} from 'react'

const ApiContext = React.createContext()
export const useApi = () => (useContext(ApiContext))


const fetchCountries = async(callback) => {
    let error = false
    try{
        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,nativeName,subregion,tld,languages,currencies,flag,flags,borders,cca3')

        const data = await res.json()
        return [data, error]
    }catch(e){
        error = true
        return [null, error]
    }finally{
        callback()
    }
}

const fetchCountry = async(name, callback) => {
    let error = false
    try{
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,region,nativeName,subregion,tld,languages,currencies,flag,flags,borders,cca3`)

        const data = await res.json()
        if(!res.ok) throw(new Error())
        return [data, error] 
    }catch(e){
        error = true
        return [null, error]
    }finally{
        callback()
    }

}

const ApiProvider = ({children}) => {
    const [cache, setCache] = useState({countries: []})
    const [isLoading, setIsLoading] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    
    const getCountries = async () => {
        if(cache.countries.length > 200) return [cache.countries, false]

        setIsLoading(true)
        const [countries, error] = await fetchCountries(() => setIsLoading(false))
        !error && setCache((prevValue) => (
            {...prevValue, countries}
        ))
        return [countries, error]
    }

    const getCountry = async (name) => {
        let error
        setIsProcessing(true)
        let country = cache?.countries?.filter(country => country?.name?.common?.toLowerCase() === name)[0]
        if(country != null) {
            setIsProcessing(false)
            return [country, false]
        }

        [country, error] = await fetchCountry(name, () => setIsProcessing(false))
        !error && setCache((prevValue) => (
            {
                ...prevValue, 
                countries: [...prevValue.countries, ...country]
            }
        ))
        
        if(country === null) return [null, error]
        return [country[0], error]
    }

    const getBorderName = async (code) => {
        let country = cache?.countries?.filter(country => country.cca3 === code)[0]

        if(country != null) return [country.name.common, false]
    
        let error = false
        try{
            const res = await fetch(`https://restcountries.com/v3.1/alpha/${code.toLowerCase()}?fields=name`)
            const data = await res.json()
            return [data.name.common, error]    
        }catch(e){
            error = true
            return [code, error]
        }
    }    

    return (
        <ApiContext.Provider value={{
            getCountries,
            getCountry,
            getBorderName,
            isLoading,
            isProcessing,
            cache
        }} >
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider
