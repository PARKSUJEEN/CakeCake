import React, { Fragment, useEffect, useState } from "react";

import axios from "axios";
import { Icon, Col, Card, Row, Carousel } from "antd";
import Meta from "antd/lib/card/Meta";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Sections/CheckBox";
import { cakes, price } from "./Sections/Datas";
import RadioBox from "./Sections/RadioBox";
import SearchFeature from "./Sections/SearchFeature";
import styled from "styled-components";

import "./LandingPage.css";
import RenderBest from "./Sections/RenderBest";
import RenderNew from "./Sections/RenderNew";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [AllProducts, setAllProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8); // 페이지에 보이는 상품 수
  const [PostSize, setPostSize] = useState(0); // 더보기 버튼 8개 이상일때만 보이기!
  const [Filters, setFilters] = useState({
    cakes: [],
    price: [],
  });

  const [SearchTerm, setSearchTerm] = useState("");
  const [Toggle, setToggle] = useState(false);

  useEffect(() => {
    let body = {
      skip: Skip,
      limit: Limit,
    };

    getProducts(body);
    getAllproducts();
  }, []);

  const getProducts = (body) => {
    axios.post("/api/product/products", body).then((response) => {
      console.log(response.data);

      if (response.data.success) {
        if (body.loadMore) {
          setProducts([...Products, ...response.data.productInfo]);
        } else {
          setProducts(response.data.productInfo);
        }

        setPostSize(response.data.postSize); //PostSize가 아닌 product.js에 정의한 postSize로
      } else {
        alert("상품을 가져오는데 실패 했습니다.");
      }
    });
  };

  const getAllproducts = () => {
    axios.post("/api/product/allproducts").then((response) => {
      console.log("getAllProducts", response.data);

      if (response.data.success) {
        setAllProducts(response.data.productInfo);
      } else {
        alert("전체상품을 가져오는데 실패 했습니다.");
      }
    });
  };

  const renderCards = Products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card
          cover={
            <a href={`/product/${product._id}`}>
              <ImageSlider images={product.images} />
            </a>
          }
          // cover={
          //   <img
          //     syle={{ width: "100%", maxHeight: "150px" }}
          //     src={`http://localhost:5000/${product.images[0]}`}
          //   />
          // }
        >
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  const loadMoreHandler = () => {
    let skip = Skip + Limit;

    let body = {
      skip: skip, // let skip후 이 skip의 값을 skip: Skip이 아닌 skip : skip ->
      limit: Limit,
      loadMore: true,
    };

    getProducts(body);
    setSkip(skip);
  };

  const showFilteredResults = (filters) => {
    let body = {
      skip: 0, // skip은 0 새로 누를때마다 처음부터 다시 시작이 돼야함.
      limit: Limit,
      filters: filters,
    };

    getProducts(body);
    setSkip(0);
  };

  // handleFilter의 Price
  const handlePrice = (value) => {
    const data = price;
    let array = [];

    for (let key in data) {
      // 아래의 id ===value-> 이 value는 filters값
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }

    return array;
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    console.log("filters : ", filters);

    if (category === "price") {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues; // priceValues = [0,1000] [1000,20000]
    }

    showFilteredResults(newFilters);
    //추가! (이러지 않으면 findArgs에 (당시)클릭한 해당 key값만 들어오게 됨)
    setFilters(newFilters);
  };

  const updateSearchTerm = (newSearchTerm) => {
    let body = {
      skip: 0,
      limit: Limit,
      filters: Filters, // 눌러져있는값까지 가지고온다.
      searchTerm: newSearchTerm,
    };

    setSkip(0);
    setSearchTerm(newSearchTerm);
    getProducts(body);
  };

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}></div>
      {/* 
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
            <img
              style={{ minWidth: "500px", width: "300px", height: "500px" }}
              src="img/1657868791094_cake4.jpg"
            />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div> */}
      {/* { Filter } */}
      <div className="itemSection">
        <div className="itemSection_wrap">
          <div>Staples</div>
          <div
            onClick={() => {
              setToggle(false);
              console.log("landingpage에서 newCakes클릭");
            }}
          >
            New Cakes
          </div>
          <div
            onClick={() => {
              setToggle(true);
            }}
          >
            Bestsellers
          </div>
        </div>
        <div className="LandingPage_render">
          {Toggle ? (
            <>
              <RenderBest product={AllProducts} />
            </>
          ) : (
            <>
              <RenderNew product={AllProducts} />
            </>
          )}
        </div>
      </div>
      <div className="flow-container">
        <div className="flow-text">
          {/* {cakes.map((it) => (
            <div className="flow-wrap">{it.name}</div>
          ))} */}
          <div className="flow-wrap">Sugar </div>
          <div className="flow-wrap">Chocolate</div>
          <div className="flow-wrap"> Butter</div>
          <div className="flow-wrap">Sugar Butter </div>
        </div>
      </div>
      <div class="animated-title">
        <div class="track">
          <div class="content">
            &nbsp;moho design template glad&nbsp;moho design template
            glad&nbsp;moho design template glad&nbsp;moho design template
            glad&nbsp;moho design template glad&nbsp;moho design template glad
          </div>
          <div class="content">Butter</div>
        </div>
      </div>
      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          {/* { CheckBox } */}
          <CheckBox
            list={cakes}
            handleFilters={(filters) => handleFilters(filters, "cakes")}
          />
        </Col>

        <Col lg={12} xs={24}>
          {/* { RadioBox } */}
          <RadioBox
            list={price}
            handleFilters={(filters) => handleFilters(filters, "price")}
          />
        </Col>

        {/* { Search } */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "9px",
            marginBottom: "5px",
            minWidth: "20px",
          }}
        >
          <SearchFeature refreshFunction={updateSearchTerm} />
        </div>

        {/* { Cards } */}
      </Row>
      <Row gutter={[16, 16]} justify="start" align="top">
        {renderCards}
      </Row>
      <br />
      {PostSize >= Limit && (
        <div
          className="LandingPage_morebtn"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button onClick={loadMoreHandler}>더보기</Button>
        </div>
      )}
    </div>
  );
}

const Button = styled.button`
  border: 2px solid #000000;
  border-radius: 2em;
  padding: 10px;
  background-color: #f7f6f2;
  color: #000000;
  width: 70px;
  cursor: pointer;
`;

export default LandingPage;
