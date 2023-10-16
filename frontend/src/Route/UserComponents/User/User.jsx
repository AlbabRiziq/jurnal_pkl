import { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Navigation from "../../../Components/Navigation/Navigation";
import CreateJurnal from "../CreateJurnal/CreateJurnal";
import Absen from "../Absen/Absen";
import Jam from "../../../Components/Jam/Jam";

const absen = false;

// function Disabled() {
//   return (
//     <div className="alert alert-warning">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="stroke-current shrink-0 h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//         />
//       </svg>
//       <span>Warning: Invalid email address!</span>
//     </div>
//   );
// }

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
