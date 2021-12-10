import styled from "styled-components"

const Select = styled.select`
    align-self: flex-start;
    padding: 1em 1.5em;
    background-color: transparent;
    border: none;
    border-radius: 0.25em;
    box-shadow: var(--bs-light);
`

const Dropdown = () => {
    return (
        <Select defaultValue="none">
            <option value="none" disabled hidden>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </Select>
    )
}

export default Dropdown
