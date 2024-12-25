import React from "react";
import "../styles/NavBar.css";
import "../styles/container.css"
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigation = useNavigate();

  //user login
  const handleLoginClick = () => {
    navigation("/login");
  };

  //donor register
  const handleRegisterDoner=()=>{
    navigation("/DonorRegisterPage");

  }



  return (
    <div className="top">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand fw-bold  fs-2 " href="#">
              Blood Bank
            </a>
            <ul className="navbar-nav me-auto mt-2 ms-5 mb-10 mb-lg-2">
              <li className="nav-item ">
                <a
                  className="nav-link active fs-4 ms-5"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active fs-4 ms-5"
                  aria-current="page"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-4 ms-5" aria-current="page">
                  Gallery
                </a>
              </li>
            </ul>
            <button
              className="  fs-4   custom-button"
              onClick={handleLoginClick}
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <div className="container-wrapper">
        <div className="container " onClick={handleRegisterDoner}>
          <h1>Donor Registration</h1>
        </div>
        <div className="container ">
          <h1>Live Blood Camps </h1>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container ">
          <h1>Current Blood Stock</h1>
        </div>
        <div className="container ">
          <h1>Admin</h1>
        </div>
      </div>
      <div className="paragraph">
        <h2>Just Donate Blood</h2>
        <p>Did you know that just one pint of blood can save up to 3 lives?</p>
      </div>
    </div>
  );
};

export default HomePage;
