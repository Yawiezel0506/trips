import { styled } from "styled-components";
import { FC } from "react";
import TripInArray from "../../interfaces/tripInArr";
import { useNavigate } from "react-router-dom";

const TripCard: FC<TripInArray> = (props: TripInArray) => {
  const navigate = useNavigate();

  const navToTripPage = (id: string) => {
    navigate(`/trip/${id}`);
  };

  return (
    <Container>
      <div className="col" onClick={() => navToTripPage(props.id)}>
        <div className="card h-100">
          <img
            src={props.image}
            className="card-img-top"
            alt={props.name}
            style={{ height: "12rem" }}
          />
          <div className="card-body" style={{ height: "8rem" }}>
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.destination}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TripCard;

const Container = styled.div`
  cursor: pointer;
  &:hover {
    background: rgba(234, 211, 110, 0.51);
    box-shadow: 8px 6px 76px 19px rgba(234, 211, 110, 0.51);
    -webkit-box-shadow: 8px 6px 76px 19px rgba(234, 211, 110, 0.51);
    -moz-box-shadow: 8px 6px 76px 19px rgba(234, 211, 110, 0.51);
  }
`;
