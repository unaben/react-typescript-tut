import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
      userContext.setUsers({
        name: "Nathan",
        email: "nathan.king@hotmail.com",
      });  
  };
  const handleLogout = () => {   
      userContext.setUsers(null); 
  };
  return (
    <div className="btn-container">
      <button className="btn" onClick={handleLogin}>Login</button>
      <button className="btn" onClick={handleLogout}>LogOut</button>
      <div>User name is {userContext.users?.name}</div>
      <div>User email is {userContext.users?.email}</div>
    </div>
  );
};
