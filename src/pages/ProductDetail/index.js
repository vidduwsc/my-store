import { useLayoutEffect, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { faMinus, faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { convertImage } from "../../actions/ConvertImage";
import { getProductById } from "../../redux/productSlice";
import { getCart, addToCart, updateCart } from "../../redux/cartSlice";
import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";

const cx = classNames.bind(styles);

function ProductDetail() {
  const { productId } = useParams();

  const { isLoading, product } = useSelector((state) => state.product);
  const { addSuccess, productsInCart } = useSelector((state) => state.cart);

  const [productData, setProductData] = useState({
    price: 0,
    imageUrl: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch, addSuccess]);

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (product.price) {
      setProductData({
        price: product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
        imageUrl: convertImage(product.image),
      });
    }
  }, [product]);

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
      let newProduct = {};

      for (let productInCart of productsInCart) {
        if (productInCart.product._id === product._id) {
          newProduct = {
            isInCart: true,
            id: productInCart._id,
            quantity: productInCart.quantity + quantity,
          };
          break;
        } else {
          newProduct = {
            isInCart: false,
            quantity,
          };
        }
      }

      if (newProduct.isInCart) {
        dispatch(
          updateCart({
            id: newProduct.id,
            product: productId,
            quantity: newProduct.quantity,
          })
        );
      } else {
        dispatch(
          addToCart({
            product: productId,
            quantity,
          })
        );
      }
    } else {
      dispatch(
        addToCart({
          product: productId,
          quantity,
        })
      );
    }
  };

  return (
    <div className={cx("wapper")}>
      {isLoading ? (
        <div className={cx("product-loading")}>
          <div className={cx("product-loading-image")}>
            <div className={cx("product-loading-image-item")}>
              <FontAwesomeIcon
                icon={faSpinner}
                className={cx("product-loading-icon")}
              />
            </div>
          </div>
          <div className={cx("product-loading-info")}>
            <p className={cx("product-loading-name")}></p>
            <p className={cx("product-loading-price")}></p>
            <p className={cx("product-loading-quantity")}></p>
            <button className={cx("product-loading-add-btn")}></button>
          </div>
        </div>
      ) : (
        <div className={cx("product")}>
          <div className={cx("product-image")}>
            <img src={productData.imageUrl} alt={product.name} />
          </div>
          <div className={cx("product-info")}>
            <h3 className={cx("product-name")}>{product.name}</h3>
            <p className={cx("product-price")}>
              <span>Giá: </span> {productData.price} đ
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
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      )}
      {addSuccess && (
        <div className={cx("add-product-toast")}> Thêm sản phẩm thành công</div>
      )}
    </div>
  );
}

export default ProductDetail;
