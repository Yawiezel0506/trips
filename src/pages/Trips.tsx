import { styled } from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Main from "../components/main/Main";

const Trips = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default Trips;

const Container = styled.div`

`


