import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router"
import styled from "styled-components"
import { useApi } from "../api/ApiContext"
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
const TextBox = styled.div`
    padding-inline: 2em;
    padding-block: 2em 3em;
    border-radius: 0em 0em 1em 1em;
`

const Title = styled.h2`
    font-weight: var(--fw-very-bold);
    padding-bottom: 0.5em;
`
const Bold = styled.span`
    font-weight: var(--fw-bold);
    padding-right: 0.25em;
`

const Country = () => {
    const params = useParams()
    const countriesApi = useApi()
    const navigate = useNavigate()
    const [country, setCountry] = useState({})
    const [error, setError] = useState(false)


    useEffect(() => {
        const loadData = async () => {
            const [data, error] = await countriesApi.getCountry(params.country.replace(/-/g, ' '))
            setCountry(data)
            setError(error)
            console.log([data, error]);
            // console.log(Object.values(Object.values(temp.currencies)[0])[0]);
        }

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
                {!countriesApi.isProcessing &&
                    <>
                        {country.flags &&
                            <img src={country.flags.svg} alt={country.name.common} />
                        }
                        <TextBox>
                            {country.name &&
                                <Title>{country.name.common}</Title>
                            }
                            {country.name &&
                                <p><Bold>Native Name:</Bold>{Object.values(Object.values(country.name.nativeName)[0])[0]}</p>
                            }
                            {country.population &&
                                <p><Bold>Population:</Bold>{country.population}</p>
                            }
                            {country.region &&
                                <p><Bold>Region:</Bold>{country.region}</p>
                            }
                            {country.subregion &&
                                <p><Bold>Sub Region:</Bold>{country.subregion}</p>
                            }
                            {country.capital &&
                                <p><Bold>Capital:</Bold>{country.capital[0]}</p>
                            }

                        </TextBox>
                        <TextBox>
                            {country.tld &&
                                <p><Bold>Top Level Domain:</Bold>{country.tld[0]}</p>
                            }
                            {country.currencies &&
                                <p><Bold>Currencies:</Bold>{Object.values(Object.values(country.currencies)[0])[0]}</p>
                            }
                            {country.languages &&
                                <p><Bold>languages:</Bold>{Object.values(country.languages).map(language => `${language}, `)}</p>
                            }


                        </TextBox>
                        <div>
                            <Bold as='p'>Border Countries:</Bold>
                            <div></div>
                        </div>
                    </>
                }
            </Section>
        </Container>
    )
}

export default Country
