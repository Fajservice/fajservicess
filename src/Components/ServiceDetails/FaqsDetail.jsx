import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Components/Contact/Serviceappointemnt';
import MaintenanceContract from "../../Components/MaintenanceContract/MaintenanceContract";
import 'swiper/swiper-bundle.css';
import loadBackgroudImages from "../../Components/Common/loadBackgroudImages";
import acdata from '../../Data/AcData/AcFaqs/AcRepairFaqs.json';
import washingdata from '../../Data/HomeAppData/FAQs/WashingmachineRepairServiceFaqs.json';
import refrigeratordata from '../../Data/HomeAppData/FAQs/HomeappRefrigeratorServicefaqs.json';
import dishwasherdata from '../../Data/HomeAppData/FAQs/DishwasherRepairFaqs.json';
import robotvacuumdata from '../../Data/HomeAppData/FAQs/VacuumCleanerHomeappFaqs.json';
import coffeemachinefaqdata from '../../Data/coffeemachinesserviceFaqs.json';
import HeaderForm from "../../Components/Headeform/HeaderForm";
import Accordion from "../../Components/Common/Accordion.jsx";
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
                        <div className="responsive-cell-block col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="card gray">
                            <img className="card-img" src={`${import.meta.env.BASE_URL}img/faqs/ac-faq.png`} alt="Air Conditioner FAQs"/>
                            <p className="text-blk card-head">Air Conditioner (AC) FAQs</p>
                            <p className="text-blk card-text">Troubleshooting & Maintenance Tips</p>
                            <Accordion data={acdata} initialCount={5} />
                          </div>
                      </div>
                      <div className="responsive-cell-block col-lg-6 col-md-6 col-sm-12 col-12">
                       <div className="card">
                        <img className="card-img" src={`${import.meta.env.BASE_URL}img/faqs/washing-machine-faq.png`} alt="Washing Machine FAQs"/>
                        <p className="text-blk card-head">Washing Machine FAQs</p>
                        <p className="text-blk card-text">Solutions for Common Issues</p>
                        <Accordion data={washingdata} initialCount={4} />
                      </div>
                        </div>
                        <div className="responsive-cell-block col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <img className="card-img" src={`${import.meta.env.BASE_URL}img/faqs/refrigerator-faq.png`} alt="Refrigerator FAQs"/>
                            <p className="text-blk card-head">
                              Refrigerator FAQs
                            </p>
                            <p className="text-blk card-text">
                              Cooling, Storage & Repairs
                            </p>
                            <Accordion data={refrigeratordata} initialCount={5} />
                        </div>
                        </div>
                        <div className="responsive-cell-block col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card gray">
                            <img className="card-img" src={`${import.meta.env.BASE_URL}img/faqs/dishwasher-faq.png`} alt="Dishwasher FAQs"/>
                            <p className="text-blk card-head">
                              Dishwasher FAQs
                            </p>
                            <p className="text-blk card-text">
                              Cleaning, Error & Performance Guide
                            </p>
                            <Accordion data={dishwasherdata} initialCount={4} />
                        </div>
                        </div>
                        <div className="responsive-cell-block col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card gray">
                            <img className="card-img" src={`${import.meta.env.BASE_URL}img/faqs/robot-vaccum-cleaner-faq.png`} alt="Robot Vacuum Cleaner FAQs"/>
                            <p className="text-blk card-head">
                              Robot Vacuum Cleaner FAQs
                            </p>
                            <p className="text-blk card-text">
                              Setup & Maintenance Tips
                            </p>
                            <Accordion data={robotvacuumdata} initialCount={5} />
                        </div>
                        </div>
                        <div className="responsive-cell-block col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <img className="card-img" src={`${import.meta.env.BASE_URL}img/faqs/coffee-machine-faq.png`} alt="Coffee Machine FAQs"/>
                            <p className="text-blk card-head">
                              Coffee Machine FAQs
                            </p>
                            <p className="text-blk card-text">
                              Brewing & Maintenance Solutions
                            </p>
                            <Accordion data={coffeemachinefaqdata} initialCount={4} />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Maintenance Contract */}
        <div className="bg-light-gray cs-py_30">
          <MaintenanceContract />
        </div>
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

