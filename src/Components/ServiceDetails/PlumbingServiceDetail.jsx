import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../Contact/Serviceappointemnt';
import CallNowButton from '../Buttons/CallNowButton';
import GetQuoteButton from "../Buttons/GetQuoteButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import MaintenanceContract from "../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import HeaderForm from "../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../ApplianceCommons/AppliancesAppointmentCol";
import Testimonial1 from "../Testimonial/Testimonial1";

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  let variant = 'mobile';
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    const realWidth = width;
    if (realWidth > 1200) {
      variant = 'large';
    } else if (realWidth > 768) {
      variant = 'desktop';
    } else if (realWidth > 480) {
      variant = 'tablet';
    } else {
      variant = 'mobile';
    }
  }
  return `${CDN}/${imgPath}/${variant}`;
};
const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
  </svg>
);
const EyeSlashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
  </svg>
);

const PlumbingServiceDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metaImage = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/technicians-adjusting-water-pressure-pump/public";
  const metatitle = String(titleSeo || "Best Plumbing Services in Dubai | Plumbing Work Near You, Dubai");
  const metadescription = String(description || "Looking for professional plumbing services near you, in Dubai? We offer water leak fixing, water pump repair & replacement at an affordable price");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "plumbing services in dubai, plumbing work near me, water leak fixing, water pump repair, water pump replacement, plumbing maintenance, emergency plumbing services, affordable plumbing services");
  const metaURL = String(URL || "https://www.fajservices.ae/services/plumbing-services-in-dubai/");

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
          fetch(`${import.meta.env.BASE_URL}data/PlumbingServiceFAQs.json`),
           fetch(`${import.meta.env.BASE_URL}data/ElectricalPlumbingServicesTestimonials.json`),
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
          <meta property="og:image" content={metaImage} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metatitle} />
          <meta name="twitter:description" content={metadescription} />
          <meta name="twitter:image" content={metaImage} />
          
        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Professional Plumbing Services and Water Pump Repair Near You in Dubai</h1>
            <h2 className="cs_fs_24">Fast, Affordable, and Expert Plumber</h2>
            <p>We all depend on having hot and cold running water readily available, which is why plumbing issues can quickly disrupt our daily routines. <br /> Finding an efficient and <a href="https://www.google.com/search?q=faj+technical+services+llc&num=10&sca_esv=11b517be6cd30da4&authuser=2&sxsrf=ANbL-n6H7y6_YeayVdY9KQn7LrKLmNm3dw%3A1775559210000&source=hp&ei=KeLUacWVOs7I1sQPtoawmAY&iflsig=AFdpzrgAAAAAadTwOuqxN88WumrS3mR2Ct-RzMS1zp_6&gs_ssp=eJwFwUEOQDAQAMC4SnzAqRdnW7SyfYJfrLWoNo0gUr83U1bt1mp9hoQh4geFayD3YlaLSBaAWGR2kMnqTs-dWYwZiXCY6pUO9QjvyTNFdcv1epZbxcg_6LMZjQ&oq=&gs_lp=Egdnd3Mtd2l6IgAqAggAMg0QLhjHARgnGOoCGK8BMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMg0QIxjwBRgnGOoCGJ4GMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCSJELUABYAHACeACQAQCYAQCgAQCqAQC4AQHIAQCYAgKgAhCoAgqYAwvxBbkrwqiUHvHAkgcBMqAHALIHALgHAMIHBTItMS4xyAcNgAgA&sclient=gws-wiz#lpstate=pid:1489398280092926303">professional plumbing service</a> is important, as your water system is important not only for your home comfort but also for your health and safety.<br />While plumbing rules in Dubai are generally strict, they are not always followed. To avoid costly plumbing repairs, delays, and potentially unsafe situations, it is essential to ensure that only fully cost-effective and the <a href="https://www.fajservices.ae/our-portfolio/">best expert plumbers</a> in Dubai are charged with any plumbing work in your home or property.</p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 text-left mt-0">Why choose FAJ Technical Services L.L.C for plumbing services?</h2>
                <p className="mb-1"><strong>We possess in-depth knowledge of the plumbing systems in Dubai</strong></p>
                <p className="mb-0"><a href="https://maps.app.goo.gl/3ErL8pKCJLLERkrG8">FAJ Technical Services L.L.C</a> was established in 2010 as a licensed company set to provide <a href="https://youtube.com/shorts/535QgUE72bk?feature=share">professional plumbing services</a> to local communities. This experience means we know what to expect before we reach you.</p>
                <p className="mb-0">We also offer plumbing maintenance in Dubai, which we strongly recommend as a preventative action.</p>
                <p className="mb-1"><strong>We are fully ready to handle plumbing emergencies.</strong></p>
                <p className="mb-0">We regularly provide replacement parts gratitude to our dedicated warehouse and reliable supplier connections. A quick response to emergencies can significantly lower your DEWA (water) bills!</p>
                <p className="mb-1"><strong>We provide a comprehensive warranty on both our services and parts.</strong></p>
                <p className="mb-0">We take pride in our work and are confident that we have the best plumbers in Dubai. We offer a 3-month service warranty.</p>
                <p className="mb-0">Our exercise in plumbing regulations and standards, combined with our post-service quality warranty, ensures that your long-term satisfaction is always our top priority.</p>
              </div>

              <div className="col-md-6 ">

                <img className="bordered-img w-100" src={getImageSrc('technicians-adjusting-water-pressure-pump')} alt="FAJ Technical Services L.L.C" />

              </div>
            </div>

            <AppliancesAppointmentCol />
          </div>
        </section>
        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0 text-light">BENEFITS OF PROFESSIONAL PLUMBING SERVICES</h2>
              <p className="mb-2 text-light">Reliable plumbing services can help prevent your day from being a disaster. Choosing a <a href="https://www.instagram.com/fajtechnicalservicesllc/">low cost plumber</a> in Dubai often leads to a compromise on quality, resulting in the need for multiple follow-up visits without a proper solution. This is why you should choose to work with us instead:</p>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-3 mb-2 mt-2">
                  <div className="benifit-box-container pt-2">
                      <h3 className="text-uppercase mb-2 cs_fs_16">Avoid Costly Plumbing Repair Work</h3>
                      <p className="small">Plumbing problems nearly always worsen over time, and the damage can be devastating. Fixing an issue as soon as it is detected can save you money and prevent unnecessary stress.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-2 mt-2">
                    <div className="benifit-box-container pt-2">
                      <h3 className="text-uppercase mb-2 cs_fs_16">Identify the Root Cause</h3>
                      <p className="small">Some issues may be minor, while others indicate hidden factors that require attention. A skilled plumber understands the difference and will go the extra mile to prevent unseen problems.</p>
                  </div>
                </div>
                <div className="col-md-3 mb-2 mt-2">
                    <div className="benifit-box-container pt-2">
                        <h3 className="text-uppercase mb-2 cs_fs_16">Energy Conservation</h3>
                        <p className="small">Swift diagnosis and repair can help you <a href="https://www.dewa.gov.ae/en/consumer/useful-tools/consumer-faqs">avoid DEWA charges for unused water</a>.</p>
                      </div>
                </div>

                <div className="col-md-3 mb-2 mt-2">
                    <div className="benifit-box-container pt-2">
                      <h3 className="text-uppercase mb-2 cs_fs_16">All-Around Peace of Mind</h3>
                      <p className="small">Whether it’s a dripping tap or a blast pipe, plumbing or water motor pump issues can be very disruptive, no matter their size. To relax in comfort and safety, make sure to have both minor and major problems resolved quickly by the best plumbers in Dubai.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="text-center">Most Common Plumbing Problems</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Water Dripping Faucets</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Constant water dripping wastes water and indicates worn washers, seals, or corroded valve seats.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Blocked Water Drains</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Blockages from hair, grease, soap scum, or foreign objects are common reasons for a plumber's visit, whether in the kitchen or bathroom.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Leaky Toilets </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A continuously running toilet can waste hundreds of liters daily, usually due to a faulty flapper valve, float, or fill mechanism.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Low Water Pressure</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Low water pressure can be frustrating and may indicate larger issues, often caused by sediment build-up, pipe corrosion, or hidden leaks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Bursting Pipes</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A significant emergency that can cause extensive damage often result from corrosion or high water pressure.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Issues with the Water Heater</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">No hot water? It might be due to a faulty thermostat, a heating element issue, or sediment buildup in the tank.</p>

                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Leaking and Dripping Pipes</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Leaks usually remain concealed behind walls or ceilings, leading to mold, water damage, and higher utility bills if not addressed promptly.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Clogged and Overflowing Toilets</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A necessary and urgent issue, often caused by blockages in the trap, offset toilet connector, or main sewer line.</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="get-quote" className="mb-0 mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>

          </div>
        </section>
        {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
        <section className="section cs_py_30 bg-light-gray mb-4">
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
                    <h3>Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3>Feeling Of Calm</h3>
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your appliance runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your appliance repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1-new')} alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>We Are Experts</h3>
                    <p>We are experts in appliance repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>Trustworthy</h3>
                    <p>Our skilled appliance technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img src={getImageSrc('fajteam')} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        
        {/* Maintenance Contract */}
        <MaintenanceContract />

        {/* testimobial section */}
        {/* {!isLoading && testimonial_data.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg="testimonialbg"
            testimonialData={testimonial_data}
            sectionId="home-testimonials"
          />
        )} */}
         <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
          subtitle2="Contact us"
            title2="Book An Appointment"
          />

        </section>
        {/* FAQ&apos;s */}
         {/* Faqs */}
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_30">FAQ&apos;s</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 cs_semibold mb-0">{item.title}</span>
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
<path d="M8 2V14M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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
<path d="M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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

       

      </div >
    </>

  );
};

export default PlumbingServiceDetail;