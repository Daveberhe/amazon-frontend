import "./App.css";
import Header from "./component/Header/Header.jsx";
import Carousel from "./component/Carousel/Carousel.jsx";
import Category from "./component/Category/Category.jsx";
import Product from "./component/Product/Product.jsx";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Category />
      <Product />
    </div>
  );
}

export default App;
