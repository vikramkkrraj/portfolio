import { createContext, useContext, useEffect, useState } from "react";
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // check if logged in on app load
  useEffect(() => {
    const fetchuser = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data.user);
      } catch (error) {
        console.log('error in fetcing');
        setUser(null)
      } finally {
        setLoading(false);
      }
    }
    fetchuser();
  },[])

   return(
    <AuthContext.Provider value={{user, setUser, loading}} >
      {children}
    </AuthContext.Provider>
   )
}

export const useAuth = () => useContext(AuthContext);