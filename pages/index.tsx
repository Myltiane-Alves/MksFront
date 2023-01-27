
import Footer from '@/components/Footer'
import { Fragment } from 'react'
import { Navbar } from '@/components/Navbar'
import Cart from '@/components/Cart'
import Products from '@/components/Products'


export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Cart />
      <Products />
      <Footer/>
    </Fragment>
  )
}
