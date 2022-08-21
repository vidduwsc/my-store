import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ProductItem from "../ProductItem";
import ProductItemLoading from "../ProductItem/ProductItemLoading";
import classNames from "classnames/bind";
import styles from "./SomeProducts.module.scss";

const cx = classNames.bind(styles);

function SomeProducts({ data, isLoading }) {
  const { heading, path, products } = data;

  const loadingProducts = [1, 2, 3, 4];

  return (
    <div className={cx("wapper")}>
      <h2 className={cx("heading")}>{heading}</h2>
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
      <Link to={path} className={cx("button")}>
        Xem tất cả {heading}
        <FontAwesomeIcon icon={faAngleRight} className={cx("button-icon")} />
      </Link>
    </div>
  );
}

export default SomeProducts;
