import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Hero from '../components/hero'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/images/logo.png' />
        <meta name='description' content='Ivan Basic portfolio website.' />
      </Head>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}
