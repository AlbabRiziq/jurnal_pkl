import { useEffect, useState } from "react";

function Jam() {
  const [jam, setJam] = useState();
  const [tanggal, setTanggal] = useState();

  useEffect(() => {
    // Format waktu 24 jam
    const options = { hour12: false };
    setInterval(() => {
      const time = new Date().toLocaleTimeString("id-ID", options);
      setJam(time);
    }, 1000);
  }, []);

  useEffect(() => {
    setTanggal(new Date().toLocaleDateString("id-ID"));
  }, []);

  return (
    <div className="text-center mt-3">
      <p>
        {jam} | {tanggal}
      </p>
    </div>
  );
}

export default Jam;
