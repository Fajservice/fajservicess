

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
            {/* <img className="bordered-img blue-border" src={`${import.meta.env.BASE_URL}img/Ac-Maintenance.avif`} alt="Service Banner" /> */}
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
              <h3>Our Clients</h3>
              <div className="portfolio-clnts-dtls">
                <div className="row">
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/NTDE.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/Belhasa-real-estate.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/Millennium.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/abensal.jpg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/tornatech-1.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/holidayinn.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/partyzone.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/imperial.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/pomegranate.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/emirates-catering.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/roseleaf.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/z-cars.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/AirForce.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/transguard.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/tsm.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/tirinity.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/silver.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/takeda.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/cherwell.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/mfl.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/sakr.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/ace.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/uniworld.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/mirchi.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/desert.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/fratelli.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/VIKAS.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/core-me.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/autohaus.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/AKAS.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/MOBH.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/gtech.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/layaly.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/seatrade.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/accuro.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/max.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/zaya.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/al-rawabi.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/six.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/watts.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/mammaitalia.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/kabab.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/urbantails.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/al-thika.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/dkint.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/dpworld.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/goldensun.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/ubl.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/berts.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/beanstalk.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/reliance.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/BSBG.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/al-rayan.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/golden-gate.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/neuro-spinal-hospital.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/Majid-al-futtaim.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/cmc.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/saken-properties.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/al-yousaf-motor.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/EMS.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/caramel-group.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/obegi.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/concordia.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/driven-properties.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/foodie-co.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/mattress.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/al-baraa.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/inaya.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/droo.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/cerruti.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/jafza.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/high-mark.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/shein.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/1 (1).png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/2.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/3.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/4.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/5.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/img/portfolio-clients/6.png" />
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
              <h3>Our Projects</h3>
              <div className="portfolio-projects-cols">
                <div className="row">
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/AirForce.jpeg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">USA AIR FORCE DHAFRAH AIR BASE – ABU DHABI</h5>
                          <p className="portfolio-pjt-info-box-para">Air Conditioning System, Refrigeration System and Electrical Work, Commercial Laundry Machines &amp; Dryers Services. <br /><strong>(Since: 2013-2018)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/AirForce.jpeg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">USA AIR FORCE DHAFRAH AIR BASE – ABU DHABI</h5>
                          <p className="portfolio-pjt-info-box-para">Air Conditioning System, Refrigeration System and Electrical Work, Commercial Laundry Machines &amp; Dryers Services. <br /><strong>(Since: 2013-2018)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/nex.png" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">USA NAVY BY NEX EXCHANGE – DUBAI</h5>
                          <p className="portfolio-pjt-info-box-para">ebel Ali Free Zone – Dubai Air Conditioning System, Refrigeration System and Electrical Work, Commercial Laundry Machines & Dryers Services.<strong>(Since: 2016-2021)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/china.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">CHINA PETROLEUM BUREAU DUBAI</h5>
                          <p className="portfolio-pjt-info-box-para">Air Conditioning, Electrical & Plumbing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/canadian.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">CANADIAN UNIVERSITY</h5>
                          <p className="portfolio-pjt-info-box-para">308th Road, Behind Shangri-La Sheikh Zayed Road – Dubai LG VRF Air Conditioning & FAHU Services. <br /><strong>(Since: 2016-2017)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/ibis.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">HOTEL IBIS WORLD TRADE CENTRE DUBAI</h5>
                          <p className="portfolio-pjt-info-box-para">Next to Dubai Convention Center – Dubai <br />Air Conditioning Units Services.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/jazeera.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">UNIVERSITY OF JAZEERA</h5>
                          <p className="portfolio-pjt-info-box-para">Al Twar 3, near Dubai International Airport – Dubai SKM Brand Package Air Conditioning Units, Electrical & Plumbing Work Services.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/parkside.png" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">PARKSIDE SUITES HOTEL APARTMENTS LLC</h5>
                          <p className="portfolio-pjt-info-box-para">Street No. 1, Zen 3, Building No. 12 Discovery Garden, Dubai Built-in and Freestanding Kitchen Appliances (Refrigerator, Freezer, Washer, Dryer Cooking Unit) Services.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/middlesex.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">Middlesex University</h5>
                          <p className="portfolio-pjt-info-box-para">Dubai <br />accommodation appliances services <br /><strong>2017</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/crowneplaza.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">Crowne Plaza Hotels</h5>
                          <p className="portfolio-pjt-info-box-para">Dubai <br />Appliances and Laundry Equipments Services <br /><strong>(Since: 2016-Present)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/repton.png" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">REPTON SCHOOL</h5>
                          <p className="portfolio-pjt-info-box-para">Nad Al Sheba 3 – Dubai <br />Refrigeration Systems & Electrical Work. <br /><strong>(Since: 2013-2014)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/dukes.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">Dukes Hotels</h5>
                          <p className="portfolio-pjt-info-box-para">Dubai <br />Appliances and Laundry Equipments Service <br /><strong>(Since: 2019-Present)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/fawaz.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">Fawaz Trading and Engineering Services.CO LLC</h5>
                          <p className="portfolio-pjt-info-box-para">Services Partner at Dubai Police (4 Stations & Central Jail), Commercial Laundry Equipment Services. <strong>(2021)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/movenpick.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">Movenpick Hotels</h5>
                          <p className="portfolio-pjt-info-box-para">Dubai <br />Appliances and Laundry Equipments Services <br /><strong>(Since: 2021-Present)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/baumatic.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">BAUMATIC MIDDLE EAST</h5>
                          <p className="portfolio-pjt-info-box-para">FAJ Technical Services LLC, Authorized Baumatic Kitchen Appliances Service Partner & Service Center in UAE. <br /><strong>(Since: 2016-2019)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/eminence.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">Eminence International Contracting Co LLC</h5>
                          <p className="portfolio-pjt-info-box-para">Jumeirah Golf Estates-Dubai Variable Refrigerant Volume (VRV) & Variable Refrigerant Flow (VRF) Air Conditioning & FAHU Services. Brands: Daikin, Mitsubishi, LG & Trane.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/transguard.jpeg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">TRANSGUARD GROUP LLC</h5>
                          <p className="portfolio-pjt-info-box-para">TG Accommodations – Dubai <br />Air Conditioning Units Services. <br /><strong>(Since: 2015-2016)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/alstom.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">ALSTOM</h5>
                          <p className="portfolio-pjt-info-box-para">Dubai tram, Air Conditioning. <br /><strong>(Since: 2016-2018)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/bertoni.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">BERTONI LLC</h5>
                          <p className="portfolio-pjt-info-box-para">Rd B I, DIP 2 – Dubai <br />Air Conditioning System, Refrigeration System, Kitchen Appliances, MEP Services. <br /><strong>(Since: 2015-2018)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/dubai-properties.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">Dubai Properties</h5>
                          <p className="portfolio-pjt-info-box-para">Shorooq Mirdif Villas Dubai. <br />Ariston integrated Appliances Services. <br /><strong>(Since: 2016-2018)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/nandos.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">NANDO’S</h5>
                          <p className="portfolio-pjt-info-box-para">Staff Accommodation Dubai & Sharjah <br />MEP Services, Air Conditioning, and Refrigeration <br /><strong>(Since: 2013-2015)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/tsm.jpeg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">TALAL SUPERMARKET</h5>
                          <p className="portfolio-pjt-info-box-para">l0C St, Al Karama – Dubai <br />Air Conditioning System & Refrigeration Systems Services <strong>(Since: 2015-2016)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/eskinita.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">ESKINITA RESTAURANT AT WELCOME HOTEL</h5>
                          <p className="portfolio-pjt-info-box-para">144 Abu Bakker Al Siddique Rd – Dubai Commercial Kitchen Appliances, Refrigeration System, Electrical & Plumbing Services.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/partyzone.jpeg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">Party Zone LLC</h5>
                          <p className="portfolio-pjt-info-box-para">Dubai, RAK, Abu Dhabi (8 Branches) <br />Air Conditioning System & MEP Services. <br /><strong>(Since: 2015-Present)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/uniworld.png" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">Uniworld Medical FZE</h5>
                          <p className="portfolio-pjt-info-box-para">Dubai, Abu Dhabi, UN Air Base <br />Laundry Equipment Services, Air Conditioning, Refrigeration System. <br /><strong>As a Service Partner (Since: 2013-2017)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/beirut.jpg" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">BEIRUT RESTAURANT & GRILLS</h5>
                          <p className="portfolio-pjt-info-box-para">Rigga Road, Deira, 2nd December St, Al Satwa – Dubai <br />Air Conditioning System, Refrigeration System & Cooking Units Services.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="portfolio-projects-infobox">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <img src="/img/portfolio-projects/nmc.png" />
                        </div>
                        <div className="col-lg-9 col-8">
                          <h5 className="portfolio-pjt-info-box-title">NMC Hospital</h5>
                          <p className="portfolio-pjt-info-box-para">Dubai <br />Laboratory Refrigeration System <br /><strong>(Since: 2017-Present)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

