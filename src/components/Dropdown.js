import { useState } from "react"
import styled from "styled-components"

const Select = styled.select`
    align-self: flex-start;
    padding: 1em 1.5em;
    background-color: var(--clr-elements);
    border: none;
    border-radius: 0.25em;
    box-shadow: var(--bs-light);
`
const Option = styled.option`
    background-color: var(--clr-elements);
    color: var(--clr-text);
`

const Dropdown = ({setActiveRegion}) => {
    
    return (
        <Select defaultValue="" onChange={(e) => setActiveRegion(e.target.value)}>
            <Option value="" disabled hidden>Filter by Region</Option>
            <Option value="africa">Africa</Option>
            <Option value="america">America</Option>
            <Option value="asia">Asia</Option>
            <Option value="europe">Europe</Option>
            <Option value="oceania">Oceania</Option>
            <Option value=""> - none - </Option>
        </Select>
    )
}

export default Dropdown
