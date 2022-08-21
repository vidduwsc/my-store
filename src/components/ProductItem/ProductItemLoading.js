import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";

const cx = classNames.bind(styles);

function ProductItemLoading() {
  return (
    <div className={cx("product-loading-wrap")}>
      <div className={cx("product-loading-item")}>
        <div className={cx("product-loading-image")}>
          <FontAwesomeIcon
            icon={faSpinner}
            className={cx("product-loading-icon")}
          />
        </div>
        <p className={cx("product-loading-name")}></p>
        <p className={cx("product-loading-price")}></p>
      </div>
    </div>
  );
}

export default ProductItemLoading;
