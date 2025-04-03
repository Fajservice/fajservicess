import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/refrigeratorfaq.json';
import { HelmetProvider } from "react-helmet-async";

const RefrigeratorRepairInDubaiDetails = () => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
  
    const handleItemClick = index => {
      if (index === openItemIndex) {
        setOpenItemIndex(-1);
      } else {
        setOpenItemIndex(index);
      }
    };
    useEffect(() => {
      if (firstItemOpen) {
        setOpenItemIndex(0);
        setFirstItemOpen(false);
      }
    }, [firstItemOpen]);


    return (
      <>
        <HelmetProvider>
          <title>Refrigerator Repair Near Me | Fridge Repair Service Dubai</title>
          <meta name="description" content="Book refrigerator repair near you. Call now at 043300002 FAJ experts to get same day fridge repair & maintenance in Dubai. Freezer fix & service center."></meta>
        </HelmetProvider>
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_60">
            <div className="col-xl-8 col-lg-7">
              <div className="cs_service_details">
              <img src={`${import.meta.env.BASE_URL}/img/referigerater-banner.jpg`} alt="Service Banner" />
              <h1 className="cs_fs_36">Refrigerator Repair Near Me</h1>
                <p>One of the appliances we use on a daily basis in our homes is the refrigerator, which is used to prevent food waste. We won't be able to keep food fresh for very long if our refrigerator breaks down. A major issue is also having cold water. Furthermore, you and your entire family have a serious issue if you store food for urgent needs. With FAJ Professional, experience the best home service refrigerator repair. Our knowledgeable specialists are skilled at quickly identifying and resolving problems, so your refrigerator will continue to function flawlessly. At FAJ, we put your convenience first by providing perfect cool refrigeration services to maintain the best possible condition for your appliances.</p>
                <div id="get-quote" className="mb-5 mt-3">
                  <div className="container d-flex justify-content-center align-items-center">
                    <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                    <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+97143300002">Call Now</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                  <img src={`${import.meta.env.BASE_URL}/img/inspectionfee.jpg`} alt="Post Image" />
                  <h4 className="cs_fs_18">Technical Inspection Fee</h4>
                    <p>The technical inspection fee is AED 157, which covers diagnosis, transportation, and reinstallation in Dubai premises. Please note that this fee is non-refundable. This flat rate applies to 1 or 2 appliances located in the same place. However, it does not include the cost of any parts.</p>
                    <p>If you need repair for coffee machine, stand mixer, or robot vacuum cleaner, please contact us.</p>
                  </div>
                  <div className="col-md-6">
                    <img src={`${import.meta.env.BASE_URL}/img/techfridge.jpg`} alt="Post Image" />
                    <h3 className="cs_fs_18">Refrigerator Repair & Service Nearby You</h3>
                    <p>Is your fridge or freezer not cooling properly? Has your food spoiled?</p>
                    <p>You can easily book online refrigerator repair in Dubai / Sharjah near me service with FAJ Experts. We repair most major brands of refrigerators and freezers, offering same-day fridge service at affordable prices. Choose a time slot that works best for you!</p>
                  </div>
                </div>
                <p>Regarding refrigerator replacement parts, FAJ Professional guarantees longevity and excellence. First-rate replacement parts for well-known brands like LG, Samsung, and Bosch are used by our knowledgeable technicians. We can provide you with replacement parts for LG, Samsung, and Bosch refrigerators as well as freezer parts. Your refrigerator will last a long time because of our dedication to using authentic and trustworthy replacement parts. Furthermore, FAJ is an expert in refrigerator compressor repair. Put your trust in our professionals to identify and fix compressor problems so your refrigerator runs well. Choose FAJ Professional for trustworthy and efficient refrigerator spare part solutions. Our top goal is making sure you're satisfied.</p>
                <div id="get-quote" className="mb-5 mt-3">
                  <div className="container d-flex justify-content-center align-items-center">
                    <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                    <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+97143300002">Call Now</a>
                  </div>
                </div>
                <h2>Fridge Repair Near Me</h2>
                <p>Having issues with your freezer, refrigerator, or combination unit can be extremely frustrating as they can quickly spread bad odors and ruin a lot of food. Thus, you should get your fridge fixed as soon as possible if it breaks down or stops cooling. Don't worry, though. FAJ Professional offers fast and effective fridge repair services locally. We deliver expert appliance services right to your door, guaranteeing prompt responses and efficient solutions. Select FAJ if you are looking for refrigerator repair near me.</p>
                <div className="row">
                  <div className="col-xl-6">
                    <img src={`${import.meta.env.BASE_URL}/img/Refrigerator-Appliances-to-Repair.png`} alt="Post Image" />
                  </div>
                  <div className="col-xl-6">
                    <h4 className="cs_fs_16">Why Choose Us for Your Refrigerator Repair Needs?</h4>
                    <ul className="cs_list cs_style_1 cs_fs_18 cs_heading_font cs_mp_0">
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>Transparent Pricing</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>Talented & Certified Experts</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>Fast & Reliable Service</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>100% Customer Satisfaction</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>Attention to Detail</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check"></i></span>
                        <span>Guaranteed Results</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="get-quote" className="mb-5 mt-3">
                  <div className="container d-flex justify-content-center align-items-center">
                    <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                    <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+97143300002">Call Now</a>
                  </div>
                </div>
                <h2 className="cs_fs_18">We specialise in Refrigerator services for the following brands.</h2>
                <p><a href="https://www.fajservices.ae/lg-fridge-repair-in-dubai-lg-washing-machine-repair-in-dubai-lg-cooker-repair-in-dubai-lg-oven-repair-in-dubai-lg-appliances-maintenance-in-dubai-lg-refrigerator-fix-repairs-service-in-dubai-lg-dishwa/"><strong>LG Refrigerator Repair</strong></a><strong>: </strong><span>FAJ is here to support you when things go wrong. We understand that your LG appliances are essential for daily life, keeping your food fresh and meals cooked.</span></p>
                <p><a href="https://www.fajservices.ae/samsung-fridge-repair-in-dubai-samsung-washing-machine-repair-in-dubai-samsung-cooker-repair-in-dubai-samsung-oven-repair-in-dubai-samsung-appliances-maintenance-in-dubai-samsung-refrigerator-fix-repa/"><strong>Samsung Refrigerator Repair</strong></a><strong>:</strong> <span>If you are facing any problems with your </span><span>Samsung</span><span> refrigerator, washer dryer, or dishwasher, contact the FAJ team for same-day repair service in Dubai.</span></p>
                <p><a href="https://www.fajservices.ae/electrolux-home-appliances-repair/"><strong>Electrolux Refrigerator Repair</strong></a><strong>:</strong><span> When you need Electrolux appliance repair in Dubai, we have a team of professional and qualified technicians available throughout the UAE.&nbsp;</span></p>
                <p><a href="https://www.fajservices.ae/bosch-home-appliances-repair/"><strong>Bosch Refrigerator Repair</strong></a><strong>: </strong><span>If you are looking for the best Bosch appliance repair company in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch appliance service provider in the area.</span></p>
                <p><a href="https://www.fajservices.ae/viking-appliances-service/"><strong>Viking Fridge Freezer Repair</strong></a><strong>:&nbsp; </strong><span>Your Viking appliances may require repair or maintenance and we can help. For high-quality Viking Fridge Freezer repair in Dubai, rely on FAJ.&nbsp;</span></p>
                <p><a href="https://www.fajservices.ae/daewoo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/"><strong>Daewoo Refrigerator Repair</strong></a><strong>: </strong><span>We provide expert services for Daewoo appliance repair in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator, washing machine, dryer and more.&nbsp;</span></p>
                <p><a href="https://www.fajservices.ae/siemens-home-appliances-repair/"><strong>Siemens Refrigerator Repair</strong></a><strong>:</strong><span> Are you concerned about your Siemens appliance malfunctioning and searching for a reliable Siemens refrigerator repair company in Dubai? Contact </span><span>us for same-day service!</span></p>
                <p><a href="https://www.fajservices.ae/teka-home-appliance-installation-maintenance-repair-fix-service-in-dubai/"><strong>Teka Refrigerator Repair</strong></a><span>: If you're searching for the best Teka appliance repair company in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka refrigerators, washing machines, and oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area.</span></p>
                <p><a href="https://www.fajservices.ae/aeg-fridge-repair-in-dubai-aeg-washing-machine-repair-in-dubai-aeg-cooker-repair-in-dubai-aeg-oven-repair-in-dubai-aeg-appliances-maintenance-in-dubai-aeg-refrigerator-fix-repairs-service-in-dubai-aeg/">AEG</a> | <a href="https://www.fajservices.ae/ariston-fridge-repair-in-dubai-ariston-washing-machine-repair-in-dubai-ariston-cooker-repair-in-dubai-ariston-oven-repair-in-dubai-ariston-appliances-maintenance-in-dubai-ariston-refrigerator-fix-repa/">Ariston</a> | <a href="https://www.fajservices.ae/beko-fridge-repair-in-dubai-beko-washing-machine-repair-in-dubai-beko-cooker-repair-in-dubai-beko-oven-repair-in-dubai-beko-appliances-maintenance-in-dubai-beko-refrigerator-fix-repairs-service-in-dub/">Beko</a> | <a href="https://www.fajservices.ae/blomberg-fridge-repair-in-dubai-blomberg-washing-machine-repair-in-dubai-blomberg-cooker-repair-in-dubai-blomberg-oven-repair-in-dubai-blomberg-appliances-maintenance-in-dubai-blomberg-refrigerator-fi/">Blomberg</a> | <a href="https://www.fajservices.ae/faber-appliances-service/">Faber </a>| <a href="https://www.fajservices.ae/fagor-fridge-repair-in-dubai-fagor-washing-machine-repair-in-dubai-fagor-cooker-repair-in-dubai-fagor-oven-repair-in-dubai-fagor-appliances-maintenance-in-dubai-fagor-refrigerator-fix-repairs-service/">Fagor</a> | <a href="https://www.fajservices.ae/fisher-and-paykel-fridge-repair-in-dubai-fisher-and-paykel-washing-machine-repair-in-dubai-fisher-and-paykel-cooker-repair-in-dubai-fisher-and-paykel-oven-repair-in-dubai-fisher-and-paykel-appliances/">Fisher and Paykel</a> | <a href="https://www.fajservices.ae/foster-appliances-services-foster-dishwasher-repair-service-in-dubai-foster-cooking-range-repair-service-in-dubai-foster-cooktop-repair-service-in-dubai-foster-oven-repair-in-dubai-foster-rangetop-r/">Foster</a> | <a href="https://www.fajservices.ae/gaggenau-fridge-repair-in-dubai-gaggenau-washing-machine-repair-in-dubai-gaggenau-cooker-repair-in-dubai-gaggenau-oven-repair-in-dubai-gaggenau-appliances-maintenance-in-dubai-gaggenau-refrigerator-fi/">Gaggenau</a> | <a href="https://www.fajservices.ae/hitachi-fridge-repair-in-dubai-hitachi-washing-machine-repair-in-dubai-hitachi-cooker-repair-in-dubai-hitachi-oven-repair-in-dubai-hitachi-appliances-maintenance-in-dubai-hitachi-refrigerator-fix-repa/">Hitachi</a> | <a href="https://www.fajservices.ae/hoover-fridge-repair-in-dubai-hoover-washing-machine-repair-in-dubai-hoover-cooker-repair-in-dubai-hoover-oven-repair-in-dubai-hoover-appliances-maintenance-in-dubai-hoover-refrigerator-fix-repairs-se/">Hoover</a> | <a href="https://www.fajservices.ae/indesit-fridge-repair-in-dubai-indesit-washing-machine-repair-in-dubai-indesit-cooker-repair-in-dubai-indesit-oven-repair-in-dubai-indesit-appliances-maintenance-in-dubai-indesit-refrigerator-fix-repa/">Indesit</a> | <a href="https://www.fajservices.ae/lg-fridge-repair-in-dubai-lg-washing-machine-repair-in-dubai-lg-cooker-repair-in-dubai-lg-oven-repair-in-dubai-lg-appliances-maintenance-in-dubai-lg-refrigerator-fix-repairs-service-in-dubai-lg-dishwa/">LG</a> | <a href="https://www.fajservices.ae/neff-fridge-repair-in-dubai-neff-washing-machine-repair-in-dubai-neff-cooker-repair-in-dubai-neff-oven-repair-in-dubai-neff-appliances-maintenance-in-dubai-neff-refrigerator-fix-repairs-service-in-dub/">Neff </a>| <a href="https://www.fajservices.ae/smeg-fridge-repair-in-dubai-smeg-washing-machine-repair-in-dubai-smeg-cooker-repair-in-dubai-smeg-oven-repair-in-dubai-smeg-appliances-maintenance-in-dubai-smeg-refrigerator-fix-repairs-service-in-dub/">Smeg</a> | <a href="https://www.fajservices.ae/sub-zero-fridge-repair-in-dubai-sub-zero-washing-machine-repair-in-dubai-sub-zero-cooker-repair-in-dubai-sub-zero-oven-repair-in-dubai-sub-zero-appliances-maintenance-in-dubai-sub-zero-refrigerator-fi/">Sub Zero</a> | <a href="https://www.fajservices.ae/terim-appliances-service/">Terim</a> | <a href="https://www.fajservices.ae/whirlpool-fridge-repair-in-dubai-whirlpool-washing-machine-repair-in-dubai-whirlpool-cooker-repair-in-dubai-whirlpool-oven-repair-in-dubai-whirlpool-appliances-maintenance-in-dubai-whirlpool-refrigera/">Whirlpool</a> | <a href="https://www.fajservices.ae/zanussi-fridge-repair-in-dubai-zanussi-washing-machine-repair-in-dubai-zanussi-cooker-repair-in-dubai-zanussi-oven-repair-in-dubai-zanussi-appliances-maintenance-in-dubai-zanussi-refrigerator-fix-repa/">Zanussi</a> | <a href="https://fajservice.ae/de-dietrich-appliance-repair-service/">De Dietrich</a> | <a href="https://www.fajservices.ae/baumatic-appliances/">Baumatic</a> | <a href="https://www.fajservices.ae/bertazzoni-refrigerator-repair-in-dubai-bertazzoni-appliances-service-bertazzoni-fridge-repair-in-dubai-bertazzoni-washing-machine-washer-bertazzoni-dryer-repair-in-dubai-bertazzoni-dishwasher-cooker/">Bertazzoni</a> | <a href="https://www.fajservices.ae/bompani-fridge-repair-in-dubai-bompani-washing-machine-repair-in-dubai-bompani-cooker-repair-in-dubai-bompani-oven-repair-in-dubai-bompani-appliances-maintenance-in-dubai-bompani-refrigerator-fix-repa/">Bompani</a> | <a href="https://www.fajservices.ae/boston-refrigerator-repair-in-dubai-boston-appliances-service-boston-fridge-repair-in-dubai-boston-washing-machine-washer-boston-dryer-repair-in-dubai-boston-dishwasher-cooker/">Boston</a> | <a href="https://www.fajservices.ae/brandt-fridge-repair-in-dubai-brandt-washing-machine-repair-in-dubai-brandt-cooker-repair-in-dubai-brandt-oven-repair-in-dubai-brandt-appliances-maintenance-in-dubai-brandt-refrigerator-fix-repairs-se/">Brandt</a> | <a href="https://www.fajservices.ae/gibson-fridge-repair-in-dubai-gibson-washing-machine-repair-in-dubai-gibson-cooker-repair-in-dubai-gibson-oven-repair-in-dubai-gibson-appliances-maintenance-in-dubai-gibson-refrigerator-fix-repairs-se/">Gibson</a> | <a href="https://www.fajservices.ae/gorenje-fridge-repair-in-dubai-gorenje-washing-machine-repair-in-dubai-gorenje-cooker-repair-in-dubai-gorenje-oven-repair-in-dubai-gorenje-appliances-maintenance-in-dubai-gorenje-refrigerator-fix-repa/">Gorenje</a> | <a href="https://www.fajservices.ae/hisense-fridge-repair-in-dubai-hisense-washing-machine-repair-in-dubai-hisense-cooker-repair-in-dubai-hisense-oven-repair-in-dubai-hisense-appliances-maintenance-in-dubai-hisense-refrigerator-fix-repa/">Hisense</a> | <a href="https://www.fajservices.ae/kelvinator-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Kelvinator</a> | <a href="https://www.fajservices.ae/kenmore-appliances-service/">Kenmore</a> | <a href="https://www.fajservices.ae/panasonic-fridge-repair-in-dubai-panasonic-washing-machine-repair-in-dubai-panasonic-cooker-repair-in-dubai-panasonic-oven-repair-in-dubai-panasonic-appliances-maintenance-in-dubai-panasonic-refrigera/">Panasonic</a> | <a href="https://www.fajservices.ae/sanyo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Sanyo</a> | <a href="https://www.fajservices.ae/sears-home-appliances-installation-maintenance-repair-fix-service-in-dubai/">Sears</a> | <a href="https://www.fajservices.ae/wolf-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Wolf</a> | <a href="https://www.fajservices.ae/haier-fridge-repair-in-dubai-haier-washing-machine-repair-in-dubai-haier-cooker-repair-in-dubai-haier-oven-repair-in-dubai-haier-appliances-maintenance-in-dubai-haier-refrigerator-fix-repairs-service/">Haier</a> | <a href="https://www.fajservices.ae/elica-appliances-service/">Elica</a> | <a href="https://www.fajservices.ae/marvel-fridge-repair-in-dubai-marvel-washing-machine-repair-in-dubai-marvel-cooker-repair-in-dubai-marvel-oven-repair-in-dubai-marvel-appliances-maintenance-in-dubai-marvel-refrigerator-fix-repairs-se/">Marvel</a> | <a href="https://www.fajservices.ae/miele-fridge-repair-in-dubai-miele-washing-machine-repair-in-dubai-miele-cooker-repair-in-dubai-miele-oven-repair-in-dubai-miele-appliances-maintenance-in-dubai-miele-refrigerator-fix-repairs-service/">Miele</a> | <a href="https://www.fajservices.ae/maytag-fridge-repair-in-dubai-maytag-washing-machine-repair-in-dubai-maytag-cooker-repair-in-dubai-maytag-oven-repair-in-dubai-maytag-appliances-maintenance-in-dubai-maytag-refrigerator-fix-repairs-se/">Maytag</a> | <a href="https://www.fajservices.ae/toshiba-home-appliance-installation-maintenance-repair-fix-service-in-dubai-2/">Toshiba</a> | <a href="https://www.fajservices.ae/thermador-appliances-service/">Thermador</a> | <a href="https://www.fajservices.ae/sharp-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Sharp</a> | <a href="https://www.fajservices.ae/admiral-fridge-repair-in-dubai-admiral-washing-machine-repair-in-dubai-admiral-cooker-repair-in-dubai-admiral-oven-repair-in-dubai-admiral-appliances-maintenance-in-dubai-admiral-refrigerator-fix-repa/">Admiral</a> | <a href="https://www.fajservices.ae/aftron-fridge-repair-in-dubai-aftron-washing-machine-repair-in-dubai-aftron-cooker-repair-in-dubai-aftron-oven-repair-in-dubai-aftron-appliances-maintenance-in-dubai-aftron-refrigerator-fix-repairs-se/">Aftron</a> | <a href="https://www.fajservices.ae/unimac-washing-machine-repair-in-dubai-unimac-dryer-repair-in-dubai-unimac-washer-dryer-repair-in-dubai-unimac-maintenance-in-dubai-unimac-laundry-service-in-dubai-unimac-dubai/">Unimac</a></p>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/VAmZ-qKWkjw?si=LdMp8cN2oo0O62ke" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
              </div>
              <div className="cs_height_20 cs_height_lg_20"></div>
              <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index)=>(
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : "" }`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <h2 className="cs_fs_18 cs_semibold mb-0">{item.title}</h2>
                    <span className="cs_accordian_toggle">
                    <i className="bi bi-eye"></i>
                    <i className="bi bi-eye-slash"></i>
                    </span>
                  </div>
                  <div className="cs_accordian_body" ref={accordionContentRef}>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
                ))}

              </div>
            </div>
            <aside className="col-xl-4 col-lg-5">
              <div className="cs_sidebar cs_style_1">
                <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                  <div className="cs_separator"></div>
                  <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">All Services</h3>
                  <ul className="cs_categories cs_fs_18 cs_semibold cs_mb_30">
                    <li><a href="/ac-service-in-dubai">
                      <span>AC Service in Dubai</span>
                      <span><i className="fa-solid fa-arrow-right-long"></i></span>
                    </a></li>
                    <li><a href="/washing-machine-repair-service-dubai">
                      <span>Washing Machine Repair</span>
                      <span><i className="fa-solid fa-arrow-right-long"></i></span>
                    </a></li>
                    <li><a href="/ac-service-in-dubai">
                      <span>BBQ Service &amp; Repair</span>
                      <span><i className="fa-solid fa-arrow-right-long"></i></span>
                    </a></li>
                    <li><a href="/ac-service-in-dubai">
                      <span>Coffee Machine Repair</span>
                      <span><i className="fa-solid fa-arrow-right-long"></i></span>
                    </a></li>
                    <li><a href="/ac-service-in-dubai">
                      <span>Vacuum Cleaner Repair</span>
                      <span><i className="fa-solid fa-arrow-right-long"></i></span>
                    </a></li>
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_accent_bg">
                  <div className="cs_card cs_style_6">
                    <h3 className="cs_fs_30 cs_white_color cs_mb_30">Emergency Refrigerator Repair Services</h3>
                    <div className="cs_card_icon cs_center cs_mb_32">
                      <img src={`${import.meta.env.BASE_URL}/img/icons/phone-call_2.svg`} alt="Phone Icon" />
                    </div>
                    <p className="cs_white_color cs_mb_5">Requesting A Call</p>
                    <a href="tel:+97143300002" className="cs_call_text cs_fs_30 cs_bold cs_heading_font cs_mb_23">(+971) 4 330 0002</a>
                    <p className="cs_card_subtitle cs_white_color cs_mb_33">If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.</p>
                    <Link to="/about" className="cs_card_btn">
                      <span>Read more</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
        </section>
      </>
    );
};

export default RefrigeratorRepairInDubaiDetails;