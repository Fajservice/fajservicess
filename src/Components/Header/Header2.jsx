import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
export default function Header2({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <div className='header-area2 header_nav_02'>
    <header
      className={`cs_site_header cs_style_1 cs_type_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_top_header">
        <div className="container-fluid">
          <div className="cs_top_header_in">

          <div className="cs_top_header_left">
              <ul className="cs_header_contact_list cs_mp_0">
                <li>
                <i className="bi bi-telephone-fill"></i>
                  <a href="tel:+111(564)56825">+111 (564) 568 25</a>
                </li>
                <li>
                <i className="bi bi-envelope-fill"></i>
                  <a href="mailto:cripar@gmail.com">cripar@gmail.com</a>
                </li>
                <li>
                <i className="bi bi-geo-alt-fill"></i>
                  <span>Abu Dhabi - United Arab Emirates</span>
                </li>
              </ul>
            </div>

            <div className="cs_top_header_right">
            <div className="cs_header_social_links_wrap">
                <div className="cs_header_social_links">
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

          </div>
        </div>
      </div>
      <div className="cs_main_header">
        <div className="container-fluid">
          <div className="cs_main_header_in">

            <div className="cs_main_header_left">
            <div className="cs_logo_wrap">
              <Link className="cs_site_branding" to="/">
                <img src="/assets/img/logo.svg" alt="Logo" />
              </Link>
              <div className="cs_logo_bg_shape cs_accent_color">
                  <svg width="316" height="141" viewBox="0 0 316 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_24778)">
                      <path opacity="0.15" d="M158 0L316.483 84.75V254.25L158 339L-0.482651 254.25V84.75L158 0Z"
                        fill="currentColor" />
                    </g>
                    <g clipPath="url(#clip1_1_24778)">
                      <path d="M157.5 13L304.291 97.75V267.25L157.5 352L10.7087 267.25V97.75L157.5 13Z"
                        fill="currentColor" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_24778">
                        <rect width="316" height="141" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_1_24778">
                        <rect width="295" height="128" fill="white" transform="translate(10 13)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>            
              </div>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_fs_18 cs_semibold cs_heading_color cs_heading_font">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
            </div>
            <div className="cs_main_header_right">
            <div className="solutek-btn2">
            <Link to="/contact" className="cs_btn cs_style_1">
                <span>Get a Quote</span>
                <i className="bi bi-arrow-right"></i>
                </Link>             
					  </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="cs_site_header_spacing_140"></div>
    </div>
    
  );
}
