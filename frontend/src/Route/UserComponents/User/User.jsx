import { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Navigation from "../../../Components/Navigation/Navigation";
import CreateJurnal from "../CreateJurnal/CreateJurnal";
import Absen from "../Absen/Absen";
import Jam from "../../../Components/Jam/Jam";

const absen = false;

// function Disabled() {

function User() {
  const [tes, setTes] = useState();

  const GetLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      alert(position.coords.latitude);
    });
  };

  useEffect(() => {}, []);

  useEffect(() => {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      // Don't do anything if the permission was denied.
    });
  }, []);

  console.log(import.meta.env.VITE_API_KEY);
  return (
    <div>
      <Navbar />
      <Jam />
      {absen ? <CreateJurnal /> : <Absen />}

      <div className="w-screen flex justify-center"></div>

      <Navigation />
    </div>
  );
}

export default User;
