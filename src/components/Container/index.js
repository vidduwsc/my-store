// // import { useEffect, useLayoutEffect, useState } from "react";
// // import { Routes, Route } from "react-router-dom";
// // import productApi from "../../api/productApi";
// // import { routes } from "../../router";
// // import Home from "../../pages/Home";
// // import Products from "../../pages/Products";
// // import ProductDetail from "../../pages/ProductDetail";
// // import Search from "../../pages/Search";
// // import Cart from "../../pages/Cart";
// // import classNames from "classnames/bind";
// // import styles from "./Container.module.scss";

// const cx = classNames.bind(styles);

// function Container() {
//   // const getProduct = async () => {
//   //   try {
//   //     const response = await productApi.getAll();
//   //     return response;
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // const productsInCart = [];

//   // const [data, setData] = useState({});
//   // const [products, setProducts] = useState([]);

//   // useEffect(() => {
//   //   getProduct().then((data) => {
//   //     setData(data);
//   //   });
//   // }, []);

//   // useLayoutEffect(() => {
//   //   if (data.products) {
//   //     setProducts(data.products);
//   //   }
//   // }, [data]);

//   return (
//     <div className={cx("container")}>
//       <Routes>
//         {routes.map((route, index) => {
//           let Page = Products;
//           if (route.path === "/") {
//             Page = Home;
//           } else if (route.path === "/search") {
//             Page = Search;
//           } else if (route.path === "/cart") {
//             Page = Cart;
//           }
//           return (
//             <Route
//               key={index}
//               path={route.path}
//               element={
//                 <Page type={route.type} productsInCart={productsInCart} />
//               }
//             />
//           );
//         })}

//         {/* {products.map((product, index) => {
//           let path = `/${product.name.toLowerCase().replace(/ /g, "-")}`;
//           return (
//             <Route
//               key={index}
//               path={encodeURI(path)}
//               element={
//                 <ProductDetail
//                   product={product}
//                   productsInCart={productsInCart}
//                 />
//               }
//             />
//           );
//         })} */}
//       </Routes>
//     </div>
//   );
// }

// export default Container;
