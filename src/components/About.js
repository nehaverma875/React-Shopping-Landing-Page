import React from 'react'
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-bag.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Disbag from '../assets/about-dis.png';

const About = () => {
  return (
    <div className='about-section-container'>
    <div className='about-background-image-container'>
    <img src={AboutBackground} alt='backgroundimage'/>

    </div>
    <div className="about-section-image-container">
    <img src={Disbag} alt='offer' width={200} height={200} className='-ml-20'/>
        <img src={AboutBackgroundImage} alt="" width={1000} height={1000} className='-mt-20' />
        <h3 className='pl-60 -mt-10 text-red-500 text-4xl'>Price  290.0$</h3>
       
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Bag Is An Import At Few Time Of A Balance Your Account
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
     </div>
      
    </div>
  )
}

export default About
