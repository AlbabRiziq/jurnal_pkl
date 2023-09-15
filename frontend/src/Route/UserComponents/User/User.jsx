import Navbar from "../../../Componets/Navbar/Navbar";
import Navigation from "../../../Componets/Navigation/Navigation";
import CreateJurnal from "../CreateJurnal/CreateJurnal";

function User() {
  return (
    <div>
      <Navbar />
      <div className="w-screen flex justify-center">
        <CreateJurnal />
      </div>
      <Navigation />
    </div>
  );
}

export default User;
