import React, { useState } from 'react';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const PriceCardHomeCat = () => {
  const [activePopup, setActivePopup] = useState(null);
  const formatParagraph = (text) => {
    if (!text) return '';
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };
  const servicesData = [
    {
      id: 1,
      image: getImageSrc('applycalouthome'),
 
      title: 'Appliance Call-out',
      icon: getImageSrc('accalll'),
      price: 'AED157',
      arrow: getImageSrc('iconreadmore'),
      description: 'Just tell us about your faulty appliance, and we will provide a quote for repair / parts. Our technician will arrive at a time that is suitable for you.',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=AC%20Call-Out',
      popupTitle: 'Appliance Call-out  scope of work:',
      sections: [
        {
          items: [
            'Inspection visit fee',
            'Rectification of faults',
            'Cost of minor repair work',
            'Transportation pricing for services',
            'Technical inspection onsite or workshop',
            'Pick-up, drop-off, and reinstallation onsite',
            'A quotation can be provided via call, WhatsApp, or email if needed.',
            'The same call-out fee applies for diagnosing either one or two appliances at the same place.'
          ]
        },
        {
          paragraph: '**Excluded:** <br> Cost for any repair work, procurement cost, cost of any new parts and installation, if required.'
        },
        {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 157, callout fee applies based on the type, brand, capacity of the appliance unit, and location for each diagnosis.'
        },
        
      ]
    },

    {
      id: 2,
      image: getImageSrc('appliancescleaninghome'),
      warranty: '50- Days Warranty',
      title: 'Appliance Cleaning',
      icon: getImageSrc('basicaccleaning'),
      price: 'AED395',
      arrow: getImageSrc('iconreadmore'),
      description: 'Book reliable appliance cleaning professionals for your equipment. Our teams offer competitive pricing & limited-time availability across Dubai.',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=Basic%20ACCleaning',
      popupTitle: 'Cleaning Appliances',
      sections: [
        {
          heading: 'Depending on quantities, capacity, type, model, and area.',
          items: [
            'Hob Cleaning',
            'Oven Cleaning',
            'Freezer Cleaning',
            'Gas Range Cleaning',
            'Dishwasher Cleaning',
            'Refrigerator Cleaning',
            'Hood / Chimney Cleaning',
            'Washing Machine Cleaning',
          ]
        },
        {
          paragraph: '**Excluded:** <br> Cost for any repair work, procurement cost, cost of any new parts and installation, if required.'
        },
         {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 395 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.'
        },
      ]
    },

    {
      id: 3,
      image: getImageSrc('ovenhomecard'),

      title: 'Home Appliances Installation',
      icon: getImageSrc('acmatrepair'),
      price: 'AED365',
      arrow: getImageSrc('iconreadmore'),
      description: 'FAJ expert technicians will provide assistance to install home appliances. Upgrade your kitchen with professional appliance installations!',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=AC Maintenance',
      popupTitle: 'Appliances Installation',
      sections: [
        {
          heading: 'Depending on quantities, capacity, type, model, and area.',
          items: [
            'Refrigerator Installation',
            'Dish Washer Installation',
            'Electric Cooker Installation',
            'Hood / Chimney Installation',
            'Washing Machine Installation',
            'Built-in Microwave Installation',
            'Built-in Dishwasher Installation',
          ]
        },
        {
          paragraph: '**Excluded:** <br> Costs related to MEP, carpentry, gypsum ceilings, painting, repair work, procurement-related installation parts / materials, and installation as needed.'
        },
        {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 365 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.'
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
    <section className="ac_service_cards_section cs_py_30 ">
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
                <div>
                  <p className="ac_card_warranty_text">{service.warranty}</p>
                </div>
                <div className="ac_card_discount_wrapper">
                  <h3 className="ac_card_service_title">{service.title}</h3>
                  
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

export default PriceCardHomeCat;