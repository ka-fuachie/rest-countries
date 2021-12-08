import styled from "styled-components"
import { Link } from "react-router-dom"

const Card = styled(Link)`
    border-radius: 1em;
    box-shadow: var(--bs-light);
    width: clamp(16em, calc(15vw + 10em) , 18.5em);
`

const Image = styled.div`
    border-radius: 1em 1em 0em 0em;
    width: 100%;
    aspect-ratio: 1.75;
    background-image: url(${props => props.src});
    background-position: center center;
    background-size: cover;
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


const CountryCard = ({flag, name, population, region, capital}) => {
    return (
        <Card to={`/country/${name.toLowerCase().replace(/\s+/g, "-")}`}>
            <Image role="img" src={flag} alt={name} onLoadStart={() => console.log('loaded')} />
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
