import React, {useContext} from 'react'
import CartListContainer from '../components/CartListContainer'
import { cartContext } from '../context/cartContext'
import EmptyCart from '../components/EmptyCart'


const CartView = () => {
  const { cart } = useContext(cartContext)

  return (
    <>
      {cart.length < 1 ? <EmptyCart /> : <CartListContainer /> }
    </>
  )
}

export default CartView