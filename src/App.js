import './App.scss';
import Header from "./components/organisms/header/Header";
import Carousel from "./components/organisms/carousel/Carousel";
import Products from "./components/organisms/products/Products";
import Instagram from "./components/organisms/instagram/Instagram";
import Newsletter from "./components/organisms/newsletter/Newsletter";
import Footer from "./components/organisms/footer/Footer";
import umbrelaProduct from "../src/img/umbrellaProduct.jpg"
import umbrelaIcon from "../src/img/umbrellaIcon.jpg"
import puffProducto from "../src/img/puffProducto.jpeg"
import puffIcon from "../src/img/puffIcon.jpeg"
import carProduct from "../src/img/carProduct.jpeg"
import carIcon from "../src/img/carIcon.jpeg"
import pufiNap from "../src/img/pufiNap.jpeg"
import pufiNapIcon from "../src/img/pufiNapIcon.jpg"



function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <div className="productContainer">
        <Products 
          image={umbrelaProduct} 
          icon = {umbrelaIcon} 
          title = {"Pufi RAIN"} 
          text = {"Descripción del producto.  Este es un texto simulado"} 
          textLink = {"> VER MÁS"}
          classNameImg = {"positionTwo"}
          classNameDsp = {"positionOne"}/>
        <Products 
          image={puffProducto} 
          icon = {puffIcon} 
          title = {"Pufi PUFF"} 
          text = {"Descripción del producto.  Este es un texto simulado"} 
          textLink = {"> VER MÁS"}
          classNameImg = {"positionOne"}
          classNameDsp = {"positionTwo"}/>
        <Products 
          image={carProduct} 
          icon = {carIcon} 
          title = {"Pufi CART"} 
          text = {"Descripción del producto.  Este es un texto simulado"} 
          textLink = {"> VER MÁS"}
          classNameImg = {"positionTwo"}
          classNameDsp = {"positionOne"}/>
        <Products 
          image={pufiNap} 
          icon = {pufiNapIcon} 
          title = {"Pufi NAP"} 
          text = {"Descripción del producto.  Este es un texto simulado"} 
          textLink = {"> VER MÁS"}
          classNameImg = {"positionOne"}
          classNameDsp = {"positionTwo"}/>
      </div>
      <Instagram/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
