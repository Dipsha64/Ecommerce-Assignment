import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home";
import ProductList from './pages/Product/ProductList';
import AdminLogin from './pages/Admin/adminAuth/adminLogin';
import Dashboard from './pages/Admin/Dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/product" element={<ProductList/>}></Route>
            <Route path="/adminLogin" element={<AdminLogin/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
