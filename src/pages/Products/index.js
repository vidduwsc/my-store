import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import Slider from "../../components/Slider";
import ProductItem from "../../components/ProductItem";
import { getProducts } from "../../redux/productsSlice";
import classNames from "classnames/bind";
import styles from "./Products.module.scss";

const cx = classNames.bind(styles);

function Products({ type }) {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({ type }));
  }, [dispatch, type]);

  return (
    <div className={cx("products")}>
      <Slider />
      <div className={cx("content")}>
        <div className={cx("product-list")}>
          {products.map((product) => {
            return <ProductItem key={product._id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
