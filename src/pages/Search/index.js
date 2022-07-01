import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ProductItem from "../../components/ProductItem";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search({ products }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const searchResult = products.filter((product) => {
    // Chuyển tên sản phẩm và giá trị input thành chữ thường và bỏ dấu
    let productName = product.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");

    let newInputValue = inputValue
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .trim();

    return productName.includes(newInputValue);
  });

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
      </div>
      <div className={cx("search-result")}>
        {inputValue.trim() ? (
          searchResult.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Search;
