import React from "react";
import "../../styles/DonorRegister.css";

const RegisterPage = () => {
  return (
    <>
      <div className="container">
        <h1>Register</h1>
        <form >
          <div className="mb-2">
            <label htmlFor="username" className="form-label">
              Name
            </label>
            <input type="text" id="name" className="form-control" placeholder="Enter Your Name" required />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="text" id="email" className="form-control" placeholder="Enter your Email" required />
          </div>
          <div className="mb-2">
            <label htmlFor="group" className="form-label">
              Blood Group
            </label>
            <select id="group" className="form-control" required>
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input type="Number" id="phone" className="form-control" placeholder="Enter Your Phone Number" required />
          </div>
          <div className="mb-2">
            <label htmlFor="Address" className="form-label">
              Address
            </label>
            <input type="text" id="Address" className="form-control" placeholder="Enter Your Address" required />
          </div>
          <button type="submit" className="btn btn-primary  w-100">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
