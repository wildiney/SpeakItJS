import React from 'react'
import PropTypes from 'prop-types'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.any
}

export default MyApp
