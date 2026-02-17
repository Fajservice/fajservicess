
import { useEffect, useRef, useState } from 'react';
import CallNowButton from '../../Buttons/CallNowButton';
import Testimonial1 from '../../Testimonial/Testimonial1';
import Blog2 from '../../Blog/Blog2';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import loadBackgroudImages from '../../Common/loadBackgroudImages';
import WhatsappIconButton from '../../Buttons/WhatsappIconButton';

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const CommercialLaundaryEquipmentCatg = ({ subtitle, title, reviewsbg, titleSeo, description, Author, URL, Image }) => {
  const metatitle = String(titleSeo || "Commercial Laundry Equipment Maintenance Service Company in Dubai");
  const metadescription = String(description || "Book your home appliance repair today, and FAJ Service Center will arrange for an expert technician to fix your washing machine, fridge or dishwasher.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaURL = String(URL || "https://www.fajservices.ae/services/commercial-laundry-equipment/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public");

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
          fetch(`${import.meta.env.BASE_URL}data/coffeemachinesserviceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/CoffeeMAchineReapairTestimonials.json`)
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
          <meta name="description" content="Best commercial laundry equipment maintenance! FAJ offers installation and servicing for restaurant, hotel, schools in Dubai, including cooking ranges, fryers, ovens"></meta>
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content="Commercial Laundry Equipment Repair Service in Dubai - FAJ Technical Services L.L.C" />
          <meta property="og:url" content={metaURL}></meta>
          <meta property="og:description" content={metadescription} />
          <meta property="og:image" content={metaImage} />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Commercial Laundry Equipment Repair Service in Dubai - FAJ Technical Services L.L.C" />
          <meta name="twitter:description" content="Commercial Laundry Equipment Repair and Maintenance Services in Dubai" />
          <meta name="twitter:image" content={metaImage} />

        </Helmet>
      </HelmetProvider>

      <div className="cs_service_details">
        {/* Technical Services to Keep Your Coffee Flowing */}
        {/* <section className="section cs_py_30 bg-light-white">
          <div className="container">
            <h1 className="cs_fs_30 text-center mb-4">Professional Kitchen Equipment Maintenance and Servicing in Dubai
            </h1>
            <div className="row align-items-center">
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className="service-image-wrapper">
                  <img
                    src={`${CDN}/reliable-home-appliance/public`}
                    alt="Commercial Air Conditioning Maintenance Services in Dubai - FAJ Technical Services"
                    title="Commercial AC Maintenance Service in Dubai"
                    width="500"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="service-image"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      border: '4px solid #030303',
                      borderRadius: '8px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>

              <div className="col-12 col-lg-7">
                <p><b>Expert Appliance Repair Near You</b></p>
                <p>FAJ Technical Services L.L.C has been serving the kitchen equipment needs of Dubai since 2010. We provide comprehensive solutions for all types of commercial kitchen equipment.
                  Our services encompass installation, maintenance, and repair, catering to a diverse range of clients, including hospitality outlets, hotels, restaurants, cafes, catering services, and residential homes and villas. Additionally, we serve industrial facilities, corporate offices, and shopping centers.

                </p>
              </div>
            </div>
            <div className="mt-5">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section> */}

        {/*Select Repair Services by Category – Easily Find the Right Appliance Repair */}
        {/* <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">Select Repair Services by Category – Easily Find the Right Appliance Repair</h2>
            <div className="row align-items-center">
              <div className="col-12 col-lg-7">
                <p>At <b>FAJ Technical Services L.L.C.</b> we simplify the process of selecting the right repair service for your home appliances. Whether you need washing machine repair, refrigerator repair, household appliance fixes, BBQ grill cleaning, vacuum cleaner repair, cigar humidor maintenance, or any household appliance service, our categorised repair options help you find the best solution quickly and easily.</p>
              </div>
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className="service-image-wrapper">
                  <img
                    src={`${CDN}/bbq-grill-image/public`}
                    alt="Commercial Air Conditioning Maintenance Services in Dubai - FAJ Technical Services"
                    title="Commercial AC Maintenance Service in Dubai"
                    width="500"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="service-image"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      border: '4px solid #030303',
                      borderRadius: '8px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section> */}

        {/* why choose */}
        {/* <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">Why Choose FAJ Appliance Repair Service? – Trusted & Reliable Home Appliance Repairs</h2>
            <p>When you require home appliance repair, it's essential to choose a reliable service center provider that offers quality repairs, quick service, and appliance technicians. At <b>FAJ Technical Services L.L.C.</b> we ensure that your appliances will be repaired promptly, efficiently, and at an affordable price, all while maintaining the highest standards of service.</p>
            <h4>We are Home Appliance Repair Service Centers</h4>
            <p>We repair all brands and models of Home appliances including washing machines, fridge freezers, dishwashers, tumble dryers, washer dryers, cookers, ovens, hobs. All our repairs are performed by trained technicians.
              We are experts in appliance repair, and our technicians have successfully handled multiple repairs inculding washing machines, fridge freezers, dishwashers, tumble dryers, washer dryers, cookers, ovens, hobs. Whether it is your Washing Machine, Fridge, freezer, Cooker, Dishwasher or Tumble Dryer. We will quickly fix any faults that develop, and all our repair are guaranteed. You can book online at any time.
            </p>
            <div className="row align-items-center">
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className="shop-ac-image-wrapper">
                  <img
                    src={`${CDN}/ac-image/public`}
                    alt="Commercial Air Conditioning Maintenance Services in Dubai - FAJ Technical Services"
                    title="Commercial AC Maintenance Service in Dubai"
                    width="500"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="shop-ac-image"
                  />
                </div>
              </div>

              <div className="col-12 col-lg-7">
                <div className="shop-ac-bullet-list">
                  <div className="shop-ac-bullet-col">
                    <ul>
                      <li><b>Expert Technicians:</b> Our technicians are trained and experienced in resolving appliance issues across all major brands.</li>
                      <li><b>Comprehensive Services:</b> We provide a wide range of services for home appliances, from minor fixes to major repair.</li>
                      <li><b>Warranty Repair:</b> Using genuine parts in coffee machines, equipment, and vending machines.</li>
                      <li><b>Timely Booking:</b> Our online booking system is available seven days a week, allowing you to schedule repairs at your convenience.</li>
                      <li><b>Quick Support:</b> We recognise the importance of functional appliances in our daily lives and work hard to deliver prompt and efficient repair services.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <CallNowButton />
              </div>
            </div>
          </div>
        </section> */}

        {/* common problem */}
        {/* <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Appliance Repair Issues We Fix</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center mt-3">
              <p>At <b>FAJ Technical Services L.L.C</b> we provide expert home appliance repair services for a wide range of issues. If you’re experiencing any of the following problems, our expert technicians are ready to assist you.</p>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Washing Machine Repair </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Drum not rotating
                      Door locked defect
                      No power or display error
                      Unusual noise during operation
                      Drain blockage & water leakage
                      No spinning or excessive vibration
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Tumble Dryer Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0"> Drum not rotating
                      Not drying clothes properly
                      Loud noise & excessive vibration
                      Display error or system malfunction
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Refrigerator Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">No power
                      Not cooling properly
                      Excessive ice formation
                      Loud compressor noise
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dishwasher Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">No water intake
                      Soap dispenser not working
                      No steam during wash cycles
                      White patches left on utensils
                      Bad odor inside the dishwasher
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Washer Dryer Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Drum rotation failure
                      Display error messages
                      Clothes not drying properly
                      Unusual noise & excessive vibration
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Freezer Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      No power
                      Not cooling efficiently
                      Ice buildup and frost issues
                      Compressor is making loud noises
                    </p>
                  </div>
                </div>
              </div>


            </div>

            <div id="get-quote" className="mb-0 mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>

          </div>
        </section> */}

        {!isLoading && testimonial_data.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg="img/testimonialbg.jpg"
            testimonialData={testimonial_data}
            sectionId="home-testimonials"
          />
        )}

        <Blog2 />

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
      </div>
    </>
  )
}

export default CommercialLaundaryEquipmentCatg