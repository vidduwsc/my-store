import ProductInCart from "../../components/ProductInCart";
import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";

const cx = classNames.bind(styles);

function Cart({ productsInCart }) {
  const [productList, setProductList] = useState(productsInCart);

  const handleDelete = (index) => {
    productsInCart.splice(index, 1);

    let newProductList = [...productsInCart];
    setProductList(newProductList);
  };

  let totalPayment = productList
    .reduce((total, product) => {
      return (total += product.price * product.quantity);
    }, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div className={cx("cart")}>
      <h2 className={cx("heading")}>Giỏ hàng</h2>
      <div className={cx("content")}>
        {productList.length === 0 ? (
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
                {productList.map((product, index) => {
                  return (
                    <ProductInCart
                      key={product.id}
                      product={product}
                      handleDelete={() => handleDelete(index)}
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
  );
}

export default Cart;
