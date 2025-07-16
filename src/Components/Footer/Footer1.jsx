import { Link } from "react-router-dom";
// import AIHandsetWidget from "../AIHandsetWidget.jsx/AIHandsetWidget";

const socialLinks = [
  { icon: "bi-instagram", href: "https://www.instagram.com/fajtechnicalservicesllc/" },
  { icon: "bi-twitter", href: "https://twitter.com/FAJTechnical/" },
  { icon: "bi-youtube", href: "https://www.youtube.com/@fajtechnicalservicesllc" },
  { icon: "bi-facebook", href: "https://www.facebook.com/FAJTechnicalServicesLLC" }
];

const exploreLinks = [
  { path: "/ac-service-in-dubai/", text: "AC Service in Dubai" },
  { path: "/refrigerator-repair-service/", text: "Refrigerator Repair" },
  { path: "/washing-machine-repair-service-dubai/", text: "Washing Machine Repair" },
  { path: "/coffee-machine-service-center-in-dubai/", text: "Coffee Machine Repair & Maintenance" },
  { path: "/robot-vacuum-cleaner-repair/", text: "Vacuum Cleaner Repair & Robot Vacuum Service" }
];

const contactInfo = [
  { icon: "bi-geo-alt-fill", text: "Warehouse # 2, Street 18b, Al Quoz Industrial Area # 4, Dubai, UAE" },
  { 
    icon: "bi-telephone-fill", 
    items: [
      { text: "+971 4 330 0002", href: "tel:+97143300002" },
      { text: "+971 50 746 4712", href: "tel:+971507464712" }
    ]
  },
  { icon: "bi-envelope-fill", text: "info@fajservices.ae", href: "mailto:info@fajservices.ae" }
];

const workingHours = [
  { days: "Mon - Sat", hours: "8:00 AM - 6:00 PM" },
  { days: "Sunday", hours: "12:00 PM - 6:00 PM" }
];

const Footer1 = () => {
  return (
    <footer className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg">
      <div className="cs_main_footer cs_white_color">
        <div className="container pb-4">
          <div className="cs_footer_row">
            {/* About Column */}
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_white_color cs_mb_10">About</h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <div className="cs_text_widget">
                  <p>Reach out to our knowledgeable and friendly customer service team for assistance. We are just a call away.</p>
                </div>
                <div className="cs_social_btns cs_style_1">
                  {socialLinks.map((social, index) => (
                    <a
                      key={`social-${index}`}
                      href={social.href}
                      className="cs_social_btn cs_center"
                      aria-label={social.icon.replace('bi-', '')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`bi ${social.icon}`} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Explore Column */}
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_white_color cs_mb_10">Explore</h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_footer_menu">
                  {exploreLinks.map((link, index) => (
                    <li key={`explore-${index}`}>
                      <Link to={link.path}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Us Column */}
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_white_color cs_mb_10">Contact Us</h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_footer_contact_list cs_mp_0">
                  {contactInfo.map((contact, index) => (
                    <li key={`contact-${index}`}>
                      <i className={`bi ${contact.icon}`} aria-hidden="true"></i>
                      {contact.href ? (
                        <a href={contact.href}>{contact.text || contact.items.map(item => (
                          <span key={item.text}>
                            <a href={item.href}>{item.text}</a>
                            {index < contact.items.length - 1 && <br />}
                          </span>
                        ))}</a>
                      ) : (
                        contact.items ? (
                          <>
                            {contact.items.map((item, i) => (
                              <span key={`phone-${i}`}>
                                <a href={item.href}>{item.text}</a>
                                {i < contact.items.length - 1 && <br />}
                              </span>
                            ))}
                          </>
                        ) : (
                          contact.text
                        )
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Working Hours Column */}
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_white_color cs_mb_10">Working Hours</h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_working_hours">
                  {workingHours.map((hours, index) => (
                    <li key={`hours-${index}`}>
                      <span>{hours.days}</span>
                      <span>{hours.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="cs_footer_bottom cs_white_color">
          <div className="container">
            <div className="cs_footer_bottom_in">
              <div className="cs_footer_copyright text-light">
                Copyright © {new Date().getFullYear()} <a className="text-light" href="https://www.fajitsolutions.com/">FAJ IT SOLUTIONS</a>. All Rights Reserved.
              </div>
              <div>
                <img 
                  src={`${import.meta.env.BASE_URL}img/icons/payment_card.png`} 
                  alt="Accepted payment methods" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Contact Buttons */}
      <div className="mobile-whatsapp">
        <div className="navbar-end flex">
          <div className="cta-nav mob-callus">
            <a 
              href="tel:+97143300002" 
              className="button-whatsapp"
              aria-label="Call us"
            >
              <i className="bi bi-telephone mr-2" aria-hidden="true"></i>
            </a>
          </div>
          <div className="cta-nav mob-whatsapp">
            <a 
              href="https://api.whatsapp.com/send?phone=+971507464712&text=FAJ-Services" 
              className="button-whatsapp"
              aria-label="Chat on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp mr-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Menu */}
      <div className="floating-menu">
        {/* <AIHandsetWidget /> */}
        {/* <Chatbox></Chatbox> */}
        <ul className="flt-ul-icon">
          <li>
            <a 
              href="https://api.whatsapp.com/send?phone=+971507464712&text=Hello-FAJ-Services" 
              className="flt-icon-url"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp us"
            >
              <div className="flt-icon flt-icon-wh">
                <i className="bi bi-whatsapp" aria-hidden="true"></i>
                <span className="flt-icon-text">+971507464712</span>
              </div>
            </a>
          </li>
          <li>
            <a 
              href="tel:+97143300002" 
              className="flt-icon-url"
              aria-label="Call us"
            >
              <div className="flt-icon flt-icon-cl">
                <i className="bi bi-telephone" aria-hidden="true"></i>
                <div className="flt-icon-text">+97143300002</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer1;