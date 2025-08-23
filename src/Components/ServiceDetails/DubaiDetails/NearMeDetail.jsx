

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../../Data/DubaiData/FAQs/NearMeFaqs.json';

import { HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";

import 'swiper/swiper-bundle.css';
import testimonial_data from '../../../Data/DubaiData/Testmonials/NearMeTestimonial.json';
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import HeaderForm from "../../Headeform/HeaderForm";
import Services4 from "../../Services/Services4.jsx";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton.jsx";
import GetQuoteButton from "../../Buttons/GetQuoteButton.jsx";
import Blog3 from "../../Blog/Blog3.jsx";

const NearMeDetail = ({ subtitle, title, bgImg }) => {

  // For SEO
  const titleSeo = "Home & Commercial Appliance Repair Near Me – Dubai";
  const description = "Find trusted home & commercial appliance repair near you in Dubai. FAJ, serving since 2010, delivers reliable service for all major appliance brands.";
  const Author = "Faj Technical Servcies";
  const Keyword = "AC repair and Maintenance Service Near me Dubai, Appliances repair Service Dubai";
  const URL = "https://www.fajservices.ae/dubai/near-me/";

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
            <h1 className="cs_fs_24">Home and Commercial Appliance Repair and Service Center – Expert Appliance Repair Near You</h1>
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
                <img className="" src={`${import.meta.env.BASE_URL}img/Refrigerator-Appliances-to-Repair.avif`} alt="Book Now" />
              </div>

            </div>


            {/* row 2 */}
            <div className="row g-3 align-items-stretch">


              <div className="col-md-6">
                <div className=" border rounded h-100 p-3 d-flex align-items-center" >
                  <img className="" src={`${import.meta.env.BASE_URL}img/Washing-Machine-Repair-in-Dubai-Call-Out.avif`} alt="Book Now" />
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
                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/drum.svg`} alt="icon" />
                        Drum not rotating
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/doorlock.svg`} alt="icon" />
                        Door locked defect
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/drain.svg`} alt="icon" />
                        Drain blockage & water leakage
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/spining.svg`} alt="icon" />
                        No spinning / excessive vibration
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/nopower.svg`} alt="icon" />
                        No power or display error
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/speaker.svg`} alt="icon" />
                        Unusual noise during operation
                      </p>

                      {/* Freezer Repair */}

                      <h2 className="cs_fs_20" style={{ fontSize: "17px", marginBottom: "0" }}>
                        Freezer Repair
                      </h2>
                      <p>
                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/cool.svg`} alt="icon" />
                        Not cooling efficiently

                        <br />
                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/icebuild.svg`} alt="icon" />
                        Ice buildup and frost issues

                        <br />
                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/nopower.svg`} alt="icon" />
                        No power

                        <br />
                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/speaker.svg`} alt="icon" />
                        Compressor making loud noises
                      </p>

                      {/* Candy Washer Dryer Repair */}

                      <h2 className="cs_fs_20" style={{ fontSize: "17px", marginBottom: "0" }}>
                        Candy Washer Dryer Repair
                      </h2>
                      <p>
                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/temp.svg`} alt="icon" />
                        Clothes not drying properly
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/display_error.svg`} alt="icon" />
                        Display error messages
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/drum.svg`} alt="icon" />
                        Drum rotation failure
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/speaker.svg`} alt="icon" />
                        Unusual noise & excessive vibration
                      </p>


                    </div>

                    <div className="col-md-6">

                      {/* Refrigerator Repair */}
                      <h2 className="cs_fs_20" style={{ fontSize: "17px", marginBottom: "0" }}>
                        Refrigerator Repair
                      </h2>
                      <p>
                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/cool.svg`} alt="icon" />
                        Not cooling properly
                        <br />


                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/ice.svg`} alt="icon" />
                        Excessive ice formation
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/nopower.svg`} alt="icon" />
                        No power
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/speaker.svg`} alt="icon" />
                        Loud compressor noise

                      </p>

                      {/* Dishawser */}
                      <h2 className="cs_fs_20" style={{ fontSize: "17px", marginBottom: "0" }}>
                        Dishwasher Repair
                      </h2>
                      <p>
                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/odor.svg`} alt="icon" />
                        Bad odor inside the Dishwasher
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/icebuild.svg`} alt="icon" />
                        No steam during wash cycles
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/no_water.svg`} alt="icon" />
                        No water intake
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/soap.svg`} alt="icon" />
                        Soap dispenser not working
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/white_patch.svg`} alt="icon" />
                        White patches left on utensils
                      </p>


                      {/* Tumble Dryer Repair */}
                      <h2 className="cs_fs_20" style={{ fontSize: "17px", marginBottom: "0" }}>
                        Tumble Dryer Repair
                      </h2>
                      <p>
                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/temp.svg`} alt="icon" />
                        Not drying clothes properly
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/drum.svg`} alt="icon" />
                        Drum not rotating
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/speaker.svg`} alt="icon" />
                        Loud noise & excessive vibration
                        <br />

                        <img className="emoji" src={`${import.meta.env.BASE_URL}img/icons/display_error.svg`} alt="icon" />
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
              <a href="/aftron-ac-repair-maintenance-service-in-dubai-2" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Aftron</div>
              </a>
              <a href="/blue-star-ac-repair-in-dubai-blue-star-ac-maintenance-in-dubai-blue-star-ac-fix-in-dubai-blue-star-ac-service-in-dubai-blue-star-air-condition-repair-in-dubai-blue-star-air-condition-maintenance-in-du/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Bluestar</div>
              </a>
              <a href="/bryant-ac-repair-in-dubai-bryant-ac-maintenance-in-dubai-bryant-ac-fix-in-dubai-bryant-ac-service-in-dubai-bryant-air-condition-repair-in-dubai-bryant-air-condition-maintenance-in-dubai-bryant-air-con/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Bryant</div>
              </a>
              <a href="/coleman-ac-repair-in-dubai-coleman-ac-maintenance-in-dubai-coleman-ac-fix-in-dubai-coleman-ac-service-in-dubai-coleman-air-condition-repair-in-dubai-coleman-air-condition-maintenance-in-dubai-coleman/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Coleman</div>
              </a>
              <a href="/cooline-ac-repair-in-dubai-cooline-ac-maintenance-in-dubai-cooline-ac-fix-in-dubai-cooline-ac-service-in-dubai-cooline-air-condition-repair-in-dubai-cooline-air-condition-maintenance-in-dubai-cooline" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Cooline</div>
              </a>
              <a href="/crafft-ac-repair-in-dubai-crafft-ac-maintenance-in-dubai-crafft-ac-fix-in-dubai-crafft-ac-service-in-dubai-crafft-air-condition-repair-in-dubai-crafft-air-condition-maintenance-in-dubai-crafft-air-con/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Crafft</div>
              </a>
              <a href="/daewoo-ac-repair-in-dubai-daewoo-ac-maintenance-in-dubai-daewoo-ac-fix-in-dubai-daewoo-ac-service-in-dubai-daewoo-air-condition-repair-in-dubai-daewoo-air-condition-maintenance-in-dubai-daewoo-air-con/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Daewoo</div>
              </a>
              <a href="/daikin-ac-repair-in-dubai-daikin-ac-maintenance-in-dubai-daikin-ac-fix-in-dubai-daikin-ac-service-in-dubai-daikin-air-condition-repair-in-dubai-daikin-air-condition-maintenance-in-dubai-daikin-air-con/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Daikin</div>
              </a>
              <a href="/daikool-ac-repair-in-dubai-daikool-ac-maintenance-in-dubai-daikool-ac-fix-in-dubai-daikool-ac-service-in-dubai-daikool-air-condition-repair-in-dubai-daikool-air-condition-maintenance-in-dubai-daikool" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Daikool</div>
              </a>
              <a href="/fujitsu-ac-repair-in-dubai-fujitsu-ac-maintenance-in-dubai-fujitsu-ac-fix-in-dubai-fujitsu-ac-service-in-dubai-fujitsu-air-condition-repair-in-dubai-fujitsu-air-condition-maintenance-in-dubai-fujitsu/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Fujitsu</div>
              </a>
              <a href="/goodman-ac-repair-in-dubai-goodman-ac-maintenance-in-dubai-goodman-ac-fix-in-dubai-goodman-ac-service-in-dubai-goodman-air-condition-repair-in-dubai-goodman-air-condition-maintenance-in-dubai-goodman/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Goodman</div>
              </a>
              <a href="/gree-ac-repair-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Gree</div>
              </a>
              <a href="/haier-ac-repair-in-dubai-haier-ac-maintenance-in-dubai-haier-ac-fix-in-dubai-haier-ac-service-in-dubai-haier-air-condition-repair-in-dubai-haier-air-condition-maintenance-in-dubai-haier-air-condition/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Haier</div>
              </a>
              <a href="/hitachi-fridge-repair-in-dubai-hitachi-washing-machine-repair-in-dubai-hitachi-cooker-repair-in-dubai-hitachi-oven-repair-in-dubai-hitachi-appliances-maintenance-in-dubai-hitachi-refrigerator-fix-repa/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Hitachi</div>
              </a>
              <a href="/lg-ac-repair-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">LG</div>
              </a>
              <a href="/lennox-ac-repair-in-dubai-lennox-ac-maintenance-in-dubai-lennox-ac-fix-in-dubai-lennox-ac-service-in-dubai-lennox-air-condition-repair-in-dubai-lennox-air-condition-maintenance-in-dubai-lennox-air-con/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Lennox</div>
              </a>
              <a href="/mcquay-ac-repair-in-dubai-mcquay-ac-maintenance-in-dubai-mcquay-ac-fix-in-dubai-mcquay-ac-service-in-dubai-mcquay-air-condition-repair-in-dubai-mcquay-air-condition-maintenance-in-dubai-mcquay-air-con/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">MC Quay</div>
              </a>
              <a href="/midea-ac-installation-maintenance-repair-fix-service-in-dubai" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Midea</div>
              </a>
              <a href="/mitsubishi-ac-repair-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Mitsubishi</div>
              </a>
              <a href="/nikai-ac-repair-in-dubai-nikai-ac-maintenance-in-dubai-nikai-ac-fix-in-dubai-nikai-ac-service-in-dubai-nikai-air-condition-repair-in-dubai-nikai-air-condition-maintenance-in-dubai-nikai-air-condition/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Nikai</div>
              </a>
              <a href="/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">O General</div>
              </a>
              <a href="/panasonic-ac-repair-in-dubai-panasonic-ac-maintenance-in-dubai-panasonic-ac-fix-in-dubai-panasonic-ac-service-in-dubai-panasonic-air-condition-repair-in-dubai-panasonic-air-condition-maintenance-in-du/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Panasonic</div>
              </a>
              <a href="/rheem-ac-maintenance-in-dubai" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Rheem</div>
              </a>
              <a href="/ruud-ac-repair-in-dubai-ruud-ac-maintenance-in-dubai-ruud-ac-fix-in-dubai-ruud-ac-service-in-dubai-ruud-air-condition-repair-in-dubai-ruud-air-condition-maintenance-in-dubai-ruud-air-condition-mainten/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Ruud</div>
              </a>
              <a href="/samsung-fridge-repair-in-dubai-samsung-washing-machine-repair-in-dubai-samsung-cooker-repair-in-dubai-samsung-oven-repair-in-dubai-samsung-appliances-maintenance-in-dubai-samsung-refrigerator-fix-repa/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Samsung</div>
              </a>
              <a href="/sanyo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Sanyo</div>
              </a>
              <a href="/skm-ac-repair-in-dubai-skm-ac-maintenance-in-dubai-skm-ac-fix-in-dubai-skm-ac-service-in-dubai-skm-air-condition-repair-in-dubai-skm-air-condition-maintenance-in-dubai-skm-air-condition-maintenance-in/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">SKM</div>
              </a>
              <a href="/sub-zero-ac-installation-maintenance-repair-fix-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Subzero</div>
              </a>
              <a href="/super-general-ac-repair-in-dubai-super-general-ac-maintenance-in-dubai-super-general-ac-fix-in-dubai-super-general-ac-service-in-dubai-super-general-air-condition-repair-in-dubai-super-general-air-con/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Super General</div>
              </a>
              <a href="/supra-ac-repair-in-dubai-supra-ac-maintenance-in-dubai-supra-ac-fix-in-dubai-supra-ac-service-in-dubai-supra-air-condition-repair-in-dubai-supra-air-condition-maintenance-in-dubai-supra-air-condition/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Supra</div>
              </a>
              <a href="/tcl-ac-repair-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">TCL</div>
              </a>
              <a href="/toshiba-ac-repair-in-dubai-toshiba-ac-maintenance-in-dubai-toshiba-ac-fix-in-dubai-toshiba-ac-service-in-dubai-toshiba-air-condition-repair-in-dubai-toshiba-air-condition-maintenance-in-dubai-toshiba/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Toshiba</div>
              </a>
              <a href="/trane-ac-repair-in-dubai-trane-ac-maintenance-in-dubai-trane-ac-fix-in-dubai-trane-ac-service-in-dubai-trane-air-condition-repair-in-dubai-trane-air-condition-maintenance-in-dubai-trane-air-condition/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Trane</div>
              </a>
              <a href="/westpoint-ac-repair-in-dubai-westpoint-ac-maintenance-in-dubai-westpoint-ac-fix-in-dubai-westpoint-ac-service-in-dubai-west-point-air-condition-repair-in-dubai-west-point-air-condition-maintenance-in/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Westpoint</div>
              </a>
              <a href="/whirlpool-air-condition-repair-in-dubai-ac-maintenance-in-dubai-air-conditioning-fix-repairs-service-in-dubai" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Whirlpool</div>
              </a>
              <a href="/york-ac-repair-in-dubai-york-ac-maintenance-in-dubai-york-ac-fix-in-dubai-york-ac-service-in-dubai-york-air-condition-repair-in-dubai-york-air-condition-maintenance-in-dubai-york-air-condition-mainten" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">York</div>
              </a>

            </div>

            <h2 className="cs_fs_20 mb-0">Home Appliances</h2>
            <span className="d-block seprator-line mb-3"></span>

            <div className="near-me-grid">

              <a href="/aeg-fridge-repair-in-dubai-aeg-washing-machine-repair-in-dubai-aeg-cooker-repair-in-dubai-aeg-oven-repair-in-dubai-aeg-appliances-maintenance-in-dubai-aeg-refrigerator-fix-repairs-service-in-dubai-aeg/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">AEG</div>
              </a>
              <a href="/aftron-fridge-repair-in-dubai-aftron-washing-machine-repair-in-dubai-aftron-cooker-repair-in-dubai-aftron-oven-repair-in-dubai-aftron-appliances-maintenance-in-dubai-aftron-refrigerator-fix-repairs-se/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Aftron</div>
              </a>
              <a href="/admiral-fridge-repair-in-dubai-admiral-washing-machine-repair-in-dubai-admiral-cooker-repair-in-dubai-admiral-oven-repair-in-dubai-admiral-appliances-maintenance-in-dubai-admiral-refrigerator-fix-repa/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Admiral</div>
              </a>
              <a href="/ariston-fridge-repair-in-dubai-ariston-washing-machine-repair-in-dubai-ariston-cooker-repair-in-dubai-ariston-oven-repair-in-dubai-ariston-appliances-maintenance-in-dubai-ariston-refrigerator-fix-repa/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Ariston</div>
              </a>
              <a href="/baumatic-appliances/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Baumatic</div>
              </a>
              <a href="/beko-fridge-repair-in-dubai-beko-washing-machine-repair-in-dubai-beko-cooker-repair-in-dubai-beko-oven-repair-in-dubai-beko-appliances-maintenance-in-dubai-beko-refrigerator-fix-repairs-service-in-dub/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Beko</div>
              </a>
              <a href="/bertazzoni-refrigerator-repair-in-dubai-bertazzoni-appliances-service-bertazzoni-fridge-repair-in-dubai-bertazzoni-washing-machine-washer-bertazzoni-dryer-repair-in-dubai-bertazzoni-dishwasher-cooker/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Bertazzoni</div>
              </a>
              <a href="/blomberg-fridge-repair-in-dubai-blomberg-washing-machine-repair-in-dubai-blomberg-cooker-repair-in-dubai-blomberg-oven-repair-in-dubai-blomberg-appliances-maintenance-in-dubai-blomberg-refrigerator-fi/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Blomberg</div>
              </a>
              <a href="/bompani-fridge-repair-in-dubai-bompani-washing-machine-repair-in-dubai-bompani-cooker-repair-in-dubai-bompani-oven-repair-in-dubai-bompani-appliances-maintenance-in-dubai-bompani-refrigerator-fix-repa/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Bompani</div>
              </a>
              <a href="/boston-refrigerator-repair-in-dubai-boston-appliances-service-boston-fridge-repair-in-dubai-boston-washing-machine-washer-boston-dryer-repair-in-dubai-boston-dishwasher-cooker/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Boston</div>
              </a>
              <a href="/bosch-home-appliance-installation-maintenance-repair-fix-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Bosch</div>
              </a>
              <a href="/brandt-fridge-repair-in-dubai-brandt-washing-machine-repair-in-dubai-brandt-cooker-repair-in-dubai-brandt-oven-repair-in-dubai-brandt-appliances-maintenance-in-dubai-brandt-refrigerator-fix-repairs-se/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Brandt</div>
              </a>
              <a href="/candy-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Candy</div>
              </a>
              <a href="/daewoo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Daewoo</div>
              </a>
              <a href="/de-dietrich-fridge-repair-in-dubai-de-dietrich-washing-machine-repair-in-dubai-de-dietrich-cooker-repair-in-dubai-de-dietrich-oven-repair-in-dubai-de-dietrich-appliances-maintenance-in-dubai-de-dietri/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">De Dietrich</div>
              </a>
              <a href="/electrolux-fridge-repair-in-dubai-electrolux-washing-machine-repair-in-dubai-electrolux-cooker-repair-in-dubai-electrolux-oven-repair-in-dubai-electrolux-appliances-maintenance-in-dubai-electrolux-ref/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Electrolux</div>
              </a>
              <a href="/elica-appliances-service/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Elica</div>
              </a>
              <a href="/faber-appliances-service/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Faber</div>
              </a>
              <a href="/fagor-fridge-repair-in-dubai-fagor-washing-machine-repair-in-dubai-fagor-cooker-repair-in-dubai-fagor-oven-repair-in-dubai-fagor-appliances-maintenance-in-dubai-fagor-refrigerator-fix-repairs-service/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Fagor</div>
              </a>
              <a href="/fisher-and-paykel-fridge-repair-in-dubai-fisher-and-paykel-washing-machine-repair-in-dubai-fisher-and-paykel-cooker-repair-in-dubai-fisher-and-paykel-oven-repair-in-dubai-fisher-and-paykel-appliances/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Fisher and Paykel</div>
              </a>
              <a href="/foster-appliances-services-foster-dishwasher-repair-service-in-dubai-foster-cooking-range-repair-service-in-dubai-foster-cooktop-repair-service-in-dubai-foster-oven-repair-in-dubai-foster-rangetop-r/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Foster</div>
              </a>
              <a href="/franke-appliances-repair-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Franke</div>
              </a>
              <a href="/frigidaire-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Frigidaire</div>
              </a>
              <a href="/gaggenau-fridge-repair-in-dubai-gaggenau-washing-machine-repair-in-dubai-gaggenau-cooker-repair-in-dubai-gaggenau-oven-repair-in-dubai-gaggenau-appliances-maintenance-in-dubai-gaggenau-refrigerator-fi/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Gaggenau</div>
              </a>
              <a href="/ge-general-electric-fridge-repair-in-dubai-ge-general-electric-washing-machine-repair-in-dubai-ge-general-electric-cooker-repair-in-dubai-ge-general-electric-oven-repair-in-dubai-ge-general-electric-a/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">GE (General Electric)</div>
              </a>
              <a href="/gibson-fridge-repair-in-dubai-gibson-washing-machine-repair-in-dubai-gibson-cooker-repair-in-dubai-gibson-oven-repair-in-dubai-gibson-appliances-maintenance-in-dubai-gibson-refrigerator-fix-repairs-se/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Gibson</div>
              </a>
              <a href="/gorenje-fridge-repair-in-dubai-gorenje-washing-machine-repair-in-dubai-gorenje-cooker-repair-in-dubai-gorenje-oven-repair-in-dubai-gorenje-appliances-maintenance-in-dubai-gorenje-refrigerator-fix-repa/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Gorenje</div>
              </a>
              <a href="/haier-fridge-repair-in-dubai-haier-washing-machine-repair-in-dubai-haier-cooker-repair-in-dubai-haier-oven-repair-in-dubai-haier-appliances-maintenance-in-dubai-haier-refrigerator-fix-repairs-service/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Haier</div>
              </a>
              <a href="/hisense-fridge-repair-in-dubai-hisense-washing-machine-repair-in-dubai-hisense-cooker-repair-in-dubai-hisense-oven-repair-in-dubai-hisense-appliances-maintenance-in-dubai-hisense-refrigerator-fix-repa/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Hisense</div>
              </a>
              <a href="/hitachi-fridge-repair-in-dubai-hitachi-washing-machine-repair-in-dubai-hitachi-cooker-repair-in-dubai-hitachi-oven-repair-in-dubai-hitachi-appliances-maintenance-in-dubai-hitachi-refrigerator-fix-repa/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Hitachi</div>
              </a>
              <a href="/hoover-fridge-repair-in-dubai-hoover-washing-machine-repair-in-dubai-hoover-cooker-repair-in-dubai-hoover-oven-repair-in-dubai-hoover-appliances-maintenance-in-dubai-hoover-refrigerator-fix-repairs-se/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Hoover</div>
              </a>
              <a href="/hotpoint-refrigerator-repair-in-dubai-hotpoint-fridge-repair-in-dubai-hotpoint-washing-machine-repair-in-dubai-hotpoint-dishwasher-cooker-oven-repairs-fix-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Hotpoint</div>
              </a>
              <a href="/ifb-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">IFB</div>
              </a>
              <a href="/indesit-fridge-repair-in-dubai-indesit-washing-machine-repair-in-dubai-indesit-cooker-repair-in-dubai-indesit-oven-repair-in-dubai-indesit-appliances-maintenance-in-dubai-indesit-refrigerator-fix-repa/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Indesit</div>
              </a>
              <a href="/kenmore-appliances-service/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Kenmore</div>
              </a>
              <a href="/kenwood-stand-mixer-repair-service-near-me-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Kenwood</div>
              </a>
              <a href="/kelvinator-home-appliance-installation-maintenance-repair-fix-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Kelvinator</div>
              </a>
              <a href="/kitchenaid-refrigerator-repair-in-dubai-fridge-repair-in-dubai-kitchenaid-freezer-maintenance-in-dubai-washing-machine-repair-in-dubai-dishwasher-kitchenaid-cooker-oven-repairs-fix-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">KitchenAid</div>
              </a>
              <a href="/la-germania-cooking-range-repair-in-dubai-la-germania-oven-repair-in-dubai-la-germania-cooker-repair-in-dubai-la-germania-cooker-oven-maintenance-service-in-dubai-refrigerator-repair-in-dubai-fridge-r/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">La Germania</div>
              </a>
              <a href="/lg-fridge-repair-in-dubai-lg-washing-machine-repair-in-dubai-lg-cooker-repair-in-dubai-lg-oven-repair-in-dubai-lg-appliances-maintenance-in-dubai-lg-refrigerator-fix-repairs-service-in-dubai-lg-dishwa/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">LG</div>
              </a>
              <a href="/liebherr-refrigerator-repair-in-dubai-liebherr-fridge-repair-in-dubai-liebherr-freezer-maintenance-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Liebherr</div>
              </a>
              <a href="/marvel-fridge-repair-in-dubai-marvel-washing-machine-repair-in-dubai-marvel-cooker-repair-in-dubai-marvel-oven-repair-in-dubai-marvel-appliances-maintenance-in-dubai-marvel-refrigerator-fix-repairs-se/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Marvel</div>
              </a>
              <a href="/maytag-fridge-repair-in-dubai-maytag-washing-machine-repair-in-dubai-maytag-cooker-repair-in-dubai-maytag-oven-repair-in-dubai-maytag-appliances-maintenance-in-dubai-maytag-refrigerator-fix-repairs-se/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Maytag</div>
              </a>
              <a href="/miele-fridge-repair-in-dubai-miele-washing-machine-repair-in-dubai-miele-cooker-repair-in-dubai-miele-oven-repair-in-dubai-miele-appliances-maintenance-in-dubai-miele-refrigerator-fix-repairs-service/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Miele</div>
              </a>
              <a href="/neff-fridge-repair-in-dubai-neff-washing-machine-repair-in-dubai-neff-cooker-repair-in-dubai-neff-oven-repair-in-dubai-neff-appliances-maintenance-in-dubai-neff-refrigerator-fix-repairs-service-in-dub/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Neff</div>
              </a>
              <a href="/panasonic-fridge-repair-in-dubai-panasonic-washing-machine-repair-in-dubai-panasonic-cooker-repair-in-dubai-panasonic-oven-repair-in-dubai-panasonic-appliances-maintenance-in-dubai-panasonic-refrigera/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Panasonic</div>
              </a>
              <a href="/samsung-fridge-repair-in-dubai-samsung-washing-machine-repair-in-dubai-samsung-cooker-repair-in-dubai-samsung-oven-repair-in-dubai-samsung-appliances-maintenance-in-dubai-samsung-refrigerator-fix-repa/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Samsung</div>
              </a>
              <a href="/sanyo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Sanyo</div>
              </a>
              <a href="/sears-home-appliances-installation-maintenance-repair-fix-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Sears</div>
              </a>
              <a href="/sharp-home-appliance-installation-maintenance-repair-fix-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Sharp</div>
              </a>
              <a href="/siemens-home-appliances-repair/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Siemens</div>
              </a>
              <a href="/smeg-fridge-repair-in-dubai-smeg-washing-machine-repair-in-dubai-smeg-cooker-repair-in-dubai-smeg-oven-repair-in-dubai-smeg-appliances-maintenance-in-dubai-smeg-refrigerator-fix-repairs-service-in-dub/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Smeg</div>
              </a>

              <a href="/speed-queen-washing-machine-repair-in-dubai-speed-queen-dryer-repair-in-dubai-speed-queen-washer-dryer-repair-in-dubai-maintenance-fix-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Speed Queen</div>
              </a>
              <a href="/sub-zero-fridge-repair-in-dubai-sub-zero-washing-machine-repair-in-dubai-sub-zero-cooker-repair-in-dubai-sub-zero-oven-repair-in-dubai-sub-zero-appliances-maintenance-in-dubai-sub-zero-refrigerator-fi/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Sub‑Zero</div>
              </a>
              <a href="/teka-home-appliance-installation-maintenance-repair-fix-service-in-dubai/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Teka</div>
              </a>
              <a href="/terim-appliances-service/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Terim</div>
              </a>
              <a href="/thermador-appliances-service/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Thermador</div>
              </a>
              <a href="/toshiba-home-appliance-installation-maintenance-repair-fix-service-in-dubai-2/" className="brand-near-me-service-box">
                <div className="brand-near-me-service-title">Toshiba</div>
              </a>
              <a href="/unimac-washing-machine-repair-in-dubai-unimac-dryer-repair-in-dubai-unimac-washer-dryer-repair-in-dubai-unimac-maintenance-in-dubai-unimac-laundry-service-in-dubai-unimac-dubai/" className="brand-near-me-service-box">
                <div class="brand-near-me-service-title">Unimac</div>
              </a>
              <a href="/viking-appliances-service/" className="brand-near-me-service-box">
                <div class="brand-near-me-service-title">Viking</div>
              </a>
              <a href="/westpoint-fridge-repair-in-dubai-westpoint-washing-machine-repair-in-dubai-westpoint-cooker-repair-in-dubai-westpoint-oven-repair-in-dubai-westpoint-refrigerator-fix-repairs-service-in-dubai-west-poin/" className="brand-near-me-service-box">
                <div class="brand-near-me-service-title">Westpoint</div>
              </a>
              <a href="/whirlpool-fridge-repair-in-dubai-whirlpool-washing-machine-repair-in-dubai-whirlpool-cooker-repair-in-dubai-whirlpool-oven-repair-in-dubai-whirlpool-appliances-maintenance-in-dubai-whirlpool-refrigera/" className="brand-near-me-service-box">
                <div class="brand-near-me-service-title">Whirlpool</div>
              </a>
              <a href="/white-westinghouse-fridge-repair-in-dubai-white-westinghouse-washing-machine-repair-in-dubai-white-westinghouse-cooker-repair-in-dubai-white-westinghouse-oven-repair-in-dubai-white-westinghouse-applia/" class="brand-near-me-service-box">
                <div class="brand-near-me-service-title">White Westinghouse</div>
              </a>
              <a href="/wolf-home-appliance-installation-maintenance-repair-fix-service-in-dubai/" class="brand-near-me-service-box">
                <div class="brand-near-me-service-title">Wolf</div>
              </a>
              <a href="/zanussi-fridge-repair-in-dubai-zanussi-washing-machine-repair-in-dubai-zanussi-cooker-repair-in-dubai-zanussi-oven-repair-in-dubai-zanussi-appliances-maintenance-in-dubai-zanussi-refrigerator-fix-repa/" class="brand-near-me-service-box">
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
                  <img className="mb-3 w-25" src={`${import.meta.env.BASE_URL}img/icons/book.png`} alt="Book Now" />
                  <p>Book Your Repair</p>
                </div>
              </a>

              <a href="#" className=" brand-near-me-service-box">
                <div className=" near-me-work-title">
                  <img className="mb-3 w-25" src={`${import.meta.env.BASE_URL}img/icons/callicon.png`} alt="Receive Confirmation
