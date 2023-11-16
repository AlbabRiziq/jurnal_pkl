import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const params = useParams();
  const role = params.role;

  useEffect(() => {
    if (params.role === undefined) {
      navigate("/");
    }
  }, []);

  const login = false;

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

export default SignUp;
