import { Box, Container } from '@mui/material'
import React from 'react'
import '../css/Home.css'
import { rowA, rowB, rowC } from '../data/home'
import Product from './Product' 

const Home = props => {
  return (
    <Container className='home'>
      {/* Todo - add slider */}
        <Box className='banner'>
            <img alt='banner' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/HP_Gaming_Acc/Hero/HP_DesktopTallHero_3000x1200._CB623691740_.jpg' />
        </Box>
        <div className='home_row_a'>
        {rowA.map((item,index)=>{
          return (
            <Product key={index} name={item.product_name} rating={item.rating} img={item.img_url} price={item.price} />
          )
        })}
        </div>
        <div className='home_row_b'>
        {rowB.map((item,index)=>{
          return (
            <Product key={index} name={item.product_name} rating={item.rating} img={item.img_url} price={item.price} />
          )
        })}
        </div>
        <Container className='poster'>
         <img alt='sale_poster' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/cepc/med/may22/D45798145_IN_PC-Electronics-Mega-Electronics-days_1500x300.jpg' />
        </Container>
        <div className='home_row_b'>
        {rowC.map((item,index)=>{
          return (
            <Product key={index} name={item.product_name} rating={item.rating} img={item.img_url} price={item.price} />
          )
        })}
        </div>
        <Container className='poster'>
         <img alt='sale_poster' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/April/Home_CB/pc-stripe.jpg' />
        </Container>
    </Container>
  )
}

export default Home