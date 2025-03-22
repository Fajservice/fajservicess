import { Link } from "react-router-dom";

const Footer1 = () => {
    return (
        <footer className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg" data-src="assets/img/footer_bg.jpg">
        <div className="container">
          <div className="cs_footer_newsletter cs_style_1">
            <div className="cs_footer_newsletter_left cs_accent_bg cs_center">
              <img src="/assets/img/footer_logo.svg" alt="Logo" className="wow fadeInLeft" />
            </div>
            <div className="cs_footer_newsletter_right">
              <h3 className="cs_fs_24 cs_semibold cs_white_color mb-0">Subscribe now to get latest updates</h3>
              <form action="#" className="cs_footer_newsletter_form">
                <input type="text" placeholder="Enter Your Email" />
                <button className="cs_btn cs_style_1">
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="cs_main_footer cs_white_color">
          <div className="container">
            <div className="cs_footer_row">
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">About</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <div className="cs_text_widget">
                    <p>Phosfluorescently transform out-of-the-box paradigms whereas accurate supply chains. Continually</p>
                  </div>
                  <div className="cs_social_btns cs_style_1">
                    <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-youtube"></i>
                    </a>
                    <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Explore</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_footer_menu">
                    <li>
                      <Link to="/service/service-details">Adult In Car Lessons</Link>
                    </li>
                    <li>
                      <Link to="/service/service-details">Defensive Driving</Link>
                    </li>
                    <li>
                      <Link to="/service/service-details">Defensive Driving</Link>
                    </li>
                    <li>
                      <Link to="/service/service-details">Initial driving lesson</Link>
                    </li>
                    <li>
                      <Link to="/service/service-details">Woman Education</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Contact Us</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_footer_contact_list cs_mp_0">
                    <li>
                    <i className="bi bi-geo-alt-fill"></i>
                      Musaffah - M-6 - Abu Dhabi United Arab Emirates
                    </li>
                    <li>
                    <i className="bi bi-telephone-fill"></i>
                      <a href="tel:+(163)-5565-06979">+(163)-5565-06979</a> <br/>
                      <a href="tel:+(163)-5565-07989">+(163)-5565-07989</a>
                    </li>
                    <li>
                    <i className="bi bi-envelope-fill"></i>
                      <a href="mailto:cripar@gmail.com">cripar@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Working Hours:</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_working_hours">
                    <li>
                      <span>Thu - Fri</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </li>
                    <li>
                      <span>Mon - Wed</span>
                      <span>8:00 AM - 10:00 PM</span>
                    </li>
                    <li>
                      <span>Saturday</span>
                      <span>7:00 AM - 9:00 PM</span>
                    </li>
                    <li>
                      <span>Sunday</span>
                      <span>Close</span>
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
              <div className="cs_footer_copyright">
                Copyright © 2024 <a href="#">Cripar</a>. All Rights Reserved.
              </div>
              <div>
                <img src="/assets/img/payment_card.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer1;