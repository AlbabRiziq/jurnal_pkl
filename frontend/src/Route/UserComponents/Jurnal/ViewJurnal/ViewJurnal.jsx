import { useParams } from "react-router-dom";
import Navbar from "../../../../Components/Navbar/Navbar";
import Navigation from "../../../../Components/Navigation/Navigation";
import imgDummy from "../../../../assets/img/tes.jpg";
import Comments from "../Comments/Comments";

function ViewJurnal() {
  const { jurnalId } = useParams();
  return (
    <div>
      <Navbar />
      <main>
        <div className="flex flex-col justify-center items-center mt-3">
          <img src={imgDummy} alt="" className="w-9/12 md:w-5/12 rounded-xl" />
          <h3 className="font-bold mt-3">JUDUL JURNAL{jurnalId}</h3>
          <p className="text-xs w-9/12 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, quae neque non laboriosam aliquid nemo dolores amet
            consequuntur quis numquam!
          </p>
        </div>
        <Comments />
      </main>
      <Navigation />
    </div>
  );
}

export default ViewJurnal;
