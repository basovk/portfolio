import React from 'react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

// CSS
import classes from './card.module.css'

const Card = ({ title, technology, imagePath, viewCode, viewDemo }) => {
  return (
    <div className={classes.card}>
      <div className={`${classes.card__side} ${classes.card__sidefront}`}>
        <div className={`${classes.card__picture} ${classes.card__picture1}`}>
          <Image width={500} height={500} alt={title} src={imagePath} />
        </div>
        <h4>
          <span>{title}</span>
        </h4>
        <div className={classes.card__details}>
          <ul>
            {technology.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${classes.card__side} ${classes.card__sideback} ${classes.card__sideback1}`}
      >
        <div className={classes.card__cta}>
          <div className={classes.card__githubbox}>
            <p>
              <a
                href={`https://www.github.com/basovk/${viewCode}`}
                className={classes.card_githubicon}
                target='_blank'
              >
                View code <FaGithub />
              </a>
            </p>
            <p>
              <a href={viewDemo} className={classes.livedemo} target='_blank'>
                View Demo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
