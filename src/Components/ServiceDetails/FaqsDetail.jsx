import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Components/Contact/Serviceappointemnt';
import MaintenanceContract from "../../Components/MaintenanceContract/MaintenanceContract";

import 'swiper/swiper-bundle.css';
import testimonial_data from '../../Data/Faqstestimonial1.json';
import loadBackgroudImages from "../../Components/Common/loadBackgroudImages";
import parse from 'html-react-parser';
import HeaderForm from "../../Components/Headeform/HeaderForm";

const FaqsDetail = ({ subtitle, title, bgImg }) => {

  // For SEO
  const titleSeo = "Home & Commercial Appliance FAQ's – Dubai";
  const description = "Find trusted home & commercial appliance FAQ's in Dubai. FAJ, serving since 2010, delivers reliable service for all major appliance brands.";
  const Author = "Faj Technical Servcies";
  const Keyword = "AC repair and Maintenance Service Near me Dubai, Appliances repair Service Dubai";
  const URL = "https://www.fajservices.ae/faqs/";

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

        <section id="faqs" className="content-center section cs_py_30">

          <div className="container">
            <div className="faq_8">
                <div className="responsive-container-block container">
                    <div className="responsive-container-block faqheading-bg">
                    <div className="heading-content">
                        <p className="text-blk faq-heading">
                        Frequently Asked Questions
                        </p>
                    </div>
                    </div>
                    <div className="responsive-container-block dropdown-container-wrapper">
                    <p className="text-blk subheading">
                        Welcome to FAJ Technical Services LLC’s FAQ section! As a trusted provider of appliance repair and maintenance services in Dubai, UAE, we understand the importance of keeping your home appliances in top condition. Whether you need help with air conditioners, washing machines, refrigerators, dishwashers, robot vacuum cleaners, or coffee machines, our experts are here to assist you. Browse through our FAQs for quick solutions, troubleshooting tips, and maintenance advice to ensure the best performance of your appliances.
                    </p>
                    <div className="responsive-container-block box-container">
                        <div className="responsive-cell-block col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card gray">
                            <img className="card-img" src={`${import.meta.env.BASE_URL}img/faqs/ac-faq.png`} alt="Air Conditioner FAQs"/>
                            <p className="text-blk card-head">
                              Air Conditioner (AC) FAQs
                            </p>
                            <p className="text-blk card-text">
                              Troubleshooting & Maintenance Tips
                            </p>
                          <a href="/faqs/ac-frequently-asked-questions/" className="button-get-help">Get Help</a>
                        </div>
                        </div>
                        <div className="responsive-cell-block col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card">
                            <img className="card-img" src={`${import.meta.env.BASE_URL}img/faqs/washing-machine-faq.png`} alt="Washing Machine FAQs"/>
                            <p className="text-blk card-head">
                              Washing Machine FAQs
                            </p>
                            <p className="text-blk card-text">
                              Solutions for Common Issues
                            </p>
                          <a href="" className="button-get-help">Get Help</a>
                        </div>
                        </div>
                        <div className="responsive-cell-block col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card gray">
                            <img className="card-img" src={`${import.meta.env.BASE_URL}img/faqs/refrigerator-faq.png`} alt="Refrigerator FAQs"/>
                            <p className="text-blk card-head">
                              Refrigerator FAQs
                            </p>
                            <p className="text-blk card-text">
                              Cooling, Storage & Repairs
                            </p>
                          <a href="" className="button-get-help">Get Help</a>
                        </div>
                        </div>
                        <div className="responsive-cell-block col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card">
                            <img className="card-img" src={`${import.meta.env.BASE_URL}img/faqs/dishwasher-faq.png`} alt="Dishwasher FAQs"/>
                            <p className="text-blk card-head">
                              Dishwasher FAQs
                            </p>
                            <p className="text-blk card-text">
                              Cleaning, Error & Performance Guide
                            </p>
                          <a href="" className="button-get-help">Get Help</a>
                        </div>
                        </div>
                        <div className="responsive-cell-block col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card gray">
                            <img className="card-img" src={`${import.meta.env.BASE_URL}img/faqs/robot-vaccum-cleaner-faq.png`} alt="Robot Vacuum Cleaner FAQs"/>
                            <p className="text-blk card-head">
                              Robot Vacuum Cleaner FAQs
                            </p>
                            <p className="text-blk card-text">
                              Setup & Maintenance Tips
                            </p>
                          <a href="" className="button-get-help">Get Help</a>
                        </div>
                        </div>
                        <div className="responsive-cell-block col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="card">
                            <img className="card-img" src={`${import.meta.env.BASE_URL}img/faqs/coffee-machine-faq.png`} alt="Coffee Machine FAQs"/>
                            <p className="text-blk card-head">
                              Coffee Machine FAQs
                            </p>
                            <p className="text-blk card-text">
                              Brewing & Maintenance Solutions
                            </p>
                          <a href="" className="button-get-help">Get Help</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
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
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your appliance repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/fajteam-1.avif`} alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in appliance repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled appliance technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img className="" src={`${import.meta.env.BASE_URL}img/fajteam.avif`} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Contract */}
        <MaintenanceContract />
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

export default FaqsDetail;

