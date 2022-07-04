import React from 'react'
import '../css/Cart.css'
import { Container } from '@mui/material'
import CartItem from './CartItem'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { useStateValue } from '../state/StateProvider'
import { Link } from 'react-router-dom'

const Cart = props => {
  //Todo - add backend cart and link with account
  const [{ user , cart }] = useStateValue()

  const add_prices = () =>{
    var total=0
    cart.forEach(e => {
    total+=e.price
    });
    return total;
  }
  const total = add_prices()


  return (
    <Container className='cart'>
        <Container className='poster'>
         <img alt='sale_poster' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/April/Home_CB/pc-stripe.jpg' />
        </Container>
        <div className='cart-items'>
        <h2>Your Shopping Cart </h2>
        <div className='cart-wrap'>
         <div className='cart-left'>
           {cart.map((item,index)=>{
             return (
              <CartItem key={index} _id={item.id} product_name={item.product_name} rating={item.rating} price={item.price} product_img={item.product_img} />
             )
           })}
         </div>
         <div className='cart-right'>
           <h5>Subtotal ({cart.length} items) : ₹{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
           <FormControlLabel control={<Checkbox size='small' color='default' />} label={<span>This order contains a gift</span>} />
           <Link className='link' to={user?'/checkout':'/signin'}>
           <Button variant="contained" size='small' disabled={cart.length===0?true:false}
            sx={{ color: 'black', textTransform: 'none', width: 100+'%',
            backgroundColor: '#FBCB0A', marginTop: 2 , ":hover":{ backgroundColor: '#FAC213' }}}>
                Proceed to Buy
            </Button>
            </Link>
         </div>
        </div>
        </div>
    </Container>
  )
}

export default Cart