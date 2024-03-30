import signupImg from "../../assets/images/signup.png";
import "./SignupStyle.css";
import { Link } from "react-router-dom";

function Signup() {
    return ( 
        <>
        <div className="signup-wrapper">
            <div className="signup-container">
                <div className="left-section">
                <img src={signupImg} alt="signupImg"/>
                </div>
                <div className="right-section">
                    <form action="">
                        <h2>Create Account</h2>
                        <div className="form-field">
                            <input type="email" placeholder="Email" name="email" className="login-field"/>
                        </div>
                        <div className="form-field">
                            <input type="password" placeholder="Password" name="password" className="login-field"/>
                        </div>
                        <div className="button-section">
                            <button type="button">Sign Up</button>
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