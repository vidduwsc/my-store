import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ProductItem from "../ProductItem";
import classNames from "classnames/bind";
import styles from "./SomeProducts.module.scss";

const cx = classNames.bind(styles);

function SomeProducts({ data }) {
  const { heading, path, products } = data;
  return (
    <div className={cx("wapper")}>
      <h2 className={cx("heading")}>{heading}</h2>
      <div className={cx("product-list")}>
        {products.map((product) => {
          return <ProductItem key={product._id} product={product} />;
        })}
      </div>
      <Link to={path} className={cx("button")}>
        Xem tất cả {heading}
        <FontAwesomeIcon icon={faAngleRight} className={cx("button-icon")} />
      </Link>
    </div>
  );
}

export default SomeProducts;
