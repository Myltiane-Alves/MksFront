import { Inter } from '@next/font/google'
import Footer from '@/components/Footer'
import { Fragment } from 'react'
import { Navbar } from '@/components/Navbar'
import Products from '@/components/Products'


export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Products />
      <Footer/>
    </Fragment>
  )
}
