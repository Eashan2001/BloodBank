import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigation = useNavigate();
     //user login
  const handleLoginClick = () => {
    navigation("/login");
  };
  
  return (
    <div className='top'>
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
    </div>
  )
}

export default Navbar