import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import "../LandingPage.css";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function RenderBest(props) {
  const [Bestseller, setBestseller] = useState([]);

  useEffect(() => {
    setBestseller(props.product);
    console.log("renderBest실행됨");
  }, [props.product]);

  const bestview = () => {
    const compare = (a, b) => a.sold - b.sold;
    const sortedList = Bestseller.sort(compare);
    return sortedList;
  };

  return (
    <div className="Render">
      {bestview()
        .map((product, index) => (
          <Slider {...settings}>
            <div key={index} className="Render_wrap">
              <div className="img">
                <a href={`/product/${product._id}`}>
                  <img
                    // style={{ Width: "200px", maxHeight: "200px" }}
                    src={`http://localhost:5000/${product.images[0]}`}
                  />
                </a>
              </div>
              <div className="title"> {product.title}</div>
              <div className="price">{`$${product.price}`}</div>
            </div>
          </Slider>
        ))
        .slice(0, 3)}
    </div>
  );
}

export default RenderBest;
