import React from "react";
import "./UserCardBlock.css";

function UserCardBlock(props) {
  const renderCartImage = (images) => {
    if (images.length > 0) {
      let image = images[0];
      return `http://localhost:5000/${image}`;
    }
  };

  const renderItems = () =>
    props.products &&
    props.products.map((product) => (
      <div key={product._id} className="renderItem_wrap">
        <div className="renderImage">
          <img alt="product" src={renderCartImage(product.images)} />
        </div>
        <div className="renderInfo">
          <div className="title"> {product.title}</div>
          <div className="price"> $ {product.price}</div>
          <div className="quantity">
            <button
              onClick={() => {
                let quantity = product.quantity;
                if (quantity > 1) {
                  quantity--;
                  props.editItem(product._id, quantity);
                }
              }}
            >
              -
            </button>
            {product.quantity}
            <button
              onClick={() => {
                let quantity = product.quantity;
                quantity++;
                props.editItem(product._id, quantity);
              }}
            >
              +
            </button>
          </div>
          <div className="remove">
            <button
              onClick={() => {
                if (window.confirm("선택하신 상품을 삭제하시겠습니까?")) {
                  props.removeItem(product._id);
                }
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <div>
      <div>{renderItems()}</div>
    </div>
  );
}

export default UserCardBlock;
