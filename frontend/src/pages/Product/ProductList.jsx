import "./productStyle.css";
import {categoryObj} from "../../app/categoryData";
import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import collectionBanner from "../../assets/images/collection-banner.png"

function ProductList() {
    const [menuCategory,setMenuCategory] = useState([]);
    useEffect(()=>{
        if(categoryObj && categoryObj.length > 0){
            const menuCategory = [];
            for(let i=0;i<categoryObj.length;i++){
                menuCategory.push({"value" : categoryObj[i].value,"label":categoryObj[i].name,"checked" : false});
            }
            console.log("menuCategory...",menuCategory);
            setMenuCategory(menuCategory);
        }
    },[])

    const handleFilter = (e,option) =>{
        console.log("handleFilter..",e.target.checked);
        
    }
    return (
        <>
        <Header/>
        <div className="main-list">
            <div className="list-section">
                <div className="left-section">
                    <div className="checkbox-filter">
                        <h3>Categories</h3>
                        {menuCategory && menuCategory.map((option, optionIdx) => (
                        <div key={option.value} className="field-item">
                            <input
                            name={`${option.value}[]`}
                            defaultValue={option.value}
                            type="checkbox"
                            defaultChecked={option.checked}
                            onClick={(e)=> handleFilter(e,option) }
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                            className="ml-3 text-sm text-gray-600"
                            >
                            {option.label}
                            </label>
                        </div>
                        ))}  
                    </div>
                </div>
                <div className="right-section">
                    <div className="product-view">
                        <div className="shop-product">
                            <ul>
                                <li>
                                    <div className="single-product-view">
                                        <div className="product-image">
                                            <img src=""/>
                                        </div>
                                        <div className="product-content">

                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ProductList;