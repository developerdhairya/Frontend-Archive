import React from 'react';

const LandingPageSection = (props) => {
    return <React.Fragment>
        <section class="text-gray-600 body-font justify-items-end">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src="./landing.svg"/>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Spring Boot Digital Wallet
            </h1>
            <p class="mb-8 leading-relaxed">A production-ready Digital wallet build with power of Spring Boot,Hibernate,Spring Security,Postgres SQL,Nginix and much more 💙.Register to view the live working and explore the complete document by clicking on the button below.</p>
            <div class="flex justify-center">
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  ~ Swagger Documentation ~
                  </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>;
}
 
export default LandingPageSection;