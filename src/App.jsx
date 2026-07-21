import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Banner from './components/Banner'
import Products from './components/Products'
import Benefits from './components/Benefits'
import FeatureSplit from './components/FeatureSplit'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <Banner />
        <Products />
        <Benefits />
        <FeatureSplit />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}

export default App
