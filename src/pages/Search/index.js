import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import ProductItem from "../../components/ProductItem";
import { getProducts } from "../../redux/productsSlice";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search() {
  const { isLoading, products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  // console.log(products);

  useEffect(() => {
    dispatch(getProducts({ type: "cart" }));
    return () => {};
  }, [dispatch]);

  const [inputValue, setInputValue] = useState("");
  const typingTimeoutRef = useRef(null);

  const handleChange = (e) => {
    let value = e.target.value;
    setInputValue(value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      if (value.trim()) {
        dispatch(getProducts({ searchValue: value }));
      } else {
        dispatch(getProducts({ type: "cart" }));
      }
    }, 500);
  };
  // Chuyển tên sản phẩm và giá trị input thành chữ thường và bỏ dấu
  // let productName = product.name
  //   .toLowerCase()
  //   .normalize("NFD")
  //   .replace(/[\u0300-\u036f]/g, "")
  //   .replace(/đ/g, "d")
  //   .replace(/Đ/g, "D");

  return (
    <div className={cx("search")}>
      <div className={cx("search-bar")}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={cx("search-icon")}
        />
        <input
          className={cx("search-input")}
          placeholder="Tìm kiếm sản phẩm"
          value={inputValue}
          onChange={handleChange}
          spellCheck="false"
        />
        {isLoading && (
          <FontAwesomeIcon icon={faSpinner} className={cx("loading-icon")} />
        )}
      </div>

      <div className={cx("search-result")}>
        {products.map((product) => {
          return <ProductItem key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Search;
