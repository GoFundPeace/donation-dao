import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header/header';
import StickyHeader from '../components/header/sticky-header';
import PageHeader from '../components/page-header';
import AboutOne from '../components/about/about';
import Footer from '../components/footer';

const About = () => {
  const info = {
    title: 'About GoFundPeace',
    crumb: 'About'
  }
  return (
    <Layout pageTitle='GoFundPeace | About'>
      <PageHeader info={info} />
      <Header />
      <StickyHeader />
      <AboutOne />
      <Footer />
    </Layout>
  );
};

export default About;
