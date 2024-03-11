import { useState } from "react";
import style from "./SignUp.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function LogIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signin`,
        {
          email: user.email,
          password: user.password,
        }
      );
      setUser({
        email: "",
        password: "",
      });
      console.log(data);

      if (data.message == "success") {
        toast("LogIn successfully!!");
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Email:
          </label>
          <input
            type="email"
            value={user.email}
            name="email"
            onChange={handelChange}
            className="form-control"
            id="validationCustom02"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustom03" className="form-label">
            Password:
          </label>
          <input
            type="password"
            value={user.password}
            name="password"
            onChange={handelChange}
            className="form-control"
            id="validationCustom03"
            required
          />
        </div>

        <div className="col-4">
          <button className={style.btn} type="submit">
            Submit
          </button>
        </div>
        <div className="col-4">
          <div className={style.para}>
            <p>
              Not have an account?<Link to="/signup"> Log In</Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default LogIn;
