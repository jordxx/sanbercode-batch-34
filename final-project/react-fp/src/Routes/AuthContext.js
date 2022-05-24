import Cookies from "js-cookie";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [AuthToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = Cookies.get('"token"');
    if (token) {
      setAuthToken(token);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ AuthToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
