import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    // User is the name of the "data" that gets stored in context
    const [user, setUser] = useState({ id: '', email: '', password: '', auth: false });
    const [admin, setAdmin] = useState({username: '', password: '', auth: false});
  
    // Login updates the user data with a name parameter
    // const login = (id) => {
    //   setUser((user) => ({
    //     id: id,
    //     auth: true,
    //   }));
    // };

    const login = (id, email, password) => {
      setUser((user) => ({
        id: id,
        email: email,
        password: password,
        auth: true
      }))
    }
  
    // Logout updates the user data to default
    const logout = () => {
      setUser((user) => ({
        id: '',
        auth: false
      }));
    };

    const adminLogin = (inputUsername, inputPassword) => {
      setAdmin((admin) => ({
        username: inputUsername, 
        password: inputPassword, 
        auth: true
      }));
    }

    const adminLogout = () => {
      setAdmin((admin) => ({
        username: '', 
        password: '', 
        auth: false
      }))
    }
  
    return (
      <UserContext.Provider value={{ user, login, logout, admin, adminLogin, adminLogout }}>
        {children}
      </UserContext.Provider>
    );
  }

  export { UserContext, UserProvider }