

import { useCallback, useEffect, useRef, useState } from "react";
import { Link, parsePath } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import HeaderForm from "../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";
import Blog3 from "../../Blog/Blog3";
import Testimonial1 from "../../Testimonial/Testimonial1";
import BrandsSliderSection from "../../BrandsSliderSection";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const WashingMachineRepairNearMeDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "WashingMachineRepairNearMe");
  const metadescription = String(description || "Looking Washing Machine repair near me in Dubai? Call us 043300002 for same-day Bosch, LG, Electrolux, Daewoo washing machine repair");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Washing machine Repair Near Me, Washing machine Service Near Me");
  const metaURL = String(URL || "https://www.fajservices.ae/dubai/washing-machine-repair-near-me/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/washing-machine/public");

  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = getImageSrc('testimonialbg')

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for fetched data
  const [data, setData] = useState([]);
  const [testimonial_data, setTestimonialData] = useState([]);
  const [brandsLogo_data, setBrandsLogoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = useCallback((e) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);
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
        const [faqsResponse, testimonialsResponse, brandsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/DubaiData/FAQs/WashingMachineRepairNearMeFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/DubaiData/Testmonials/WashingMachineRepairNearMeTestimonial.json`),
          fetch(`${import.meta.env.BASE_URL}data/AppliancesBrandsLogo.json`)
        ]);

        const faqsData = await faqsResponse.json();
        const testimonialsData = await testimonialsResponse.json();
        const brandsData = await brandsResponse.json();

        setData(faqsData);
        setTestimonialData(testimonialsData);
        setBrandsLogoData(brandsData);
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
          <div className="container text-center">
            <h1 className="cs_fs_30">Washing Machine Repair Near Me</h1>
            <p>Our expert washing machine repair specialists are ready to fix any malfunctions with your laundry machine!</p>

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
                <h2 className="cs_fs_20 mb-1 mt-0 text-align-left">Get Expert Washing Machine Repair in Dubai </h2>

                <p className="mb-2">
                  If your washing machine is not draining properly or making strange noises, it’s time to book a washing machine repair service with Fantastic Services. The washing machine technician we work with are fully trained to handle a wide range of repair on all makes and models of washing machines, dryers, including Daewoo, LG, Electrolux, AEG, Beko, Bosch, Indesit, Miele, Samsung, GE, Maytag, Hoover, and many more. They can diagnose and troubleshoot any issue while adhering to all safety standards and codes.</p>
                <p>
                  Schedule your appointment online for quick and reliable help with any household or commercial laundry equipment maintenance. A broken washing machine or dryer can lead to chaos in an organized household, especially if an interview, important event, or wedding is approaching.

                </p>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={getImageSrc('The-Most-Common-Reasons-for-Appliance-Breakdowns')} alt="Washing Machine Repair" />

              </div>
            </div>

            <AppliancesAppointmentCol />
          </div>
        </section>


        {/* Why is */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">A Range of Repairs Our Technicians Can Help You With</h2>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('washing-machine-repair')} alt="Washing Machine Repair" />
              </div>
              <div className="col-md-6">
                <p className="mb-0">
                  If your washing machine is not spinning or drying your clothes properly, don’t waste time trying to figure it out yourself. Turn to the skilled laundry technician we work with. They have years of experience and can repair any of the following issues:
                </p>
                <ul className="mb-0">

                  <li> The washing machine is not spinning </li>
                  <li> The dryer is not heating </li>
                  <li> The washing machine is making strange noises </li>
                  <li> The washing machine is overheating </li>
                  <li> The washer dryer door is stuck or locked </li>
                  <li> The washing machine is leaking </li>
                  <li> The washing machine is not draining completely </li>
                  <li> The washing machine is displaying an error code </li>
                  <li> The drum won’t turn at all </li>
                  <li> The washing machine is stuck on part of a program </li>
                  <li> The washing machine has a bad smell </li>
                </ul>
              </div>
            </div>
          </div>
        </section>



        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center"> Five Reasons to Contact a Washing Machine and Dryer Repair Specialist Near You
            </h2>
            <p>
              Your washing machine repair service will begin with a full diagnostic of the washing machine to identify the problem and any replacement parts needed. Our technicians come fully stocked with a wide range of common parts, allowing them to complete most repairs in just one visit. If additional parts need to be ordered, a second visit will be scheduled.
              <br />
              The technician will also perform full functional and safety tests, ensuring you receive the highest quality of service. Our technicians don’t just fix washer dryers; they also provide advice on how to maintain your laundry for the long run. Contact us anytime for professional washing machine and washer dryer maintenance advice tailored to your specific model.
            </p>
            <h2 className="cs_fs_24">Best Washing Machine Repair Near Me</h2>
            <p>
              Our washing machine repair specialists are ready to fix any malfunctions with your appliance!
            </p>

            <h2 className="cs_fs_24">Get Expert Washing Machine Repair in Dubai</h2>
            <p>
              If your washing machine is not draining properly or making strange noises, it’s time to book a repair service with Fantastic Services. The technicians we work with are fully trained to handle a wide range of repairs on all makes and models of washing machines, including Daewoo, LG, Electrolux, AEG, Beko, Bosch, Indesit, Miele, Samsung, Zanussi, and many more. They can diagnose and troubleshoot any issue while adhering to all safety standards and regulations.
              <br />
              Schedule your appointment online for quick and reliable help with any household or commercial laundry equipment maintenance. A broken washing machine or dryer can lead to confusion in an organized household, especially if an interview, important event, or wedding is approaching.
            </p>

            <div id="get-quote" className="mb-0 mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>

          </div>
        </section>

        {/* HERE ARE */}
        <section className="section cs_py_30 ">
          <div className="container">
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR WASHING MACHINES  </h2>
            <p></p>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/EnSAQA_AjzY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="col-xl-6">

                <p className='mb-0'>At FAJ, we are your reliable partner for washing machine maintenance in Dubai. Our comprehensive spare parts warranty ensures your machine is well cared for.
                  Our qualified technicians offer flexible home repair appointments to fit your schedule and efficiently resolve most issues on the first visit
                  Washing Machine Services:

                </p>


                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">


                  <li><strong> Washing Machine Repair Service: </strong> We are focusing on resolving issues such as non-functioning machines, leaks, drainage problems, and other malfunctions.</li>
                  <li><strong> Washing Machine Installation: </strong> Make sure that the washing machine is properly connected to the water supply, drainage, and power sources</li>
                  <li><strong> Washing Machine Maintenance Contract: </strong> To prevent future issues and maintain optimal performance, it is important to regularly clean the filters, hoses, and pumps.</li>
                  <li><strong> Additional Services: </strong> Depending on the service provider, this may include solutions for water leakage, deep cleaning, and more.</li>


                </ul>


              </div>


            </div>
          </div>
        </section >

        {/* The Benefits Of Appliances Service Dubai */}
        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits of washing machine Service Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Ensuring-Safety')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_16">Ensuring Safety</h4>
                      <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_16">Optimal Performance
                      </h4>
                      <p className="small">Regular maintenance helps your washing machine  run smoothly and efficiently, delivering the best results every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Lower-Energy-Bills')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h4>
                      <p className="small">Energy efficient washing machine translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Saving-Money-on-Repair')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_16">Saving Money on Repair</h4>
                      <p className="small">Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.</p>
                    </div>

                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/extending')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_16">Washing machine Lifespan</h4>
                      <p className="small">Proper care and timely servicing can significantly increase life of your home washing machine, delaying the need for replacements.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_16">Peace of Mind
                      </h4>
                      <p className="small">Knowing your washing machines are in top condition gives you confidence and removes the stress of unexpected failures.</p>
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
                    <p>With <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your washing machine runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your washing machine repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
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
                    <p>We are experts in wahing machine repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two washing machine at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>Trustworthy</h3>
                    <p>Our skilled washing machine technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
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

        {/* We specialise   */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY Washing Machine REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 157 to 280 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month repair warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>
            <h3>We specialise in Washing Machine Services for the following brands</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/lg/"><strong>LG Washing Machine Repair</strong></a><strong>: </strong>FAJ is here to help with your LG washing machine problems. We understand how important it is for your daily routine to keep your laundry fresh and clean. Whether you need express washing machine repair near me or thorough washing machine cleaning service nearby in Dubai, our expert team is ready to assist you. Contact us for reliable support and ensure your appliance runs smoothly.</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/samsung/"><strong>Samsung Washing Machine Repair</strong></a><strong>:</strong> Having trouble with your washing machine or dryer? You're in the perfect spot! Reach out to the FAJ team for trustworthy same-day washing machine repair and dryer service near me in Dubai. Our skilled washing machine technicians will swiftly diagnose and fix washing machine, washer dryer maintenance, and dryer repair, getting them back to peak performance in no time. We're excited to help you get your laundry back on track!</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/electrolux/"><strong>Electrolux Washing Machine Repair</strong></a><strong>: </strong>If you need Electrolux washing machine repair or Electrolux washing machine service near you in Dubai, our team of professional and qualified washing machine technicians is available throughout Dubai and Sharjah. We offer expert washer dryer repair and maintenance services nearby. For reliable washing machine repair, look for washing machine cleaning service near you in Dubai.</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/services/home-appliances-repair/"><strong>Bosch Washing Machine Repair</strong></a><strong>:</strong> If you're searching for the best Bosch washing machine repair company in Dubai, FAJ is the perfect choice. They are recognised for delivering exceptional washing machine service for all Bosch home appliance repair and are recognized as the leading Bosch washing machine service and maintenance near by you in the region. They also offer express dryer repair, washer dryer service, and maintenance in both Dubai and Sharjah.</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/viking/"><strong>Viking Washing Machine Repair</strong></a><strong>:</strong> Your Viking appliances may need repair or maintenance, and we can help. For high-quality Viking washing machine repair in Dubai, rely on FAJ. Get reliable washer dryer maintenance and service, and find washing machine services nearby in Dubai.</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/daewoo/"><strong>Daewoo Washing Machine Repair</strong></a><strong>:</strong> We provide expert washing machine repair and near me services in Dubai. Our skilled washer dryer technicians have the knowledge and expertise to diagnose and fix washing machine issues with Daewoo refrigerator, dishwasher, dryer and more.&nbsp;</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/siemens/"><strong>Siemens Washing Machine Repair</strong></a><strong>: </strong>Are you worried about your Siemens washing machine malfunctioning? Searching for a reliable washer dryer maintenance service in Dubai? Contact us for same-day service for washing machine cleaning service, dryer repair, and washer dryer maintenance!</p>
                <p className="mb-"><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/teka/"><strong>Teka Washing Machine Repair</strong></a><strong>:</strong> For reliable Teka washing machine repair in Dubai, FAJ is your best choice. They are renowned for their exceptional washer dryer maintenance services for Teka appliances, including washing machine cleaning service, fixing dryer, washer dryer repair or maintenance near me service, refrigerators, and ovens. FAJ is the top-rated service provider for Teka appliances in the area, guaranteeing quality and customer satisfaction.</p>

                {/* <p className="mb-0">
                  <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/aeg/">AEG</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/ariston/">Ariston</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/beko/">Beko</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/blomberg/">Blomberg</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/faber/">Faber</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/fagor/">Fagor</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/fisher-paykel/">Fisher and Paykel</a>  | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/foster/">Foster</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/gaggenau/">Gaggenau</a>| <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/hitachi/">Hitachi</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/hoover/">Hoover</a>| <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/indesit/">Indesit</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/neff/">Neff</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/smeg/">Smeg</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sub-zero/">Sub Zero</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/terim/">Terim</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/viking/">Viking</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/whirlpool/">Whirlpool</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/zanussi/">Zanussi</a> | <a href="/services/home-appliances-repair/brands/de-dietrich/">De Dietrich</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/baumatic/">Baumatic</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/bertazzoni/">Bertazzoni</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/bompani/">Bompani</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/boston/">Boston</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/brandt/">Brandt</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/gibson/">Gibson</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/gorenje/">Gorenje</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/hisense/">Hisense</a> |&nbsp;<a href="https://www.fajservices.ae/services/home-appliances-repair/brands/kelvinator/">Kelvinator</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/kenmore/">Kenmore</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/panasonic/">Panasonic</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sanyo/">Sanyo</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sears/">Sears</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/wolf/">Wolf</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/haier/">Haier</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/elica/">Elica</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/marvel/">Marvel</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/miele/">Miele</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/maytag/">Maytag</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/toshiba/">Toshiba</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/thermador/">Thermador</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sharp/">Sharp</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/admiral/">Admiral</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/aftron/">Aftron</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/unimac/">Unimac</a>
                </p> */}
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

       {/* Brands section */}
        {!isLoading && brandsLogo_data.length > 0 && (
          <BrandsSliderSection
            brandsData={brandsLogo_data.map(item => ({
              ...item,
              logo: getImageSrc(item.logo)
            }))}
            sectionId="home-brands"
            logoMaxHeight="60px"
            logoMaxWidth="120px"
            containerHeight="100px"
          />
        )}

        {/* Maintenance Contract */}
        <MaintenanceContract />

        {/* testimobial section */}
        <Testimonial1
          subtitle="What Our Clients Say"
          title="Customer <span>Reviews</span>"
          bgImg={reviewsbg}
          testimonialData={testimonial_data}
          sectionId="home-testimonials"
        />

        <Blog3></Blog3>



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


        <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book An Appointment"
          ></Serviceappointemnt>

        </section>

      </div >
    </>
  );
};

export default WashingMachineRepairNearMeDetail;

