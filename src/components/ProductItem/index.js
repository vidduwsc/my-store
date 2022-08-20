import { Link } from "react-router-dom";
import { convertImage } from "../../actions/ConvertImage";
import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";

const cx = classNames.bind(styles);

function ProductItem({ product }) {
  let price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  let path = `/product/${product._id}`;
  const imageUrl = convertImage(product.image);
  return (
    <Link to={encodeURI(path)} className={cx("product-link")}>
      <div className={cx("product-item")}>
        <img
          src={imageUrl}
          alt={product.name}
          className={cx("product-image")}
        />
        <h3 className={cx("product-name")}>{product.name}</h3>
        <p className={cx("product-price")}>Giá từ {price} đ</p>
      </div>
    </Link>
  );
}

export default ProductItem;
