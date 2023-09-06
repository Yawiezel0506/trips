import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useTripsContext } from "../context/trips.store";
import Trip from "../interfaces/trip";
import { UseUserContext } from "../context/users.store";


const Edit = () => {
  
  const { id } = useParams();
  const { getTrip, trip, updateTrip } = useTripsContext();
  const {token} = UseUserContext()
  const [formDetails, setFormDetails] = useState<Trip>(trip);

  const navigate = useNavigate();

  const update = () => {
    if (id) updateTrip(id, formDetails, token);
    navigate("/");
  };

  useEffect(() => {
    if (!token) return navigate("/login");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        await getTrip(id);
        setFormDetails(trip);
        
      }
    };
  
    fetchData();
  }, []);
  
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
                <h1 className="display-5">Edit Trip</h1>
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
                <button onClick={() => update()} className="btn btn-success">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Edit;

const Container = styled.div`
  .trip-info {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    margin-top: 50px;
  }
`;
