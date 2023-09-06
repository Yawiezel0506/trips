import { styled } from "styled-components";
import { useTripsContext } from "../context/trips.store";
import Loading from "./Loading";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { UseUserContext } from "../context/users.store";

const Trip = () => {
  const { trip, getTrip, deleteTrip } = useTripsContext();
  const {token} = UseUserContext()
  const { id } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    if (id) {
      getTrip(id);
    }
  }, []);

  useEffect(() => {
    if (!token) return navigate("/login");
  }, []);

  const del =()=> {
    id && deleteTrip(id, token)
    navigate("/")
  }
  if (!trip) return <Loading />;
  return (
    <Container>
      <div
        style={{
          backgroundImage: `url(${trip.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="trip-info text-center">
                <h1 className="display-5">Trip Details</h1>
                <ul>
                  <li>
                    <strong>ID:</strong> <span> {trip.id}</span>
                  </li>
                  <li>
                    <strong>Name:</strong> <span> {trip.name}</span>
                  </li>
                  <li>
                    <strong>Destination:</strong>
                    <span> {trip.destination}</span>
                  </li>
                  <li>
                    <strong>Start Date:</strong>
                    <span> {trip.startDate}</span>
                  </li>
                  <li>
                    <strong>End Date:</strong> <span> {trip.endDate}</span>
                  </li>
                  <li>
                    <strong>Description:</strong>
                    <span> {trip.description}</span>
                  </li>
                  <li>
                    <strong>Price:</strong> ${trip.price}
                    <span></span>
                  </li>
                  <li>
                    <strong>Activities:</strong>
                    {trip.activities.map((act) => (
                      <span key={act}> {act},</span>
                    ))}
                  </li>
                </ul>
              </div>
              <div className="trip-info d-flex justify-content-around">
                      <button onClick={()=> navigate(`/edit/${trip.id}`)} className="btn btn-primary">Edit</button>
                      <button onClick={()=> del()} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Trip;

const Container = styled.div`
  .trip-info {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    margin-top: 50px;
  }
  ul {
    list-style: none ;
  }
`;
