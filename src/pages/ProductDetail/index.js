import { useLayoutEffect, useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ProductDetail({ product, productsInCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    let value = Number(e.target.value);
    if (typeof value === "number" && !Number.isNaN(value)) {
      setQuantity(value);
    }
  };

  const handleReduce = () => {
    setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  useLayoutEffect(() => {
    if (quantity < 1) {
      setQuantity(1);
    }
  }, [quantity]);

  let productsInCartLength = productsInCart.length;

  const handleAddProduct = () => {
    if (productsInCartLength > 0) {
      let newProduct = {
        isInCart: false,
        info: {},
      };

      for (let productInCart of productsInCart) {
        if (productInCart.id === product.id) {
          newProduct = {
            isInCart: true,
            info: productInCart,
          };
          break;
        } else {
          newProduct = {
            isInCart: false,
            info: product,
          };
        }
      }

      if (newProduct.isInCart) {
        newProduct.info.quantity += quantity;
      } else {
        productsInCart.push({
          ...newProduct.info,
          quantity,
        });
      }
    } else {
      productsInCart.push({
        ...product,
        quantity,
      });
    }
  };

  let price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div className={cx("product")}>
      <div className={cx("product-image")}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={cx("product-info")}>
        <h3 className={cx("product-name")}>{product.name}</h3>
        <p className={cx("product-price")}>
          <span>Giá: </span> {price} đ
        </p>
        <div className={cx("product-quantity")}>
          <p className={cx("quantity-title")}>Số lượng:</p>
          <div className={cx("quantity-form")}>
            <FontAwesomeIcon
              icon={faMinus}
              className={cx("reduce-btn")}
              onClick={handleReduce}
            />
            <input
              className={cx("quantity-input")}
              value={quantity}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={faPlus}
              className={cx("increase-btn")}
              onClick={handleIncrease}
            />
          </div>
        </div>
        <button className={cx("add-btn")} onClick={handleAddProduct}>
          <Link to="/cart">Thêm vào giỏ hàng</Link>
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
