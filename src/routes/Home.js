import { useState, useEffect } from "react"
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
    const [error, setError] = useState(false)
    const countriesApi = useApi()

    const loadData = async () => {
        const [data, error] = await countriesApi.getCountries()
        setCountries(data.map(value => formatCountryData(value)))
        setError(error)
        // console.log([data, error]);
        // console.log(data.map(value => formatCountryData(value)));
    }

    useEffect(() => {

        loadData()

        return () => {
            setCountries([])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Form>
                <SearchBar />
                <Dropdown />
            </Form>
            <Section>
                {!countriesApi.isLoading && !error &&
                    countries.map((country, index) => (
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
