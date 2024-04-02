import signupImg from "../../assets/images/signup.png";
import "./SignupStyle.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerRoute } from "../../utils/APIRoutes";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log("ERR",errors);
    const navigate = useNavigate();
    const toastOption = {
        position : "top-right",
        autoClose : 8000,
        pauseOnHover : true,
        theme : "dark",
        draggable : true
    }

    return ( 
        <>
        <div className="signup-wrapper">
            <div className="signup-container">
                <div className="left-section">
                <img src={signupImg} alt="signupImg"/>
                </div>
                <div className="right-section">
                    <form noValidate onSubmit={handleSubmit(async(data)=>{
                        console.log("DATAA",data);
                        const result = await axios.post(registerRoute,data);
                        if(result.data && result.data.status === true){
                            toast(result.data.message,toastOption);
                            navigate("/login");
                        }
                        if(result.data && result.data.status === false){
                            toast(result.data.message,toastOption);
                        }
                    })}>
                        <h2>Create Account</h2>
                        <div className="form-field">
                            <input type="text" placeholder="First Name" name="firstName" className="login-field"
                            {...register("firstName",{required : "First name is required"})}/>
                        <p className="text-red-500">
                            {errors.firstName && <span>{errors.firstName.message}</span>}
                        </p>
                        </div>
                        <div className="form-field">
                            <input type="text" placeholder="Last Name" name="lastName" className="login-field"
                            {...register("lastName",{required : "Last name is required"})}/>
                        </div>
                        <p className="text-red-500">
                            {errors.lastName && <span>{errors.lastName.message}</span>}
                        </p>
                        <div className="form-field">
                            <input type="email" placeholder="Email" name="email" className="login-field"
                            {...register("email",{required : "Email is required",pattern : {value :/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi, message : "Email not valid"}})}/>
                        </div>
                        <p className="text-red-500">
                            {errors.email && <span>{errors.email.message}</span>}
                        </p>
                        <div className="form-field">
                            <input type="password" placeholder="Password" name="password" className="login-field"
                            {...register("password",{required : "password is required",pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,message:`at least 8 characters\n
                            - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                            - Can contain special characters`}})}/>
                        </div>
                        <p className="text-red-500">
                            {errors.password && <span>{errors.password.message}</span>}
                        </p>
                        <div className="button-section">
                            <button type="submit">Sign Up</button>
                        </div>
                        <span>Don't have an account ? <Link to="/login">Login</Link></span>
                    </form>
                </div>
            </div>
        </div>
        <ToastContainer/>
        </>
    );
}

export default Signup;