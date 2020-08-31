import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout({ children }) {
    return (
        <div className="container">
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Layout
