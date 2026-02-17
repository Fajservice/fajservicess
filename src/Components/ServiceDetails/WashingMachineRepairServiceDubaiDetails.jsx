import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const WashingMachineRepairServiceDubaiDetails = () => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);

    // State for fetched data
    const [data, setData] = useState([]);
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

    // Fetch JSON data
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${import.meta.env.BASE_URL}Data/washingmachinefaq.json`);
          const faqData = await response.json();
          setData(faqData);
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
          <title>Washing  Machine Repair & Maintenance Services Dubai FAJ</title>
          <meta name="description" content="Sameday Washing Machine Repair Dubai. Book now 0507464712 Get Quality Washing Machine Repair near me with Reliable Washer Dryer"></meta>
        </HelmetProvider>
        <section>
        <div className="cs_height_80 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_60">
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
              <img src={`${import.meta.env.BASE_URL}img/Washing-Machine-Repair-in-Dubai.avif`} alt="Service Banner" />
              <h1 className="cs_fs_36">Washing Machine Repair Near Me</h1>
                <p>From noisy spin cycles to water leaks, no washing machine issue is too big or too small for us to handle. Whether you need repairs for a top-loading, front-loading, or compact washing machine, we've got the skills and expertise to fix your washing machine and get it run smoothly again. Looking for professional assistance with your washing machine in Dubai? Our certified experts at <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7"><b>FAJ Technical Services L.L.C.</b></a> are specialized in washing machine repair, maintenance, and installation services throughout Dubai. Whether you&apos;re facing issues with a top-loading, front-loading, or compact washer, we are here to help you. From fixing common washing machine problems to handling emergency repairs, trust us to keep your washing machine running smoothly. Contact us now for reliable services at competitive prices!</p>
                <div id="get-quote" className="mb-5 mt-3">
                  <div className="container d-flex justify-content-center align-items-center">
                    <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                    <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                  <img src={`${import.meta.env.BASE_URL}img/Appliances-Repair-Services-Technical-Inspection-Fee.avif`} alt="Post Image" />
                  <h4 className="cs_fs_18">Technical Inspection Fee</h4>
                    <p>We have a standard technical inspection fee starting from AED 157 to 320 (depending on the appliance) that covers diagnosis, transportation, and reinstallation of the same appliance. Please note that this fee is non-refundable. This flat rate applies to 1 or 2 appliances located in the same place. However, it does not include the cost of any parts.</p>
                    <p>If you need repair for coffee machine, stand mixer, or robot vacuum cleaner, please contact us.</p>
                  </div>
                  <div className="col-md-6">
                    <img src={`${import.meta.env.BASE_URL}img/Washing-Machine-Repair-in-Dubai-Call-Out.avif`} alt="Post Image" />
                    <h4 className="cs_fs_18">Same Day Washing Machine Repair Near You</h4>
                    <p>At FAJ, we understand how essential your washing machine is to your daily routine.</p>
                    <p>That's why we offer reliable washing machine repair and maintenance services near you in Dubai and Sharjah. With our top-quality washer & dryer service and expert support, we are dedicated to ensuring your premium washing machine runs smoothly for years to come.</p>
                  </div>
                </div>
                <p>Are you having issues with your washing machine? No need to worry! You've landed to the right place. Our skilled washing machine technicians at FAJ Technical Service L.L.C are expert in providing efficient washing machine repairing service in Dubai. We understand the essential role your washing machine plays in your daily life, and disruption a breakdown can cause. That's why our professional repair services are geared towards getting your washing machine back up and running in no time. That's why we offer professional repair services to fix your washing machine. Our expert technicians will arrive on time. We are just a phone call away! Contact us to schedule your appointment now!</p>
                <div id="get-quote" className="mb-5 mt-3">
                  <div className="container d-flex justify-content-center align-items-center">
                    <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                    <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                  </div>
                </div>
                <h2>Washing Machine Repair Near Me</h2>
                <p>Are you facing issues with your washing machine in Dubai's International City, or are you searching for 'washing machine repair near me'? Look no further than FAJ Services for reliable and prompt washing machine repair services. Our dedicated team specializes in delivering quick and efficient repair services right at your doorstep. At FAJ Services, we understand the inconvenience of a malfunctioning washing machine. that&apos;s why we offer quick and efficient repairs for various washing machine models. Whether it&apos;s a minor glitch or a major breakdown, our skilled technicians have the expertise to diagnose and fix all washing machine problem efficiently.</p>
                <div className="row">
                  <div className="col-xl-6">
                    <img src={`${import.meta.env.BASE_URL}img/washing-machine-repair.avif`} alt="Post Image" />
                  </div>
                  <div className="col-xl-6">
                    <h4 className="cs_fs_16">Fix Washing Machine Dubai: Solutions for Common Problems</h4>
                    <ul className="cs_list cs_style_1 cs_fs_16 cs_heading_font cs_mp_0">
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>Water Leakage</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>Drum Issues</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>Error Codes or Control Panel Malfunctions</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>Electrical Faults</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>Drainage Problems</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="get-quote" className="mb-5 mt-3">
                  <div className="container d-flex justify-content-center align-items-center">
                    <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                    <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                  </div>
                </div>
                  <p><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/lg/"><strong>LG Washing Machine Repair</strong></a><strong>:</strong> FAJ is here to support you when things go wrong. We understand that your LG washing machine is essential for daily life,ensuring your laundry is clean and well-maintained.</p>
                  <p><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/samsung/"><strong>Samsung </strong><strong>Washing Machine Repair</strong></a><strong>:</strong> If you are facing any problems with your washing machine, washer dryer, contact the FAJ team for same-day repair service in Dubai.</p>
                  <p><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/electrolux/"><strong>Electrolux </strong><strong>Washing Machine Repair</strong></a><strong>:</strong> When you need Electrolux washing machine repair in Dubai, we have a team of professional and qualified technicians available throughout the UAE.&nbsp;</p>
                  <p><a href="https://www.fajservices.ae/services/home-appliances-repair/"><strong>Bosch </strong><strong>Washing Machine Repair</strong></a><strong>: </strong>If you are looking for the best Bosch washing machine repair company in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch washing machine service provider in the area.</p>
                  <p><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/viking/"><strong>Viking </strong><strong>Washing Machine Repair</strong></a><strong>:</strong> Your Viking appliances may require repair or maintenance, and we can help. For high-quality Viking washing machine repair in Dubai, rely on FAJ.&nbsp;</p>
                  <p><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/daewoo/"><strong>Daewoo </strong><strong>Washing Machine Repair</strong></a><strong>: </strong>We provide expert services for Daewoo washing machine repair in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator, dishwasher, dryer and more.&nbsp;</p>
                  <p><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/siemens/"><strong>Siemens </strong><strong>Washing Machine Repair</strong></a><strong>:</strong> Are you concerned about your Siemens washing machine malfunctioning and searching for a reliable Siemens washing machine repair company in Dubai? Contact us for same-day service!</p>
                  <p><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/teka/"><strong>Teka </strong><strong>Washing Machine Repair</strong></a><strong>:</strong> If you&apos;re searching for the best Teka washing machine repair company in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka refrigerators, washing machines, and oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area.</p>
                  <p><br/><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/aeg/">AEG</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/ariston/">Ariston</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/beko/">Beko</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/blomberg/">Blomberg</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/faber/">Faber </a>| <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/fagor/">Fagor</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/fisher-paykel/">Fisher and Paykel</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/foster/">Foster</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/gaggenau/">Gaggenau </a>| <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/hitachi/">Hitachi</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/hoover/">Hoover </a>| <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/indesit/">Indesit</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/neff/">Neff</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/smeg/">Smeg</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sub-zero/">Sub Zero</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/terim/">Terim</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/viking/">Viking</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/whirlpool/">Whirlpool</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/zanussi/">Zanussi</a> | <a href="/services/home-appliances-repair/brands/de-dietrich/">De Dietrich</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/baumatic/">Baumatic</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/bertazzoni/">Bertazzoni</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/bompani/">Bompani</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/boston/">Boston</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/brandt/">Brandt</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/gibson/">Gibson</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/gorenje/">Gorenje</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/hisense/">Hisense</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/kelvinator/">Kelvinator</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/kenmore/">Kenmore</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/panasonic/">Panasonic</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sanyo/">Sanyo</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sears/">Sears</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/wolf/">Wolf</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/haier/">Haier</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/elica/">Elica</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/marvel/">Marvel</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/miele/">Miele</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/maytag/">Maytag</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/toshiba/">Toshiba</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/thermador/">Thermador</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sharp/">Sharp</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/admiral/">Admiral</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/aftron/">Aftron</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/unimac/">Unimac</a></p>
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/EnSAQA_AjzY?si=zZFudBndbd-OsZeo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
                    <p className="mb-0"
                      dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }}
                    ></p>
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
                  <ul className="cs_categories cs_fs_16 cs_mb_20">
                    <li><a href="/services/air-conditioning-repair/ac-service/">
                      <span>AC Service in Dubai</span>
                      <span><i className="fa-solid fa-arrow-right-long"></i></span>
                    </a></li>
                    <li><a href="/services/air-conditioning-repair/ac-service/">
                      <span>Refrigerator Repair</span>
                      <span><i className="fa-solid fa-arrow-right-long"></i></span>
                    </a></li>
                    <li><a href="/services/air-conditioning-repair/ac-service/">
                      <span>BBQ Service &amp; Repair</span>
                      <span><i className="fa-solid fa-arrow-right-long"></i></span>
                    </a></li>
                    <li><a href="/services/air-conditioning-repair/ac-service/">
                      <span>Coffee Machine Repair</span>
                      <span><i className="fa-solid fa-arrow-right-long"></i></span>
                    </a></li>
                    <li><a href="/services/air-conditioning-repair/ac-service/">
                      <span>Vacuum Cleaner Repair</span>
                      <span><i className="fa-solid fa-arrow-right-long"></i></span>
                    </a></li>
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_accent_bg">
                  <div className="cs_card cs_style_6">
                    <h3 className="cs_fs_30 cs_white_color cs_mb_30">Emergency Washing Machine Repair Services</h3>
                    <div className="cs_card_icon cs_center cs_mb_32">
                      <img src={`${import.meta.env.BASE_URL}img/icons/phone-call_2.svg`} alt="Phone Icon" />
                    </div>
                    <p className="cs_white_color cs_mb_5">Requesting A Call</p>
                    <a href="tel:+971507464712" className="cs_call_text cs_fs_30 cs_bold cs_heading_font cs_mb_23">(+971) 4 330 0002</a>
                    <p className="cs_card_subtitle cs_white_color cs_mb_33">If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.</p>
                    <Link to="/about-us/" className="cs_card_btn">
                      <span>Read more</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div className="cs_height_80 cs_height_lg_80"></div>
        </section>
      </>
    );
};

export default WashingMachineRepairServiceDubaiDetails;