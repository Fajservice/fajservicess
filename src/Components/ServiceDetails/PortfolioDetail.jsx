

import { useEffect, useRef, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../Contact/Serviceappointemnt';
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import HeaderForm from "../Headeform/HeaderForm";

// import { Link } from "react-router-dom";

const PortfolioDetail = ({ subtitle, title, bgImg }) => {
  subtitle = "Testimonial"
  title = "What our clients say About Us"
  bgImg = "img/testimonialbg.jpg"
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = index => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <>
      <HelmetProvider>
        <title>Our Portfolio | AC Repair | Appliances Service Center Dubai</title>
        <meta name="description" content="FAJ Technical Services LLC, established in 2010, offers supply, installation, and spare parts for air conditioning and refrigeration appliances in Dubai."></meta>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            {/* <img className="bordered-img blue-border" src={`${import.meta.env.BASE_URL}img/Ac-Maintenance.jpeg`} alt="Service Banner" /> */}
            <p>F A J Technical Services was established in May 2010 as an air conditioning systems maintenance company in Dubai. It has now gradually grown as a competitive technical services provider in Dubai, Abu Dhabi, and Sharjah. We focus on the International quality of technical services for air conditioning, refrigeration units, domestic & commercial appliances, MEP services, installation services, AMC maintenance, repair services, PPM services & annual maintenance contract services for industrial, commercial, and domestic use. Our company has gone from strength to strength, gaining the highly acclaimed Trusted Trader endorsements in 2024. We are committed to providing our customers calm, satisfaction & happiness. Our professional technical teams will provide you with their expertise and knowledge giving you peace of mind for all your appliances repair. First preference is given to our AMC customers, Al our services are carried out quickly and efficiently.We aim to make a positive impact through our innovations, efficient operations, relationships, voluntary contributions, and various other ways in which we engage with our business partners and society at large.</p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h3>Our Values</h3>
                  <p>At F A J Technical Services L.L.C, we live and work by “HITES” values.</p>
                  <h4>Honesty</h4>
                  <p>Form honest, transparent, ethical relationships with our customers, sub-contractors, suppliers, and colleagues.</p>
                  <h4>Initiative</h4>
                  <p>Dare to take initiative, suggest solutions and drive long-term value</p>
                  <h4>Teamwork</h4>
                  <p>Collaborate for success. Help each other perform, grow and develop. Empower, coach and train our people to be the best they can be</p>
                </div>
                <div className="col-md-6">
                  <h3>Vision & Mission</h3>
                  <p>We aim to provide solutions that are:</p>
                  <h4>Vision & Mission</h4>
                  <p>Provide innovative solutions in order to create maximum value and benefits beyond our contractual obligation.</p>
                  <h4>Greener</h4>
                  <p>Practical and scientific actions to help resolve the global challenges of energy production and <a href="https://www.google.com/search?q=faj+technical+services+l.l.c&amp;authuser=1&amp;sxsrf=AJOqlzUBcQcOaaKHSwQ5emcZC7HgQkeIrQ%3A1678784435677&amp;ei=szcQZLT4KJagkdUP8vOHsAM&amp;ved=0ahUKEwj0ncWvh9v9AhUWUKQEHfL5ATYQ4dUDCA8&amp;oq=faj+technical+services+l.l.c&amp;gs_lcp=Cgxnd3Mtd2l6LXNlcnAQDEoECEEYAFAAWABgAGgAcAF4AIABAIgBAJIBAJgBAA&amp;sclient=gws-wiz-serp#lpc=lpc" target="_blank" rel="noopener">conservation</a>.</p>
                  <h4>Cost-Effective</h4>
                  <p>Deliver services in the most cost-effective manner possible while still ensuring the highest standard of quality.</p>
                </div>
              </div>
          </div>
        </section>
        <section className="section cs_py_30">
          <div className="container">
              <h3>Our Projects</h3>
          </div>
        </section>
        <section className="section cs_py_30">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book An Appointment"
          ></Serviceappointemnt>

        </section>

      </div >
    </>
  );
};

export default PortfolioDetail;

