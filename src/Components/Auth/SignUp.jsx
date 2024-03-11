import { useState } from "react";
import style from "./SignUp.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function SignUp() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    image: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handelImageChange = (e) => {
    const { name, files } = e.target;
    setUser({
      ...user,
      [name]: files[0],
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", user.userName);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("image", user.image);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        formData
      );
      setUser({
        userName: "",
        email: "",
        password: "",
        image: "",
      });
      console.log(data);

      if (data.message == "success") {
        toast("Your account has been created successfully!!");
      }
    } catch (error) {
      if (error.response.status === 409) {
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
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            User Name:
          </label>
          <input
            type="text"
            value={user.userName}
            name="userName"
            onChange={handelChange}
            className="form-control"
            id="validationCustom01"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
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
        <div className="col-md-4">
          <label htmlFor="validationCustom03" className="form-label">
            Image:
          </label>
          <input
            type="file"
            name="image"
            onChange={handelImageChange}
            className="form-control"
            id="validationCustom04"
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
              Already have an account?<Link to="/login"> Log In</Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
