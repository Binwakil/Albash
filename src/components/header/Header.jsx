import React from 'react'
import './header.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import verify from '../../assets/verify.png'
import { Link  } from 'react-router-dom';
const Header = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide:true,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide:true,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide:true,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        }
      }
    ]
  };
  return (
    <div className='header section__padding'>
      <div className="header-slider">
        <h1>TOP EMPLOYERS</h1>
       <Slider {...settings} className='slider'>
            <div className='slider-card'>
              <p className='slider-card-number'>1</p>
              <div className="slider-img">
                <img src={""} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <Link to={`/profile/Rian`}>
              <p className='slider-card-name'>Near Protocol</p>
              </Link>
              <p className='slider-card-price'>256 <span>Employees</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>2</p>
              <div className="slider-img">
                <img src={"seller2"} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <Link to={`/profile/Rian`}>
              <p className='slider-card-name'>Secrete Network</p>
              </Link>
              <p className='slider-card-price'>451 <span>Employees</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>3</p>
              <div className="slider-img">
                <img src={"seller3"} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <Link to={`/profile/Rian`}>
              <p className='slider-card-name'>Atafom University</p>
              </Link>
              <p className='slider-card-price'>5141 <span>Employees</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>4</p>
              <div className="slider-img">
                <img src={"seller4"} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <Link to={`/profile/Rian`}>
              <p className='slider-card-name'>Bayero University</p>
              </Link>
              <p className='slider-card-price'>125 <span>Employees</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>5</p>
              <div className="slider-img">
                <img src={"seller5"} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <Link to={`/profile/Rian`}>
              <p className='slider-card-name'>ConiaSoft Cloud</p>
              </Link>
              <p className='slider-card-price'>3921 <span>Employees</span></p>
            </div>
            <div className='slider-card'>
              <p className='slider-card-number'>6</p>
              <div className="slider-img">
                <img src={"seller6"} alt="" />
                <img src={verify} className='verify' alt="" />
              </div>
              <Link to={`/profile/Rian`}>
              <p className='slider-card-name'>PTH Technologies</p>
              </Link>
              <p className='slider-card-price'>548 <span>Employees</span></p>
            </div>
        </Slider>
      </div>
    </div>
      
  )
}

export default Header
