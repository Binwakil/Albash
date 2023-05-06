import React from 'react';
import {Header, Service, Hero, Services} from '../../components'


const Home = () => {

  return <div>
   <Hero />
   <Header />
   <Services />
   {/* <Bids title="Hot Bids"  /> */}
   <Service />
  </div>;
};

export default Home;
