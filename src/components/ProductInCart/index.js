import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { convertImage } from "../../actions/ConvertImage";
import classNames from "classnames/bind";
import styles from "./ProductInCart.module.scss";

const cx = classNames.bind(styles);

function ProductInCart({ handleDelete, product, quantity }) {
  let price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  let totalPayment = (product.price * quantity)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const imageUrl = convertImage(product.image);

  return (
    <div className={cx("product")}>
      <img src={imageUrl} alt={product.name} className={cx("product-image")} />
      <div className={cx("product-info")}>
        <p className={cx("product-name")}>{product.name}</p>
      </div>
      <p className={cx("product-price")}>{price} đ</p>
      <p className={cx("product-quantity")}>{quantity}</p>
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
