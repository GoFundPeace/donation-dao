import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header/header';
import StickyHeader from '../components/header/sticky-header';
import MainSlider from '../components/slider/main-slider';
import Service from '../components/services/service';
import AboutCounter from '../components/about/about-counter';
import ProgressBar from '../components/progress-bar/progress-bar';
import CausesHome from '../components/causes/causes-home';
import Footer from '../components/footer';

const Home = () => {
  return (
    <Layout pageTitle='GoFundPeace'>
      <Header />
      <StickyHeader />
      <MainSlider />
      <AboutCounter />
      <ProgressBar />
      <Service />
      <CausesHome />
      <Footer />
    </Layout>
  );
};

export default Home;
