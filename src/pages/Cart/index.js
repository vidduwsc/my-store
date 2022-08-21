import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ProductInCart from "../../components/ProductInCart";
import { getCart, deleteProductInCart } from "../../redux/cartSlice";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Cart() {
  const { isLoading, productsInCart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const [reLoad, setReLoad] = useState(false);

  useEffect(() => {
    dispatch(getCart());
    setReLoad(false);
  }, [dispatch, reLoad]);

  const handleDelete = (id) => {
    dispatch(deleteProductInCart(id));
    setReLoad(true);
  };

  let totalPayment = productsInCart
    .reduce((total, product) => {
      return (total += product.product.price * product.quantity);
    }, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div className={cx("wapper")}>
      <div className={cx("cart")}>
        {isLoading && (
          <div className={cx("cart-loading")}>
            <FontAwesomeIcon
              icon={faSpinner}
              className={cx("cart-loading-icon")}
            />
          </div>
        )}
        <h2 className={cx("heading")}>Giỏ hàng</h2>
        <div className={cx("content")}>
          {productsInCart.length === 0 ? (
            <h2>Chưa có sản phẩm nào trong giỏ hàng</h2>
          ) : (
            <>
              <div className={cx("section-left")}>
                <div className={cx("product-title")}>
                  <p>Sản phẩm</p>
                  <p>Giá</p>
                  <p>Số lượng</p>
                  <p>Tạm tính</p>
                </div>
                <div className={cx("product-list")}>
                  {productsInCart.map((product) => {
                    return (
                      <ProductInCart
                        key={product._id}
                        product={product.product}
                        quantity={product.quantity}
                        handleDelete={() => handleDelete(product._id)}
                      />
                    );
                  })}
                </div>
              </div>
              <div className={cx("section-right")}>
                <h2 className={cx("pay-heading")}>Tổng giỏ hàng</h2>
                <p className={cx("pay-title")}>
                  Số tiền phải thanh toán là: <span>{totalPayment} đ</span>
                </p>
                <button className={cx("pay-btn")}>
                  <Link to="/cart">Tiến hành thanh toán</Link>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
