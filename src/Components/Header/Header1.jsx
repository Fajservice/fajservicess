import { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import BookingFormModal from '../BookingFormModal';
import SocialIcon from '../../icons/SocialIcon';
import PhoneIcon from '../../icons/PhoneIcon';
import WhatsappIcon from '../../icons/WhatsappIcon';
import LocationIcon from '../../icons/LocationIcon';
import LogoSvg from '../../icons/LogoSvg';

const logoUrl = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public';

const contactItems = [
  {
    icon: <PhoneIcon className="cs_icon" />,
    content: '+971 4 330 0002',
    href: 'tel:+97143300002'
  },
  {
    icon: <WhatsappIcon className="cs_icon" />,
    content: '+971 50 746 4712',
    href: 'https://api.whatsapp.com/send?phone=+971507464712&text=Hello',
  },

  {
    icon: <LocationIcon className="cs_icon" />,
    content: 'Dubai - United Arab Emirates',
  },
];

const socialLinks = [
  {
    name: 'instagram',
    href: 'https://www.instagram.com/fajtechnicalservicesllc/',
  },
  {
    name: 'twitter',
    href: 'https://twitter.com/FAJTechnical/',
  },
  {
    name: 'youtube',
    href: 'https://www.youtube.com/@fajtechnicalservicesllc',
  },
  {
    name: 'facebook',
    href: 'https://www.facebook.com/FAJTechnicalServicesLLC',
  },
];

export default function Header1({ variant = '' }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const shouldBeSticky = window.scrollY > 10;
    setIsSticky((current) => (current === shouldBeSticky ? current : shouldBeSticky));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    backgroundColor: 'white',
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
        <div className="cs_main_header">
          <div className="container-fluidd">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/" aria-label="Home">
                  <LogoSvg />
                  {/* <img
                    src="https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
                    alt="FAJ Technical Services Logo"
                    width="200"
                    height="120"
                    style={{ width: 'auto', height: 'auto', maxWidth: '205px' }}
                  /> */}
                </Link>
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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cs_icon"
                    >
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
