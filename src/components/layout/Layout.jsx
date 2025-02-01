import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
    {/* Navbar */}
    <Navbar />

    {/* Main Content*/}
    <div className="flex-grow flex items-center justify-center pt-30 pb-15">
      {children}
    </div>

    {/* Footer */}
    <Footer />
  </div>
  )
}

export default Layout