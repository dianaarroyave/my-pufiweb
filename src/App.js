import './App.scss';
import Header from "./components/organisms/header/Header";
import Carousel from "./components/organisms/carousel/Carousel";
import Products from "./components/organisms/products/Products";
import Instagram from "./components/organisms/instagram/Instagram";
import Newsletter from "./components/organisms/newsletter/Newsletter";
import Footer from "./components/organisms/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Products/>
      <Instagram/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
