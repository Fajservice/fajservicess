import { Link } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { TiLocation } from "react-icons/ti";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import ChatWidget from "../ChatWidget/ChatWidget";

const socialLinks = [
  { icon: <FaInstagram />, href: 'https://www.instagram.com/fajtechnicalservicesllc/' },
  { icon: <FaTwitter />, href: 'https://twitter.com/FAJTechnical/' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/@fajtechnicalservicesllc' },
  { icon: <FaFacebook />, href: 'https://www.facebook.com/FAJTechnicalServicesLLC' }
];
const aboutLinks = [
  { path: "/terms-and-conditions/", text: "Terms & Conditions" },
  { path: "/privacy-policy/", text: "Privacy Policy" },
  { path: "/refund-policy/", text: "Refund Policy" },
  { path: "/b2b-services/", text: "B2B Services" },
  { path: "/career/", text: "Career" }
];
const exploreLinks = [
  { path: "/ac-repair-dubai/", text: "AC Repair and Maintenance" },
  { path: "/coffee-machine-service-center-in-dubai/", text: "Coffee Machine Repair and Maintenance" },
  { path: "/appliances-repair-service/", text: "Home Appliances Services" },
  { path: "/commercial-kitchen-equipment-maintenance-services/", text: "Commercial Kitchen Equipment Maintenance" },
  { path: "/commercial-refrigeration-maintenance/", text: "Refrigeration Maintenance and Repair" },
  { path: "/ice-maker-repair/", text: "Ice Maker Machine Repair Services" }
];

const contactInfo = [
  { icon: <TiLocation />, text: "Warehouse # S-02 - Gate 35 Street 18B - Al Qouz Ind.fourth - Al Quoz - Dubai - United Arab Emirates" },
  {
    icon: <BsFillTelephoneFill />,
    items: [
      { text: "+971 4 330 0002", href: "tel:+97143300002" },
      { text: "+971 50 746 4712", href: "tel:+971507464712" }
    ]
  },
  { icon: <FaEnvelope />, text: "info@fajservices.ae", href: "mailto:info@fajservices.ae" }
];

const usefulLinks = [
  { path: "/faqs/", text: "FAQS" },
  { path: "/blogs/", text: "Blogs" },
  { path: "https://www.fajtradingllc.com/", text: "FAJ Store" },
  { path: "/testimonials/", text: "Testimonials" },
  { path: "https://www.fajtradingllc.com/collections/all-spare-accessories", text: "Spare Parts" }
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
                 <ul className="cs_footer_menu mb-3">
                  {aboutLinks.map((link, index) => (
                    <li key={`explore-${index}`} style={{ display: 'flex', gap: '10px' }}>
                     <Link to={link.path}>{link.text}</Link>
                    </li>
                  ))}
                  <li className="d-none"><Link to="/orphan/">Orphan</Link></li>
                </ul>
                <div className="cs_social_btns cs_style_1">
                  {socialLinks.map((social, index) => (
                   <a
                        key={`social-${index}`}
                        href={social.href}
                        className="cs_center cs_accent_bg_light"
                        aria-label={social.icon}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Explore Column */}
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_white_color cs_mb_10">Our Services</h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_footer_menu">
                  {exploreLinks.map((link, index) => (
                    <li key={`explore-${index}`} style={{ display: 'flex', gap: '10px' }}>
                      <Link to={link.path}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

           

            {/* Working Hours Column */}
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_white_color cs_mb_10">Useful Links</h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg"></span>
                  <span className="cs_white_bg"></span>
                  <span className="cs_white_bg"></span>
                </div>
                <ul className="cs_working_hours">
                  {usefulLinks.map((link, index) => (
                    <li key={`explore-${index}`} style={{ display: 'flex', gap: '10px' }}>
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
                      <span className="footer-icons">{contact.icon}</span>
                      {contact.items ? (
                        contact.items.map((item, i) => (
                          <span key={`item-${i}`}>
                            <a href={item.href}>{item.text}</a>
                            {i < contact.items.length - 1 && <br />}
                          </span>
                        ))
                      ) : contact.href ? (
                        <a href={contact.href}>{contact.text}</a>
                      ) : (
                        contact.text
                      )}
                    </li>
                  ))}
                </ul>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.3424480096032!2d55.22508607483472!3d25.110623435202967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f699a600aceeb%3A0xa6121b25d557aa94!2sFAJ%20Technical%20Services%20L.L.C!5e1!3m2!1sen!2sae!4v1758520238062!5m2!1sen!2sae"
                  width={400}
                  height={250}
                  style={{ border: 0 }}
                  allowFullScreen
                  
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FAJ Technical Services location"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="cs_footer_bottom cs_white_color">
          <div className="container">
            <div className="cs_footer_bottom_in">
              <div className="cs_footer_copyright text-light">
                Copyright © {new Date().getFullYear()} <a className="text-light" href="https://www.fajservices.ae/">FAJ Technical Services L.L.C</a>. All Rights Reserved.
              </div>
              <div>
                <img
                  src={`${import.meta.env.BASE_URL}img/icons/payment_card.png`}
                  alt="Accepted payment methods"
                  
                  width="370"
                  height="24"
                  style={{ objectFit: 'contain' }}
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
              <IoCallOutline style={{ fontSize: "24px" }} />
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
              <FaWhatsapp style={{ fontSize: "24px" }} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Menu */}
      <div className="floating-menu">

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
                <FaWhatsapp style={{ fontSize: "24px" }} />
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
                <IoCallOutline style={{ fontSize: "24px" }} />
                <div className="flt-icon-text">+97143300002</div>
              </div>
            </a>
          </li>
        </ul>
      </div >
    </footer >
  );
};

export default Footer1;