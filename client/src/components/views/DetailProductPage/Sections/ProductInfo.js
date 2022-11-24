import React from "react";
import { Button, Descriptions } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../_actions/user_actions";
import styled from "styled-components";

function ProductInfo(props) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    //필요한 정보를 Cart 필드에다가 넣어 준다.
    alert(`장바구니에 ${props.detail.title}를 담았습니다.`);
    dispatch(addToCart(props.detail._id));

    // User관련한 정보는 Redux를 이용했기 때문에
  };

  return (
    <div>
      <Title>{props.detail.title}</Title>
      <Price>${props.detail.price}</Price>
      <Description> {props.detail.description}</Description>

      <br />
      <br />
      <br />
      <br />
      <div>
        <Button
          style={{
            width: "300px",
            backgroundColor: "#ffffff",
            border: "1px solid #000000",
            color: "#000000",
          }}
          size="large"
          shape="round"
          type="danger"
          onClick={clickHandler}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

const Title = styled.p`
  color: #000000;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: 30px;
  text-decoration: underline;
`;
const Price = styled.p`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  color: #000000;
  font-size: 25px;
  margin-top: -30px;
`;

const Description = styled.p`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  color: #000000;
  font-size: 20px;
  white-space: pre;
`;

export default ProductInfo;
