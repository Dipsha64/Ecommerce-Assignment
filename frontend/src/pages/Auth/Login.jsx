import signupImg from "../../assets/images/signup.png";
import "./SignupStyle.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loginUserAsync, isAuthenticated } from "../../features/auth/authSlice";

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userIsLogin = useSelector(isAuthenticated);

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
                        dispatch(loginUserAsync(data)).then(() => {
                            navigate('/');
                          });
                    })}>
                        <h2>Create Account</h2>
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
                            <button type="submit">Login</button>
                        </div>
                        <span>Don't have an account ? <Link to="/signup">Sign Up</Link></span>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Signup;