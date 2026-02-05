

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

