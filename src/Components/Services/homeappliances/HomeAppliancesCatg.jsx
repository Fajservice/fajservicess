import { useCallback, useEffect, useMemo, useState } from 'react';
import CallNowButton from '../../Buttons/CallNowButton';
import Testimonial1 from '../../Testimonial/Testimonial1';
import { Helmet } from 'react-helmet-async';
import loadBackgroudImages from '../../Common/loadBackgroudImages';
import WhatsappIconButton from '../../Buttons/WhatsappIconButton';
import ApplianceCategories from './ApplianceCategories';
import BlogWashingMachine from '../../Blog/BlogWashingMachine';
import PriceCardHomeCat from './PriceCardHomeappCat';
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import { Link } from 'react-router-dom';
import MaintenanceContract from '../../MaintenanceContract/MaintenanceContract';
import BrandsSliderSection from '../../BrandsSliderSection';
import GetQuoteButton from '../../Buttons/GetQuoteButton';
import Gallery from '../../Svg/Gallery';


const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const COVER_IMAGE_STYLE = {
  width: '100%',
  height: '100%',
  display: 'block',
  objectFit: 'cover',
  borderRadius: '0',
};

const COMMON_PROBLEMS = [
  {
    title: 'Washing Machine Repair',
    desc: 'Drum not rotating · Door locked defect · No power or display error · Unusual noise during operation · Drain blockage & water leakage · No spinning or excessive vibration',
  },
  {
    title: 'Tumble Dryer Repair',
    desc: 'Drum not rotating · Not drying clothes properly · Loud noise & excessive vibration · Display error or system malfunction',
  },
  {
    title: 'Dishwasher Repair',
    desc: 'No water intake · Soap dispenser not working · No steam during wash cycles · White patches left on utensils · Bad odor inside the dishwasher',
  },
  {
    title: 'Refrigerator Repair',
    desc: 'No power · Not cooling properly · Excessive ice formation · Loud compressor noise',
  },
  {
    title: 'Washer Dryer Repair',
    desc: 'Drum rotation failure · Display error messages · Clothes not drying properly · Unusual noise & excessive vibration',
  },
  {
    title: 'Freezer Repair',
    desc: 'No power · Not cooling efficiently · Ice buildup and frost issues · Compressor is making loud noises',
  },
];


