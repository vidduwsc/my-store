import Slider from "../../components/Slider";
import ProductItem from "../../components/ProductItem";
import classNames from "classnames/bind";
import styles from "./Products.module.scss";

const cx = classNames.bind(styles);

function Products({ products, type }) {
  const productsAfterFilter = products.filter((product) => {
    return product.type === type;
  });

  return (
    <div className={cx("products")}>
      <Slider />
      <div className={cx("content")}>
        <div className={cx("product-list")}>
          {productsAfterFilter.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
