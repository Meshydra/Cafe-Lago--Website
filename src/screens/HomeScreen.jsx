import React from 'react'
import BookTeaHome from "../components/home-components/BookTeaHome"
import ChooseCoffee from "../components/home-components/ChooseCoffee"
import CustomerReview from "../components/home-components/CustomerReview"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroImage from "../components/home-components/HeroImage"
import HeroText from "../components/home-components/HeroText"
import SignatureMenu from "../components/home-components/SignatureMenu"

const HomeScreen = () => {
  return (
    <div className=" bg-[#D2B48C] bg-opacity-20">
      
      <Header />
      <div className="container mx-auto">
          <HeroText />
          <HeroImage />
          <ChooseCoffee />
          <SignatureMenu />
      </div>
      
      <Footer /></div>
      
  );
};


export default HomeScreen