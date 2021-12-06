import styled from "styled-components"
import { Link } from "react-router-dom"

const Card = styled(Link)`
    border-radius: 1em;
    box-shadow: var(--bs-light);
    text-decoration: none;
`

const TextBox = styled.div`
    padding-inline: 2em;
    padding-block: 2em 3em;
`

const Title = styled.h2`
    font-weight: var(--fw-very-bold);
    padding-bottom: 0.5em;
`
const Bold = styled.span`
    font-weight: var(--fw-bold);
    padding-right: 0.25em;
`


const CountryCard = () => {
    return (
        <Card to="/">
            <svg></svg>
            <TextBox>
                <Title>Germany</Title>
                <p><Bold>Population:</Bold>81,770,900</p>
                <p><Bold>Region:</Bold>Europe</p>
                <p><Bold>Capital:</Bold>Berlin</p>
            </TextBox>
        </Card>
    )
}

export default CountryCard
