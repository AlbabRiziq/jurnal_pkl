import { useContext, useState } from "react";
import ContextData from "../../Context/ContextData";
import { useNavigate } from "react-router-dom";

function SelectRole() {
  const data = useContext(ContextData);

  const navigate = useNavigate();

  const changeData = (role) => {
    data.user = role;
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen flex items-center flex-col justify-center">
      <h1 className="font-bold text-slate-900 text-xl">PILIH STATUS ANDA</h1>
      <div className="flex justify-center items-center mt-5">
        <button
          className="btn btn-primary mr-5 text-lg"
          onClick={() => {
            changeData("user");
          }}
        >
          PESERTA PKL
        </button>
        <button
          className="btn btn-primary text-lg"
          onClick={() => {
            changeData("admin");
          }}
        >
          PEMBIMBING
        </button>
      </div>
    </div>
  );
}

export default SelectRole;
