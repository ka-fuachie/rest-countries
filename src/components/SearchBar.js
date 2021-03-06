import styled from "styled-components"
import { useTheme } from "../theme/ThemeContext"

const SearchBox = styled.div`
    flex: 1;
    display: flex;
    gap: 1em;
    align-items: center;
    padding-inline: 1.5em;
    border-radius: 0.5em;
    box-shadow: var(--bs-light);
`

const Input = styled.input`
    flex: 1;
    border: none;
    outline: none;
    padding-block: 1.25em;
`

const SearchIcon = () => {
    const theme = useTheme()

    return (
        <svg aria-label="search" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill={theme.darkMode? "white": "black"} />
        </svg>
    )
}

const SearchBar = ({ setSearchText }) => {
    return (
        <SearchBox>
            <SearchIcon />
            <Input type="text" role="searchbox" placeholder="Search for a country ..." onChange = {(e) => setSearchText(e.target.value)} />
        </SearchBox>
    )
}

export default SearchBar
