import { FAKE_PRODUCT_LIST } from "./fakeData";

const getAll = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FAKE_PRODUCT_LIST);
    }, 1000);
  });
};

export default { getAll };
