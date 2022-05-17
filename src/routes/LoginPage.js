import React from 'react';

import Footer from '../components/Footers/footer';
import LoginPageSection from '../components/Sections/loginPageSection';
import LandingPageHeader from '../Header/LandingPageHeader';

const LoginPage = () => {
    return <React.Fragment>

    <div className='flex flex-col justify-between h-screen'>
        <LandingPageHeader></LandingPageHeader>
        <LoginPageSection/>
        <Footer></Footer>
    </div>
        
    </React.Fragment>
    
}
 
export default LoginPage;