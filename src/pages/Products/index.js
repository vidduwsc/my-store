import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import Slider from "../../components/Slider";
import ProductItem from "../../components/ProductItem";
import { getProducts } from "../../redux/productsSlice";
import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import ProductItemLoading from "../../components/ProductItem/ProductItemLoading";

const cx = classNames.bind(styles);

function Products({ type }) {
  const { isLoading, products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({ type }));
  }, [dispatch, type]);

  const loadingProducts = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={cx("products")}>
      <Slider />
      <div className={cx("content")}>
        {isLoading ? (
          <div className={cx("product-list")}>
            {loadingProducts.map((item, index) => {
              return <ProductItemLoading key={index} />;
            })}
          </div>
        ) : (
          <div className={cx("product-list")}>
            {products.map((product) => {
              return <ProductItem key={product._id} product={product} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
