import PaymentPopup from '../PaymentPopup'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      for (let i = 0; i < cartList.length; i += 1) {
        totalPrice += cartList[i].price * cartList[i].quantity
      }

      // 🔹 CHANGED HERE: total items = UNIQUE cart items (not quantity sum)
      const totalItems = cartList.length

      return (
        <div className="cart-summary-container">
          <h1 className="order-total">
            Order Total: <span className="total-amount">Rs {totalPrice}/-</span>
          </h1>
          <p className="total-items">{totalItems} items in cart</p>
          <PaymentPopup />
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
