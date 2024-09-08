import React from "react";
import Search from "../Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearUser } from "../Redux/userSlice";
import { useDispatch } from "react-redux";



function Header() {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    // window.location.reload();
    window.location.href = '/';
    dispatch(clearUser());
  }


  return (
    <header className="bg-[#431261] shadow-sm h-36 justify-center">
      <div className="flex justify-between items-center max-w-9xl mx-auto p-4 align-middle ">
        <Link to="/">
          <h1 className="font-bold text-xl sm:text-3xl flex flex-wrap">
          <img src="https://st.depositphotos.com/1007712/3038/v/450/depositphotos_30381687-stock-illustration-engineer-icon.jpg" alt="Handyman Logo" className="h-[100px]  mr-2 w-[100px] rounded-full " />
            <span className="align-middle m-7 ml-2"><span className="text-white font-bold">Handyman Booking <span className="text-yellow-300"> System</span> </span></span>
           
          </h1>
        </Link>

        <div className="flex items-center">
        {user.username ? ( 
            <>
              
              <Link to={user.role === "PRO"? "/dashboard":"/user-dashboard"}>
                <a className="text-white font-bold text-sm sm:text-xl mr-4">
                  Dashboard
                </a>
              </Link>
          
                <button onClick={handleLogout} className="rounded-full bg-yellow-300 hover:bg-slate-400 text-black hover:text-white font-bold py-2 px-4 hover:ring-2 hover:ring-white ">
                  Logout
                </button>
              
            </>
          ) : (<>
          <Link to="/provider-register">
            <a className="text-white font-bold text-sm sm:text-xl mr-4">Join as Provider</a>
          </Link>
          <Link to="/signin">
            <button className="rounded-full bg-yellow-300 hover:bg-slate-400 text-black hover:text-white font-bold py-2 px-4 hover:ring-2 hover:ring-white ">
              Sign In
            </button>
          </Link>
          </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
