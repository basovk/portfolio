import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

// CSS
import classes from './hero.module.css'

const Hero = () => {
  return (
    <section id='hero' className={classes.hero_image}>
      <div className={classes.hero_content}>
        <div className={classes.avatar}>
          <Image
            src='/images/avatar-male.jpg'
            alt='An image showing male avatar'
            width={350}
            height={350}
          />
        </div>
        <div className={classes.text}>
          <h1>Hi, my name is Ivan</h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('<h1>Junior Frontend Developer</h1>')
                .pauseFor(1500)
                .start()
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
