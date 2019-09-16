import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Services from '../../components/Services';
import About from '../../components/About';
import Testimonial from '../../components/Testimonial';
import Footer from '../../components/Footer';

export default function Main() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <About />
      <Testimonial />
      <Footer />
    </>
  );
}
