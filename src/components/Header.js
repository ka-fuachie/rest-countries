import styled from "styled-components"
import { Link } from "react-router-dom"
import { useUpdateTheme, useTheme } from "../theme/ThemeContext"

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em 1em;
    margin-bottom: 0.5em;
    box-shadow: var(--bs-dark);
`

const Title = styled.h1`
    font-size: 1.25rem;
    font-weight: var(--fw-very-bold);
`

// TODO: Add animations to moon when toggling darkmode

const Button = styled.button`
    display: flex;
    gap: 0.5em;
    align-items: center;
    font-size: 1rem;
    font-weight: var(--fw-bold);
    padding: 0.25em;
    border: none;
    background-color: transparent;
    cursor: pointer;
`

const MoonIcon = () => {
    const theme = useTheme()

    return (
        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <rect fill="none" height="24" width="24" />
            <path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" fill={theme.darkMode ? "white" : "black"} />
        </svg>
    )
}

const Header = () => {
    const toggleTheme = useUpdateTheme()
    const theme = useTheme()

    return (
        <StyledHeader>
            <Link to="/">
                <Title>Where in the world?</Title>
            </Link>
            <Button role="switch" aria-checked={theme.darkMode} onClick={toggleTheme} >
                <MoonIcon />
                <p>Dark mode</p>
            </Button>
        </StyledHeader>
    )
}

export default Header
