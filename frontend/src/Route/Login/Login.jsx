import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const login = true;

  if (login) {
    navigate("/app");
  }

  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">USERNAME</span>
        </label>
        <input
          type="text"
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
    </div>
  );
}

export default Login;
