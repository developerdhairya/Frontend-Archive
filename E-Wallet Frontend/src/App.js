import './index.css';

import React from 'react';

import Footer from './components/Footers/footer';
import ParticleBackground from './components/particleBackground';
import LandingPageSection from './components/Sections/landingPageSection';
import LandingPageHeader from './Header/LandingPageHeader';

function App() {
  return (
    <React.Fragment>


    <div className='flex flex-col justify-evenly h-screen'>
    <ParticleBackground/>
    <LandingPageHeader/>
    <LandingPageSection/>
    <Footer/>
    </div>
    </React.Fragment>
  );
}

export default App;
