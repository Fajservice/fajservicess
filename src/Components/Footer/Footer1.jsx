import { Link } from "react-router-dom";
import AIHandsetWidget from "../AIHandsetWidget.jsx/AIHandsetWidget";

const Footer1 = () => {
    return (
        <footer className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg" data-src={`${import.meta.env.BASE_URL}img/footer_bg.avif`}>
        <div className="cs_main_footer cs_white_color">
          <div className="container">
            <div className="cs_footer_row">
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h4 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">About</h4>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <div className="cs_text_widget">
                    <p>Reach out to our knowledgeable and friendly customer service team for assistance. We are just a call away.</p>
                  </div>
                  <div className="cs_social_btns cs_style_1">
                    <a href="https://www.instagram.com/fajtechnicalservicesllc/" className="cs_social_btn cs_center">
                    <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://twitter.com/FAJTechnical/" className="cs_social_btn cs_center">
                    <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.youtube.com/@fajtechnicalservicesllc" className="cs_social_btn cs_center">
                    <i className="bi bi-youtube"></i>
                    </a>
                    <a href="https://www.facebook.com/FAJTechnicalServicesLLC" className="cs_social_btn cs_center">
                    <i className="bi bi-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h4 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Explore</h4>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_footer_menu">
                    <li>
                      <Link to="/ac-service-in-dubai">AC Service in Dubai</Link>
                    </li>
                    <li>
                      <Link to="/refrigerator-repair-service">Refrigerator Repair</Link>
                    </li>
                    <li>
                      <Link to="/washing-machine-repair-service-dubai">Washing Machine Repair</Link>
                    </li>
                    <li>
                      <Link to="/service/service-details">Coffee Machine Repair & Maintenance</Link>
                    </li>
                    <li>
                      <Link to="/service/service-details">Vacuum Cleaner Repair & Robot Vacuum Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h4 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Contact Us</h4>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_footer_contact_list cs_mp_0">
                    <li>
                    <i className="bi bi-geo-alt-fill"></i>
                      Warehouse # 2, Street 18b, Al Quoz Industrial Area # 4, Dubai, UAE
                    </li>
                    <li>
                    <i className="bi bi-telephone-fill"></i>
                      <a href="tel:+97143300002">+971 4 330 0002</a> <br/>
                      <a href="tel:+971507464712">+971 50 746 4712</a>
                    </li>
                    <li>
                    <i className="bi bi-envelope-fill"></i>
                      <a href="mailto:info@fajservices.ae">info@fajservices.ae</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h4 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Working Hours</h4>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_working_hours">
                    <li>
                      <span>Mon - Sat</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </li>
                    <li>
                      <span>Sunday</span>
                      <span>12:00 PM - 6:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_footer_bottom cs_white_color">
          <div className="container">
            <div className="cs_footer_bottom_in">
              <div className="cs_footer_copyright text-light">
                Copyright © 2025 <a className="text-light" href="https://www.fajitsolutions.com/">FAJ IT SOLITIONS</a>. All Rights Reserved.
              </div>
              <div>
                <img src={`${import.meta.env.BASE_URL}img/icons/payment_card.png`} alt="Payment Icon FAJ" />
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-whatsapp">
	<div className="navbar-end flex">
		<div className="cta-nav mob-callus">
			<a href="tel:+97143300002" target="_blank" className="button-whatsapp"><i className="bi bi-telephone  mr-2"></i></a>
		</div>
		<div className="cta-nav mob-whatsapp">
			<a href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=FAJ-Services" target="_blank" className="button-whatsapp"><i className="bi bi-whatsapp mr-2"></i></a>
		</div>
	</div>
</div>
        <div className="floating-menu">
           <AIHandsetWidget />
          <ul className="flt-ul-icon">
              <li>
                  <a href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello-FAJ-Services" target="_blank" className="flt-icon-url">
                      <div className="flt-icon flt-icon-wh">
                          <i className="bi bi-whatsapp"></i>
                              <span className="flt-icon-text">+971507464712</span>
                      </div>
                  </a>
              </li>
              <li>
                  <a href="tel:+97143300002" target="_self" className="flt-icon-url">
                      <div className="flt-icon flt-icon-cl">
                          <i className="bi bi-telephone"></i>
                              <div className="flt-icon-text">+97143300002</div>
                      </div>
                  </a>
              </li>
              <li>
                  {/* <a href="https://smartfaj.vercel.app/" target="_blank" className="flt-icon-url">
                      <div className="flt-icon flt-icon-en">
                          <i className="bi bi-android"></i>
                              <div className="flt-icon-text">Chat with FAJ BOT</div>
                      </div>
                  </a> */}

                  
              </li>
          </ul>
                  
      </div>
     
      </footer>
     
    );
};

export default Footer1;