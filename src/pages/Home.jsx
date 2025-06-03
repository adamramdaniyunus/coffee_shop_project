import Hero from '../components/Hero'
import About from '../components/About'
import FavProduct from '../components/FavProduct'
import ProductList from '../components/ProductList'
import BookingTable from '../components/BookingTable'
import ArticlesAndFooter from '../components/ArticlesAndFooter'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FavProduct />
      <ProductList />
      <BookingTable />
      <ArticlesAndFooter />
    </>
  )
}

export default Home