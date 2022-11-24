import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../LandingPage.css";

const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    // 반응형 웹 구현 옵션
    {
      breakpoint: 960, //화면 사이즈 960px
      settings: {
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768, //화면 사이즈 768px
      settings: {
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow: 1,
      },
    },
  ],
};

function RenderBest(props) {
  const [Bestseller, setBestseller] = useState([]);

  useEffect(() => {
    setBestseller(props.product);
  }, [props.product]);

  const bestview = () => {
    const compare = (a, b) => b.sold - a.sold;
    const sortedList = Bestseller.sort(compare);
    return sortedList;
  };

  return (
    <div className="Render">
      <Slider {...settings}>
        {bestview().map((product, index) => (
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
        ))}
      </Slider>
    </div>
  );
}

export default RenderBest;
