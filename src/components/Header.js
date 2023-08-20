import React from "react";
import { useAuth } from "../utils/AuthContext";
import { LogOut } from "react-feather";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, handleUserLogOut } = useAuth();
  return (
    <div id="header--wrapper">
      {user ? (
        <>
          <Link to="/">
            <h1 className="text-xl"> Welcome {user.name}</h1>
          </Link>

          <LogOut onClick={handleUserLogOut} className="header--link " />
        </>
      ) : (
        <button>LogIn</button>
      )}
    </div>
  );
};

export default Header;
