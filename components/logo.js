import Image from 'next/image'

import classes from './logo.module.css'

function Logo() {
  return (
    <div className={classes.logoContainer}>
      <Image src='/images/logo.png' alt='logo' width={200} height={80} />
    </div>
  )
}

export default Logo
