import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/Auth/Login.jsx';
import RegisterPage from './pages/Auth/RegisterPage.jsx';
import DonorRegisterPage from './pages/DonorRegister/DonorRegisterPage.jsx';
import Admin from './pages/Admin/Admin.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/DonorRegisterPage" element={<DonorRegisterPage />} />
        <Route path="/Admin" element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
