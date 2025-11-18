
import {Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../Contact/Serviceappointemnt';
import HeaderForm from "../Headeform/HeaderForm";


const PortfolioDetail = ({titleSeo , description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Our Portfolio | Best Maintenance Services Company in Dubai");
  const metadescription = String(description || "We established in 2010, offers supply, installation, by FAJ online shop, spare parts for air conditioning and refrigeration appliances in Dubai.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "FAJ Technical Service LLC Portfolio");
  const metaURL = String(URL || "https://www.fajservices.ae/our-portfolio/").replace(/\/?$/, '/');

  return (
    <>
       <HelmetProvider>
        <Helmet>
          <title>{metatitle}</title>
          <meta name="description" content={metadescription}></meta>
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={metatitle} />
          <meta property="og:description" content={metadescription} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metatitle} />
          <meta name="twitter:description" content={metadescription} />
          <meta name="twitter:url" content={metaURL} />
        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">
        
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Our Portfolio</h1>
            <p>At FAJ Technical Services L.L.C, we are dedicated to providing comprehensive technical services, including installation, maintenance, and MEP services that enhance operational efficiency and sustainability. Our commitment to innovation and customer satisfaction aligns with your needs.</p>
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container">
            <h2>Our Clients</h2>
            <div className="portfolio-clnts-dtls">
              <div className="row">
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img  src="/img/portfolio-clients/NTDE.png" alt="portfolio" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/Belhasa-real-estate.jpeg" alt="Belhasa-real-estate" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/Millennium.jpeg" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/abensal.jpg"
                    alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/tornatech-1.png" 
                    alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/holidayinn.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/partyzone.jpeg" 
                    alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/imperial.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/pomegranate.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/emirates-catering.png" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/roseleaf.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/z-cars.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/AirForce.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/transguard.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/tsm.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/tirinity.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/silver.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/takeda.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/cherwell.png" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/mfl.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/sakr.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/ace.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/uniworld.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/mirchi.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/desert.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/fratelli.jpeg" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/VIKAS.jpeg" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/core-me.jpeg" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/autohaus.jpeg" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/AKAS.jpeg" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/MOBH.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/gtech.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/layaly.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/seatrade.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/accuro.png" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/max.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/zaya.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/al-rawabi.png" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/six.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/watts.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/mammaitalia.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/kabab.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/urbantails.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/al-thika.jpeg" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/dkint.jpeg" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/dpworld.jpeg" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/goldensun.jpeg" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/ubl.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/berts.jpeg" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/beanstalk.jpeg" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/reliance.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/BSBG.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/al-rayan.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/golden-gate.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/neuro-spinal-hospital.png" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/Majid-al-futtaim.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/cmc.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/saken-properties.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/al-yousaf-motor.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/EMS.png" alt="Millennium"  />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/caramel-group.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/obegi.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/concordia.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/driven-properties.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/foodie-co.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/mattress.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/al-baraa.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/inaya.png" alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/droo.png" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/cerruti.png" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/jafza.png" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/high-mark.png" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/shein.jpeg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/1 (1).png" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/2.png" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/3.png" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/4.png" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/5.png" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/6.png" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/Finerton.png" alt="Millennium"  style={{objectFit: 'contain'}}/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/jafferbhai.jpg" alt="Millennium"/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/galaries.png" alt="Millennium"  style={{objectFit: 'contain'}}/>
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src="/img/portfolio-clients/strada.avif" alt="strada"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2>Our Projects</h2>
            <div className="portfolio-projects-cols">
              <div className="row">
                <div className="col-md-6">
                  <div className="portfolio-projects-infobox">
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <img src="/img/portfolio-projects/AirForce.jpeg" />
                      </div>
                      <div className="col-lg-9 col-8">
                        <h3 className="portfolio-pjt-info-box-title">USA AIR FORCE DHAFRAH AIR BASE – ABU DHABI</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">USA AIR FORCE DHAFRAH AIR BASE – ABU DHABI</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">USA NAVY BY NEX EXCHANGE – DUBAI</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">CHINA PETROLEUM BUREAU DUBAI</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">CANADIAN UNIVERSITY</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">HOTEL IBIS WORLD TRADE CENTRE DUBAI</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">UNIVERSITY OF JAZEERA</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">PARKSIDE SUITES HOTEL APARTMENTS LLC</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">Middlesex University</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">Crowne Plaza Hotels</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">REPTON SCHOOL</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">Dukes Hotels</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">Fawaz Trading and Engineering Services.CO LLC</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">Movenpick Hotels</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">BAUMATIC MIDDLE EAST</h3>
                        <p className="portfolio-pjt-info-box-para">FAJ Technical Services L.L.C, Authorized Baumatic Kitchen Appliances Service Partner & Service Center in UAE. <br /><strong>(Since: 2016-2019)</strong></p>
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
                        <h3 className="portfolio-pjt-info-box-title">Eminence International Contracting Co LLC</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">TRANSGUARD GROUP LLC</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">ALSTOM</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">BERTONI LLC</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">Dubai Properties</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">NANDO’S</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">TALAL SUPERMARKET</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">ESKINITA RESTAURANT AT WELCOME HOTEL</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">Party Zone LLC</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">Uniworld Medical FZE</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">BEIRUT RESTAURANT & GRILLS</h3>
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
                        <h3 className="portfolio-pjt-info-box-title">NMC Hospital</h3>
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

