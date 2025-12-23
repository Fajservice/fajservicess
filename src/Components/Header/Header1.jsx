import { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import BookingFormModal from '../BookingFormModal';
import img from '/img/FajLogo.svg';
import { IoCallOutline } from 'react-icons/io5';
import { IoLocationOutline } from 'react-icons/io5';
import { FaFacebook} from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { RxArrowTopRight } from 'react-icons/rx';

const contactItems = [
  { icon: <IoCallOutline />, content: '+971 4 330 0002', href: 'tel:+97143300002' },
  { icon: <FaWhatsapp />, content: '+971 50 746 4712', href: 'https://api.whatsapp.com/send?phone=+971507464712&text=Hello' },
  { icon: <IoLocationOutline />, content: 'Dubai - United Arab Emirates' }
];

const socialLinks = [
  { icon: <FaInstagram />, href: 'https://www.instagram.com/fajtechnicalservicesllc/' },
  { icon: <FaTwitter />, href: 'https://twitter.com/FAJTechnical/' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/@fajtechnicalservicesllc' },
  { icon: <FaFacebook />, href: 'https://www.facebook.com/FAJTechnicalServicesLLC' }
];

export default function Header1({ variant = '' }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsSticky(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setMobileToggle(prev => !prev);
  }, []);

  const openModal = useCallback((e) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const headerStyles = useMemo(() => ({
    position: isSticky ? 'fixed' : 'relative',
    top: 0,
    zIndex: '9999',
    width: '100%',
    backgroundColor: isSticky ? 'white' : 'transparent',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    boxShadow: isSticky ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
  }), [isSticky]);

  const headerClasses = useMemo(() => [
    'cs_site_header',
    'cs_style_1',
    variant,
    'cs_sticky_header',
    'cs_site_header_full_width',
    mobileToggle ? 'cs_mobile_toggle_active' : '',
    isSticky ? 'cs_gescout_sticky' : ''
  ].filter(Boolean).join(' '), [variant, mobileToggle, isSticky]);

  return (
    <div className='header-area2 header_nav_03'>
      <header className={headerClasses} style={headerStyles}>
        <div className="cs_top_header">
          <div className="container-fluid">
            <div className="cs_top_header_in">
              <div className="cs_top_header_left">
                <ul className="cs_header_contact_list cs_mp_0">
                  {contactItems.map((item, index) => (
                    <li key={`contact-${index}`}>
                      {item.icon}
                      {item.href ? (
                        <a href={item.href} aria-label={item.content}>
                          {item.content}
                        </a>
                      ) : (
                        <span className="text-white fs-14px">{item.content}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cs_top_header_right">
                <div className="cs_header_social_links_wrap">
                  <div className="cs_header_social_links">
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
            </div>
          </div>
        </div>

        <div className="cs_main_header">
          <div className="container-fluid">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <div className="cs_logo_wrap">
                  <Link className="cs_site_branding" to="/" aria-label="Home">
                    <img src={img} alt="FAJ Technical Services Logo" />
                  </Link>
                  <div className="cs_logo_bg_shape cs_accent_color">
                    <svg width="509" height="141" viewBox="0 0 509 141" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
                      <path d="M74 0H487L508.5 70.5L473.5 141H74V0Z" fill="currentColor" />
                      <path d="M54 141H472.5L488.5 70.5L443.5 0H54V141Z" fill="white" />
                      <path d="M0 0H443L464.5 70.5L443 141H0V0Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_fs_18 cs_heading_color">
                  <button
                    className={mobileToggle ? 'cs-munu_toggle cs_teggle_active' : 'cs-munu_toggle'}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={mobileToggle}
                  >
                    <span></span>
                  </button>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>

              <div className="cs_main_header_right">
                <div className="solutek-btn2">
                  <button onClick={openModal} className="cs_btn cs_style_1" aria-label="Book Now">
                    <span>Book Now</span>
                    <RxArrowTopRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="cs_site_header_spacing_140" aria-hidden="true"></div>

      <BookingFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}