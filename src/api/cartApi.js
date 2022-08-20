import axiosClient from "./axiosClients";

const cartApi = {
  getAll: (params) => {
    const url = "/cart";
    return axiosClient.get(url, { params });
  },

  getById: (id) => {
    const url = `cart/${id}`;
    return axiosClient.get(url);
  },

  post: (data) => {
    const url = "/cart";
    return axiosClient.post(url, data);
  },

  put: (data) => {
    const url = `cart/${data.id}`;
    return axiosClient.put(url, data);
  },

  delete: (id) => {
    const url = `cart/${id}`;
    return axiosClient.delete(url);
  },
};

export default cartApi;
