import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }