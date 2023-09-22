import Navbar from "../../../Components/Navbar/Navbar";
import Navigation from "../../../Components/Navigation/Navigation";
import imgDummy from "../../../assets/img/tes.jpg";
import JurnalCard from "./JurnalCard";

function Jurnal() {
  return (
    <div className="">
      <Navbar />
      <div className="px-[10%]">
        <h1 className="text-center my-10 text-2xl font-bold text-[#1f2937]">
          JURNAL
        </h1>
        <div className="flex items-center justify-center flex-wrap">
          <JurnalCard id="1" />
          <JurnalCard id="2" />
          <JurnalCard id="3" />
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Jurnal;
