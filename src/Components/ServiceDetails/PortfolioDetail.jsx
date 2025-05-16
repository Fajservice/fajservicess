

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
            <p>At FAJ Technical Services LLC, we are dedicated to providing comprehensive technical services, including installation, maintenance, and MEP services that enhance operational efficiency and sustainability. Our commitment to innovation and customer satisfaction aligns with your needs.</p>
          </div>
        </section>
        
        <section className="section cs_py_30">
          <div className="container">
              <h3>Our Clients</h3>
              <div className="portfolio-clnts-dtls">
                <div className="row">
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/NTDE.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/Belhasa-real-estate.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/Millennium.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/abensal.jpg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/tornatech-1.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/holidayinn.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/partyzone.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/imperial.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/pomegranate.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/emirates-catering.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/roseleaf.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/z-cars.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/AirForce.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/transguard.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/tsm.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/tirinity.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/silver.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/takeda.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/cherwell.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/mfl.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/sakr.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/ace.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/uniworld.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/mirchi.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/desert.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/fratelli.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/VIKAS.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/core-me.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/autohaus.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/AKAS.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/MOBH.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/gtech.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/layaly.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/seatrade.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/accuro.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/max.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/zaya.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/al-rawabi.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/six.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/watts.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/mammaitalia.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/kabab.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/urbantails.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/al-thika.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/dkint.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/dpworld.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/goldensun.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/ubl.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/berts.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/beanstalk.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/reliance.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/BSBG.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/al-rayan.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/golden-gate.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/neuro-spinal-hospital.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/Majid-al-futtaim.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/cmc.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/saken-properties.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/al-yousaf-motor.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/EMS.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/caramel-group.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/obegi.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/concordia.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/driven-properties.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/foodie-co.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/mattress.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/al-baraa.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/inaya.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/droo.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/cerruti.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/jafza.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/high-mark.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/shein.jpeg" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/1 (1).png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/2.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/3.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/4.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/5.png" />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="portfolio-clnts-img">
                      <img src="/dist/img/portfolio-clients/6.png" />
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
                          <img src="/dist/img/portfolio-projects/AirForce.jpeg" />
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
                          <img src="/dist/img/portfolio-projects/AirForce.jpeg" />
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
                          <img src="/dist/img/portfolio-projects/nex.png" />
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
                          <img src="/dist/img/portfolio-projects/china.jpg" />
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
                          <img src="/dist/img/portfolio-projects/canadian.jpg" />
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
                          <img src="/dist/img/portfolio-projects/ibis.jpg" />
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
                          <img src="/dist/img/portfolio-projects/jazeera.jpg" />
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
                          <img src="/dist/img/portfolio-projects/parkside.png" />
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
                          <img src="/dist/img/portfolio-projects/middlesex.jpg" />
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
                          <img src="/dist/img/portfolio-projects/crowneplaza.jpg" />
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
                          <img src="/dist/img/portfolio-projects/repton.png" />
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
                          <img src="/dist/img/portfolio-projects/dukes.jpg" />
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
                          <img src="/dist/img/portfolio-projects/fawaz.jpg" />
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
                          <img src="/dist/img/portfolio-projects/movenpick.jpg" />
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
                          <img src="/dist/img/portfolio-projects/baumatic.jpg" />
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
                          <img src="/dist/img/portfolio-projects/eminence.jpg" />
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
                          <img src="/dist/img/portfolio-projects/transguard.jpeg" />
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
                          <img src="/dist/img/portfolio-projects/alstom.jpg" />
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
                          <img src="/dist/img/portfolio-projects/bertoni.jpg" />
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
                          <img src="/dist/img/portfolio-projects/dubai-properties.jpg" />
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
                          <img src="/dist/img/portfolio-projects/nandos.jpg" />
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
                          <img src="/dist/img/portfolio-projects/tsm.jpeg" />
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
                          <img src="/dist/img/portfolio-projects/eskinita.jpg" />
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
                          <img src="/dist/img/portfolio-projects/partyzone.jpeg" />
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
                          <img src="/dist/img/portfolio-projects/uniworld.png" />
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
                          <img src="/dist/img/portfolio-projects/beirut.jpg" />
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
                          <img src="/dist/img/portfolio-projects/nmc.png" />
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

