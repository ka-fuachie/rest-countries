import React, {useContext, useState} from 'react'
import { createGlobalStyle } from 'styled-components'

const ThemeContext = React.createContext()
const UpdateThemeContext = React.createContext()

export const useTheme = () => (useContext(ThemeContext))
export const useUpdateTheme = () => (useContext(UpdateThemeContext))

const GlobalStyles = createGlobalStyle`
    :root{
        background-color: var(--clr-elements);
        color: var(--clr-text);
    }

    body{
        background-color: var(--clr-bg);
    }

`

const LightStyles = createGlobalStyle`
    :root{
        --clr-text: hsl(var(--clr-very-dark-blue-text));
        --clr-elements: hsl(var(--clr-white));
        --clr-bg: hsl(var(--clr-very-light-gray));
        --clr-input: hsl(var(--clr-dark-gray));
    }

`

const DarkStyles = createGlobalStyle`
    :root{
        --clr-text: hsl(var(--clr-white));
        --clr-elements: hsl(var(--clr-dark-blue));
        --clr-bg: hsl(var(--clr-very-dark-blue-bg));
        /* --clr-input: hsl(var(--clr-dark-gray)) */
    }

`


const ThemeProvider = ({children}) => {
    const [darkMode, setdarkMode] = useState(false)

    const toggleTheme = () => {
        setdarkMode((prevState) => !prevState)
    }

    return (
        <UpdateThemeContext.Provider value={toggleTheme} >
            <ThemeContext.Provider value={{darkMode}} >
                <GlobalStyles />
                {darkMode? <DarkStyles />: <LightStyles />}
                {children}
            </ThemeContext.Provider>
        </UpdateThemeContext.Provider>
    )
}

export default ThemeProvider
