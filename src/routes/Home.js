import { useEffect } from "react"
import styled from "styled-components"
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
    // useEffect(() => {
    //     const test = async() => {
    //         const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,nativeName,subRegion,tld,languages,currencies,flag,flags,borders,cca3')
    //         const data = res.json()
    //         console.log(data);
    //     }
    
    //     test()
    // }, [])

    return (
        <Container>
            <Form>
                <SearchBar />
                <Dropdown />
            </Form>
            <Section>
                <CountryCard />
                <CountryCard />
            </Section>
        </Container>
    )
}

export default Home
