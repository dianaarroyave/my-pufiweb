import React from "react";
import "./ProductImg.scss";

const ProductImg = (props) => {
  const { image } = props;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div className="hovereffect"> 
         <img
          className="img-responsive"
          src= {image}
          alt=""
          width="400px"
          height="300px"
        />
        <div className="overlay"> 
          <a className="info" href="#">
            Shop
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductImg;
