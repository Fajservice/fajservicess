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
  return `${CDN}/${imgPath}/public`;
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

const ElectricalPlumbingServiceDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metaImage = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/banners/electrical-service.jpg";
  const metatitle = String(titleSeo || "Electrical Plumbung Services in dubai");
  const metadescription = String(description || "Get fast electrical plumbing service in Dubai. We have expert electricians, plumbers near me. Electrical services in office, villa, and apartment. 043300002");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Electrical Plumbing Services, Dubai, Faj Technical Services, Plumbing, Electrical Services, Home Maintenance");
  const metaURL = String(URL || "https://www.fajservices.ae/electrical-plumbing-service/");

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
          fetch(`${import.meta.env.BASE_URL}data/ElectricalPlumbingServiceFAQs.json`),
          fetch(`${import.meta.env.BASE_URL}data/ElectricalPlumbingServicesTestimonials.json`)
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
            <h1 className="cs_fs_30">Electrical Plumbing Service Dubai</h1>
            <p>
              Plumbing is any system that carries liquids for a wide range of functions. The most general uses of plumbing are heating and cooling, waste removal, and potable water delivery; nevertheless, plumbing is not limited to these applications. Plumbing operates pipes, faucets, valves, fixtures and fittings, showers, taps, tanks, and other systems to convey water.
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h3 className="cs_fs_24 mb-1">Dubai Electrical Plumbing Services</h3>

                <p className="mb-2">
                  Plumbing issues can occur in our home at any time. The plumbing system in your home requires frequent Plumbing Maintenance and conservation. Effective Electrical Plumbing Services and maintenance can save you a lot of money in the long term.

                  <br /> If you have any plumbing problems in your home or business place, it is important to contact a professional plumber straight away even if the issue seems small. A minor leak in a pipe could be a sign of an emergency and it will escalate later if not rectified immediately.
                  <br />
                  F A J have an experienced team of professional plumbers who are ready to give rapid support. Our best electrical plumbing services in Dubai include fitting, repairing and maintaining pipes, water pump repair & maintenance, fixing leaked faucets, taps, showers, sink plugs and drain plugs.

                </p>


                <h3 className="cs_fs_24 mb-1 pt-3 border-small-top">Electrical Services in Dubai</h3>
                <p className="mb-0">
                  Electrical rewiring can be dangerous, which is why it's important that rewires are only ever carried out by specialists. <br />

                  Our electrical maintenance company provides the best electrical services in Dubai, UAE and our electrician teams are some of the most experienced in the UAE and routinely perform preventative and reactive maintenance to systems in thousands of homes each week. We understand common problems that can affect your Electrical systems such as:

                </p>
              </div>

              <div className="col-md-6 ">

                <img className="bordered-img w-100" src={getImageSrc('dishwasher')} alt="Post Image" />

              </div>
            </div>

            <AppliancesAppointmentCol />
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
                <img className="" src={`${import.meta.env.BASE_URL}img/fajteam.avif`} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        {/* We specialise  */}
        <section className="section cs_py_30 bg-light-gray ">
          <div className="container">
            <h3>We specialise in dishwasher services for the following brands </h3>
            <div className="row">
              <div className="col-12">

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/smeg/">
                    <b>LG Dishwasher Repair</b>
                  </Link>: FAJ is here to support you when things go wrong. We understand that your LG cooker or induction are essential for daily life, helping you prepare meals efficiently and on time.
                </p>

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/siemens/">
                    <b>Samsung Dishwasher Repair</b>
                  </Link>
                  : If you are facing any problems with your Samsung dishwasher, contact the FAJ team for same-day repair service in Dubai.

                </p>

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/la-germania/">
                    <b> Electrolux Dishwasher Repair</b>
                  </Link>:  When you need Electrolux dishwasher repair in Dubai, we have a team of professional and qualified technicians available throughout the UAE.
                </p>

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/">
                    <b> Bosch Dishwasher Repair</b>
                  </Link>: If you are looking for the best Bosch dishwasher repair company in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch dishwasher service provider in the area.

                </p>


                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/viking/">
                    <b> Viking Dishwasher Repair</b>
                  </Link>: Your Viking dishwasher may require repair or maintenance and we can help. For high-quality Viking dishwashers in Dubai, rely on FAJ.

                </p>

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/daewoo/">
                    <b> Daewoo Dishwasher Repair</b>
                  </Link>: We provide expert services for Daewoo dishwasher repair in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator, dishwasher, dryer and more.

                </p>

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/neff/">
                    <b> Siemens Dishwasher Repair</b>
                  </Link>: Are you concerned about your Siemens dishwasher malfunctioning and searching for a reliable Siemens dishwasher repair company in Dubai? Contact us for same-day service!


                </p>

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/teka/">
                    <b> Teka Dishwasher Repair</b>
                  </Link>: If you&apos;re searching for the best Teka dishwasher repair company in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka dishwashers, refrigerators, washing machines, and oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area.

                </p>


                <br />

                <p><a href="/services/home-appliances-repair/brands/aeg/">AEG</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/ariston/">Ariston</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/beko/">Beko</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/blomberg/">Blomberg</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/electrolux/">Electrolux</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/faber/">Faber</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/fagor/">Fagor</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/fisher-paykel/">Fisher and Paykel</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/foster/">Foster</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/gaggenau/">Gaggenau</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/hitachi/">Hitachi</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/hoover/">Hoover</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/indesit/">Indesit </a>
                  |<a href="/services/home-appliances-repair/brands/lg/"> LG</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/sub-zero/">Sub Zero</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/terim/">Terim</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/whirlpool/">Whirlpool</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/zanussi/">Zanussi</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/de-dietrich/">De Dietrich</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/baumatic/">Baumatic</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/bertazzoni/">Bertazzoni</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/bompani/">Bompani</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/boston/">Boston</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/brandt/">Brandt</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/gibson/">Gibson</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/gorenje/">Gorenje</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/hisense/">Hisense</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/kelvinator/">Kelvinator</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/kenmore/">Kenmore</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/panasonic/">Panasonic</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/sanyo/">Sanyo</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/sears/">Sears</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/wolf/">Wolf</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/haier/">Haier</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/elica/">Elica</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/marvel/">Marvel</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/miele/">Miele</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/maytag/">Maytag</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/toshiba/">Toshiba</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/thermador/">Thermador</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/sharp/">Sharp</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/admiral/">Admiral</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/aftron/">Aftron</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/unimac/">Unimac</a>
                </p>

              </div>

            </div>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton />
                <CallNowButton />
              </div>
            </div>

          </div>
        </section>

        {/* Maintenance Contract */}
        <MaintenanceContract />

        {/* testimobial section */}
        {!isLoading && testimonial_data.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg="img/testimonialbg.jpg"
            testimonialData={testimonial_data}
            sectionId="home-testimonials"
          />
        )}

        {/* FAQ&apos;s */}
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_30">FAQ&apos;s</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye"><EyeIcon /></i>
                      <i className="bi bi-eye-slash "><EyeSlashIcon /></i>
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

        <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
          subtitle2="Contact us"
            title2="Book An Appointment"
          />

        </section>

      </div >
    </>

  );
};

export default ElectricalPlumbingServiceDetail;