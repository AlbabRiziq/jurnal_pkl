import { useState } from "react";
import Jam from "../../../Components/Jam/Jam";

function Absen() {
  // const [absen, setAbsen] = useState({});
  const [dapatAbsen, setDapatAbsen] = useState(true);

  return (
    <div>
      {dapatAbsen ? (
        <div className="m-5 flex flex-col items-center ">
          <p className="font-bold text-slate-900 text-xl mb-5">MULAI ABSENSI</p>
          <button className="btn w-40 bg-blue-500 text-slate-200">ABSEN</button>
        </div>
      ) : (
        <div className="m-5 flex flex-col items-center ">
          <p className="font-bold text-slate-900 text-xl mb-5">MULAI ABSENSI</p>

          <p>LOKASI TIDAK SESUAI</p>
          <button
            className="btn w-40 bg-blue-500 text-slate-200 disabled:bg-blue-300"
            disabled
          >
            ABSEN
          </button>
        </div>
      )}
    </div>
  );
}

export default Absen;
