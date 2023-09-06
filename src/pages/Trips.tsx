import { styled } from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import { useNavigate } from "react-router-dom";
import { UseUserContext } from "../context/users.store";
import { useEffect } from "react";

const Trips = () => {
  const navigate = useNavigate();
  const { token } = UseUserContext();

  useEffect(() => {
    if (!token) return navigate("/login");
  }, []);

  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default Trips;

const Container = styled.div``;
