import Slider from "../../components/Slider";
import SomeProducts from "../../components/SomeProducts";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home({ products }) {
  const productsFilter = (type) => {
    return products
      .filter((product) => {
        return product.type === type;
      })
      .slice(0, 4);
  };

  const contentList = [
    {
      id: 1,
      heading: "iPhone",
      path: "/iphone",
      products: productsFilter("iphone"),
    },
    {
      id: 2,
      heading: "iPad",
      path: "/ipad",
      products: productsFilter("ipad"),
    },
    {
      id: 3,
      heading: "Mac",
      path: "/mac",
      products: productsFilter("mac"),
    },
    {
      id: 4,
      heading: "Âm thanh",
      path: "/am-thanh",
      products: productsFilter("am-thanh"),
    },
    {
      id: 5,
      heading: "Phụ kiện",
      path: "/phu-kien",
      products: productsFilter("phu-kien"),
    },
  ];

  return (
    <div className={cx("Home")}>
      <Slider />
      <div className={cx("content")}>
        {contentList.map((content) => {
          return <SomeProducts key={content.id} data={content} />;
        })}
      </div>
    </div>
  );
}

export default Home;
