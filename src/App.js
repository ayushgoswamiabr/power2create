import './App.css';
import Navbar from './components/Navbar/Navbar'
import FirstSection from './components/FirstSection/FirstSection'
import SecondSection from './components/Second Section/SecondSection'
import ThirdSection from './components/ThirdSection/ThirdSection'
import FourthSection from './components/FourthSection/FourthSection'
import FifthSection from './components/FifthSection/FifthSection'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <div className="containerfive">
      <button className="btn1 centerbutton" >Get a free quote</button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