const ServiceImage = ({ src, alt, title, style = COVER_IMAGE_STYLE }) => (
  <img
    src={src}
    alt={alt}
    title={title}
    width="500"
    height="400"
    loading="lazy"
    decoding="async"
    className="service-image"
    style={style}
  />
);

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2V14M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const HomeAppliancesCatg = ({ titleSeo, description, Author, URL }) => {
  const metatitle = titleSeo || 'Home Appliances Repair and Maintenance Services in Dubai';
  const metadescription = description || 'Book your home appliance repair today, and FAJ Service Center will arrange for an expert technician to fix your washing machine, fridge or dishwasher.';
  const metaAuthor = Author || 'FAJ Technical Services L.L.C';
  const metaURL = URL || 'https://www.fajservices.ae/services/home-appliances-repair/';
  const metaImage = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public';


  const [openItemIndex, setOpenItemIndex] = useState(0);
  const [faqs, setFaqs] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [brandsLogo_data, setBrandsLogoData] = useState([]);


  const handleItemClick = useCallback((index) => {
    setOpenItemIndex((prev) => (prev === index ? -1 : index));
  }, []);


  useEffect(() => {
    loadBackgroudImages();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsRes, testimonialsRes, brandsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/SmallAppliancesFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/SmallAppliancesRepairTestimonials.json`),
          fetch(`${import.meta.env.BASE_URL}data/AppliancesBrandsLogo.json`)
        ]);
        const [faqsData, testimonialsData] = await Promise.all([faqsRes.json(), testimonialsRes.json()]);
        const brandsData = await brandsResponse.json();
        setFaqs(faqsData);
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
const GALLERY_ITEMS = [
  { src: 'homeappliances-gallery/washing-machine-repair', alt: 'Washing Machine Repair' },
  { src: 'homeappliances-gallery/bbq-repair', alt: 'bbq repair' },
  { src: 'homeappliances-gallery/hob-repair', alt: 'hob repair' },
  { src: 'homeappliances-gallery/oven-repair', alt: 'oven repair' },
  { src: 'homeappliances-gallery/refrigerator-repair', alt: 'refrigerator repair' },
  { src: 'homeappliances-gallery/dispenser-repair', alt: 'dispenser repair' },
];
  const problemCards = useMemo(() =>
    COMMON_PROBLEMS.map(({ title, desc }) => (
      <div key={title} className="col-12 col-md-4 col-lg-4">
        <div className="box-content-container rounded border shadow">
          <div className="text-center">
            <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">{title}</h3>
          </div>
          <div className="inner-apcs-feat-desc">
            <p className="p-2 mb-0">{desc}</p>
          </div>
        </div>
      </div>
    )), []);

  const faqItems = useMemo(() =>
    faqs.map((item, index) => (
      <div
        key={index}
        className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? 'active' : ''}`}
      >
        <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
          <span className="cs_fs_16 cs_semibold mb-0">{item.title}</span>
          <span className="cs_accordian_toggle">
            {index === openItemIndex ? <MinusIcon /> : <PlusIcon />}
          </span>
        </div>
        <div className="cs_accordian_body">
          <p
            className="mb-0"
            dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }}
          />
        </div>
      </div>
    )), [faqs, openItemIndex, handleItemClick]);

  // ── Render ──
  return (
    <>
      <Helmet>
        <title>{metatitle}</title>
        <meta name="description" content={metadescription} />
        <meta name="author" content={metaAuthor} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={metaURL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={metatitle} />
        <meta property="og:url" content={metaURL} />
        <meta property="og:description" content={metadescription} />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metatitle} />
        <meta name="twitter:description" content={metadescription} />
        <meta name="twitter:image" content={metaImage} />
      </Helmet>

      <div className="cs_service_details">

        
        <section className="section cs_py_30">
          <div className="container">
            <h1 className='mb-4'>Home Appliance Repair & Service Center in Dubai</h1>
             <h2><b>Expert Appliance Repair Near You</b></h2>
                <p>
                  Reliable Home Appliance Repair Services – Fast & Affordable. Are you searching for a reliable home
                  appliance repair service center near you? We provide expert repair and support for all major home
                  appliances, including washing machines, refrigerators, ovens, stoves, dishwashers, and more. Our
                  appliance technicians provide quick and efficient repair services, ensuring your appliances are fixed
                  promptly and affordably.
                </p>
           
            <div className="pt-4 px-4 d-flex justify-content-center align-items-center">
              <WhatsappIconButton />
            </div>
          </div>
        </section>
        <PriceCardHomeCat />
        <section className="section  mt-0">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4 pt-4 px-4">
              Select Repair Services by Category – Easily Find the Right Appliance Repair
            </h2>
            <div className="row align-items-center g-0 border border-dark rounded overflow-hidden">
              <div className="col-12 col-lg-7 px-4 py-4">
                <p>
                  At FAJ Technical Services L.L.C. we simplify the process of selecting the right repair service for
                  your home appliances. Whether you need washing machine repair, refrigerator repair, household
                  appliance fixes, BBQ grill cleaning, vacuum cleaner repair, cigar humidor maintenance, or any
                  household appliance service, our categorised repair options help you find the best solution quickly
                  and easily.
                </p>
              </div>
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className="service-image-wrapper">
                  <ServiceImage
                    src={`${CDN}/home-appliance/public`}
                    alt="Home Appliance Repair Categories in Dubai - FAJ Technical Services"
                    title="Appliance Repair Categories in Dubai"
                  />
                </div>
              </div>
            </div>
            <div className="py-4 px-4 d-flex justify-content-center align-items-center gap-3">
              <WhatsappIconButton />
            </div>
          </div>
        </section>

        <div className="bg-light-gray">
          <ApplianceCategories />
        </div>

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">
              Why Choose FAJ Appliance Repair Service? – Trusted & Reliable Home Appliance Repairs
            </h2>
            <p>
              When you require home appliance repair, it's essential to choose a reliable service center provider that
              offers quality repairs, quick service, and appliance technicians. At <b>FAJ Technical Services L.L.C.</b>{' '}
              we ensure that your appliances will be repaired promptly, efficiently, and at an affordable price, all
              while maintaining the highest standards of service.
            </p>
            <h4>We are Home Appliance Repair Service Centers</h4>
            <p>
              We repair all brands and models of home appliances including washing machines, fridge freezers,
              dishwashers, tumble dryers, washer dryers, cookers, ovens, and hobs. All repairs are performed by trained
              technicians. Whether it is your washing machine, fridge, freezer, cooker, dishwasher, or tumble dryer —
              we will quickly fix any faults, and all repairs are guaranteed. You can book online at any time.
            </p>
            <div className="row align-items-center g-0 border border-dark rounded overflow-hidden">
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <ServiceImage
                  src={`${CDN}/techfridge/public`}
                  alt="Home Appliance Repair Technician in Dubai - FAJ Technical Services"
                  title="Appliance Repair Technician Dubai"
                />
              </div>
              <div className="col-12 col-lg-7 px-3">
                <ul className="m-1">
                  <li><b>Expert Technicians:</b> Our technicians are trained and experienced in resolving appliance issues across all major brands.</li>
                  <li><b>Comprehensive Services:</b> We provide a wide range of services for home appliances, from minor fixes to major repairs.</li>
                  <li><b>Warranty Repair:</b> Repairs carried out with genuine parts and backed by a service warranty.</li>
                  <li><b>Timely Booking:</b> Our online booking system is available seven days a week, allowing you to schedule repairs at your convenience.</li>
                  <li><b>Quick Support:</b> We recognise the importance of functional appliances in daily life and work hard to deliver prompt, efficient repair services.</li>
                </ul>
              </div>
            </div>
            <div className="mt-5 d-flex justify-content-center align-items-center gap-3">
              <CallNowButton />
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Appliance Repair Issues We Fix</h2>
            <p className="mt-3">
              At <b>FAJ Technical Services L.L.C</b> we provide expert home appliance repair services for a wide range
              of issues. If you're experiencing any of the following problems, our expert technicians are ready to assist you.
            </p>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center mt-3">
              {problemCards}
            </div>
            <div className="mb-0 mt-3 d-flex justify-content-center align-items-center gap-3">
              <WhatsappIconButton />
            </div>
          </div>
        </section>
        {/* The Benefits  */}
        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits Of Home Appliances Service Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Ensuring-Safety-New')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Ensuring Safety</h3>
                      <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Optimal-Performance-New')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Optimal Performance
                      </h3>
                      <p className="small">Regular maintenance helps your Home Appliances run smoothly and efficiently, delivering the best results every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Lower-Energy-Bills-New')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h3>
                      <p className="small">Energy efficient Home Appliances translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Saving-Money-on-Repair-New')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Saving Money on Repair</h3>
                      <p className="small">Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.</p>
                    </div>

                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/extending-New')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Extending Appliance Lifespan</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your home Home Appliances, delaying the need for replacements.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind-New')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Peace of Mind
                      </h3>
                      <p className="small">Knowing your Home Appliances are in top condition gives you confidence and removes the stress of unexpected failures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CHOOSE US */}
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
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1')} alt="FAJ icon service" />
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
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two Home Appliances at the same location in Dubai.</p>
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
                <img src={getImageSrc('fajteam')} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>
         <section className="section cs_py_30 bg-light-gray">
            <div className="container">
              <h3>We specialise in Home Appliances services for the following brands </h3>
              <div className="row">
                <div className="col-12">
                  <ul className="mb-0">
                    <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/smeg/">Smeg Home Appliances Repair</a>:</strong> FAJ is here to assist you when things go wrong. We understand that your Smeg Home Appliances is essential for daily life, helping keep your food fresh and your meals prepared. We offer electric home appliances repair near me service, gas home appliances repair and maintenance services in Dubai</li>
                    <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/siemens/">Siemens Home Appliances Repair</a>:</strong> If you're experiencing issues with your oven, stove, refrigerator, washer, dryer, or dishwasher, reach out to the FAJ team for same-day repair service in Dubai. Contact us for fix gas home appliances, and gas home appliances servicing near by your location in Dubai.</li>
                    <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/la-germania/">La Germania Gas Home Appliances Repair</a>:</strong> When you need La Germania gas oven repair in Dubai, for La Germania electric oven service and repair in Dubai, our qualified home appliances repair technicians are available throughout.</li>
                    <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/">Bosch Electric Home Appliances Repair</a>:</strong> If you're searching for the best Bosch electric Home Appliances repair and stove oven repair company in Dubai, FAJ is the perfect choice. They are renowned for delivering exceptional service for all Bosch electric Home Appliances maintenance and are recognized as the leading Bosch appliance service provider in the region.</li>
                    <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/viking/">Viking Stove and Home Appliances Repair</a>:</strong> Your Viking appliances may need repair or maintenance, and we can help. For high-quality Viking stove and microwave oven repair near me service in Dubai, trust FAJ.</li>
                    <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/daewoo/">Daewoo Home Appliances Repair</a>:</strong> We offer expert Daewoo gas home appliances repair services in Dubai. Our experienced technicians possess the knowledge and skills to diagnose and microwave oven repair issues with Daewoo electric stove oven maintenance near me service, refrigerators, washing machines, dryers, and more.</li>
                    <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/neff/">Neff Home Appliances Repair</a>:</strong> Are you worried about your Neff Home Appliances malfunctioning and looking for a trustworthy Neff Home Appliances repair and service in Dubai? Contact us for same-day electrical home appliances repair near me service!</li>
                    <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/teka/">Teka Stove and Home Appliances Repair</a>:</strong> If you're looking for the best Teka Home Appliances repair company in Dubai, FAJ is the perfect choice. They are well-known for providing outstanding service for Teka refrigerators, washing machines, fixing gas oven and gas oven servicing. FAJ is recognised as the leading Teka appliance service provider in the region.</li>
                  </ul>

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
                    <span>&nbsp;-&nbsp;</span>
                    <a href="/services/home-appliances-repair/brands/lg/"> LG</a>

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
        <section className="section gallery_section bg-light-gray cs_py_30" style={{ contain: 'layout style' }}>
            <div className="container">
              <h2>Gallery <Gallery /></h2>
              <div className="row gx-3 gy-3">
                {GALLERY_ITEMS.map(({ src, alt }) => (
                  <div key={src} className="col-md-4 col-6">
                    <img
                      src={`${CDN}/${src}/public`}
                      alt={alt}
                      loading="lazy"
                      width="400" height="300"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        {/* ── Testimonials ── */}
        {!isLoading && testimonialData.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg={getImageSrc('testimonialbg')}
            testimonialData={testimonialData}
            sectionId="home-testimonials"
          />
        )}

        <BlogWashingMachine />
        <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book An Appointment"
          ></Serviceappointemnt>
          </section>
        {/* ── FAQs ── */}
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_30">FAQ&apos;s</h3>
            <div className="cs_accordians_wrapper cs_style_1 p-0">
              {faqItems}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default HomeAppliancesCatg;