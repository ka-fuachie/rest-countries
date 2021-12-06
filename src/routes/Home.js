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
    padding: 3em 2em;
    display: flex;
    flex-direction: column;
    gap: 3em;
`

const Home = () => {
    const countries = useApi()
    const me = countries[10]

    console.log(me.name.common);
    console.log(me.population);
    console.log(me.region);
    console.log(me.capital[0]);
    console.log(me.flags.svg);

    return (
        <Container>
            <Form>
                <SearchBar />
                <Dropdown />
            </Form>
            <Section>
                <CountryCard 
                    name={me.name.common}
                    population={me.population}
                    region={me.region}
                    capital={me.capital[0]}
                    flag={me.flags.svg}
                />
            </Section>
        </Container>
    )
}

export default Home
