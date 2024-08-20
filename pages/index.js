import React, { Fragment } from 'react'
import Head from 'next/head'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Youthful Basic Gerbil</title>
          <meta property="og:title" content="Youthful Basic Gerbil" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text10 thq-link thq-body-small">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text11 thq-link thq-body-small">
                Hotels
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text12 thq-link thq-body-small">
                About Us
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text13 thq-link thq-body-small">
                Contact
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text14 thq-body-large">Page One</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text15 thq-body-large">Page Two</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text16 thq-body-large">Page Three</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text17 thq-body-large">Page Four</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text18">Book Now</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text19">Secondary Action</span>
            </Fragment>
          }
          rootClassName="navbar8root-class-name"
          page1Description={
            <Fragment>
              <span className="home-text20 thq-body-small">
                Page One Description
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text21 thq-body-small">
                Page Two Description
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text22 thq-body-small">
                Page Three Description
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text23 thq-body-small">
                Page Four Description
              </span>
            </Fragment>
          }
        ></Navbar8>
        <Hero17
          action1={
            <Fragment>
              <span className="home-text24 thq-body-small">Book Now</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text25 thq-body-large">
                Find the best hotels and accommodations, with the best prices
                for your next trip with ease.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text26 thq-heading-1">
                Book Your Perfect Stay Online
              </span>
            </Fragment>
          }
        ></Hero17>
        <Features24
          feature1Title={
            <Fragment>
              <span className="home-text27 thq-heading-2">
                Stunning Accommodations
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text28 thq-heading-2">
                Worldwide Options
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text29 thq-heading-2">
                Most Economical Booking
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text30 thq-body-small">
                Discover luxurious and comfortable stays
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text31 thq-body-small">
                Wide selection of hotels and accommodations worldwide
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text32 thq-body-small">
                Easy and affordable booking process, with best prices
              </span>
            </Fragment>
          }
        ></Features24>
        <CTA26
          action1={
            <Fragment>
              <span className="home-text33">Explore Options</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text34 thq-body-large">
                Find the perfect hotel or accommodation for your next trip.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text35 thq-heading-2">
                Book Your Stay Now!
              </span>
            </Fragment>
          }
        ></CTA26>
        <Steps2
          step1Title={
            <Fragment>
              <span className="home-text36 thq-heading-2">
                Name your Hotels
              </span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text37 thq-heading-2">Select Room</span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text38 thq-heading-2">Enter Details</span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text39 thq-heading-2">Confirmation</span>
            </Fragment>
          }
          step1Description={
            <Fragment>
              <span className="home-text40 thq-body-small">
                Enter your destination, check-in and check-out dates, and number
                of guests for a specific hotel
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text41 thq-body-small">
                Choose the hotel room that suits your preferences and budget.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text42 thq-body-small">
                Fill in your personal details and booking information
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text43 thq-body-small">
                Receive a quotation email with all the details of your hotel
                reservation. Your reservation will be complete post payment! 
              </span>
            </Fragment>
          }
        ></Steps2>
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text44 thq-body-small">5 stars</span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text45 thq-body-small">
                Great service! Easy to use platform with a wide range of
                accommodation options.
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text46 thq-body-small">
                I got the best prices on this website for hotel bookings!
                100/100 would recommend
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text47 thq-body-small">
                Booking through this website saved me both time and money. Will
                definitely use it again for my future trips.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text48 thq-body-small">
                I have been using this website to book hotels for my business
                trips and it has been a seamless experience every time. Highly
                recommended!
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text49 thq-heading-2">
                Our Happy Customers
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text50 thq-body-large">
                Diwakar Bhardwaj
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text51 thq-body-large">Sandeep Saha</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text52 thq-body-large">Deepali Gupta</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text53 thq-body-large">Anindya Gupta</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text54 thq-body-small">Data Scientist</span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text55 thq-body-small">
                Software Developer
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text56 thq-body-small">Freelancer</span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text57 thq-body-small">
                Government of India
              </span>
            </Fragment>
          }
        ></Testimonial17>
        <Footer4
          link1={
            <Fragment>
              <span className="home-text58 thq-body-small">About Us</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text59 thq-body-small">Contact Us</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text60 thq-body-small">FAQ</span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
            text-decoration: none;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
            text-decoration: none;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text15 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text16 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text17 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
            text-align: center;
          }
          .home-text26 {
            display: inline-block;
            text-align: center;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
            text-align: center;
          }
          .home-text41 {
            display: inline-block;
            text-align: center;
          }
          .home-text42 {
            display: inline-block;
            text-align: center;
          }
          .home-text43 {
            display: inline-block;
            text-align: center;
          }
          .home-text44 {
            display: inline-block;
            text-align: left;
          }
          .home-text45 {
            display: inline-block;
            text-align: left;
          }
          .home-text46 {
            display: inline-block;
            text-align: left;
          }
          .home-text47 {
            display: inline-block;
            text-align: left;
          }
          .home-text48 {
            display: inline-block;
            text-align: center;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-text55 {
            display: inline-block;
          }
          .home-text56 {
            display: inline-block;
          }
          .home-text57 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
          }
          .home-text59 {
            display: inline-block;
          }
          .home-text60 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
