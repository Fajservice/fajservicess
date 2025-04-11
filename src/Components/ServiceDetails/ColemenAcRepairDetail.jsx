import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/ColemenAcRepairfaq.json';
import { HelmetProvider } from "react-helmet-async";
import FAJACPrice from '../Miscellaneous/FAJACPrice';
import Serviceappointemnt from '../Contact/Serviceappointemnt';

const ColemenAcRepair = () => {

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
      <title>Coleman Ac Repair in Dubai -  Air Conditioner Maintenance</title>
      <meta name="description" content="Relax with Coleman. Call 0507464712 for Coleman Ac Repair in Dubai We are experts in HVAC, Central Air Conditioner maintenance service near me"/>
      </HelmetProvider>

      <div className="cs_service_details">
        <section className="section cs_py_48">
          <div className="container">
            {/* <img src={`${import.meta.env.BASE_URL}/img/Ac-Maintenance.jpeg`} alt="Service Banner" /> */}
            <h2 className="cs_fs_30">Coleman AC Repair in Dubai - AC Cleaning Service</h2>
            <p>Coleman Air Con has become a household necessity. Just like every other appliance it is also an indispensable thing and its major job is to provide homeowners adequate cooling. However, with time like other air conditioners, Coleman AC Repair in Dubai is crucial as well.<br />Every air conditioning is an investment and if you want to get most of your disbursement into your cooling system. The proper repairs and routine checkups are a must. To avail of the best Coleman AC Repair in Dubai, you must contact an experienced and well-known company. FAJ Technical Services LLC is always present and more than happy to assist you in all your air conditioner servicing.</p>
            <div id="get-quote"  class=" mt-3">
              <div class="container d-flex justify-content-center align-items-center">
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
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
                
                <h3 class="cs_fs_30">Experts Coleman AC Service and Repair</h3>
                <p>When considering AC service in Dubai, it is vital to hire a qualified and reliable AC technician who can effectively address your needs at home or in your business place.</p>
                <p>FAJ Experts in comprehensive air conditioner (AC) service, and maintenance, ensuring that you receive the highest quality care for your cooling systems.</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <img src={`${import.meta.env.BASE_URL}/img/reem-ac-service.jpg`} alt="Post Image" />
                
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
                <h3 class="cs_fs_30">Signs You Need An Coleman AC Service</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src={`${import.meta.env.BASE_URL}/img/indoor-ac-servicing.jpg`} alt="Post Image" />
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
              </div>
            </div>

          </div>
        </section> 

        <section className="section cs_py_48">
          <div className="container">
            <p>If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.<b /> <b />For technical inspection/callout fees, AC service near you, repair, or maintenance, please click here.To book an appointment, you can call +971 50 7464 712 or reach us on WhatsApp at +971 50 746 4712.</p>
            <div id="get-quote" class="mb-3 mt-3">
              <div class="container d-flex justify-content-center align-items-center">
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
              </div>
            </div>
          </div>
        </section>
        <section className="section cs_py_48 bg-light-gray">
          <div className="container">
          <h3 class="cs_fs_30">Error Codes Your Coleman Split Air Conditioning Showing</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                
                <p>Every air conditioner shows different error codes according to its type, size, brand, and model. Here are some of the Coleman split A/c fault codes which indicate issues within your Ac machine.</p>
                <ul class="d-flex flex-wrap column-gap-5">
                    <li>Code: E7</li>
                    <li>Code: E1</li>
                    <li>Code: E14</li>
                    <li>Code: F12</li>
                    <li>Code: F1</li>
                    <li>Code: F12</li>
                    <li>Code: F22</li>
                    <li>Code: F3</li>
                    <li>Code: F19</li>
                    <li>Code: F4</li>
                    <li>Code: F8</li>
                    <li>Code: F21</li>
                </ul>
                <p>Only an expert technician can tell you the exact error code, what it means as well as how to overcome it. Moreover, contacting a specialized team of professionals will save your day, money, and effort. This spendy Colman split air con should only be in the hands of professionals because they know how to take care of it and repair it on time.</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <img src={`${import.meta.env.BASE_URL}/img/reem-ac-service.jpg`} alt="Post Image" />
                
              </div>
            </div>

          </div>
        </section> 
        <section className="section cs_py_48 bg-dark-blue text-light">
          <div className="container">
            <h3 class="cs_fs_30 text-light">Do Not Settle For Subpar Air Con Service, Call FAJ Technical Services LLC</h3>
            <p>We have discussed in detail, what happens when you get the wrong installation of your air conditioner. To make things settle again, likely can cause you more than you think. Therefore, always choose the right and well-reputed company to get your air conditioning installed for the first time. Do not settle for the below quality, contact us today to get the best and unbeatable results. We are tech-savvy and remain updated with cutting-edge technology. In air conditioning technology, several advancements have taken place in recent years. We have a professional, experienced, and well-trained team that does exactly the unmatched work. Instead of trying to fix your air con issues on your own, ask FAJ to assist you. We provide all kinds of services, from routine maintenance to quick fixes of problems, repairing any component promptly and accurately. Our professionals take confidence to provide exceptional Coleman AC Repair in dubai.</p>
            <h3 class="cs_fs_30 text-light">False Installation Raises Humidity</h3>
            <p>Have you ever noticed that when you turn your inverter to get some cool, soft air so your sweating gets removed? And you enjoy the sweet cool air with your loved ones. However, instead of this reverse happens and your Coleman air conditioning system throws humid air. The major reason behind this scenario is the wrong installation of your central Ac. One drawback is the poor installation of air con which leads to several other disadvantages such as air filters easily getting clogged with dirt. Hampers the function of evaporated coils and steadily increases humidity. Thus, you experience more humid air than cool airflow. Humidity becomes a significant way for the growth of molds and mildews.</p>    
          </div>
        </section>


        <section className="section cs_py_48">
          <div className="container">
          <h3 class="cs_fs_30">Why FAJ?</h3>
            <div className="row">
                <div className="col-xl-6">
                  <img src={`${import.meta.env.BASE_URL}/img/Faj-for-speed.jpg`} alt="Post Image" />
                </div>
                <div className="col-xl-6">
                  <p>FAJ is like no other, yes you read it right. People choose us for numerous reasons and that is why we have gained immense popularity in Dubai.</p>
                  <ul className="cs_list cs_style_1 cs_fs_16 cs_mp_0">
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                      <span>We have been in the field of air conditioning services since 2010</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                      <span>Our team has years of experience and advanced training to get the job done superbly and promptly.</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                      <span>We have proper, advanced tools and equipment to get the work done excellently</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                      <span>We help you to choose the correct system for your home or office and ensure that it is installed precisely.</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                      <span>FAJ provides you with a warranty on our services and hence we are quite reliable and easy to get in touch with.</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                      <span>All of our servicing is so reasonable that will happily amaze you and give you complete satisfaction that your air con is going to be newer and run efficiently.</span>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div id="get-quote"  class="my-3">
              <div class="container d-flex justify-content-center align-items-center">
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="section cs_py_48 bg-dark-blue text-light">
        <div className="container">
        <h3 class="cs_fs_30 text-light">AC Duct Cleaning Service in Dubai</h3>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>AC ducts are the pathways that delivers cool air from your cooling system into each room and out again. Here in the UAE, we have high reliance on air conditioners. The fact is we spend a lot of time indoors (especially during the intense summer season), which means air pollution can be 3 to 5 times higher inside your home than it is outdoors.<b />To remove the dust, mould, parasites, and other harmful contaminants that can hide in your AC ducts, professionals need to clean and disinfect them regularly. Our trained experts use advanced methods to remove dust, allergens, and other particles from your air ducts. Contact us today to book your AC duct cleaning services!</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <img src={`${import.meta.env.BASE_URL}/img/Faj-for-speed.jpg`} alt="Post Image" />  
          </div>
        </div>
        </div>
        </section>  */}

        <div className="section cs_py_48  bg-dark-blue text-light">
          <div className="container">
            <h3 class="cs_fs_30 text-light">FAQ's</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye text-light"></i>
                      <i className="bi bi-eye-slash text-light"></i>
                    </span>
                  </div>
                  <div className="cs_accordian_body" ref={accordionContentRef}>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
        <div className="section cs_py_48">
          <Serviceappointemnt
              subtitle2="Contact us"
              title2="Book and Appointment"
          ></Serviceappointemnt>     
        
        </div>

        
      </div>      

        
      
    </>
  );
};

export default ColemenAcRepair;