import React from "react";
import "../styles/NavBar.css";
import "../styles/container.css"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const navigation = useNavigate();

 

  //donor register
  const handleRegisterDoner=()=>{
    navigation("/DonorRegisterPage");

  }

//admin 
const handleAdmin=()=>{
  navigation("/Admin");
}


  return (
    <div className="top">
     <Navbar/>

      <div className="container-wrapper mt-5">
        <div class="container" className="container " onClick={handleRegisterDoner}>
          <h1 className="mt-3">Donor Registration</h1>
          <img src="/src/assets/download.png" alt="NO Support" class="img-fluid w-40 h-40" />
        </div>
        <div  class="container" className="container ">
          <h1 className="mt-3">Live Blood Camps </h1>
          <img src="/src/assets/download.png" alt="NO Support" class="img-fluid w-40 h-40" />
        </div>
      </div>
      <div className="container-wrapper ">
        <div class="container" className="container ">
          <h1 className="mt-3">Current Blood Stock</h1>
          <img src="/src/assets/download.png" alt="NO Support" class="img-fluid w-40 h-40" />
        </div>
        <div class="container" className="container">
          <h1 className="mt-3" onClick={handleAdmin}  >Admin</h1>
          <img src="/src/assets/download.png" alt="NO Support" class="img-fluid w-40 h-40" />
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
