// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <Header />
      <div className="carts-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          className="carts-image"
          alt="cart"
        />
        <h1 className="heading">Cart</h1>
      </div>
    </div>
  )
}

export default Cart
