import React from "react";
import "./ProductDescription.scss"

const ProductDescription = ({icon, title, text, textLink}) => {
    return(
        <div className="productDescriptionContainer">
            <img src={icon} alt="Product Image" width = "80px"/>
            <h1 className="productTitle">{title}</h1>
            <hr/>
            <p>{text}</p>
            <a href = "/">{textLink}</a>
        </div>
    )
}

export default ProductDescription