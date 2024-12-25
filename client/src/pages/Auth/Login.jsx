import React from 'react'
import "../../styles/Auth.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigation=useNavigate()
  const handleRegisterClick=()=>{
    navigation('/register')
  }

  
  return (
    <>
    <div className='container'>
        <h1>Login</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Email</label>
            <input
              type="text"
              id="email"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary  w-100">Login</button>
          <div className="text-center mt-3">
          <p>Don't have an account? <button onClick={handleRegisterClick}  style={{ color: 'red' }}>Register here</button></p> {/* Register link */}
        </div>
        </form>

    </div>
    </>
  )
}

export default Login