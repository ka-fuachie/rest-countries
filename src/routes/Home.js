import { useState, useEffect } from "react"
import styled from "styled-components"
import { useApi } from "../api/ApiContext"
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
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
    gap: 3em;
`

const Home = () => {
    const [countries, setCountries] = useState([])
    const [error, setError] = useState(false)
    const countriesApi = useApi()

    useEffect(() => {
        const loadData = async () => {
            const [data, error] = await countriesApi.getCountries()
            setCountries(data)
            setError(error)
            console.log([data, error]);
        }

        loadData()

        return () => {
            setCountries([])
        }
    }, [countriesApi])

    return (
        <Container>
            <Form>
                <SearchBar />
                <Dropdown />
            </Form>
            <Section>
                {!countriesApi.isLoading &&
                    countries.map((country, index) => (
                        <CountryCard
                            name={country.name.common}
                            population={country.population}
                            region={country.region}
                            capital={country.capital[0]}
                            flag={country.flags.svg}
                            key={index + 1}
                        />
                    ))
                }
                {/* {
                    countries[0] && 
                        <CountryCard
                            name={countries[0].name.common}
                            population={countries[0].population}
                            region={countries[0].region}
                            capital={countries[0].capital[0]}
                            flag={countries[0].flags.svg}
                        />
                } */}

            </Section>
        </Container>
    )
}

export default Home
