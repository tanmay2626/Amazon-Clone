import React from 'react'
import '../css/Checkout.css'
import { Container, Divider } from '@mui/material'
import CartItem from './CartItem'
import { useStateValue } from '../state/StateProvider'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

const Checkout = props => {

    const [{ cart }] = useStateValue()

    const add_prices = () =>{
      var total=0
      cart.forEach(e => {
      total+=e.price
      });
      return total;
    }
    const total = add_prices()

  return (
    <Container className='checkout'>
     <span>Checkout {'('+cart.length+' items)'}</span>
     <div className='checkout-wrap'>
      <Container>
          <div className='sec'>
            <div className='sec-L'>
             <p>Delivery Address</p>
            </div>
            <div className='sec-R'>
            <p>Flat - 8, Payal Housing Society, RH-144, Op. Bandhan Sweets, Shahunagar, Chicnhwad, Pune, 411019</p>
            </div>
          </div>
          <Divider />
          <div className='sec'>
            <div className='sec-L'>
             <p>Review Items and Delivery</p>
            </div>
            <div className='sec-R'>
            {cart.map((item,index)=>{
             return (
              <CartItem key={index} id={item.id} name={item.product_name} rating={item.rating} price={item.price} img={item.product_img} />
             )
           })}
            </div>
          </div>
          <Divider />
          <div className='sec'>
            <div className='sec-L'>
             <p>Payment Method</p>
            </div>
            <div className='sec-R'>
            <h4>Card Details</h4>
             <div className='card-details'>
             <form>
               
             </form>
            </div>
            </div>
          </div>
      </Container>
     </div>
    </Container>
  )
}

export default Checkout