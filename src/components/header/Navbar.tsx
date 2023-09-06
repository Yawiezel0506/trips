import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button className="btn btn-danger me-2">Log Out</button>
      <button onClick={()=> navigate('/createTrip')} className="btn btn-primary">Add Trip</button>
    </div>
  );
};

export default NavBar;
