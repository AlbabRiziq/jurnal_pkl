import { useParams } from "react-router-dom";
import Navbar from "../../../../Components/Navbar/Navbar";
import Navigation from "../../../../Components/Navigation/Navigation";

function ViewJurnal() {
  const { jurnalId } = useParams();
  return (
    <div>
      <Navbar />
      <p>{jurnalId}</p>
      <Navigation />
    </div>
  );
}

export default ViewJurnal;
