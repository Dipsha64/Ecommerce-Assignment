import { useState } from "react";
import "../../assets/css/adminStyle.css";
import { menuItemsData } from "../../components/menuItemData";

function Navmenu() {
    const [dropdown, setDropdown] = useState(false);
    return ( 
        <>
        <div className="nav-container">
            <div className="nav-section">
                <h3>Admin Dashboard</h3>
                <ul className="menus">
                    {menuItemsData.map((menu, index) => {
                    return (
                        <li className="menu-items" key={index}>
                            <a href={menu.url}>{menu.title}</a>
                        {/* {menu.submenu ? (
                            <>
                            <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
                                {menu.title}{' '}
                            </button>
                            { dropdown && 
                                <ul className={`dropdown ${dropdown ? "show" : ""}`}>
                                    {menu.submenu.map((submenu, index) => (
                                        <a href={submenu.url}>{submenu.title}</a>
                                    ))}
                                </ul>
                            }
                            </>
                        ) : (
                            <a href={menu.url}>{menu.title}</a>
                        )} */}
                        </li>
                    );
                    })}
                </ul>
            </div>
        </div>
        </>
    );
}

export default Navmenu;