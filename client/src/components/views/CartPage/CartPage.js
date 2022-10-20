import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCartItems} from '../../../_actions/user_actions';
import UserCardBlock from './Sections/UserCardBlock';

function CartPage(props) {

  const dispatch = useDispatch();

  useEffect(() => {

    let cartItems = []

    //리덕스 User state안에 cart 안에 상품 들어있는지 확인
    if(props.user.userData && props.user.userData.cart){
      if(props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach( item => {
          cartItems.push(item.id)
        })

        //원래는 axios를 이용했지만 지금은 redux이용중으로 dispatch

        dispatch(getCartItems(cartItems, props.user.userData.cart))

      }
    }

  },[props.user.userData])



  return (
    <div style={{ width: '85%', margin: '3rem auto'}}>
      <h1> My Cart</h1>
      < div>     
         <UserCardBlock products={props.user.cartDetail}/>
      </div>


    </div>
  )
}

export default CartPage