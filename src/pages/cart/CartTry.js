import { useState } from 'react'

import CartCate from './CartCate'
import CartStep from './CartStep'
import Cart1 from './Cart1'
// import Cart2 from './Cart2'
// import Cart3 from './Cart3'
// import Step1 from './Step1'

import '../../styles/hoyu.scss'
import '../../styles/font.scss'

function CartTry() {
  const [cartCate, setCartCate] = useState('cart1')
  const [cartStep, setCartStep] = useState('step1')
  return (
    <>
      <div className="container">
        <div className="row hhyy-bread">
          <div className="col">
            <a className="clbread" href="*">
              首頁 <span className="clspan">&gt; </span>
            </a>
            <a className="clbread" href="*">
              購物清單
            </a>
          </div>
        </div>
        <CartCate cartCate={cartCate} setCartCate={setCartCate} />
        <CartStep cartStep={cartStep} setCartStep={setCartStep} />
      </div>
    </>
  )
}

export default CartTry