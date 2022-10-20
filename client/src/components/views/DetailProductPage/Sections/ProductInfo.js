import React from "react";
import { Button, Descriptions } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../_actions/user_actions";

function ProductInfo(props) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    //필요한 정보를 Cart 필드에다가 넣어 준다.
    alert(`장바구니에 ${props.detail}를 담았습니다.`);
    dispatch(addToCart(props.detail._id));

    // User관련한 정보는 Redux를 이용했기 때문에
  };

  return (
    <div>
      <Descriptions title="Product Info">
        <Descriptions.Item label="Price">
          {props.detail.price}
        </Descriptions.Item>
        <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
        <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {props.detail.description}
        </Descriptions.Item>
      </Descriptions>

      <br />
      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #f74c25",
            color: "#f74c25",
          }}
          size="large"
          shape="round"
          type="danger"
          onClick={clickHandler}
        >
          장바구니
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
