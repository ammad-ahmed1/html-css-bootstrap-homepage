import './App.css';
import { useState } from 'react';
import NavigationBar from './Components/NavigationBar';
import MainSlider from './Components/Slider';
import MenMegaMenu from './Components/MenMegaMenu';
import NavBarForMobile from './Components/NavBarForMobile';
import SecondSection from './Components/SecondSection';
import SectionThree from './Components/SectionThree';
import TestingSlider from './Components/TestingSlider';
import VideoSection from './Components/VideoSection';
import FeaturedProductsSection from './Components/FeaturedProductsSection';
import SectionFourGrid from './Components/SectionFourGrid';
import Footer from './Components/Salehub Footer/bootstrap-footer-13/Footer';
import NewFooter from './Components/NewFooter';


function App() {
  const [menDropMenu, setMenDropMenu] = useState(false);
  const ShowMenDropMenu = () => {
    console.log('show men drop down called')
    setMenDropMenu(true)
  }
  const CloseMenDropMenu = () => {
    setMenDropMenu(false)
  }
  return (
    <div className="App">
      <NavigationBar showmendropmenu={ShowMenDropMenu} />
      <NavBarForMobile />
      {
        console.log(menDropMenu)}
        {menDropMenu ? <MenMegaMenu showmendropmenu={ShowMenDropMenu} closemendropmenu={ShowMenDropMenu} /> : ''
      }
      <MainSlider />
      <SecondSection />
      {/* <SectionThree /> */}
      <TestingSlider />
      <VideoSection />
      <FeaturedProductsSection />
      <SectionFourGrid />

      <NewFooter/>
    </div>
  );
}

export default App;
