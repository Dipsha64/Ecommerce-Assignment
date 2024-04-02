import "./productStyle.css";
import categoryObj from "../../app/categoryData.js";

function ProductList() {
    console.log("xv..",typeof categoryObj);
    return (
        <>
        <div className="main-list">
            <div className="list-section">
                <div className="left-section">
                {
                    categoryObj.map((item)=>{
                        <input type="checkbox">{item.name}</input>
                    })
                }
                </div>
                <div className="right-section">
                    Product List
                </div>
            </div>
        </div>
        </>
    );
}

export default ProductList;