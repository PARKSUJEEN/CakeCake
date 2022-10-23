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
function RenderNew(props) {
  const [New, setNew] = useState([]);

  useEffect(() => {
    setNew(props.product);
    console.log("renderNew실행됨");
  }, [props.product]);

  const newview = () => {
    const compare = (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt);
    const sortedList = New.sort(compare);
    return sortedList;
  };

  return (
    <div className="Render">
      {newview()
        .map((product, index) => (
          <Slider {...settings}>
            <div key={index} className="Render_wrap">
              <div>
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
        .slice(0, 4)}
    </div>
  );
}

export default RenderNew;
