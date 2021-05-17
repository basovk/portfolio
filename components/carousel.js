import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import classes from './carousel.module.css'

const Carousel = () => {
  const settings = {
    dots: true,
    speed: 1000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  }
  return (
    <Slider
      {...settings}
      arrows={false}
      autoplay={true}
      className={classes.carousel}
    >
      <div className={classes.slide}>
        <img
          src='/images/javascript.png'
          alt='javascript'
          // width={150}
          // height={125}
        />
      </div>
      <div className={classes.slide}>
        <img
          src='/images/reactjs.png'
          alt='reactjs'
          // width={150}
          // height={125}
        />
      </div>
      <div className={classes.slide}>
        <img src='/images/redux.jpg' alt='redux' width={150} height={125} />
      </div>
      <div className={classes.slide}>
        <img
          src='/images/typescript.png'
          alt='typescript'
          // width={150}
          // height={125}
        />
      </div>
      <div className={classes.slide}>
        <img
          src='/images/nextjs.jpeg'
          alt='nextjs'
          // width={150}
          // height={125}
        />
      </div>
      <div className={classes.slide}>
        <img
          src='/images/reactnative.png'
          alt='reactnative'
          // width={150}
          // height={125}
        />
      </div>
      <div className={classes.slide}>
        <img
          src='/images/expressjs.jpeg'
          alt='expressjs'
          // width={150}
          // height={125}
        />
      </div>
      <div className={classes.slide}>
        <img src='/images/nodejs.jpg' alt='nodejs' />
      </div>
      <div className={classes.slide}>
        <img
          src='/images/mongoDB.png'
          alt='mongoDB'
          // width={150}
          // height={125}
        />
      </div>
    </Slider>
  )
}

export default Carousel
