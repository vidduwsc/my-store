import { Buffer } from "buffer";

const convertImage = (bufferObject) => {
  const imageUrl =
    "data:image/png;base64," + new Buffer.from(bufferObject).toString("base64");
  return imageUrl;
};

export { convertImage };
