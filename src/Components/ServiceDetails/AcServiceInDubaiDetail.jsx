import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/acfaq.json';
import { HelmetProvider } from "react-helmet-async";
import FAJACPrice from '../Miscellaneous/FAJACPrice';
import Serviceappointemnt from '../Contact/Serviceappointemnt';

const AcServiceInDubai = () => {

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


  return (
    <>
      <HelmetProvider>
        <title>FAJ / AC Repair In Dubai - Freezer Service Appliances Fix</title>
        <meta name="description" content="FAJ Established in 2010, / We offer professional AC Repair, Freezer, Refrigerator, Fridge, Washing Machine Maintenance Service Company Dubai"></meta>
      </HelmetProvider>

      <div className="cs_service_details">
        <section className="section cs_py_48">
          <div className="container">
            {/* <img className="bordered-img" src={`${import.meta.env.BASE_URL}/img/Ac-Maintenance.jpeg`} alt="Service Banner" /> */}
            <h2 className="cs_fs_30">The FAJ experts can help you make your home or place of business more comfortable</h2>
            <p>FAJ Technical Services LLC is your premier choice for quality AC Service In Dubai. With 14 years of experience in AC repairing, maintenance, and servicing, we are the most trusted air conditioning service company in Dubai, UAE.<br />FAJ is providing AC repair and maintenance services to all areas of Dubai. Our AC technicians are skilled and specialize in repairing all AC types, brands, and models. Experience reliable AC repair and maintenance to keep your home or business cool and comfortable.</p>
            <div id="get-quote" class=" mt-3">
              <div class="container d-flex justify-content-center align-items-center">
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
              </div>

            </div>
            {/*  */}
          </div>
        </section>

        <section className="section cs_py_48 bg-light-gray">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">

                <h3 class="cs_fs_30">Experts AC Service and Repair</h3>
                <p>When considering AC service in Dubai, it is vital to hire a qualified and reliable AC technician who can effectively address your needs at home or in your business place.</p>
                <p>FAJ Experts in comprehensive air conditioner (AC) service, and maintenance, ensuring that you receive the highest quality care for your cooling systems.</p>
              </div>
              <div className="col-md-6 text-center text-md-end  ">
                <img className="bordered-img" src={`${import.meta.env.BASE_URL}/img/reem-ac-service.jpg`} alt="Post Image" />

              </div>
            </div>

          </div>
        </section>

        <section className="section cs_py_48">
          <div className="container">
            <FAJACPrice></FAJACPrice>
          </div>
        </section>

        <section className="section cs_py_48 bg-light-gray">
          <div className="container">
            <h3 class="cs_fs_30">Signs You Need An AC Service</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="bordered-img" src={`${import.meta.env.BASE_URL}/img/indoor-ac-servicing.jpg`} alt="Post Image" />
              </div>
              <div className="col-md-6">
                <p>If you notice any of these signs, please contact us via WhatsApp. We are here to assist your AC cooling system in achieving optimal efficiency.</p>
                <ul>
                  <li>Higher electricity bills</li>
                  <li>Air is not blowing cold</li>
                  <li>Loss of AC performance</li>
                  <li>Drips from your air conditioner</li>
                  <li>Poor AC airflow, making noises</li>
                </ul>
                <div className="row d-none">

                  <div className="col-sm-6">
                    <div className="icon-container d-flex flex-wrap">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="icon" style={{ width: '33px', height: '33px' }}>
                          <img className="border-svg" src={`${import.meta.env.BASE_URL}/img/Higher electricity bills.svg`} alt="Icon image" />
                        </div>
                        Higher electricity bills
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="icon-container d-flex flex-wrap">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="icon" style={{ width: '33px', height: '33px' }}>
                          <img className="border-svg" src={`${import.meta.env.BASE_URL}/img/Higher electricity bills.svg`} alt="Icon image" />
                        </div>
                        Higher electricity bills
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="icon-container d-flex flex-wrap">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="icon" style={{ width: '33px', height: '33px' }}>
                          <img className="border-svg" src={`${import.meta.env.BASE_URL}/img/Higher electricity bills.svg`} alt="Icon image" />
                        </div>
                        Higher electricity bills
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="icon-container d-flex flex-wrap">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="icon" style={{ width: '33px', height: '33px' }}>
                          <img className="border-svg" src={`${import.meta.env.BASE_URL}/img/Higher electricity bills.svg`} alt="Icon image" />
                        </div>
                        Higher electricity bills
                      </div>
                    </div>
                  </div>
                </div>


                {/* <div className="d-flex flex-column d-none">
                  <img className="w-25 border-0" src={`${import.meta.env.BASE_URL}/img/Higher electricity bills.svg`} alt="Icon image" />
                  <img className="w-25 border-0" src={`${import.meta.env.BASE_URL}/img/Air is not blowing cold.svg`} alt="Icon image" />
                  <img className="w-25 border-0" src={`${import.meta.env.BASE_URL}/img/Loss of AC performance.svg`} alt="Icon image" />
                  <img className="w-25 border-0" src={`${import.meta.env.BASE_URL}/img/Drips from your air conditioner.svg`} alt="Icon image" />
                  <img className="w-25 border-0" src={`${import.meta.env.BASE_URL}/img/Poor AC airflow, making noises.svg`} alt="Icon image" />
                </div> */}

              </div>
            </div>

          </div>
        </section>

        <section className="section cs_py_48">
          <div className="container">
            <p>If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.<b /> <b />For technical inspection/callout fees, AC service near you, repair, or maintenance, please click here.To book an appointment, you can call +971 50 746 4712 or reach us on WhatsApp at +971 50 746 4712.</p>
            <div id="get-quote" class="mb-3 mt-3">
              <div class="container d-flex justify-content-center align-items-center">
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_48 bg-dark-blue text-light">
          <div className="container">
            <h3 class="cs_fs_30 text-light">Ready to Beat the Heat? Find the Best AC Repair in Dubai</h3>
            <p>Ready to Beat the Heat? Look no further! Find the best AC Repair in Dubai and keep yourself cool all summer long. Our expert AC technicians ensure fast, reliable services to get your AC up and running.Our service guarantees a comfortable home or office environment, even during the scorching heat of Dubai. Plus, with our affordable rates and transparent pricing, you can trust that you're getting the best value for your money.Don't suffer through another day of sweltering temperatures. Click below to schedule your AC repair and maintenance now and experience instant relief! Stay cool, Dubai!</p>
          </div>
        </section>


        <section className="section cs_py_48 bg-light-gray">
          <div className="container">
              <h3 class="cs_fs_30">A Quick Tour to Your AC Problems and Fixing</h3>
            <div className="row">
              <div className="col-xl-6">
                <iframe className="bordered-img" width="100%" height="350" src="https://www.youtube.com/embed/sxBhB1_gxYA?si=96yf5hxyAA3bct8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
              </div>
              <div className="col-xl-6">
                <p>Take a look at this video to understand the possible problems your AC might face. This will help you to ensure that the professionals you hire are completing the right checks.</p>
                <p><strong>We specialize in:</strong></p>
                <div className="row">
                  <div className="col">
                    <ul className="cs_list cs_style_1 cs_fs_16 cs_mp_0">
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Cleaning or replacing the air filter</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Condenser coil and evaporator unit cleaning</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Inspecting and repairing ductwork</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Recharging refrigerant levels</span>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <ul className="cs_list cs_style_1 cs_fs_16 cs_mp_0">
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Checking and tightening electrical connections</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Fixing leaks refrigerant, water, or duct leaks</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Unclogging drain lines</span>
                      </li>
                    </ul>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="section d-none">
          <div className="container">
            <div id="get-quote" class="my-3">
              <div class="container d-flex justify-content-center align-items-center">
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_48">
          <div className="container">
            <h3 class="text-center">Benefits of Regular AC Servicing</h3>
            <div class="row d-flex justify-content-between text-center flex-wrap">
              <div class="col px-2">
                <img className="cs_mb_10" src={`${import.meta.env.BASE_URL}/img/Improved AC Cooling.svg`} alt="Improved AC Cooling" />
                <h3 class="acsvs-int-new-h4 cs_fs_20 mb-0">Improved Cooling</h3>
                <p class="acsvs-int-new-p">Regular AC maintenance and servicing improve the cooling capacity of your AC.</p>
              </div>
              <div class="col px-2">
                <img className="cs_mb_10" src={`${import.meta.env.BASE_URL}/img/Energy Efficient.svg`} alt="Energy Efficient" />

                <h3 class="acsvs-int-new-h4 cs_fs_20 mb-0">Energy Efficiency</h3>
                <p class="acsvs-int-new-p">Dirty AC units have to work much harder to cool your home, leading to higher energy consumption and bigger bills</p>
              </div>
              <div class="col px-2">
                <img className="cs_mb_10" src={`${import.meta.env.BASE_URL}/img/Extended Lifespan.svg`} alt="Extended Lifespan" />
                <h3 class="acsvs-int-new-h4 cs_fs_20 mb-0">Extended Lifespan</h3>
                <p class="acsvs-int-new-p">Regular AC Service every 4 months prolong the life of your AC unit by 40%</p>
              </div>
              <div class="col px-2">
                <img className="cs_mb_10" src={`${import.meta.env.BASE_URL}/img/No Costly Repairs.svg`} alt="No Costly Repairs" />

                <h3 class="acsvs-int-new-h4 cs_fs_20 mb-0">No Costly Repairs</h3>
                <p class="acsvs-int-new-p">Regular AC maintenance helps catching the potential problems, saving your time and money.</p>
              </div>
              <div class="col px-2">
                <img className="cs_mb_10" src={`${import.meta.env.BASE_URL}/img/Reliability.svg`} alt="Reliability" />

                <h3 class="acsvs-int-new-h4 cs_fs_20 mb-0">Reliability</h3>
                <p class="acsvs-int-new-p">Identify potential AC problems before they can negatively impact the safe and effective running of your AC unit.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_48 bg-dark-blue text-light">
          <div className="container">
            <h3 class="cs_fs_30 text-light">Choose FAJ for Speed, Efficiency and Peace of Mind</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                <ul class="acsvs-exp-spl-para tick-ul">
                  <li><b>We get the job done on time</b> thanks to our larger team and dedicated parts warehouse</li>
                  <li><b>All our AC technicians are fully qualified</b> and extensively trained by us to address all types of AC issues.</li>
                  <li><b>We help prevent future breakdowns</b> by only using locally produced, highest quality refrigerant gas.</li>
                  <li><b>From routine maintenance to complex repairs</b> we offers all type of AC repair and maintenance services.</li>
                  <li><b>We only use genuine parts</b> to give you peace of mind.</li>
                  <li><b>We give service and parts warranty</b> to make sure you are relax.</li>
                  <li><b>We look after the environment</b> by always recycling our gas.</li>
                </ul>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <img className="bordered-img" src={`${import.meta.env.BASE_URL}/img/Ac-Maintenance-in-Dubai.jpeg`} alt="Post Image" />
              </div>
            </div>
          </div>
        </section>


        <section className="section cs_py_48">
          <div className="container">
            <h3 class="text-center">Searching For HVAC Companies Near Me</h3>
            <p>We stand out from other “HVAC companies near me” with our commitment to customer satisfaction and top-notch service. Our reliable HVAC service ensures that every customer receives personalized attention and residential HVAC service tailored to their specific demands. Our expert HVAC service technician wants to build long-lasting relationships built on mutual respect and trust, therefore we place a high priority on being honest and upfront in all of our interactions. FAJ is a partner that truly cares about your comfort and well-being, so you can rely on them for more than just simple industrial HVAC services and HVAC duct repair.</p>
            <br/>
            <h3 class="text-center">AC Service Pump</h3>
            <p>If youre in need of a reliable AC service pump, Bosch has got you covered. With Boschs high-quality AC service pump, you can expect top-notch performance and durability. Plus, the competitive AC service pump price makes it an excellent choice for both professionals and DIY enthusiasts. Trust Bosch for all your AC service pump needs and enjoy efficient cooling system maintenance.</p>
            <br/>
            <h3 class="text-center">Trust Us For All Of Your AC Services In Dubai Needs</h3>
            <p>The Healthy Home provides premium and professional air conditioning services in the UAE. Our AC service professionals can resolve your AC problems. Full AC cleaning, AC chemical cleaning, AC coil cleaning, AC repair services, and regular AC maintenance are all part of AC servicing.

              When you live in a hot and humid climate like the UAE, you may notice that you require regular AC services. This is primarily because you run your air conditioner almost constantly throughout the year. As a result, you will need to have your air conditioner serviced more frequently than people who live in colder climates.

              Because of the dustier environment, you will need regular AC filter cleaning, especially if you suffer from asthma or allergies. Because of the high usage, AC repair and maintenance are performed regularly. Our skilled AC technicians provide excellent repair services. We also provide annual maintenance contracts (AMC) to make sure that your air conditioner is always in good working order.</p>
          
          </div>
        </section>

        <section className="section cs_py_48 bg-dark-blue text-light">
          <div className="container">
            <h3 class="text-center text-light">AC Cleaning Services</h3>
            <p>In Dubai, maintaining a comfortable and healthy indoor environment is essential, and that's where AC cleaning services come into play. When it comes to split AC cleaning and AC deep cleaning services, residents rely on the expertise of professionals. These specialized services ensure your air conditioning units function efficiently and keep the air in your space clean and safe. Choose AC cleaning services in Dubai for a breath of fresh, purified air in your home or office. Prepare your air conditioning system for the hot summer months with our efficient AC deep cleaning services. Trust us for AC filter cleaning Dubai and Corporate AC cleaning Dubai as we excel in providing services in both commercial and residential areas.</p>
            <br/>

            <h3 class="text-center text-light">FAJ Services Offer Expert AC Technician Near Me</h3>
            <p>In the intense heat of Dubai, when you need emergency AC cleaner services, it's critical to find a professional AC mechanic near me for immediate assistance. Look no farther than FAJ if you need a reliable and skilled AC mechanic in Dubai. For all of your cooling needs, our air conditioning specialists work throughout Dubai to deliver efficient solutions and timely service. Hire FAJ services to get an AC technician near me who can handle all of your AC-related issues.</p>
            <br/>
            <h3 class="cs_fs_30 text-light">Restore Your AC With FAJ’s Air Conditioning Service</h3>
            <p>You need efficient air conditioning repair service to get your home or place of work comfortable. We use modern equipment to provide air conditioning service so we can assist our client in the best way possible. Whether it's a simple repair or a complex commercial air conditioning servicing, we're committed to provide timely, effective solutions for industrial air conditioning systems that meet your expectations. If you're looking for trustworthy air conditioning near me, you can trust FAJ.</p>
          
          </div>
        </section>



        <section className="section cs_py_48">
          <div className="container">
            <h3 class="cs_fs_30">FAQ's</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 black-font-color cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye"></i>
                      <i className="bi bi-eye-slash"></i>
                    </span>
                  </div>
                  <div className="cs_accordian_body" ref={accordionContentRef}>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        <section className="section cs_py_48">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book and Appointment"
          ></Serviceappointemnt>

        </section>


      </div>



    </>
  );
};

export default AcServiceInDubai;