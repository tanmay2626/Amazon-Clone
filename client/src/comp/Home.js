import { Container } from "@mui/material";
import React from "react";
import "../css/Home.css";
import { rowA, rowB, rowC } from "../data/products";
import Product from "./Product";
import SpeakerOutlinedIcon from '@mui/icons-material/SpeakerOutlined';

const Home = (props) => {

  const categories = [
    {
      name: 'Amazon Devices'
    },
    {
      name: 'Back to School'
    },
    {
      name: 'Computers'
    },
    {
      name: 'Electronics'
    },
    {
      name: 'Kitchen'
    },
    {
      name: 'Toys & Games'
    },
  ]

  return (
    <div className="home">
      {/* Todo - add slider */}
      <div className="home-left">
      <div className="banner">
        <img
          alt="banner"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJ8IYSKSlGR7OjqZZCwnnk_IqFHBco4lydg&usqp=CAU"
        />
      </div>

      <div className="categories-row">
      <div className="category-card">
      <div className="category-head">
      <SpeakerOutlinedIcon className="category-icon" sx={{ fontSize: 90 }} />
      </div>
      <span>Amazon Devices</span>
      </div>
      </div>

      </div>
      <div className="home-right">
      hello
      </div>
    </div>
  );
};

export default Home;

//https://images-eu.ssl-images-amazon.com/images/G/31/img22/Events/Aug-ART-22/GW/Event/Hero/NTA/Aug_ART_PC_LIVE_now_UNREC_FDFO._CB630844079_.jpg