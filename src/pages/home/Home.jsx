import React from 'react';
import {Header, Service, Hero, HeaderStats} from '../../components'


const Home = () => {

  return <div>
   <Hero />
   <HeaderStats />
   <Header />
   {/* <Bids title="Hot Bids"  /> */}
   <Service />
  </div>;
};

export default Home;
