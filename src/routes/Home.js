import { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { useApi } from "../api/ApiContext"
import formatCountryData from "../utils/formatCountriesData"
import Container from "../components/Container"
import SearchBar from "../components/SearchBar"
import Dropdown from "../components/Dropdown"
import CountryCard from "../components/CountryCard"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.5em;
`

const Section = styled.section`
    flex: 1;
    padding: 3em 2em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3em;
`

const Home = () => {
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [activeRegion, setActiveRegion] = useState('')
    const [error, setError] = useState(false)
    const [searchText, setSearchText] = useState('')
    const countriesApi = useApi()

    const loadData = useRef(() => {})
    loadData.current = async () => {
        const [data, error] = await countriesApi.getCountries()
        setCountries(data.map(value => formatCountryData(value)))
        setError(error)
        // console.log([data, error]);
        // console.log(data.map(value => formatCountryData(value)));
    }

    useEffect(() => {
        if((!searchText || /^\s*$/.test(searchText)) && !activeRegion){
            setFilteredCountries(countries)
        }
        
        else if(!activeRegion){
            const filterBySearch = countries.filter(({name}) => name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
            setFilteredCountries(filterBySearch)
        }

        else if(!searchText || /^\s*$/.test(searchText)){
            const filterByRegion = countries.filter(({region}) => region === activeRegion )
            setFilteredCountries(filterByRegion)
        }

        else{
            const filterBySearch = countries.filter(({name}) => name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)

            const fullFilter = filterBySearch.filter(({region}) => region.toLowerCase() === activeRegion )

            setFilteredCountries(fullFilter)
        }
    }, [searchText, countries, activeRegion])


    useEffect(() => {

        loadData.current()

        return () => {
            setCountries([])
        }
    }, [])

    return (
        <Container>
            <Form>
                <SearchBar setSearchText={setSearchText} />
                <Dropdown setActiveRegion={setActiveRegion} />
            </Form>
            <Section>
                {!countriesApi.isLoading && !error &&
                    filteredCountries.map((country, index) => (
                        <CountryCard
                            name={country.name}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                            flag={country.flag}
                            key={index + 1}
                        />
                    ))
                }

            </Section>
        </Container>
    )
}

export default Home
