import styled from "styled-components"
import { Link } from "react-router-dom"

const Card = styled(Link)`
    border-radius: 1em;
    box-shadow: var(--bs-light);
    width: clamp(16em, calc(15vw + 10em) , 18.5em);
`

const ImageBox = styled.div`
    border-radius: 1em 1em 0em 0em;
    min-height: 5em;
    width: 100%;
    overflow: hidden;
`

const Image = styled.img`
    border-radius: 1em 1em 0em 0em;
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1.75;
`

const TextBox = styled.div`
    padding-inline: 2em;
    padding-block: 2em 3em;
    border-radius: 0em 0em 1em 1em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`

const Title = styled.h2`
    font-weight: var(--fw-very-bold);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2; 
    -webkit-box-orient: vertical;
`
const Bold = styled.span`
    font-weight: var(--fw-bold);
    padding-right: 0.5em;
`


const CountryCard = ({ flag, name, population, region, capital }) => {
    const underscoredName = name.toLowerCase().replace(/\s+/g, "_")

    return (
        <Card to={`/country/${underscoredName}`} id={underscoredName}>
            <ImageBox>
                <Image src={flag} alt={name} onLoadStart={() => console.log('loaded')} />
            </ImageBox>
            <TextBox>
                <Title>{name}</Title>
                <div>
                    <p><Bold>Population:</Bold>{population}</p>
                    <p><Bold>Region:</Bold>{region}</p>
                    <p><Bold>Capital:</Bold>{capital}</p>
                </div>
            </TextBox>
        </Card>
    )
}

export default CountryCard
