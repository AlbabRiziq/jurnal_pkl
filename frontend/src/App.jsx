import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import SelectRole from "./Route/SelectRole/SelectRole";

const login = false;
const hak = "user";
const dataExist = false;

function App() {
  if (dataExist) {
    null;
  } else {
    return <SelectRole />;
  }
}

export default App;
