import { styled } from "styled-components";
import { useTripsContext } from "../../context/trips.store";
import Loading from "../../pages/Loading";
import TripCard from "../basic/TripCard";

const Main = () => {
  const { trips } = useTripsContext();
  if (!trips) return <Loading />;

  return (
    <Container className="row row-cols-1 row-cols-md-5 g-4">
      {trips && trips.map((trip) => <TripCard key={trip.id} {...trip} />)}
    </Container>
  );
};
export default Main;

const Container = styled.div`
  background: skyblue; 
  min-height: 68vh;
  display: flex;
  padding: 2rem;
  flex-wrap: wrap;
`;
