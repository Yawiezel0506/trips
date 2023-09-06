import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import TripInArray from "../interfaces/tripInArr";
import Trip from "../interfaces/trip";
import tripTemplate from "../interfaces/tripTemplate";


interface TripsContextValue {
  trips: TripInArray[];
  trip: Trip;
  getTrip: (tripId: string) => Promise<void | null>;
  createTrip: (newTripData: Trip, token: string | null) => Promise<void>;
  updateTrip: (tripId: string, updatedTripData: Trip, token: string | null) => Promise<void>;
  deleteTrip: (tripId: string, token: string | null) => Promise<void>;
  getAllTrips: () => Promise<void>;
}

export const TripsContext = createContext<TripsContextValue | null>(null);

export const useTripsContext = () => {
  const context = useContext(TripsContext);
  if (!context) {
    throw new Error("useTripsContext must be used within a TripsProvider");
  }
  return context;
};

interface TripsProviderProps {
  children: ReactNode;
}

export const TripsProvider: React.FC<TripsProviderProps> = ({ children }) => {
  const [trips, setTrips] = useState<TripInArray[]>([]);
  const [trip, setTrip] = useState<Trip>(tripTemplate);

  useEffect(() => {
    getAllTrips();
  }, []);

  const getTrip = async (tripId: string): Promise<void | null> => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/trips/${tripId}`
      );
      setTrip(response.data);
    } catch (error) {
      console.error("Error fetching trip:", error);
      return null;
    }
  };

  const createTrip = async (
    newTripData: TripInArray,
    token: string | null
  ): Promise<void> => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/trips",
        newTripData,
        {
          headers: {
            Authorization: token || "test-token",
          },
        }
      );
      setTrips((prevTrips) => [...prevTrips, response.data]);
    } catch (error) {
      console.error("Error creating trip:", error);
    }
  };

  const updateTrip = async (
    tripId: string,
    updatedTripData: TripInArray,
    token: string | null
  ): Promise<void> => {
    try {
      await axios.put(
        `http://localhost:3000/api/trips/${tripId}`,
        updatedTripData,
        {
          headers: {
            Authorization: token || "test-token",
          },
        }
      );
      setTrips((prevTrips) =>
        prevTrips.map((trip) => (trip.id === tripId ? updatedTripData : trip))
      );
    } catch (error) {
      console.error("Error updating trip:", error);
    }
  };

  const deleteTrip = async (
    tripId: string,
    token: string | null
  ): Promise<void> => {
    try {
      await axios.delete(`http://localhost:3000/api/trips/${tripId}`, {
        headers: {
          Authorization: token || "test-token",
        },
      });
      setTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== tripId));
    } catch (error) {
      console.error("Error deleting trip:", error);
    }
  };

  const getAllTrips = async (): Promise<void> => {
    try {
      const response = await axios.get("http://localhost:3000/api/trips");
      setTrips(response.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  return (
    <TripsContext.Provider
      value={{
        trip,
        trips,
        getTrip,
        createTrip,
        updateTrip,
        deleteTrip,
        getAllTrips,
      }}
    >
      {children}
    </TripsContext.Provider>
  );
};
