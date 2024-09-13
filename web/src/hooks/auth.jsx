import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@sociosretro:user", JSON.stringify(user));
      localStorage.setItem("@sociosretro:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível autenticar!");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@sociosretro:user");
    localStorage.removeItem("@sociosretro:token");
    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@sociosretro:token");
    const user = localStorage.getItem("@sociosretro:user");

    if(token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  },[])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }