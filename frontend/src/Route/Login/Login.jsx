import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ENV = import.meta.env;

function Login() {
  const navigate = useNavigate();
  const params = useParams();
  const role = params.role;
  const login = false;

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  if (login) {
    navigate("/app");
  }

  useEffect(() => {
    if (params.role === undefined) {
      navigate("/");
    }
  }, []);

  const loginHandler = async () => {
    const data = {
      username,
      password,
    };

    const response = await axios.post(`${ENV.VITE_API_URL}/login`, data);

    console.log(response);
  };

  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center flex-col">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">USERNAME</span>
        </label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />

        <label className="label">
          <span className="label-text">PASSWORD</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn mt-9">LOGIN</button>
      </div>
      <div className="mt-5">
        <p className="text-sm w-auto flex ">
          Belum punya akun?{" "}
          <Link to={`/signup/${role}`}>
            <p className="text-blue-800 font-bold mx-2">SIGN UP</p>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
