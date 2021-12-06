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
    const data = useApi().data
    const [countries, setCountries] = useState([])

    useEffect(() => {
        setCountries(data)

        return () => {
            setCountries([])
        }
    }, [data])

    return (
        <Container>
            <Form>
                <SearchBar />
                <Dropdown />
            </Form>
            <Section>
                {
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
            </Section>
        </Container>
    )
}

export default Home
