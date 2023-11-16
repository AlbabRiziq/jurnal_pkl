import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import Login from "./Route/Login/Login";
import User from "./Route/UserComponents/User/User";
import Admin from "./Route/AdminComponents/Admin/Admin";
import Jurnal from "./Route/UserComponents/Jurnal/Jurnal";
import ViewJurnal from "./Route/UserComponents/Jurnal/ViewJurnal/ViewJurnal";
import ContextData from "./Context/ContextData";
import SignUp from "./Route/SignUp/SignUp";
import Edit from "./Route/Edit/Edit";

const data = {
  user: null,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextData.Provider value={data}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />}>
          <Route path=":role" element={<Login />} />
        </Route>
        <Route path="/signup" element={<SignUp />}>
          <Route path=":role" element={<SignUp />} />
        </Route>
        <Route path="/edit" element={<Edit />} />
        <Route path="/jurnal" element={<Jurnal />} />
        <Route path="/jurnal/:jurnalId" element={<ViewJurnal />} />
      </Routes>
    </ContextData.Provider>
  </BrowserRouter>
);
