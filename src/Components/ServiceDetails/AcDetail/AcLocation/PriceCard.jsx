import React, { useState } from 'react';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const PriceCard = () => {
  const [activePopup, setActivePopup] = useState(null);
  const formatParagraph = (text) => {
    if (!text) return '';
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };
  const servicesData = [
    {
      id: 1,
      image: getImageSrc('calloutprice'),
 
      title: 'AC Call-Out',
      icon: getImageSrc('accalll'),
      price: 'AED185',
      arrow: getImageSrc('iconreadmore'),
      description: 'Is your AC not cooling your place? Is the AC thermostat broken, or is the fan making strange noises? Give us a call.',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=AC%20Call-Out',
      popupTitle: 'AC Call-Out (Technical Inspection) scope of works:',
      sections: [
        {
          items: [
            'Resolving air flow issues',
            'AC thermostat check-up',
            'Refrigerant Level check-up',
            'Rectification of AC power trip',
            'Rectification of AC water leakage',
            'Fixing AC cooling/overcooling issues',
            'Addressing sound problems from the AC'
          ]
        },
        {
          paragraph: '**Excluded:** <br> Cost for any repair work, procurement cost, cost of any new parts and installation, if required.'
        },
        {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 185 callout fee applies based on the type, capacity of the unit, and location for each diagnosis.'
        },
        
      ]
    },

    {
      id: 2,
      image: getImageSrc('calout'),
      warranty: '60 - Days Warranty',
      title: 'Basic AC Cleaning',
      icon: getImageSrc('basicaccleaning'),
      price: 'AED230',
      arrow: getImageSrc('iconreadmore'),
      description: 'If your AC has reduced airflow or is leaking water, work quickly. Regularly clean filters and drain to provide efficiency and good air quality.',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=Basic%20ACCleaning',
      popupTitle: 'AC Cleaning Service scope of works:',
      sections: [
        {
          items: [
            'AC filter cleaning',
            'AC water leakage',
            'Check AC components',
            'Filter cleaning and replacement',
            'Condenser coil cleaning',
            'AC thermostat check-up',
            'Refrigerant Level check-up',
            'Addressing sound issues from the AC',
          ]
        },
        {
          paragraph: '**Excluded:** <br> Cost for any repair work, procurement cost, cost of any new parts and installation, if required.'
        },
         {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 230 basic cleaning service charge applies based on the type, capacity of the unit, and location for each diagnosis.'
        },
      ]
    },

    {
      id: 3,
      image: getImageSrc('maintenanceacc'),
      warranty: '60 - Days Warranty',
      title: 'AC Maintenance',
      icon: getImageSrc('acmatrepair'),
      price: 'AED265',
      arrow: getImageSrc('iconreadmore'),
      description: 'Relax and save money by keeping our expert technicians clean and maintain your AC, stopping unnecessary breakdowns.',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=AC Maintenance',
      popupTitle: 'AC Maintenance scope of works',
      sections: [
        {
          heading: 'DX Unit AC:',
          items: [
            'Clean the condenser coil',
            'Check, clean and flush the drain line',
            'Check the room and grill temperatures',
            'Check and clean the filters and air valves',
            'Check the vibration pads and vibration isolators',
            'Check the blowers and clean if proper access is available',
            'Check the conditions of contactors, relays, and capacitors',
            'Check temperature controlled thermostat and pressure sensors',
            'Check the electrical points in the outdoor unit and tighten, clean the electrical terminals',
            'Check the insulation on the pipeline, if damaged, recommend for replacement (Additional cost for replacement of insulation)',
          ]
        },
        {
          heading: 'Chiller FCU AC:',
          items: [
            'Check the vibration isolators',
            'Check, clean and flush the drain line',
            'Check the room and grill temperatures',
            'Check and clean the filters and air valves',
            'Check temperature controlled thermostat',
            'Check the functionality of actuator valves',
            'Check the blowers and clean if proper access is available',
            'Check the insulation on the pipeline; if damaged, recommend for replacement (Additional cost for replacement of insulation)'
          ]
        },
        {
          paragraph: '**Excluded:** <br> Cost for any repair work, procurement cost, cost of any new parts and installation, if required.'
        },
        {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 265 AC Maintenance charge applies based on the type, capacity of the unit, and location for each diagnosis.'
        },
      ]
    },
  ];

  const openPopup = (id) => {
    setActivePopup(id);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setActivePopup(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="ac_service_cards_section cs_py_30  bg-light-gray">
      <div className="container">
        <div className="ac_cards_grid_wrapper">
          {servicesData.map((service) => (
            <div key={service.id} className="ac_service_single_card">
              <div className="ac_card_image_container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="ac_card_main_image"
                />
              </div>

              <div className="ac_card_content_wrapper">
                <div className="ac_card_discount_wrapper">
                  <h3 className="ac_card_service_title">{service.title}</h3>
                  <p className="ac_card_warranty_text">{service.warranty}</p>
                </div>
                <div className="ac_card_price_wrapper">
                  <p className="ac_card_price_text">Starting from <span className="ac_card_price_amount">{service.price}</span></p>
                  <hr className="ac_card_divider_line" />
                </div>
                <p className="ac_card_short_description">{service.description}</p>
                <div className="ac_card_qr_overlay">
                  <img src={service.icon} alt="Service Icon" />
                </div>
                <div className="ac_card_buttons_row">
                  <a href={service.buyLink} className="ac_card_buy_button">Book Now</a>
                  <button
                    onClick={() => openPopup(service.id)}
                    className="ac_card_readmore_button"
                  >
                    Read More
                    <img className="ac_readmore_arrow" src={service.arrow} alt="Arrow" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {activePopup && (
        <div className="ac_popup_overlay" onClick={closePopup}>
          <div className="ac_popup_container" onClick={(e) => e.stopPropagation()}>
            <button className="ac_popup_close_btn" onClick={closePopup}>✕</button>

            {servicesData.filter(s => s.id === activePopup).map((service) => (
              <div key={service.id} className="ac_popup_content_wrapper">
                <div className="ac_popup_header_image">
                  <img src={service.image} alt={service.title} className="ac_popup_banner_image" />
                </div>

                <div className="ac_popup_body_content">
                  <h2 className="ac_popup_main_title">{service.popupTitle}</h2>
                  <hr className="ac_popup_divider_line" />

                  <div className="ac_popup_scrollable_area">
                    {service.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="ac_popup_section_block">
                        {section.heading && (
                          <h3 className="ac_popup_section_heading">{section.heading}</h3>
                        )}

                        {section.items && (
                          <ul className="ac_popup_scope_list">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="ac_popup_scope_item">{item}</li>
                            ))}
                          </ul>
                        )}

                        {section.paragraph && (
                          <p
                            className="ac_popup_paragraph_text"
                            dangerouslySetInnerHTML={{ __html: formatParagraph(section.paragraph) }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default PriceCard;