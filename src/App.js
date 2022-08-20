import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./actions/ScrollToTop";
import Header from "./components/Header";
import Home from "../src/pages/Home";
import Products from "../src/pages/Products";
import ProductDetail from "../src/pages/ProductDetail";
import Search from "../src/pages/Search";
import Cart from "../src/pages/Cart";
import Footer from "./components/Footer";
import { productRoutes } from "./router";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA1x8VVJtAYyw8msKsjviuYQfJ8R2SZFjg",
  authDomain: "my-store-1807vd.firebaseapp.com",
  projectId: "my-store-1807vd",
  storageBucket: "my-store-1807vd.appspot.com",
  messagingSenderId: "503923798502",
  appId: "1:503923798502:web:e1e558bb955ef05b77e627",
  measurementId: "G-5313D58NNK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        {productRoutes.map((productRoute) => {
          return (
            <Route
              key={productRoute.type}
              path={productRoute.path}
              element={<Products type={productRoute.type} />}
            />
          );
        })}
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
