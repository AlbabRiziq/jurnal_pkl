import { useEffect, useState } from "react";

function GetJam() {
  // Format waktu 24 jam
  const options = { hour12: false };

  const time = new Date().toLocaleTimeString("id-ID", options);
  const date = new Date().toLocaleDateString("id-ID");

  return {
    time,
    date,
  };
}

export default GetJam;
