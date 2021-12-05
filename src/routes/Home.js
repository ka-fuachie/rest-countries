import styled from "styled-components"
import Container from "../components/Container"
import SearchBar from "../components/SearchBar"
import Dropdown from "../components/Dropdown"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2em;
`

const Home = () => {
    return (
        <Container>
            <Form>
                <SearchBar />
                <Dropdown />
            </Form>
        </Container>
    )
}

export default Home
