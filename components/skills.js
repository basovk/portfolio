import React from 'react'

import Carousel from './carousel'

// CSS
import classes from './skills.module.css'

const Skills = () => {
  return (
    <section id='skills' className={classes.section}>
      <div className={classes.skills}>
        <h1>Technologies</h1>
        <p>
          Hi, Nice to meet you! I'm a junior frontend developer eager to learn
          and develop beautiful & modern web applications. I strive to get
          better every day, whether it be writting better and more organized
          code, or learning a new framework that will help me get the job done
          easily. Below you can see some of the technologies I tried to master
          and have been encountered with till this day.
        </p>
      </div>
      <div className={classes.carousel}>
        <Carousel />
      </div>
    </section>
  )
}

export default Skills
