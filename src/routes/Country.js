import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router"
import styled from "styled-components"
import { useApi } from "../api/ApiContext"
import formatCountryData from "../utils/formatCountriesData"
import Container from "../components/Container"

const Button = styled.button`
    border: none;
    box-shadow: var(--bs-light);
    display: flex;
    align-items: center;
    gap: 0.25em;
    padding: 0.25em 1em;
    border-radius: 0.25em;
    cursor: pointer;
`

const BackSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
    </svg>
)

const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding-block: 1.5em;
    margin-top: 0.5em;
    /* gap: 2em; */
`
const Box = styled.div`
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 0.75em;
`

const Title = styled.h2`
    font-weight: var(--fw-very-bold);
    padding-bottom: 0.5em;
`
const Bold = styled.span`
    font-weight: var(--fw-bold);
    padding-right: 0.5em;
`

const Country = () => {
    const params = useParams()
    const countriesApi = useApi()
    const navigate = useNavigate()
    const [country, setCountry] = useState({})
    const [error, setError] = useState(false)

    const loadData = async () => {
        const [data, error] = await countriesApi.getCountry(params.country.replace(/-/g, ' '))
        setCountry(formatCountryData(data))
        setError(error)
        console.log([formatCountryData(data), error]);
    }


    useEffect(() => {

        loadData()

        return () => {
            setCountry({})
        }
    }, [])

    const goBack = () => navigate(-1)

    return (
        <Container>
            <Button onClick={goBack}>
                <BackSvg />
                <p>Back</p>
            </Button>
            <Section>
                {!countriesApi.isProcessing && !error &&
                    <>
                        <img src={country.flag} alt={country.name} />

                        <Box>
                            <Title>{country.name}</Title>
                            <p><Bold>Native Name:</Bold>{country.nativeName}</p>
                            <p><Bold>Population:</Bold>{country.population}</p>
                            <p><Bold>Region:</Bold>{country.region}</p>
                            <p><Bold>Sub Region:</Bold>{country.subRegion}</p>
                            <p><Bold>Capital:</Bold>{country.capital}</p>
                        </Box>

                        <Box>
                            <p><Bold>Top Level Domain:</Bold>{country.tld}</p>
                            <p><Bold>Currencies:</Bold>{country.currencies}</p>
                            <p><Bold>Languages:</Bold>{country.languages}</p>
                        </Box>

                        <Box>
                            <Bold as="p">Border Countries:</Bold>
                            {/* {country?.borders.map(border => (
                                <Button>{border}</Button>
                            ))} */}
                        </Box>
                    </>

                }
            </Section>
        </Container>
    )
}

export default Country
