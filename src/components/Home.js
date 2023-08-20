import React, { useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { user, createCollection } = useAuth();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Header />

      <div className="flex flex-col lg:flex-row justify-center items-center   h-full mx-2 py-16 ">
        <div className=" border-gray-300 border-4 rounded-lg w-[200px] md:w-full p-40 m-10 shadow-white shadow-md">
          <div className="flex justify-center items-center">
            <Link
              className="font-bold uppercase text-2xl md:text-3xl hover:text-green-700 "
              to="/room1"
            >
              Frontend Freaks
            </Link>
          </div>
        </div>

        <div className="border-4 border-gray-300 rounded-lg p-40 m-10 w-[200px] md:w-full shadow-white shadow-md">
          <div className="flex justify-center  items-center">
            <Link
              className="font-bold uppercase text-2xl md:text-3xl hover:text-green-700 "
              to="/room2"
            >
              Backend Freaks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
