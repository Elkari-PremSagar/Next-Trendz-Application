import {useState, useContext} from 'react'
import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import './index.css'

const PaymentPopup = () => {
  const {cartList} = useContext(CartContext)

  const [paymentMethod, setPaymentMethod] = useState('')
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const totalItems = cartList.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  const onConfirmOrder = () => {
    setIsOrderPlaced(true)
  }

  return (
    <Popup modal trigger={<button className="checkout-btn">Checkout</button>}>
      {close => (
        <div className="payment-popup">
          {!isOrderPlaced ? (
            <>
              <h1 className="payment-heading">Payment Options</h1>
              <div className="payment-options">
                <label>
                  <input type="radio" disabled /> Card
                </label>
                <label>
                  <input type="radio" disabled /> Net Banking
                </label>
                <label>
                  <input type="radio" disabled /> UPI
                </label>
                <label>
                  <input type="radio" disabled /> Wallet
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    onChange={e => setPaymentMethod(e.target.value)}
                  />
                  Cash on Delivery
                </label>
              </div>

              <div className="order-summary">
                <p>Items: {totalItems}</p>
                <p>Total Price: Rs {totalPrice}/-</p>
              </div>

              <button
                type="button"
                className="confirm-btn"
                disabled={paymentMethod !== 'COD'}
                onClick={onConfirmOrder}
              >
                Confirm Order
              </button>
            </>
          ) : (
            <div className="success-view">
              <p className="success-text">
                Your order has been placed successfully
              </p>
              <button
                type="button"
                className="close-btn"
                onClick={() => close()}
              >
                Close
              </button>
            </div>
          )}
        </div>
      )}
    </Popup>
  )
}

export default PaymentPopup
