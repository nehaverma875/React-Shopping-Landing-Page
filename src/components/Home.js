import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-bag.png";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className='home-container'>
    <Navbar/>
    <div className='home-banner-container'>
      <div className='home-bannerImage-container'>
        <img src={BannerBackground} alt='' />
      </div>
      <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Product Delivered Fast & Forword
          </h1>
          <p className="primary-text text-red-600">
          Buy Shopping Bags Online at India's Best Online Shopping Store. Check Shopping Bags Prices, Ratings & Reviews at Bag.com, chopping
            & marinating, so you can buy beatifly bag.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>

      <div className="home-image-section">
          <img src={BannerImage} alt="" width={1000} height={900}/>
      <h3 className='pl-56 -mt-10 text-red-500 text-4xl'>Price  9790.0$</h3>
 
        </div>

    </div>


      
    </div>
  )
}

export default Home
