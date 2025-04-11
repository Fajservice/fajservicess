import { useEffect, useRef, useState } from "react";
import data from '../../Data/YorkAcRepairfaq.json';
import { HelmetProvider } from "react-helmet-async";
import FAJACPrice from '../Miscellaneous/FAJACPrice';
import Serviceappointemnt from '../Contact/Serviceappointemnt';

const YorkAcRepair = () => {

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
      <title>York AC Repair in Dubai - Air Conditioner Maintenance Near</title>
      <meta name="description" content="Are you need help in York AC Repair in Dubai? Call at 043300002 with FAJ Expert of HVAC, Central, VRF, (AC) air conditioner maintenance and services in Dubai"/>
      </HelmetProvider>

      <div className="cs_service_details">
        <section className="section cs_py_48">
          <div className="container">
            {/* <img src={`${import.meta.env.BASE_URL}/img/Ac-Maintenance.jpeg`} alt="Service Banner" /> */}
            <h2 className="cs_fs_30">York AC Repair in Dubai - Air Conditioner Maintenance Near You</h2>
            <p>Easy, fast and professional York AC maintenance services in Dubai for residential and commercial units. We understand the importance of arriving on site promptly when an York air conditioning failure affecting the vital systems has occurred, and people are relying upon it. We have expert, and experienced York air con repair technician’s that ensure the best York AC Maintenance Services in Dubai, United Arab Emirates. We will also provide York AC Maintenance Services in Dubai even if we did not install them. In 2010, 89% of our callouts resulted in the successful repair of failed units on our first visit. We also offer a warranty on every repair we undertake.</p>
            <div id="get-quote"  class=" mt-3">
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
                
                <h3 class="cs_fs_30">Experts York AC Service and Repair</h3>
                <p>When considering AC service in Dubai, it is vital to hire a qualified and reliable AC technician who can effectively address your needs at home or in your business place.</p>
                <p>FAJ Experts in comprehensive air conditioner (AC) service, and maintenance, ensuring that you receive the highest quality care for your cooling systems.</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <img class="bordered-img" src={`${import.meta.env.BASE_URL}/img/reem-ac-service.jpg`} alt="Post Image" />
                
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
                <h3 class="cs_fs_30">Signs You Need An York AC Service</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img class="bordered-img" src={`${import.meta.env.BASE_URL}/img/indoor-ac-servicing.jpg`} alt="Post Image" />
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
              </div>
            </div>
          </div>
        </section>
        <section className="section cs_py_48 bg-light-gray">
          <div className="container">
          <h3 class="cs_fs_30">York AC Repair Service in Dubai</h3>
            <div className="row align-items-center">
              <div className="col-md-7">
                <p>When it comes to comfortability York air conditioning becomes a priority. It controls humidity and provides fantastic indoor air quality. However, when it comes to installation, fixing, maintenance, or your york ac repair. Then things get challenging because you never know which company is the top one and efficient enough to provide us with the desired outcomes and care for our money.</p>
                <h3 class="cs_fs_30">Reliable And Efficient Air Con (AC) Repair</h3>
                <p>To repair your york aircon you do not need to get worried about all that stuff because you are in the right place. Yes, FAJ Technical Services LLC is the place where efficiency and reliability are at the forefront. We feel proud to be the top york ac repair across Dubai. For quick installation of your newly bought York air conditioning if you are looking for only experienced ones. Then we are at your doorstep call us and we are at your place in no time.</p>
              </div>
              <div className="col-md-5 text-center text-md-end">
                <img class="bordered-img" src={`${import.meta.env.BASE_URL}/img/reem-ac-service.jpg`} alt="Post Image" />
              </div>
            </div>
          </div>
        </section> 
        <section className="section cs_py_48 bg-dark-blue text-light">
          <div className="container">
            <h3 class="cs_fs_30 text-light">York Central Air Conditioning Service Near Me (Dubai)</h3>
            <p>In hot summer, central air con at residential and commercial places is a necessary thing. Without it, you cannot work efficiently and comfortably. Servicing of York Central AC demands increases during summers and FAJ is the experienced one in providing air condition service in your comfort zone. Our trained technicians are capable enough to swiftly service your york central air con. and let you comfortably do your essentials at your home or business. We are the best and possess years of experience in york ac repair in Dubai. The excellency of our work indicates our professionalism and our dedicated nature towards the performance. Our team is capable and excellent enough to deliver the best york ac repair.</p>
            <h3 class="cs_fs_30 text-light">Top-quality York AC Servicing In Dubai</h3>
            <p>If you looking for the best and most reliable servicing of your York aircon. Then stop right here and look no further. You are exactly where you should be yes, being the top and specialized ones in delivering all kinds of servicing regarding air conditioning. Our customers are quite satisfied and rely on us. We provide quick york ac repair, and installation plus fixing any issues your air con might have.</p> 
            <h3 class="cs_fs_30 text-light">Fixing of York Central Air Con Instantly</h3>
            <p>Who does not want a cool healthy home? We all want, and our air condition plays a vital role. Your York Central AC might be not cooling the room or area it used to be. It is maybe instead of cooling your home, working in a reverse manner. When you turn on your air condition humidity increases then, this is indicating that a clear fix is required. If the execution of air condition maintenance is on time then definitely results are fruitful and are less costly. We are always present to help you in solving all the issues. Our focus is to provide satisfactory results to our customers and provide swift fixing of your AC. We value your time and money therefore, we always deliver more than you ask for. Our focus is to help you to stay comfortable in a cool environment.</p>    
          </div>
        </section>

        <section className="section cs_py_48">
          <div className="container">
          <h3 class="cs_fs_30">York Central Controller Fault Codes</h3>
            <div className="row align-items-center">
                <div className="col-xl-6">
                  <img class="bordered-img" src={`${import.meta.env.BASE_URL}/img/Faj-for-speed.jpg`} alt="Post Image" />
                </div>
                <div className="col-xl-6">
                  <p>In this type of AC errors can be;</p>
                  <ul className="cs_list cs_style_1 cs_fs_16 cs_mp_0">
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                      <span>Code E1: Reason of error is senor failure</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                      <span>Code E4: The cause for this error is the Indoor EEPROM error</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                      <span>Code E7: The reason for the error is a communication fault between outdoor and indoor units</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                      <span>Code E14: The reason for the error is the malfunctioning of the indoor fan motor</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                      <span>Code F2: The exact cause for the error is the compressor is over-current</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                      <span>Code F3: The cause for the error is that there is a communication fault between IPM and indoor PCB</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                      <span>Code EF: malfunction is the reason for this error</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                      <span>Code E1-E0: The cause for the error is a lack of phase or communication malfunctioning</span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                      <span>Code E2: The reason for the error is senor is not working/malfunction</span>
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
              </div>
            </div>
          </div>
        </section>
        <section className="section cs_py_48 bg-dark-blue text-light">
          <div className="container">
            <h3 class="cs_fs_30 text-light">York Central Air Conditioning Service Near Me (Dubai)</h3>
            <p>In hot summer, central air con at residential and commercial places is a necessary thing. Without it, you cannot work efficiently and comfortably. Servicing of York Central AC demands increases during summers and FAJ is the experienced one in providing air condition service in your comfort zone. Our trained technicians are capable enough to swiftly service your york central air con. and let you comfortably do your essentials at your home or business. We are the best and possess years of experience in york ac repair in Dubai. The excellency of our work indicates our professionalism and our dedicated nature towards the performance. Our team is capable and excellent enough to deliver the best york ac repair.</p>
            <h3 class="cs_fs_30 text-light">Top-quality York AC Servicing In Dubai</h3>
            <p>If you looking for the best and most reliable servicing of your York aircon. Then stop right here and look no further. You are exactly where you should be yes, being the top and specialized ones in delivering all kinds of servicing regarding air conditioning. Our customers are quite satisfied and rely on us. We provide quick york ac repair, and installation plus fixing any issues your air con might have.</p> 
            <h3 class="cs_fs_30 text-light">Fixing of York Central Air Con Instantly</h3>
            <p>Who does not want a cool healthy home? We all want, and our air condition plays a vital role. Your York Central AC might be not cooling the room or area it used to be. It is maybe instead of cooling your home, working in a reverse manner. When you turn on your air condition humidity increases then, this is indicating that a clear fix is required. If the execution of air condition maintenance is on time then definitely results are fruitful and are less costly. We are always present to help you in solving all the issues. Our focus is to provide satisfactory results to our customers and provide swift fixing of your AC. We value your time and money therefore, we always deliver more than you ask for. Our focus is to help you to stay comfortable in a cool environment.</p>    
          </div>
        </section>
        <section className="section cs_py_48">
          <div className="container">
          <h3 class="cs_fs_30">Errors Your York Air Conditioning Is Facing</h3>
            <div className="row align-items-center">
                
                <div className="col-xl-6">
                  <p>There can be many reasons your York aircon is experiencing errors and malfunctioning. Experts identify the problems and fix them. However, knowing the exact error in York ac and fixing it right away is called art. Very few can pinpoint the exact faults and immediately solve them. We are working since 2010, and being the most experienced one having a top-trained team.</p>
                  <h3 class="cs_fs_30">We Easily Locate Fault And Fix It</h3>
                  <p>We serve our customers beyond their expectations to overcome any problem their air conditioning is facing. Now, every York AC model might have different errors. We are specialized enough to locate faults in each type of York aircon and swiftly resolve it.</p>
                </div>
                <div className="col-xl-6 text-center text-md-end">
                  <img class="bordered-img" src={`${import.meta.env.BASE_URL}/img/Faj-for-speed.jpg`} alt="Post Image" />
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
              </div>
            </div>
          </div>
        </section>

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

export default YorkAcRepair;