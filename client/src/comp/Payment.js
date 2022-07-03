import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from '@mui/material';
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Payment = ({ cartTotal, cart }) => {
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState("")
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)

  // Before asking stripe to charge for a payment we need to get a client secret 
  // So we would need to generate a client secret whenever there is a change in cart items to update price
  // Payment intent is nothing but payment confirmation from stripe
  // Payload will send req to nodejs server where we will connect with stripe and using paymentintent
  // we will get confirmtion and we will load the payment details and status on frontend

  //For testing card numbers https://stripe.com/docs/testing
  
  useEffect(()=>{

    const getClientSecret = async() =>{
      const res = await axios.post(`http://localhost:8000/payments/create?total=${cartTotal*100}`)  
      setClientSecret(res.data.clientSecret)
    }

    getClientSecret()

  },[cart])

  console.log(`client secret : ${clientSecret}`);


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('hello');
    setProcessing(true)

    // Using this we will make a dummy payment
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method : {
        card :  elements.getElement(CardElement)
      }
    }).then( ({paymentIntent}) => {
      //paymentIntent = payment confirmation
      if(paymentIntent.status==="succeeded"){
        setSucceeded(true)
        setError(null)
        setProcessing(false)
        navigate('/')
      }else{
        // Navigate to Failure Page
      }

    } )
  };

  const handleChange = (e) => {
    setDisabled(e.empty)
    setError(e.error ? e.error.message : "")
  };

  return (
    <div className="payment">
      <h4>Card Details</h4>
      <form className='payment-form' onSubmit={handleSubmit}>
        <CardElement  onChange={handleChange} />
        <div className='payment-amt'>
         <h3>Order Total : ₹{cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
        </div>
        <Button type="submit" variant="contained" size='small' disabled={processing || succeeded || disabled}
            sx={{ color: 'black', textTransform: 'none', width: 55+'%', 
            backgroundColor: '#FBCB0A', ":hover":{ backgroundColor: '#FAC213' }}}>
                {processing? "Processing": "Buy Now"}
        </Button>
        {error&&<p>{error}</p>}
      </form>
    </div>
  );
};

export default Payment;
