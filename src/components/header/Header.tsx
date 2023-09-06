import { styled } from "styled-components"
import NavBar from "./Navbar"

const Header =()=> {
    return (
        <Container>
            <NavBar/>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background: coral;  /* fallback for old browsers */
    height: 16vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`