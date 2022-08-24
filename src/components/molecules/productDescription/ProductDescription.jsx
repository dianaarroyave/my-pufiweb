import React from "react";
import "./ProductDescription.scss"

const ProductDescription = ({icon, title, text, textLink}) => {
    return(
        <div className="productDescriptionContainer">
            <img src={icon} alt="Product Image" width = "80px"/>
            <h1 className="productTitle">{title}</h1>
            <hr/>
            <p className="textDescription"> {text}</p>
            <a className="textDescription" href = "/">{textLink}</a>
        </div>
    )
}

export default ProductDescription