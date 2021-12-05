import styled from "styled-components"

const StyledContainer = styled.main`
    padding: 1.5em 1em;
`

const Container = ({children}) => {
    return (
        <StyledContainer> {children} </StyledContainer>
    )
}

export default Container
