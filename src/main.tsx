import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TripsProvider } from "./context/trips.store.tsx";
import { UsersProvider } from "./context/users.store.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <TripsProvider>
      <UsersProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UsersProvider>
    </TripsProvider>
  </>
);
