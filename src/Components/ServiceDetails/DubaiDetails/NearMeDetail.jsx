

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';


import loadBackgroudImages from "../../Common/loadBackgroudImages";
import HeaderForm from "../../Headeform/HeaderForm";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton.jsx";
import GetQuoteButton from "../../Buttons/GetQuoteButton.jsx";
import Blog3 from "../../Blog/Blog3.jsx";
import Testimonial1 from "../../Testimonial/Testimonial1.jsx";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const NearMeDetail = ({ subtitle, title, reviewsbg }) => {

  // For SEO
  const titleSeo = "Repair Near Me in Dubai Appliance Service Center | Fix AC";
  const description = "Find Home & Commericial Repair Service Near Me of AC, Fridge, Washing Machine, Dishwasher, Oven, Coffee Machine, Vacuum, Freezer, Spare Parts Shop";
  const Author = "Faj Technical Servcies";
  const Keyword = "AC repair and Maintenance Service Near me Dubai, Appliances repair Service Dubai";
  const URL = "https://www.fajservices.ae/dubai/near-me/";

  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = getImageSrc('testimonialbg')
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  // State for fetched data
  const [data, setData] = useState([]);
  const [testimonial_data, setTestimonialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // Fetch JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsResponse, testimonialsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/DubaiData/FAQs/NearMeFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/DubaiData/Testmonials/NearMeTestimonial.json`)
        ]);

        const faqsData = await faqsResponse.json();
        const testimonialsData = await testimonialsResponse.json();

        setData(faqsData);
        setTestimonialData(testimonialsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const [activeTab, setActiveTab] = useState('1');

  return (
    <>
      <HelmetProvider>
        <title>{titleSeo}</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={Keyword} />
        <meta name="author" content={Author} />
        <meta name="robots" content="index, follow" />
        <Link rel="canonical" href={titleSeo} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={titleSeo} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />

      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_24">Repair Near Me </h1>
            <h2 className="cs_fs_20">
              Reliable Home Appliance Repair Services – Quick and Affordable
            </h2>

            <p className="description">
              Are you searching for a trustworthy home appliance repair service center nearby? We offer expert repair and support for all types of commercial and residential appliances, including air conditioners, laundry machines, washing machines, dryers, refrigerators, ovens, dishwashers, and more. Our skilled technicians provide fast and efficient repair services, ensuring your appliances are fixed affordably and effectively.
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>


        <section className="section cs_py_30 near-me-service-category-section">
          <div className=" near-me-content-wrapper container">
            <h2 className=" near-me-title cs_fs_24">
              Choose Repair Service by Categories – Easily Find the Right Appliance Repair
            </h2>
            <p className=" near-me-subtitle">
              At FAJ Technical Services L.L.C, we simplify the process of selecting the right repair service for your commercial, small, and large appliances. Whether you need washing machine repair, refrigerator service, AC maintenance, or any other appliance repair, our categorized services make it easy for you to quickly find the best solution.
            </p>
            <span className="d-block seprator-line mb-3"></span>

            <div className=" near-me-grid">

              <a href="/dubai/ac-repair-near-me/" className=" near-me-service-box">
                <div className=" near-me-service-title">Air Conditioners repair near me </div>
              </a>

              <a href="/dubai/refrigerator-repair-near-me/" className=" near-me-service-box">
                <div className=" near-me-service-title">Refrigerators repair near me </div>
              </a>

              <a href="/dubai/washing-machine-repair-near-me/" className=" near-me-service-box">
                <div className=" near-me-service-title">Washing Machines repair near me </div>
              </a>

              <a href="#" className=" near-me-service-box">
                <div className=" near-me-service-title"> Dryer repair near me </div>
              </a>

              <a href="#" className=" near-me-service-box">
                <div className=" near-me-service-title"> Oven repair near me </div>
              </a>

              <a href="#" className=" near-me-service-box">
                <div className=" near-me-service-title"> Dishwasher repair near me </div>
              </a>
              <a href="#" className=" near-me-service-box">
                <div className=" near-me-service-title"> Home appliances included small appliances repair near me </div>
              </a>

              <a href="#" className=" near-me-service-box">
                <div className=" near-me-service-title"> Hood / chimney repair near me </div>
              </a>

              <a href="#" className=" near-me-service-box">
                <div className=" near-me-service-title"> Stove repair near me </div>
              </a>

              <a href="#" className=" near-me-service-box">
                <div className=" near-me-service-title"> Stand mixer repair near me </div>
              </a>

              <a href="#" className=" near-me-service-box">
                <div className=" near-me-service-title"> Ice maker repair near me </div>
              </a>
              <a href="#" className=" near-me-service-box">
                <div className=" near-me-service-title"> Kitchen equipment repair near me </div>
              </a>
              <a href="#" className=" near-me-service-box">
                <div className=" near-me-service-title"> Vacuum cleaner repair near me </div>
              </a>

            </div>

            <GetQuoteButton></GetQuoteButton>

          </div>
        </section >



        <section className="section cs_py_30">
          <div className="container">
            <h2 className="near-me-title cs_fs_24">
              Why Choose Our Appliance Repair Service? – Trusted & Reliable Home Appliance Repairs
            </h2>
            <p className="near-me-subtitle">
              When it comes to home appliance repair, you need a trusted service provider that guarantees quality repairs, fast service, and expert technicians...
            </p>
            <span className="d-block text-center seprator-line mb-3"></span>

            {/* row 1 */}

            <div className="row g-3 align-items-stretch mb-3">
              <div className="col-md-6">

                <div className="p-3 border rounded h-100">
                  <h3 className="cs_fs_20">We are Home Appliance Repair Service Centers</h3>
                  <p>We repair All brands and models of Home appliances including; washing machines, fridge freezers, dishwashers, tumble dryers, washer dryers, cookers, ovens, hobs. All our repairs are performed by trained engineers .

                    <br />  We are the appliance repair experts and our engineers have already successfully repairing washing machines, fridge freezers, dishwashers, tumble dryers, washer dryers, cookers, ovens, hobs, Whether it is your Washing Machine, Fridge, freezer, Cooker, Dishwasher or Tumble Dryer that has developed a fault we will do all we can to fix it for you, fast! All our repairs are guaranteed and you can book online 24/7, 365 days a year .
                  </p>
                  <ul>
                    <li> <strong> Expert Technicians: </strong> Our engineers are trained and experienced in handling various appliance issues across all major brands. </li>
                    <li> <strong> Comprehensive Services: </strong> From minor fixes to major repairs, we cover a broad spectrum of home appliance services. </li>
                    <li> <strong> Guaranteed Repairs: </strong> We stand by the quality of our work, offering guarantees on all repairs performed. </li>
                    <li> <strong> Convenient Booking: </strong> Our online booking system is available 24/7, allowing you to schedule repairs at your convenience. </li>
                    <li> <strong> Prompt Support: </strong> We understand the importance of functional appliances in daily life and strive to provide quick and efficient repair services. </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 border rounded p-3 d-flex align-items-center">
                <img className=""  src={getImageSrc('Refrigerator-Appliances-to-Repair')} alt="Book Now" />
              </div>

            </div>


            {/* row 2 */}
            <div className="row g-3 align-items-stretch">


              <div className="col-md-6">
                <div className=" border rounded h-100 p-3 d-flex align-items-center" >
                  <img className=""  src={getImageSrc('Washing-Machine-Repair-in-Dubai-Call-Out')} alt="Book Now" />
                </div>

              </div>


              <div className="col-md-6 px-0">

                <div className="p-3 border rounded h-100">
                  <h2 className="cs_fs_20">
                    Common Appliance Repair Issues We Fix
                  </h2>
                  <p>
                    At FAJ Technical Services L.L.C, we provide expert home appliance repair services for a
                    wide range of issues. If you’re experiencing any of the following
                    problems, our certified technicians are ready to assist you.
                  </p>

                  <div className="row">
                    <div className="col-md-6">

                      {/* Washing machine */}
                      <h2 className="cs_fs_20" style={{ fontSize: "17px", marginBottom: "0" }}>
                        Washing Machine Repair
                      </h2>
                      <p>
                        <img className="emoji" src={getImageSrc('icon/drum')} alt="icon" />
                        Drum not rotating
                        <br />

                        <img className="emoji" src={getImageSrc('icon/doorlock')} alt="icon" />
                        Door locked defect
                        <br />

                        <img className="emoji" src={getImageSrc('icon/drain')} alt="icon" />
                        Drain blockage & water leakage
                        <br />

                        <img className="emoji" src={getImageSrc('icon/spining')} alt="icon" />
                        No spinning / excessive vibration
                        <br />

                        <img className="emoji" src={getImageSrc('icon/nopower')} alt="icon" />
                        No power or display error
                        <br />

                        <img className="emoji" src={getImageSrc('icon/speaker')} alt="icon" />
                        Unusual noise during operation
                      </p>

                      {/* Freezer Repair */}

                      <h2 className="cs_fs_20" style={{ fontSize: "17px", marginBottom: "0" }}>
                        Freezer Repair
                      </h2>
                      <p>
                        <img className="emoji" src={getImageSrc('icon/cool')} alt="icon" />
                        Not cooling efficiently

                        <br />
                        <img className="emoji" src={getImageSrc('icon/icebuild')} alt="icon" />
                        Ice buildup and frost issues

                        <br />
                        <img className="emoji" src={getImageSrc('icon/nopower')} alt="icon" />
                        No power

                        <br />
                        <img className="emoji" src={getImageSrc('icon/speaker')} alt="icon" />
                        Compressor making loud noises
                      </p>

                      {/* Candy Washer Dryer Repair */}

                      <h2 className="cs_fs_20" style={{ fontSize: "17px", marginBottom: "0" }}>
                        Candy Washer Dryer Repair
                      </h2>
                      <p>
                        <img className="emoji" src={getImageSrc('icon/temp')} alt="icon" />
                        Clothes not drying properly
                        <br />

                        <img className="emoji" src={getImageSrc('icon/display_error')} alt="icon" />
                        Display error messages
                        <br />

                        <img className="emoji" src={getImageSrc('icon/drum')} alt="icon" />
                        Drum rotation failure
                        <br />

                        <img className="emoji" src={getImageSrc('icon/speaker')} alt="icon" />
                        Unusual noise & excessive vibration
                      </p>


                    </div>

                    <div className="col-md-6">

                      {/* Refrigerator Repair */}
                      <h2 className="cs_fs_20" style={{ fontSize: "17px", marginBottom: "0" }}>
                        Refrigerator Repair
                      </h2>
                      <p>
                        <img className="emoji" src={getImageSrc('icon/cool')} alt="icon" />
                        Not cooling properly
                        <br />


                        <img className="emoji" src={getImageSrc('icon/ice')} alt="icon" />
                        Excessive ice formation
                        <br />

                        <img className="emoji" src={getImageSrc('icon/nopower')} alt="icon" />
                        No power
                        <br />

                        <img className="emoji" src={getImageSrc('icon/speaker')} alt="icon" />
                        Loud compressor noise

                      </p>

                      {/* Dishawser */}
                      <h2 className="cs_fs_20" style={{ fontSize: "17px", marginBottom: "0" }}>
                        Dishwasher Repair
                      </h2>
                      <p>
                        <img className="emoji" src={getImageSrc('icon/odor')} alt="icon" />
                        Bad odor inside the Dishwasher
                        <br />

                        <img className="emoji" src={getImageSrc('icon/icebuild')} alt="icon" />
                        No steam during wash cycles
                        <br />

                        <img className="emoji" src={getImageSrc('icon/no_water')} alt="icon" />
                        No water intake
                        <br />

                        <img className="emoji" src={getImageSrc('icon/soap')} alt="icon" />
                        Soap dispenser not working
                        <br />

                        <img className="emoji" src={getImageSrc('icon/white_patch')} alt="icon" />
                        White patches left on utensils
                      </p>


                      {/* Tumble Dryer Repair */}
                      <h2 className="cs_fs_20" style={{ fontSize: "17px", marginBottom: "0" }}>
                        Tumble Dryer Repair
                      </h2>
                      <p>
                        <img className="emoji" src={getImageSrc('icon/temp')} alt="icon" />
                        Not drying clothes properly
                        <br />

                        <img className="emoji" src={getImageSrc('icon/drum')} alt="icon" />
                        Drum not rotating
                        <br />

                        <img className="emoji" src={getImageSrc('icon/speaker')} alt="icon" />
                        Loud noise & excessive vibration
                        <br />

                        <img className="emoji" src={getImageSrc('icon/display_error')} alt="icon" />
                        Display error or system malfunction
                      </p>


                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </section >


        <section className="section cs_py_30 near-me-service-category-section">
          <div className=" near-me-content-wrapper container">
            <h2 className=" near-me-title cs_fs_24">
              Brands We Repair
            </h2>
            <p className=" near-me-subtitle">
              We service a wide range of non-authorized brands (T&C apply), including:
            </p>
            <h2 className="cs_fs_20 mb-0">Air Conditioner</h2>
            <span className="d-block seprator-line mb-3"></span>

            <div className="near-me-grid">
              <a href="/services/air-conditioning-repair/brands/aftron/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Aftron</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/bluestar/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Bluestar</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/bryant/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Bryant</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/coleman/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Coleman</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/cooline/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Cooline</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/crafft/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Crafft</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/daewoo/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Daewoo</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/daikin/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Daikin</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/daikool/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Daikool</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/fujitsu/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Fujitsu</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/goodman/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Goodman</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/gree/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Gree</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/haier/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Haier</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/hitachi/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Hitachi</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/lg/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">LG</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/lennox/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Lennox</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/mcquay/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">MC Quay</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/midea/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Midea</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/mitsubishi/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Mitsubishi</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/nikai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Nikai</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/o-general/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">O General</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/panasonic/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Panasonic</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/rheem/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Rheem</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/ruud/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Ruud</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/samsung/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Samsung</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/sanyo/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Sanyo</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/supra/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">SKM</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/sub-zero/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Subzero</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/super-general/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Super General</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/supra/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Supra</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/tcl/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">TCL</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/toshiba/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Toshiba</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/trane/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Trane</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/westpoint/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Westpoint</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/whirlpool/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Whirlpool</div>
              </a>
              <a href="/services/air-conditioning-repair/brands/york/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">York</div>
              </a>

            </div>

            <h2 className="cs_fs_20 mb-0">Home Appliances</h2>
            <span className="d-block seprator-line mb-3"></span>

            <div className="near-me-grid">

              <a href="/services/home-appliances-repair/brands/aeg/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">AEG</div>
              </a>
              <a href="/services/home-appliances-repair/brands/aftron/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Aftron</div>
              </a>
              <a href="/services/home-appliances-repair/brands/admiral/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Admiral</div>
              </a>
              <a href="/services/home-appliances-repair/brands/ariston/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Ariston</div>
              </a>
              <a href="/services/home-appliances-repair/brands/baumatic/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Baumatic</div>
              </a>
              <a href="/services/home-appliances-repair/brands/beko/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Beko</div>
              </a>
              <a href="/services/home-appliances-repair/brands/bertazzoni/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Bertazzoni</div>
              </a>
              <a href="/services/home-appliances-repair/brands/blomberg/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Blomberg</div>
              </a>
              <a href="/services/home-appliances-repair/brands/bompani/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Bompani</div>
              </a>
              <a href="/services/home-appliances-repair/brands/boston/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Boston</div>
              </a>
              <a href="/services/home-appliances-repair" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Bosch</div>
              </a>
              <a href="/services/home-appliances-repair/brands/brandt/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Brandt</div>
              </a>
              <a href="/services/home-appliances-repair/brands/candy/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Candy</div>
              </a>
              <a href="/services/home-appliances-repair/brands/daewoo/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Daewoo</div>
              </a>
              <a href="/services/home-appliances-repair/brands/de-dietrich/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">De Dietrich</div>
              </a>
              <a href="/services/home-appliances-repair/brands/electrolux/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Electrolux</div>
              </a>
              <a href="/services/home-appliances-repair/brands/elica/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Elica</div>
              </a>
              <a href="/services/home-appliances-repair/brands/faber/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Faber</div>
              </a>
              <a href="/services/home-appliances-repair/brands/fagor/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Fagor</div>
              </a>
              <a href="/services/home-appliances-repair/brands/fisher-paykel/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Fisher and Paykel</div>
              </a>
              <a href="/services/home-appliances-repair/brands/foster/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Foster</div>
              </a>
              <a href="/services/home-appliances-repair/brands/franke/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Franke</div>
              </a>
              <a href="/services/home-appliances-repair/brands/frigidaire/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Frigidaire</div>
              </a>
              <a href="/services/home-appliances-repair/brands/gaggenau/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Gaggenau</div>
              </a>
              <a href="/services/home-appliances-repair/brands/ge-general-electric/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">GE (General Electric)</div>
              </a>
              <a href="/services/home-appliances-repair/brands/gibson/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Gibson</div>
              </a>
              <a href="/services/home-appliances-repair/brands/gorenje/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Gorenje</div>
              </a>
              <a href="/services/home-appliances-repair/brands/haier/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Haier</div>
              </a>
              <a href="/services/home-appliances-repair/brands/hisense/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Hisense</div>
              </a>
              <a href="/services/home-appliances-repair/brands/hitachi/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Hitachi</div>
              </a>
              <a href="/services/home-appliances-repair/brands/hoover/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Hoover</div>
              </a>
              <a href="/services/home-appliances-repair/brands/hotpoint/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Hotpoint</div>
              </a>
              <a href="/services/home-appliances-repair/brands/ifb/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">IFB</div>
              </a>
              <a href="/services/home-appliances-repair/brands/indesit/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Indesit</div>
              </a>
              <a href="/services/home-appliances-repair/brands/kenmore/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Kenmore</div>
              </a>
              <a href="/services/home-appliances-repair/brands/kenwood/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Kenwood</div>
              </a>
              <a href="/services/home-appliances-repair/brands/kelvinator/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Kelvinator</div>
              </a>
              <a href="/services/home-appliances-repair/brands/kitchenaid/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">KitchenAid</div>
              </a>
              <a href="/services/home-appliances-repair/brands/la-germania/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">La Germania</div>
              </a>
              <a href="/services/home-appliances-repair/brands/lg/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">LG</div>
              </a>
              <a href="/services/home-appliances-repair/brands/liebherr/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Liebherr</div>
              </a>
              <a href="/services/home-appliances-repair/brands/marvel/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Marvel</div>
              </a>
              <a href="/services/home-appliances-repair/brands/maytag/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Maytag</div>
              </a>
              <a href="/services/home-appliances-repair/brands/miele/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Miele</div>
              </a>
              <a href="/services/home-appliances-repair/brands/neff/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Neff</div>
              </a>
              <a href="/services/home-appliances-repair/brands/panasonic/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Panasonic</div>
              </a>
              <a href="/services/home-appliances-repair/brands/samsung/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Samsung</div>
              </a>
              <a href="/services/home-appliances-repair/brands/sanyo/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Sanyo</div>
              </a>
              <a href="/services/home-appliances-repair/brands/sears/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Sears</div>
              </a>
              <a href="/services/home-appliances-repair/brands/sharp/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Sharp</div>
              </a>
              <a href="/services/home-appliances-repair/brands/siemens/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Siemens</div>
              </a>
              <a href="/services/home-appliances-repair/brands/smeg/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Smeg</div>
              </a>
              <a href="/services/home-appliances-repair/brands/speed-queen/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Speed Queen</div>
              </a>
              <a href="/services/home-appliances-repair/brands/sub-zero/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Sub‑Zero</div>
              </a>
              <a href="/services/home-appliances-repair/brands/teka/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Teka</div>
              </a>
              <a href="/services/home-appliances-repair/brands/terim/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Terim</div>
              </a>
              <a href="/services/home-appliances-repair/brands/thermador/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Thermador</div>
              </a>
              <a href="/services/home-appliances-repair/brands/toshiba/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Toshiba</div>
              </a>
              <a href="/services/home-appliances-repair/brands/unimac/" className="brand-near-me-service-box">
                <div class="brand-near-me-service-title">Unimac</div>
              </a>
              <a href="/services/home-appliances-repair/brands/viking/" className="brand-near-me-service-box">
                <div class="brand-near-me-service-title">Viking</div>
              </a>
              <a href="/services/home-appliances-repair/brands/westpoint/" className="brand-near-me-service-box">
                <div class="brand-near-me-service-title">Westpoint</div>
              </a>
              <a href="/services/home-appliances-repair/brands/whirlpool/" className="brand-near-me-service-box">
                <div class="brand-near-me-service-title">Whirlpool</div>
              </a>
              <a href="/services/home-appliances-repair/brands/white-westinghouse/" className="brand-near-me-service-box">
                <div class="brand-near-me-service-title">White Westinghouse</div>
              </a>
              <a href="/services/home-appliances-repair/brands/wolf/" className="brand-near-me-service-box">
                <div class="brand-near-me-service-title">Wolf</div>
              </a>
              <a href="/services/home-appliances-repair/brands/zanussi/" className="brand-near-me-service-box">
                <div class="brand-near-me-service-title">Zanussi</div>
              </a>
            </div>
            <WhatsappIconButton></WhatsappIconButton>

            <GetQuoteButton></GetQuoteButton>

          </div>
        </section >

        <section className="section cs_py_30">
          <div className=" near-me-content-wrapper container">
            <h2 className=" near-me-title cs_fs_24">
              How It Works – Easy & Hassle-Free Home Appliance Repair Process
            </h2>
            <p className=" near-me-subtitle">
              At FAJ Help, we simplify the process of selecting the right repair service for your commercial, small, and large appliances. Whether you need washing machine repair, refrigerator service, AC maintenance, or any other appliance repair, our categorized services make it easy for you to quickly find the best solution.
            </p>
            <span className="d-block text-center seprator-line mb-3"></span>

            <div className="near-me-grid justify-content-around">


              <a href="#" className=" brand-near-me-service-box">
                <div className=" near-me-work-title">
                  <img className="mb-3 w-25"  src={getImageSrc('icon/book')}  alt="Book Now" />
                  <p>Book Your Repair</p>
                </div>
              </a>

              <a href="#" className=" brand-near-me-service-box">
                <div className=" near-me-work-title">
                  <img className="mb-3 w-25"  src={getImageSrc('icon/callicon')}  alt="Receive Confirmation
Call" />
                  <p>Receive Confirmation Call</p>
                </div>
              </a>

              <a href="#" className=" brand-near-me-service-box">
                <div className=" near-me-work-title">
                  <img className="mb-3 w-25"  src={getImageSrc('icon/prob')}  alt="Problem detection and Repair" />
                  <p>Problem detection and
                    Repair</p>
                </div>
              </a>
            </div>




            <div className="container mt-4">
              <ul className="nav nav-tabs nav-fill mb-0" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === '1' ? 'active' : ''}`}
                    onClick={() => setActiveTab('1')}
                    role="tab"
                  >
                    Affordable & Reliable Home Appliance Repair Services
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === '2' ? 'active' : ''}`}
                    onClick={() => setActiveTab('2')}
                    role="tab"
                  >
                    FAJ – Your Trusted Home Appliance Repair & Service Center
                  </button>
                </li>

              </ul>

              <div className="tab-content">
                {activeTab === '1' && (
                  <div className="tab-pane bg-light-gray p-3 fade show active" role="tabpanel">

                    <p>
                      <strong>  We Offer Affordable Washer Repair</strong>
                      <br />
                      If your washing machine is leaking or not able to spin properly anymore, you have a problem. Going to the local laundromat is not an option for some of you, you just want to be able to use your washing machine and wash your clothes and linens as usual. Consider us for your washing Machine Repair and our team of experts will come to the rescue as soon as we receive your call , Our repairs are completed maximum within 48 Hours .
                      <br />

                      <strong> Affordable Refrigerator Repair</strong><br />
                      Your fridge is one of the most important appliances in your kitchen. Without it, you cannot store and keep cold a large number of food items that need to be kept cool or frozen. Without chilled compartments, you might have to throw it all away in only a few hours.
                      <br />
                      A malfunctioning fridge or one with damaged parts can also be a huge hassle, not allowing you to use all the features and possibilities of your fridge. Given its size and its cost, repairing a fridge is a preferable option rather than having to buy a new one and dispose of the old one. Save yourself some effort and money by letting us repair your refrigerator. Ask today about our refrigerator repair service.

                      <strong> Efficient Dishwasher Repair</strong><br />
                      Washing and sterilizing your dishes is key for your safety and hygiene. Don’t let a broken part or a missing component ruin your life. We can help you repair your dishwasher today and make it work again.
                      No need to clean your dishes yourself, let your dishwasher do the heavy lifting for you. Our maintenance team will come and take a look at what needs to be done as soon as possible. Book an appointment for the repair today .
                    </p>
                  </div>
                )}
                {activeTab === '2' && (
                  <div className="tab-pane bg-light-gray p-3 fade show active" role="tabpanel">
                    <p>
                      <strong>
                        FAJ Technical Services L.L.C – Trusted Home Appliance Repair Experts
                      </strong>
                      <br />

                      FAJ Technical Services L.L.C is your reliable partner for home and commercial appliance repair in Dubai and Sharjah. We make sure your repair needs, maintenance, and service support are managed smoothly under one roof with expert care.
                      <br />
                      <strong>Professional Repairs for All Appliances</strong>
                      <br />

                      Is your washing machine not draining, your fridge failing to cool, or your air conditioner blowing warm air? No matter the issue, our technicians are here to provide quick and effective solutions for a wide range of problems, including:

                      <ul className="mb-1">
                        <li> Refrigerator not cooling or making noise </li>
                        <li> Washing machine or dryer water drainage issues </li>
                        <li> AC not cooling, leaking water, or bad odor </li>
                        <li> Overheating or faulty kitchen appliances </li>
                      </ul>

                      We repair washing machines, refrigerators, freezers, dishwashers, dryers, washer-dryers, ovens, hobs, cookers, and more. Whether it’s a small fault or a major breakdown, FAJ has the expertise to restore your appliances to top working condition.
                      <br /><strong>Guaranteed Service with Easy Booking</strong>
                      <br />
                      All our repairs come with guaranteed service quality, and you can conveniently book your appliance repair
                    </p>
                  </div>
                )}

              </div>
            </div>

          </div>
        </section >



        {/* <Services4 /> */}

        {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>

            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/fast-reliable')} alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your appliance runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your appliance repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1')} alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in appliance repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled appliance technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img className="" src={getImageSrc('fajteam')} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Contract */}
        {/* <MaintenanceContract /> */}

        {/* testimobial section */}
        <Testimonial1
          subtitle="What Our Clients Say"
          title="Customer <span>Reviews</span>"
          bgImg={reviewsbg}
          testimonialData={testimonial_data}
          sectionId="home-testimonials"
        />

        <Blog3></Blog3>

        {/* Faqs */}
        <section className="section cs_py_30  bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">FAQ&apos;s</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`eye-open ${index === openItemIndex ? 'd-none' : ''}`}
                      >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
                      </svg>

                      {/* Eye Slash */}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`eye-slash ${index !== openItemIndex ? 'd-none' : ''}`}
                      >
                        <path d="M17.94 17.94A10.06 10.06 0 0 1 12 20c-6 0-10-8-10-8a18.42 18.42 0 0 1 5.06-5.94" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </span>
                  </div>
                  <div className="cs_accordian_body" ref={accordionContentRef}>
                    <p className="mb-0"
                      dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }}
                    ></p>
                  </div>
                </div>
              ))}

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

export default NearMeDetail;

