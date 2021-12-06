import React, {useContext, useState} from 'react'
import { createGlobalStyle } from 'styled-components'

const ThemeContext = React.createContext()
const UpdateThemeContext = React.createContext()

export const useTheme = () => (useContext(ThemeContext))
export const useUpdateTheme = () => (useContext(UpdateThemeContext))

const LightStyles = createGlobalStyle`
    :root{
        --clr-text: hsl(var(--clr-very-dark-blue-text));
        --clr-elements: hsl(var(--clr-white));
        --clr-bg: hsl(var(--clr-very-light-gray));
        --clr-input: hsl(var(--clr-dark-gray));

        background-color: var(--clr-elements);
        color: var(--clr-text);
    }
`

const DarkStyles = createGlobalStyle`
    :root{
        --clr-text: hsl(var(--clr-white));
        --clr-elements: hsl(var(--clr-dark-blue));
        --clr-bg: hsl(var(--clr-very-dark-blue-bg));
        /* --clr-input: hsl(var(--clr-dark-gray)) */

        background-color: var(--clr-elements);
        color: var(--clr-text);
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
                {darkMode? <DarkStyles />: <LightStyles />}
                {children}
            </ThemeContext.Provider>
        </UpdateThemeContext.Provider>
    )
}

export default ThemeProvider
