import React from "react";
import "./Products.scss";
import ProductImg from "../../molecules/productImg/ProductImg";
import ProductDescription from "../../molecules/productDescription/ProductDescription";


const Products = ({icon, image, title, text, textLink, classNameImg, classNameDsp}) => {
    return(
        <div className="product">
            <div className={classNameImg}> 
                <ProductImg image = {image}/>
            </div>
            <div className={classNameDsp}>
                <ProductDescription icon = {icon} title = {title} text = {text} textLink = {textLink}/>
            </div>
            
        </div>
    )
}

export default Products