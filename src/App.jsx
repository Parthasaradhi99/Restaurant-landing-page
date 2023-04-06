import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../src/container';
import  Navbar  from '../src/components/Navbar/Navbar';  /* Using { Navbar } causes error*/
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    </div>
  )
}

export default App
