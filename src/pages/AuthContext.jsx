import React, { createContext, useContext, useState } from "react";

// Create the authentication context
const AuthContext = createContext();

// Create the authentication provider component
export const AuthProvider = ({ children }) => {
  console.log("AuthContext 1");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCellData, setSelectedCellData] = useState(null);
  const [thingsdata, setthingsdata] = useState(null);
  const [userdata, setuserdata] = useState(null);

  const updateUserdata = (data) => {
    setuserdata({ ...userdata, ...data });
  };

  const deleteUserdata = () => {
    setuserdata(null);
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = (event) => {
    setIsDarkMode(event.target.checked);
  };
  const setselectedthing = (data) => {
    setthingsdata(data);
  };

  const setSelectedCell = (data) => {
    setSelectedCellData(data);
  };

  // Function to update email state
  const updateEmail = (newEmail) => {
    console.log("AuthContext 2");
    setEmail(newEmail);
    console.log("vgfsg", email);
  };

  // Function to update password state
  const updatePassword = (newPassword) => {
    setPassword(newPassword);
  };

  // Define the context value
  const authContextValue = {
    email,
    password,
    updateEmail,
    updatePassword,
    selectedCellData,
    setSelectedCell,
    setselectedthing,
    thingsdata,
    userdata,
    updateUserdata,
    deleteUserdata,
    isDarkMode,
    handleThemeChange,
  };

  // Provide the context value to the children components
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume the authentication context
export const useAuth = () => {
  console.log("AuthContext 3");
  return useContext(AuthContext);
};
