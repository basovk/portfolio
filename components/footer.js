import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

import Logo from './logo'

//CSS
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Logo />
      <p>Ivan Bašić © 2021</p>
      <div className={classes.logos}>
        <div className={classes.linkedin}>
          <a
            href='https://www.linkedin.com/in/ivan-bašić-40a731140'
            target='_blank'
          >
            <FaLinkedin />
          </a>
        </div>
        <div className={classes.github}>
          <a href='https://github.com/basovk' target='_blank'>
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
