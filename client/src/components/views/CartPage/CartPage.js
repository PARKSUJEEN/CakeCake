import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCartItems,
  removeCartItem,
  editToCart,
  onSuccessBuy,
} from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";
import "./CartPage.css";
import Paypal from "../../utils/Paypal";

function CartPage(props) {
  const dispatch = useDispatch();

  const [Total, setTotal] = useState(0);
  const [ShowTotal, setShowTotal] = useState(false);
  const [ShowSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let cartItems = [];

    //리덕스 User state안에 cart 안에 상품 들어있는지 확인
    if (props.user.userData && props.user.userData.cart) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });

        //원래는 axios를 이용했지만 지금은 redux이용중으로 dispatch

        dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
          (response) => {
            calculateTotal(response.payload);
          }
        );
      }
    }
  }, [props.user.userData]);

  let calculateTotal = (cartDetail) => {
    let total = 0;
    cartDetail.map(
      (item) => (total += parseInt(item.price, 10) * item.quantity)
    );

    setTotal(total);
    setShowTotal(true);
  };

  let removeFromCart = (productId) => {
    dispatch(removeCartItem(productId)).then((response) => {
      if (response.payload.productInfo.length <= 0) {
        setShowTotal(false);
      }
    });
  };

  let editFromCart = useCallback((productId, quantity) => {
    dispatch(editToCart(productId, quantity)).then((response) => {});
  });

  const transactionSuccess = (data) => {
    dispatch(
      onSuccessBuy({
        paymentData: data,
        cartDetail: props.user.cartDetail,
      })
    ).then((response) => {
      if (response.payload.success) {
        setShowTotal(false);
        setShowSuccess(true);
      }
    });
  };

  return (
    <div className="CartPage">
      <div className="CartPage_wrap">
        <h1>Shopping Cart</h1>

        <div style={{ transform: "none !important" }}>
          <UserCardBlock
            products={props.user.cartDetail}
            removeItem={removeFromCart}
            editItem={editFromCart}
          />
        </div>

        {ShowTotal ? (
          <>
            <div className="totalAmount">
              <div className="totalAmount_wrap">
                <div>
                  Total Amount
                  <br />$ {Total}
                </div>
                <br />
                <div className="paypal">
                  <Paypal total={Total} onSuccess={transactionSuccess} />
                </div>
              </div>
            </div>
          </>
        ) : ShowSuccess ? (
          <div className="done">
            Thank you! :) 고객님의 주문이 완료 되었습니다. 주문내역 및 배송에
            관한 안내는 주문조회를 통하여 확인 가능합니다.
          </div>
        ) : (
          <div className="done">Your cart is empty. Go Shopping</div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
