
import Footer from '../components/Footer'
import { Fragment } from 'react'
import { Navbar } from '../components/Navbar'
import Products from '../components/Products'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
// import { useSelector } from 'react-redux'
// import { RootState } from '@/services/store'
// import SidebarCart from '@/components/SidebarCart'


export default function Home() {
  // const sidebarCart = useSelector((state: RootState) => state.sidebar)
  return (
    <Provider store={store}>
      <Navbar />
        <Products />
      <Footer/>
    </Provider>
  )
}
