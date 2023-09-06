import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useTripsContext } from "../context/trips.store";
import tripFill from "../interfaces/tripFill";
import Trip from "../interfaces/trip";

const AddTrip = () => {
  const { getAllTrips, createTrip } = useTripsContext();
  const [formDetails, setFormDetails] = useState<Trip>(tripFill);

  const navigate = useNavigate();

  const create = () => {
    const newTrip = {
      ...formDetails,
      id: String(Date.now()),
    };
    createTrip(newTrip);
    getAllTrips();
    navigate("/")
  };

  return (
    <Container>
      <div
        style={{
          backgroundImage: `url("https://pbs.twimg.com/profile_images/1239537374155005952/IFsRsvZQ.jpg")`,
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
                <h1 className="display-5">Add Trip</h1>
                {formDetails.name && (
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      value={formDetails.name}
                      onChange={(e) =>
                        setFormDetails({ ...formDetails, name: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      className="form-control"
                      value={formDetails.destination}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          destination: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      className="form-control"
                      value={formDetails.startDate}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          startDate: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      className="form-control"
                      value={formDetails.endDate}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          endDate: e.target.value,
                        })
                      }
                    />
                    <input
                      type="number"
                      className="form-control"
                      value={formDetails.price}
                      placeholder="Price"
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          price: Number(e.target.value),
                        })
                      }
                    />
                    <input
                      type="text"
                      className="form-control"
                      value={formDetails.image}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          image: e.target.value,
                        })
                      }
                    />
                    <textarea
                      className="form-control"
                      value={formDetails.description}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                )}
              </div>
              <div className="trip-info d-flex justify-content-around">
                <button onClick={() => create()} className="btn btn-success">
                  Add Trip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddTrip;

const Container = styled.div`
  .trip-info {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    margin-top: 50px;
  }
`;
