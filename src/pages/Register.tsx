import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { UseUserContext } from "../context/users.store";

const Register = () => {
  const navigate = useNavigate();

  const { register } = UseUserContext();

  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleRegister =async () => {
    await register(formDetails);
    navigate("/login")
  };

  return (
    <Container>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="trip-info text-center">
              <button
                className="btn btn-outline-dark"
                onClick={() => navigate("/login")}
              >
                Go To Login
              </button>

              <h1 className="display-5 my-3">Register</h1>
              {formDetails && (
                <div>
                  <input
                    type="text"
                    className="form-control my-2"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        email: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className="form-control my-2"
                    value={formDetails.password}
                    placeholder="password"
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        password: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className="form-control my-2"
                    value={formDetails.role}
                    placeholder="Role"
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        role: e.target.value,
                      })
                    }
                  />
                </div>
              )}
            </div>
            <div className="trip-info d-flex justify-content-around">
              <button onClick={handleRegister} className="btn btn-success">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  background-image: url("https://static.vecteezy.com/system/resources/thumbnails/007/164/537/small/fingerprint-identity-sensor-data-protection-system-podium-hologram-blue-light-and-concept-free-vector.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .trip-info {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    margin-top: 50px;
  }
`;
