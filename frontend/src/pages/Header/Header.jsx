import logoImage from"../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../Header/HeaderStyle.css";

function Header() {
    const [isOpen, setIsOpen ] = useState(false);

    const toggleDropdown = () =>{
        setIsOpen(!isOpen);
    }
    const closeDropdown = () => {
        setIsOpen(false);
    }
    const navLink = [ 
        {
            path : "/",
            display : "Home"
        },
        {
            path : "/product",
            display : "Product"
        },
    ]

    return (
        <header>
        <div className="container">
            <a><img src={logoImage} className="logo-section" alt="logoImage"/></a>
            <ul>
                {
                    navLink.map((links, index)=>
                    <li key={index}><NavLink to={links.path}>{links.display}</NavLink></li>
                    )
                }
            </ul>
            <div className="user-profile">
            <img className="profile-image" alt="" onClick={toggleDropdown}
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                {/* <img src={userProfile} alt="User Profile" className="profile-image" onClick={toggleDropdown} /> */}
                {isOpen && 
                    <div className="menu-items">
                        <NavLink to={"/login"} className="auth-details">Login</NavLink>
                        <NavLink to={"/login"} className="auth-details">Profile</NavLink>
                    </div>
                }
                {isOpen &&
                    <div className="overlay" onClick={closeDropdown}></div>
                }
            </div>
        </div>
        </header>
    );
}
export default Header;