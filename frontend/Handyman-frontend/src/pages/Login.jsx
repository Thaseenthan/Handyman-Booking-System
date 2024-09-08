import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser} from "../components/Redux/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
// import {
//   NotificationContainer,
//   NotificationManager,
// } from "react-notifications";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username, password } = form;

  const login = async () => {
    axios
      .post("http://localhost:8080/api/v1/auth/login", form)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          dispatch(setUser(response.data));
          const redirect = response.data.role === "USER"
            ? "/UserHome" 
            : "/dashboard";
          navigate(redirect);
        } else {
          const message = response.data.message;
          console.error(message);
          // NotificationManager.error("Invalide Username or Password", "", 2000);
        }
      })
      .catch((error) => {
        alert("Invalide Username or Password");
        console.log(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    login();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "white" }}>
      {/* <NotificationContainer /> */}
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col col-xl-10 ml-96">
            <div className=" card bg-gradient-to-b from-[#431261] to-[#890487] max-w-2xl justify-center " style={{ borderRadius: "1rem" }}>
              <div className="flex justify-center row g-0">
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-white">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0">Sign In</span>
                      </div>
                      <h5
                        className="fw-normal align-middle mb-3 pb-3 "
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          onChange={handleChange}
                          name="username"
                          value={username}
                          placeholder="Enter your user name"
                          type="username"
                          id="form2Example17"
                          className="form-control form-control-lg bg-gray-300"
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          User name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          onChange={handleChange}
                          name="password"
                          value={password}
                          placeholder="Enter your password"
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg bg-gray-300"
                        />
                        <label
                          type="submit"
                          className="form-label"
                          htmlFor="form2Example27"
                        >
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-primary btn-lg btn-block hover:underline "
                          type="submit"
                          style={{
                            backgroundColor: "#000",
                            color: "#fff",
                            ":hover": {  // Pseudo-class for hover effect
                              backgroundColor: "white",
                              color: "#000",  
                            }
                          }}
                        >
                          Login
                        </button>
                        
                      </div>
                      </form>
                      {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
                      <p className="mb-5 pb-lg-2" style={{ color: "white" }}>
                        Don't have an account?{" "}
                        <Link to="/register">
                          <a  className="underline  text-yellow-600 ">Register here</a>
                        </Link>
                      </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
