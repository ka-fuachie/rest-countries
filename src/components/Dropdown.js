import styled from "styled-components"

const Select = styled.select`
    align-self: flex-start;
    padding: 0.5em 1em;
    background-color: transparent;
    border: none;
    border-radius: 0.25em;
    box-shadow: 0em 0em 0.5em hsl(0 0% 0% / 0.25);
`

const Dropdown = () => {
    return (
        <Select>
            <option value="" selected disabled hidden>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </Select>
    )
}

export default Dropdown
