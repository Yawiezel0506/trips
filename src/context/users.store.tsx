import axios from "axios";
import React, { createContext, useContext, useState, ReactNode } from "react";
import config from "../utils/headerConfig";
import User from "../interfaces/User";

interface UsersContextValue {
  user: User | null;
  token: string;
  register: (user: User) => Promise<void | null>;
  login: (user: User) => Promise<void | null>;
}

export const UsersContext = createContext<UsersContextValue | null>(null);

export const UseUserContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("usersContext must be used within a usersProvider");
  }
  return context;
};

interface UsersProviderProps {
  children: ReactNode;
}

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  const login = async (user: User): Promise<void | null> => {
    // console.log(user);
    
    try {
      const response = await axios.post(
        `http://localhost:3000/api/auth/login`,
        user,
        config
      );
      //   localStorage.setItem("@token", JSON.stringify(response.data.token)
      console.log(response.data.responseObj);

      setUser(response.data.responseObj.user);
      setToken(response.data.responseObj.token);

      console.log(user, token);
      
      
      
    } catch (error) {
      console.error("Error fetching trip:", error);
      return null;
    }
  };

  const register = async (user: User): Promise<void> => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        user,
        config
      );
      console.log(response);
    } catch (error) {
      console.error("Error creating trip:", error);
    }
  };

  return (
    <UsersContext.Provider
      value={{
        user,
        token,
        login,
        register,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
