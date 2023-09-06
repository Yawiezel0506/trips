import { Route, Routes } from "react-router-dom";
import "./App.css";
import Trips from "./pages/Trips";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Trip from "./pages/Trip";
import Edit from "./pages/Edit";
import AddTrip from "./pages/AddTrip";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Trips/>} />
        <Route path="/trip/:id" element={<Trip/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/createTrip" element={<AddTrip/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </>
  );
}

export default App;
