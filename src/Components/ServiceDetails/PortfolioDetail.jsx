import {Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../Contact/Serviceappointemnt';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const PortfolioDetail = ({titleSeo , description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Our Portfolio | Best Repair, Maintenance Services Company in Dubai");
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
                    <img src={getImageSrc('portfolio-clients/NTDE')} alt="NTDE" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/Belhasa-real-estate')} alt="Belhasa-real-estate" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/Millennium')} alt="Millennium" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/abensal')} alt="Abensal" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/tornatech-1')} alt="Tornatech" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/holidayinn')} alt="Holiday Inn" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/partyzone')} alt="Party Zone" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/imperial')} alt="Imperial" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/pomegranate')} alt="Pomegranate" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/emirates-catering')} alt="Emirates Catering" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/roseleaf')} alt="Roseleaf" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/z-cars')} alt="Z Cars" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/AirForce')} alt="Air Force" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/transguard')} alt="Transguard" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/tsm')} alt="TSM" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/tirinity')} alt="Trinity" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/silver')} alt="Silver" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/takeda')} alt="Takeda" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/cherwell')} alt="Cherwell" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/mfl')} alt="MFL" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/sakr')} alt="Sakr" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/ace')} alt="Ace" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/uniworld')} alt="Uniworld" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/mirchi')} alt="Mirchi" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/desert')} alt="Desert" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/fratelli')} alt="Fratelli" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/VIKAS')} alt="Vikas" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/core-me')} alt="Core ME" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/autohaus')} alt="Autohaus" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/AKAS')} alt="AKAS" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/MOBH')} alt="MOBH" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/gtech')} alt="GTech" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/layaly')} alt="Layaly" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/seatrade')} alt="Seatrade" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/accuro')} alt="Accuro" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/max')} alt="Max" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/zaya')} alt="Zaya" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/al-rawabi')} alt="Al Rawabi" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/six')} alt="Six" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/watts')} alt="Watts" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/mammaitalia')} alt="Mamma Italia" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/kabab')} alt="Kabab" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/urbantails')} alt="Urban Tails" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/al-thika')} alt="Al Thika" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/dkint')} alt="DK Int" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/dpworld')} alt="DP World" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/goldensun')} alt="Golden Sun" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/ubl')} alt="UBL" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/berts')} alt="Berts" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/beanstalk')} alt="Beanstalk" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/reliance')} alt="Reliance" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/BSBG')} alt="BSBG" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/al-rayan')} alt="Al Rayan" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/golden-gate')} alt="Golden Gate" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/neuro-spinal-hospital')} alt="Neuro Spinal Hospital" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/Majid-al-futtaim')} alt="Majid Al Futtaim" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/cmc')} alt="CMC" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/saken-properties')} alt="Saken Properties" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/al-yousaf-motor')} alt="Al Yousaf Motor" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/EMS')} alt="EMS" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/caramel-group')} alt="Caramel Group" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/obegi')} alt="Obegi" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/concordia')} alt="Concordia" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/driven-properties')} alt="Driven Properties" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/foodie-co')} alt="Foodie Co" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/mattress')} alt="Mattress" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/al-baraa')} alt="Al Baraa" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/inaya')} alt="Inaya" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/droo')} alt="Droo" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/cerruti')} alt="Cerruti" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/jafza')} alt="JAFZA" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/high-mark')} alt="High Mark" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/shein')} alt="Shein" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/Finerton')} alt="Finerton" style={{objectFit: 'contain'}} />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/jafferbhai')} alt="Jafferbhai" />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/galaries')} alt="Galaries" style={{objectFit: 'contain'}} />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="portfolio-clnts-img">
                    <img src={getImageSrc('portfolio-clients/strada')} alt="Strada" />
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
                        <img src={getImageSrc('portfolio-projects/AirForce')} alt="USA Air Force" />
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
                        <img src={getImageSrc('portfolio-projects/AirForce')} alt="USA Air Force" />
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
                        <img src={getImageSrc('portfolio-projects/nex')} alt="USA Navy NEX" />
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
                        <img src={getImageSrc('portfolio-projects/china')} alt="China Petroleum" />
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
                        <img src={getImageSrc('portfolio-projects/canadian')} alt="Canadian University" />
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
                        <img src={getImageSrc('portfolio-projects/ibis')} alt="Hotel Ibis" />
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
                        <img src={getImageSrc('portfolio-projects/jazeera')} alt="University of Jazeera" />
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
                        <img src={getImageSrc('portfolio-projects/parkside')} alt="Parkside Suites" />
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
                        <img src={getImageSrc('portfolio-projects/middlesex')} alt="Middlesex University" />
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
                        <img src={getImageSrc('portfolio-projects/crowneplaza')} alt="Crowne Plaza" />
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
                        <img src={getImageSrc('portfolio-projects/repton')} alt="Repton School" />
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
                        <img src={getImageSrc('portfolio-projects/dukes')} alt="Dukes Hotels" />
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
                        <img src={getImageSrc('portfolio-projects/fawaz')} alt="Fawaz Trading" />
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
                        <img src={getImageSrc('portfolio-projects/movenpick')} alt="Movenpick Hotels" />
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
                        <img src={getImageSrc('portfolio-projects/baumatic')} alt="Baumatic" />
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
                        <img src={getImageSrc('portfolio-projects/eminence')} alt="Eminence International" />
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
                        <img src={getImageSrc('portfolio-projects/transguard')} alt="Transguard Group" />
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
                        <img src={getImageSrc('portfolio-projects/alstom')} alt="Alstom" />
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
                        <img src={getImageSrc('portfolio-projects/bertoni')} alt="Bertoni" />
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
                        <img src={getImageSrc('portfolio-projects/dubai-properties')} alt="Dubai Properties" />
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
                        <img src={getImageSrc('portfolio-projects/nandos')} alt="Nandos" />
                      </div>
                      <div className="col-lg-9 col-8">
                        <h3 className="portfolio-pjt-info-box-title">NANDO'S</h3>
                        <p className="portfolio-pjt-info-box-para">Staff Accommodation Dubai & Sharjah <br />MEP Services, Air Conditioning, and Refrigeration <br /><strong>(Since: 2013-2015)</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="portfolio-projects-infobox">
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <img src={getImageSrc('portfolio-projects/tsm')} alt="Talal Supermarket" />
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
                        <img src={getImageSrc('portfolio-projects/eskinita')} alt="Eskinita Restaurant" />
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
                        <img src={getImageSrc('portfolio-projects/partyzone')} alt="Party Zone" />
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
                        <img src={getImageSrc('portfolio-projects/uniworld')} alt="Uniworld Medical" />
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
                        <img src={getImageSrc('portfolio-projects/beirut')} alt="Beirut Restaurant" />
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
                        <img src={getImageSrc('portfolio-projects/nmc')} alt="NMC Hospital" />
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
