
import Footer from '@/components/Footer'
import { Fragment } from 'react'
import { Navbar } from '@/components/Navbar'
import Products from "@/components/CardProducts"
import Cart from '@/components/Cart'


export default function Checkout() {
  return (
    <Fragment>
      <Navbar />
      {/* <Products /> */}
      <Cart />
      <Footer/>
    </Fragment>
  )
}
