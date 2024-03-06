import CarouselComponent from './carousel'
import Banner from './banner';
import Service from './service'
import Offer from './offer';
import Corevalue from './core_value';
import Techstack from './tech_stack'
import Footer from './footer'


function MainPage() {
  return (
    <div className="App" style={{backgroundColor: '#020924'}}>
      <CarouselComponent/>
      <Banner/>
      <Service/>
      <Offer/>
      <Corevalue/>  
      <Techstack/>
      <Footer/>
    </div>
  );
}

export default MainPage;
