import styled from "styled-components"
import { Link } from "react-router-dom"

const Card = styled(Link)`
    border-radius: 1em 1em;
    box-shadow: var(--bs-light);
    text-decoration: none;
`

const Image = styled.img`
    border-radius: 1em 1em 0em 0em;
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


const CountryCard = ({flag, name, population, region, capital}) => {
    return (
        <Card to="/">
            <Image src={flag} alt={name} />
            <TextBox>
                <Title>{name}</Title>
                <p><Bold>Population:</Bold>{population}</p>
                <p><Bold>Region:</Bold>{region}</p>
                <p><Bold>Capital:</Bold>{capital}</p>
            </TextBox>
        </Card>
    )
}

export default CountryCard
