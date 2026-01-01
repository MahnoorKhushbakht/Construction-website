import './App.css'
import Contact from './components/Contact'
import ExpertContact from './components/ExpertContact'
import Header from './components/Header'
import HeroPage from './components/HeroPage'
import ImageStack from './components/ImageStack'
import MapSection from './components/MapSection'
import ReviewPage from './components/ReviewPage'
import Services from './components/Services'

function App() {
  return (
    <div className=" h-auto min-w-svw">
      <Header/>
      <HeroPage/>
      <Services/>
      <ExpertContact/>
      <ReviewPage/>
      <ImageStack/>
      <Contact/>
      <MapSection/>
    </div>
  )
}

export default App
