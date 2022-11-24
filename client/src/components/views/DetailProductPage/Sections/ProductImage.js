import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "../DetailProductPage.css";

function ProductImage(props) {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    if (props.detail.images && props.detail.images.length > 0) {
      let images = [];

      props.detail.images.map((item) =>
        images.push({
          original: `http://localhost:5000/${item}`, // 원래는 다이나믹하게 처리해주어야함.
          thumbnail: `http://localhost:5000/${item}`,
        })
      );

      setImages(images);
    }
  }, [props.detail]);

  return (
    <div className="ProductImage">
      <ImageGallery items={Images} />
    </div>
  );
}

export default ProductImage;
