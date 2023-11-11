import { useEffect, useState } from "react";
import GetJam from "../../../Components/Jam/GetJam";

const latitudePos = -7.668757742766788;
const longitudePOs = 109.65178004973279;

function Absen() {
  const [absen, setAbsen] = useState({});
  const [dapatAbsen, setDapatAbsen] = useState(false);
  const [sudahAbsen, setSudahAbsen] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;

      console.log(`Selisih latitude ${Math.abs(latitudePos - latitude)}`);
      console.log(`Selisih longitude ${Math.abs(longitudePOs - longitude)}`);

      if (
        Math.abs(latitudePos - latitude) < 0.0005 &&
        Math.abs(longitudePOs - longitude) < 0.0005
      ) {
        setDapatAbsen(true);
      } else {
        setDapatAbsen(false);
      }
    });
  }, []);

  const handleAbsen = () => {
    localStorage.setItem("absen", JSON.stringify({ time: GetJam() }));
    setAbsen(true);
  };

  return (
    <div>
      {dapatAbsen ? (
        <div className="m-5 flex flex-col items-center ">
          <p className="font-bold text-slate-900 text-xl mb-5">MULAI ABSENSI</p>
          <button
            onClick={handleAbsen}
            className="btn w-40 bg-blue-500 text-slate-200"
          >
            ABSEN
          </button>
        </div>
      ) : (
        <div className="m-5 flex flex-col items-center ">
          <p className="font-bold text-slate-900 text-xl mb-5">MULAI ABSENSI</p>

          <p>LOKASI TIDAK SESUAI</p>
          <button
            className="btn w-40 bg-blue-500 text-slate-200 disabled:bg-blue-300"
            disabled
            onClick={handleAbsen}
          >
            ABSEN
          </button>
        </div>
      )}
    </div>
  );
}

export default Absen;
