import { createContext, useState, useEffect } from "react";
import router, { useRouter } from "next/router";
import { API_URL, NEXT_URL } from "../../config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => checkUserLogin(), []);


  const login = async ({ email, password }) => {
    // const res = await fetch(`${NEXT_URL}/api/login`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ identifier, password }),
		// });
		
    const res = await fetch(`/api/login?email=${email}&password=${password}`, {
      // body: JSON.stringify({
      //   email: email,
      //   password: password,
      // }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push("/");
    } else {
      setError(data.error);
    }
  };

  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: "POST",
    });

    if (res.ok) {
      setUser(null);
      setError(null)
      router.push("/");
    }
  };

  const checkUserLogin = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;