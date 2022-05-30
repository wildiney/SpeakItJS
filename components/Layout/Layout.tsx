import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import classes from './Layout.module.css'

function Layout ({ children }) {
  return (
    <div className={classes.container}>
      <Header></Header>
      <main>
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
