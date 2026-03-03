import Form1 from '../Form/Form1';

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const LocationIcon = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
      fill="currentColor"
    />
  </svg>
);

const MailIcon = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 4h16v16H4V4zm0 0l8 8 8-8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const PhoneIcon = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.73 3.85.73a1 1 0 011 1v3.5a1 1 0 01-1 1C10.4 21 3 13.6 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.25 2.65.73 3.85a1 1 0 01-.21 1.11l-2.2 2.2z"
      fill="currentColor"
    />
  </svg>
);

const Contact = ({
  Title,
  subTitle,
  address,
  email,
  emailLink,
  number,
  numberLink,
  number1,
  number1Link,
  clientNumber,
  img,
  client,
  title2,
  subtitle2
}) => {
  return (
    <section>
      <div className="cs_height_40 cs_height_lg_40"></div>
      <div className="container">
        <div className="row cs_gap_y_50">
          <div className="col-lg-6">
            <div className="cs_contact_info_wrapper position-relative">
              <div className="cs_contact_info cs_white_bg wow fadeInDown">
                <div className="cs_accent_bg cs_line_shape cs_mb_32"></div>
                <h2 className="cs_contact_info_title cs_fs_30 cs_mb_12">{Title}</h2>
                <p className="cs_mb_25">{subTitle}</p>

                <div className="cs_iconbox cs_style_1 cs_type_1 cs_mb_18">
                  <div className="cs_iconbox_icon cs_center">
                    <LocationIcon className="contact-icons" />
                  </div>
                  <div className="cs_iconbox_info">
                    <p className="mb-0 mt-0">{address}</p>
                  </div>
                </div>

                <div className="cs_iconbox cs_style_1 cs_type_1 cs_mb_18">
                  <div className="cs_iconbox_icon cs_center">
                    <MailIcon className="contact-icons" />
                  </div>
                  <div className="cs_iconbox_info">
                    <a href={emailLink}>{email}</a>
                  </div>
                </div>

                <div className="cs_iconbox cs_style_1 cs_type_1">
                  <div className="cs_iconbox_icon cs_center">
                    <PhoneIcon className="contact-icons" />
                  </div>
                  <div className="cs_iconbox_info">
                    <a className="cs_tab active" href={numberLink}>{number}</a>
                    
                    <a className="cs_tab active" href={number1Link}>{number1}</a>
                  </div>
                </div>
              </div>

              <div className="cs_contact_thumbnail wow fadeInUp">
                <img
                  className="img-position"
                  src={getImageSrc(img)}
                  alt="Contact Image"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="cs_client_info_wapper cs_white_bg">
                <h2 className="cs_fs_30 cs_accent_color my-0">{clientNumber}</h2>
                <p className="cs_fs_14 my-0">{client}</p>
              </div>
            </div>
            <div className="cs_height_44 cs_height_lg_30"></div>
          </div>

          <div className="col-lg-6">
            <div className="cs_section_heading cs_style_1 cs_mb_45">
              <h2 className="cs_section_title cs_fs_50 mb-0 wow flipInX">{title2}</h2>
            </div>
            <Form1 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
