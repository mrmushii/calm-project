import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import React from 'react'

const layout = ({children}) => {
  return (
   <>
   <Nav/>
   <div>{children}</div>
   <Footer/>
   </>
  )
}

export default layout