import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

const login = true;
const hak = "user";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (login) {
      if (hak === "admin") {
        navigate("/admin");
      } else {
        navigate("/app");
      }
    } else {
      navigate("/login");
    }
  }, []);
}

export default App;