Call" />
                  <p>Receive Confirmation Call</p>
                </div>
              </a>

              <a href="#" className=" brand-near-me-service-box">
                <div className=" near-me-work-title">
                  <img className="mb-3 w-25" src={`${import.meta.env.BASE_URL}img/icons/prob.png`} alt="Book Now" />
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
                        F A J Technical Services L.L.C – Trusted Home Appliance Repair Experts
                      </strong>
                      <br />

                      F A J Technical Services L.L.C is your reliable partner for home and commercial appliance repair in Dubai and Sharjah. We make sure your repair needs, maintenance, and service support are managed smoothly under one roof with expert care.
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
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/fast-reliable.png`} alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your appliance runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`} alt="FAJ icon service" loading="lazy" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your appliance repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/fajteam-1.avif`} alt="FAJ icon service" loading="lazy" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`} alt="FAJ icon service" loading="lazy" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in appliance repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`} alt="FAJ icon service" loading="lazy" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`} alt="FAJ icon service" loading="lazy" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled appliance technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img className="" src={`${import.meta.env.BASE_URL}img/fajteam.avif`} alt="FAJ icon service" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Contract */}
        {/* <MaintenanceContract /> */}

        {/* testimobial section */}
        <section className="cs_slider cs_style_1 cs_slider_gap_30 cs_bg_filed position-relative cs_py_30 d-none" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${bgImg})` }}>
          {/* <div className="cs_height_80 cs_height_lg_80"></div> */}
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
              <h3 className="cs_section_subtitle cs_fs_18 text-black cs_semibold text-uppercase cs_mb_12 wow fadeInDown">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                </svg>{subtitle}<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                </svg></h3>
              <h2 className="cs_section_title cs_fs_50 text-black mb-0 wow fadeInUp">{parse(title)}</h2>
            </div>
            <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0"
              data-variable-width="0" data-xs-slides="1" data-sm-slides="1" data-md-slides="1" data-lg-slides="2"
              data-add-slides="2" data-slides-per-view="responsive">
              <div className="cs_slider_wrapper">
                <Slider {...settings}>
                  {testimonial_data.map((item, index) => (
                    <div key={index} className="cs_slide wow fadeInLeft">
                      <div className="cs_testimonial cs_style_1 position-relative">
                        <div className="cs_testimonial_content cs_white_bg position-relative">
                          <div className="cs_testimonial_header cs_mb_35">
                            <div className="cs_testimonial_thumbnail">
                              <img src={`${import.meta.env.BASE_URL}${item.img1}`} alt="Avatar" />
                            </div>
                            <div className="cs_testimonial_info">
                              <div className="rating-area" >
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                              </div>
                              <span className="client_name cs_fs_24 cs_mb_1 text-uppercase" >{item.title}</span>
                              {/* <p className="cs_fs_14 cs_heading_color mb-0">{item.subTitle}</p> */}
                            </div>
                          </div>
                          <blockquote className="cs_fs_16">{item.desc}</blockquote>
                          <div className="cs_quote_icon position-absolute">
                            <img src={`${import.meta.env.BASE_URL}img/icons/quote_1_blue.svg`} alt="Quote Icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>

              </div>
            </div>
          </div>
          {/* <div className="cs_height_80 cs_height_lg_80"></div> */}
        </section>

        <Blog3></Blog3>

        {/* FAQ's */}
        <section className="section cs_py_30  bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">FAQ&apos;s</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye text-light"></i>
                      <i className="bi bi-eye-slash text-light"></i>
                    </span>
                  </div>
                  <div className="cs_accordian_body" ref={accordionContentRef}>
                    {/* <p className="mb-0">{item.desc.replace(/\n/g, '<br>')}</p> */}
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

