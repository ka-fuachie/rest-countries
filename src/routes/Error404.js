import styled, { keyframes, css } from "styled-components"
import { useNavigate } from "react-router-dom"

const ErrorContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito Sans', sans-serif;
`

const pump = keyframes`
    0%{transform: scale(1)}
    50%{transform: scale(1.15)}
    100%{transform: scale(1)}
`

const Error = styled.p`
    animation: ${pump} 2s ease-out infinite;
    margin: 1em;

    > * {
        color: hsl(0 75% 50%);
        font-size: 7.5rem;
        font-weight: var(--fw-very-bold);
        display: inline-block;
    }
`

const Flex = styled.div`
    display: flex;
    gap: 1em;
`

const Button = styled.button`
    border: none;
    padding: 1em 3em;
    margin-block: 1em;
    background-color: var(--clr-text);
    color: var(--clr-elements);
    font-weight: var(--fw-very-bold);
    font-size: 1rem;
    border-radius: 0.5em;
    cursor: pointer;
    ${({secondary}) => secondary && css`
        background-color: transparent;
        color: var(--clr-text);
        border: 2px solid var(--clr-text);
    `}
`

const Error404 = () => {
    const navigate = useNavigate()

    return (
        <ErrorContainer>
            <Error>
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </Error>
            <p>The page you requested does not exist</p>
            <Flex>
                <Button role="link" onClick={() => navigate('/')}>Go home</Button>
                <Button role="link" secondary onClick={() => navigate(-1)}>Back</Button>
            </Flex>
        </ErrorContainer>
    )
}

export default Error404
