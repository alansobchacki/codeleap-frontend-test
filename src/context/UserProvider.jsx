import React, { useState } from "react";
import UserContext from "./UserContext";

export default function UserProvider({ children }) {
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}
