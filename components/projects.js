import React from 'react'

import Card from '../components/card'

// CSS
import classes from './projects.module.css'

const Projects = () => {
  const techStack1 = ['Reactjs', 'Redux', 'Nodejs & Express', 'MongoDB']
  const techStack2 = ['NextJS', 'Reactjs', 'Markdown', 'Routing & SSR']
  const techStack3 = [
    'React Native',
    'Nodejs & Express',
    'MongoDB',
    'Mobile Development'
  ]

  const techStack4 = [
    'Nodejs & Express',
    'MongoDB',
    'Postman',
    'Authentication'
  ]

  const techStack5 = ['Reactjs', 'CSS Responsive', 'Local Storage', 'API Usage']

  const imagePath1 = '/images/proshop.jpg'
  const imagePath2 = '/images/nextblog.jpg'
  const imagePath3 = '/images/reactnativeapp.jpg'
  const imagePath4 = '/images/nodeapibackend.png'
  const imagePath5 = '/images/marvel.jpg'

  return (
    <section id='projects' className={classes.projects}>
      <h1>Projects</h1>
      <div className={classes.cards}>
        <Card
          title='ProShop'
          technology={techStack1}
          imagePath={imagePath1}
          viewCode='proshop'
          viewDemo='https://proshop-prod.vercel.app/'
        />
        <Card
          title='NextJS Blog'
          technology={techStack2}
          imagePath={imagePath2}
          viewCode='nextjs-blog'
          viewDemo='https://nextjs-blog-fu9docx7p-basovk.vercel.app/'
        />
        <Card
          title='AudienceTV'
          technology={techStack3}
          imagePath={imagePath3}
          viewCode='rn-audiencetv'
        />
        <Card
          title='BackendAPI'
          technology={techStack4}
          imagePath={imagePath4}
          viewCode='backend-api'
          viewDemo='https://documenter.getpostman.com/view/8693761/TVsvhnPL'
        />
        <Card
          title='Marvel'
          technology={techStack5}
          imagePath={imagePath5}
          viewCode='marvel'
          viewDemo='https://basovk.github.io/marvel/'
        />
      </div>
    </section>
  )
}

export default Projects
