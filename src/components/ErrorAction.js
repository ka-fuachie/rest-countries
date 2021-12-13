import styled, {keyframes} from "styled-components"

const ErrorContainer = styled.div`
    display: grid;
    place-items: center;
`

const pump = keyframes`
    0%{transform: scale(1)}
    50%{transform: scale(1.15)}
    100%{transform: scale(1)}
`

const Error = styled.p`
    animation: ${pump} 2s ease-out infinite;

    > * {
        color: hsl(0 75% 50%);
        font-size: 3rem;
        font-weight: var(--fw-very-bold);
        display: inline-block;
    }
`

const Button = styled.button`
    border: none;
    padding: 1em 3em;
    margin-block: 1em;
    background-color: var(--clr-text);
    color: var(--clr-elements);
    font-weight: var(--fw-bold);
    border-radius: 0.5em;
    cursor: pointer;
`

const ErrorAction = ({ action, msg }) => {
    return (
        <ErrorContainer>
            <Error>
                <span>E</span>
                <span>R</span>
                <span>R</span>
                <span>O</span>
                <span>R</span>
                <span>!</span>
            </Error>
            <p>{msg}</p>
            <Button onClick={action}>Retry</Button>
        </ErrorContainer>
    )
}

export default ErrorAction
