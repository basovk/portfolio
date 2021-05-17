import React from 'react'
import Link from 'next/link'

// Custom comp
import Logo from './logo'

// CSS
import classes from './header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <Link href='#hero'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='#projects'>Projects</Link>
          </li>
          <li>
            <Link href='#skills'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
