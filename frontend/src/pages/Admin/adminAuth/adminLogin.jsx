import "../../../assets/css/adminStyle.css";
import { useState } from "react";
import axios from "axios";
import { adminLogin } from "../../../utils/APIRoutes";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
    const [formData, setFormData ] = useState({});
    const navigate = useNavigate();
    const handleInputChange = (event) =>{
        const { target } = event;
        const { name, value } = target;
        setFormData({
            ...formData,
            [name] : value
        })
    }
    const handleLogin = async (e) =>{
        e.preventDefault();
        console.log("formData,,,",formData);
        if(formData.rememberMe && formData.rememberMe == "on"){
            localStorage.setItem(...formData);
        }
        const result = await axios.post(adminLogin,formData);
        console.log("API REsult", result);
        if(result.data.status == true){
            navigate("/dashboard");
        }
    }
    return ( 
        <>
        <div className="main-admin">
            <div className="admin-wrapper">
                <div className="auth-section">
                    <small>Sign In to Admin Dashboard</small>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <div className="icon-section">
                                <svg className="icon-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 96" id="email"><g data-name="Layer 2"><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path></g></svg>
                            </div>
                            <input type="text" name="email" placeholder="Email" onChange={handleInputChange} />
                        </div>
                        <div className="input-group">
                            <div className="icon-section">
                                <svg className="icon-img" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32" id="lock"><path d="M4.45001,14.17999v13.91998c0,1.88,1.52997,3.40002,3.39996,3.40002h16.30005c1.87,0,3.39996-1.52002,3.39996-3.40002V14.17999c0-1.87-1.52997-3.40002-3.39996-3.40002h-0.29004V8.35999C23.85999,4.01996,20.33002,0.5,16,0.5S8.14001,4.01996,8.14001,8.35999v2.41998H7.84998C5.97998,10.77997,4.45001,12.31,4.45001,14.17999z M16,18.70001c1.34998,0,2.44,1.08997,2.44,2.44c0,1.34998-1.09003,2.43994-2.44,2.43994s-2.44-1.08997-2.44-2.43994C13.56,19.78998,14.65002,18.70001,16,18.70001z M11.14001,8.35999C11.14001,5.67999,13.32001,3.5,16,3.5s4.85999,2.17999,4.85999,4.85999v2.41998h-9.71997V8.35999z"></path></svg>
                            </div>
                            <input type="password" name="password" placeholder="Password" onChange={handleInputChange}/>
                        </div>
                        <div className="custom-control">
                            <div className="field-group">
                                <input type="checkbox" id="customCheckLogin" name="rememberMe" onChange={handleInputChange}/>
                                <span>Remember Me</span>
                            </div>
                        </div>
                        <div className="button-section">
                            <button type="submit">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default AdminLogin;