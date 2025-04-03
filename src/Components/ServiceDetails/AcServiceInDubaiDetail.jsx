import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/acfaq.json';
import { HelmetProvider } from "react-helmet-async";

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
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_60">
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
              <img src={`${import.meta.env.BASE_URL}/img/Ac-Maintenance.jpeg`} alt="Service Banner" />
              <h1 className="cs_fs_36">AC Service In Dubai We Specialize in All AC Brands, Makes and Models</h1>
                <p>FAJ Technical Services LLC is your premier choice for quality AC Service In Dubai. With 14 years of experience in AC repairing, maintenance, and servicing, we are the most trusted air conditioning service company in Dubai, UAE. FAJ is providing AC repair and maintenance services to all areas of Dubai. Our AC technicians are skilled and specialize in repairing all AC types, brands, and models. Experience reliable AC repair and maintenance to keep your home or business cool and comfortable.</p>
                <div id="get-quote" class="mb-5 mt-3">
                  <div class="container d-flex justify-content-center align-items-center">
                    <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                    <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+97143300002">Call Now</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <img src={`${import.meta.env.BASE_URL}/img/reem-ac-service.jpg`} alt="Post Image" />
                    <h4>Same Day AC Service and Repair</h4>
                    <p>When considering AC service in Dubai, it is vital to hire a qualified and reliable AC technician who can effectively address your needs at home or in your business place.</p>
                    <p>FAJ team specializes in comprehensive air conditioner (AC) service, and maintenance, ensuring that you receive the highest quality care for your cooling systems.</p>
                  </div>
                  <div className="col-md-6">
                    <img src={`${import.meta.env.BASE_URL}/img/indoor-ac-servicing.jpg`} alt="Post Image" />
                    <h4>Signs You Need An AC Service</h4>
                    <p>If you notice any of these signs, please contact us via WhatsApp. We are here to assist your AC cooling system in achieving optimal efficiency.</p>
                    <ul>
                      <li>Loss of AC performance</li>
                      <li>Poor AC airflow, making noises</li>
                      <li>Rising DEWA expenses</li>
                      <li>Drips from your air conditioner</li>
                    </ul>
                  </div>
                </div>
                <p>If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.<b /> <b />For technical inspection/callout fees, AC service near you, repair, or maintenance, please click here.To book an appointment, you can call +971 4 330 0002 or reach us on WhatsApp at +971 50 746 4712.</p>
                <div id="get-quote" class="mb-5 mt-3">
                  <div class="container d-flex justify-content-center align-items-center">
                    <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                    <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+97143300002">Call Now</a>
                  </div>
                </div>
                <h2>Ready to Beat the Heat? Find the Best AC Repair in Dubai</h2>
                <p>Ready to Beat the Heat? Look no further! Find the best AC Repair in Dubai and keep yourself cool all summer long. Our expert AC technicians ensure fast, reliable services to get your AC up and running.Our service guarantees a comfortable home or office environment, even during the scorching heat of Dubai. Plus, with our affordable rates and transparent pricing, you can trust that you're getting the best value for your money.Don't suffer through another day of sweltering temperatures. Click below to schedule your AC repair and maintenance now and experience instant relief! Stay cool, Dubai!</p>
                <div className="row">
                  <div className="col-xl-6">
                    <img src={`${import.meta.env.BASE_URL}/img/Faj-for-speed.jpg`} alt="Post Image" />
                  </div>
                  <div className="col-xl-6">
                    <h4>Choose FAJ for Speed, Efficiency and Peace of Mind</h4>
                    <ul className="cs_list cs_style_1 cs_fs_18 cs_heading_font cs_mp_0">
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>We get the job done on time thanks to our larger team and dedicated parts warehouse.</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>We look after the environment by always recycling our gas.</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>We only use genuine parts to give you peace of mind.</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>We give service and parts warranty to make sure you are relax.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="get-quote" class="mb-5 mt-3">
                  <div class="container d-flex justify-content-center align-items-center">
                    <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                    <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+97143300002">Call Now</a>
                  </div>
                </div>
                <h4>AC Duct Cleaning Service in Dubai</h4>
                <p>AC ducts are the pathways that delivers cool air from your cooling system into each room and out again. Here in the UAE, we have high reliance on air conditioners. The fact is we spend a lot of time indoors (especially during the intense summer season), which means air pollution can be 3 to 5 times higher inside your home than it is outdoors.<b />To remove the dust, mould, parasites, and other harmful contaminants that can hide in your AC ducts, professionals need to clean and disinfect them regularly. Our trained experts use advanced methods to remove dust, allergens, and other particles from your air ducts. Contact us today to book your AC duct cleaning services!</p>
                <img src={`${import.meta.env.BASE_URL}/img/Ac-Maintenance-in-Dubai.jpeg`} alt="Post Image" />
              </div>
              <div className="cs_height_20 cs_height_lg_20"></div>
              <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index)=>(
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : "" }`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <h2 className="cs_fs_18 cs_semibold mb-0">{item.title}</h2>
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
            <aside className="col-xl-4 col-lg-5">
              <div className="cs_sidebar cs_style_1">
                <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                  <div className="cs_separator"></div>
                  <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">All Services</h3>
                  <ul class="cs_categories cs_fs_18 cs_semibold cs_mb_30">
                    <li><a href="/ac-service-in-dubai">
                      <span>Washing Machine Repair</span>
                      <span><i class="fa-solid fa-arrow-right-long"></i></span>
                    </a></li>
                    <li><a href="/ac-service-in-dubai">
                      <span>Refrigerator Repair</span>
                      <span><i class="fa-solid fa-arrow-right-long"></i></span>
                    </a></li>
                    <li><a href="/ac-service-in-dubai">
                      <span>BBQ Service &amp; Repair</span>
                      <span><i class="fa-solid fa-arrow-right-long"></i></span>
                    </a></li>
                    <li><a href="/ac-service-in-dubai">
                      <span>Coffee Machine Repair</span>
                      <span><i class="fa-solid fa-arrow-right-long"></i></span>
                    </a></li>
                    <li><a href="/ac-service-in-dubai">
                      <span>Vacuum Cleaner Repair</span>
                      <span><i class="fa-solid fa-arrow-right-long"></i></span>
                    </a></li>
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_accent_bg">
                  <div className="cs_card cs_style_6">
                    <h3 className="cs_fs_30 cs_white_color cs_mb_30">Emergency AC Repair Services</h3>
                    <div className="cs_card_icon cs_center cs_mb_32">
                      <img src={`${import.meta.env.BASE_URL}/img/icons/phone-call_2.svg`} alt="Phone Icon" />
                    </div>
                    <p className="cs_white_color cs_mb_5">Requesting A Call</p>
                    <a href="tel:+97143300002" className="cs_call_text cs_fs_30 cs_bold cs_heading_font cs_mb_23">(+971) 4 330 0002</a>
                    <p className="cs_card_subtitle cs_white_color cs_mb_33">If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.</p>
                    <Link to="/about" className="cs_card_btn">
                      <span>Read more</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
        </section>
      </>
    );
};

export default AcServiceInDubai;