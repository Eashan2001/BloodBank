import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/Auth/Login.jsx';
import RegisterPage from './pages/Auth/RegisterPage.jsx';
import DonorRegisterPage from './pages/DonorRegister/DonorRegisterPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/DonorRegisterPage" element={<DonorRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
