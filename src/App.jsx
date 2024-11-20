import Banner from "./Components/Banner/Banner"
import Header from "./Components/Header/Header"
import Browse from "./Components/Browse/Browse"
import Features from "./Components/Featured/Features"
// import FeaturedLocations from "./FeaturedLocations/FeaturedLocations"
import ImportantArticles from "./ImportantArticles/ImportantArticles"
import Footer from "./Footer/Footer"
import PropertyGrid from "./PropertyGrid/PropertyGrid"

function App() {
  return (
    <div className="">
      <Header />
      <Banner />
      <div className="">
      <Browse />
      <Features />
      <PropertyGrid />
      
      <ImportantArticles />
      <Footer />
      </div>
    </div>
  )
}

export default App
