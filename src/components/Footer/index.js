import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <footer className={cx("footer")}>
        <div className={cx("about")}>
          <div className={cx("about-content")}>
            <h3 className={cx("heading")}>Sản phẩm</h3>
            <ul className={cx("option-list")}>
              <li className={cx("option-item")}>
                <Link to="/iphone">iPhone</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/ipad">iPad</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/mac">Mac</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/apple-watch">Apple Watch</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/am-thanh">Âm thanh</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/phu-kien">Phụ kiện</Link>
              </li>
            </ul>
          </div>
          <div className={cx("about-content")}>
            <h3 className={cx("heading")}>Thông tin</h3>
            <ul className={cx("option-list")}>
              <li className={cx("option-item")}>
                <Link to="/">Giới thiệu</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/">Khuyến mại</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/">Bảo hành và sửa chữa</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/">Tuyển dụng</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/">Tin tức</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/">Phương thức thanh toán</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/">Gửi góp ý, khiếu lại</Link>
              </li>
            </ul>
          </div>
          <div className={cx("about-content")}>
            <h3 className={cx("heading")}>Chính sách</h3>
            <ul className={cx("option-list")}>
              <li className={cx("option-item")}>
                <Link to="/">Trả góp</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/">Giao hàng</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/">Hủy giao dịch</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/">Đổi trả</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/">Bảo hành</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/">Giải quyết khiếu lại</Link>
              </li>
              <li className={cx("option-item")}>
                <Link to="/">Bảo mật thông tin</Link>
              </li>
            </ul>
          </div>
          <div className={cx("about-content")}>
            <h3 className={cx("heading")}>Địa chỉ</h3>
            <ul className={cx("option-list")}>
              <li className={cx("option-item")}>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tìm Store trên Google Map
                </a>
              </li>
              <li className={cx("option-item")}>
                <Link to="/">Hệ thống cửa hàng</Link>
              </li>
            </ul>
          </div>
          <div className={cx("about-content")}>
            <h3 className={cx("heading")}>Liên hệ</h3>
            <ul className={cx("option-list")}>
              <li className={cx("option-item")}>
                Mua hàng :{" "}
                <a href="tel: 0123456789" className={cx("phone-number")}>
                  012.3456789
                </a>
              </li>
              <li className={cx("option-item")}>
                Khiếu lại :{" "}
                <a href="tel: 0123456789" className={cx("phone-number")}>
                  012.3456789
                </a>
              </li>
              <li className={cx("option-item")}>
                Doanh nghiệp và đối tác :{" "}
                <a href="tel: 0123456789" className={cx("phone-number")}>
                  012.3456789
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
