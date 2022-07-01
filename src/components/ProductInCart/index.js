import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./ProductInCart.module.scss";

const cx = classNames.bind(styles);

function ProductInCart({ handleDelete, product }) {
  let price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  let totalPayment = (product.price * product.quantity)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div className={cx("product")}>
      <img
        src={product.image}
        alt={product.name}
        className={cx("product-image")}
      />
      <div className={cx("product-info")}>
        <p className={cx("product-name")}>{product.name}</p>
      </div>
      <p className={cx("product-price")}>{price} đ</p>
      <p className={cx("product-quantity")}>{product.quantity}</p>
      <p className={cx("total-payment")}>{totalPayment}</p>
      <FontAwesomeIcon
        icon={faTrashCan}
        onClick={handleDelete}
        className={cx("delete-btn")}
      />
    </div>
  );
}

export default ProductInCart;
