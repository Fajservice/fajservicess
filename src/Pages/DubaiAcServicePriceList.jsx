import { useState } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";


const ServiceCard = ({ title, subtitle, price, color, details, whatsappLink, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  <title>Dubai Best AC Service Prices - Air Conditioner Maintenance</title>
  const metadescription = String(description || "Book 043300002 for affordable AC services in Dubai! We offer reliable maintenance, and repair for central AC, split AC, HVAC, VRV/VRF systems, & more.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Dubai AC Service Prices");
  const metaURL = String(URL || "https://www.fajservices.ae/dubai-ac-service-price-list/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public");
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonClass = `btn btn-${color}`;

  return (
    <>
          
    <div className="col-lg-4 mb-4">
      <div className="inner-acsvs-sec-feat">
        <div className="avsvs-sec-feat-sub">
          <div className={color}>
            {!isExpanded ? (
              <div className="text-center p-3">
                <p className="acsvs-sec-feat-p1">{title}</p>
                <p className="acsvs-sec-feat-p2">{subtitle}</p>
                <p className="acsvs-sec-feat-p3">
                  Price Starting From: <strong>{price} <sup>AED</sup></strong>
                </p>
                <button className={buttonClass} onClick={() => setIsExpanded(true)}>
                  View Detail
                </button>
              </div>
            ) : (
              <div className="p-3">
                {details}
                <div className="mt-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonClass} w-100 d-block text-center`}
                  >
                    Book Now
                  </a>
                </div>
                <div className="mt-2">
                  <button
                    className={`${buttonClass} w-100`}
                    onClick={() => setIsExpanded(false)}
                  >
                    View Less
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const ACServiceSection = ({ title, subtitle, price, color, details, whatsappLink, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  <title>Dubai Best AC Service Prices - Air Conditioner Maintenance</title>
  const metadescription = String(description || "Book 043300002 for affordable AC services in Dubai! We offer reliable maintenance, and repair for central AC, split AC, HVAC, VRV/VRF systems, & more.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Dubai AC Service Prices");
  const metaURL = String(URL || "https://www.fajservices.ae/dubai-ac-service-price-list/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public");
  const technicalServices = [
    {
      "title": "AC Technical Inspection Fee 1.5 to 3.0 Ton",
      "subtitle": "Window and Split AC",
      "price": "167.00",
      "color": "d-blue",
      "details": "AC inspection and diagnosis of insufficient cooling, over cooling, coils, thermostat/sensor, air filter, compressor, indoor/outdoor motors, capacitor, water leakage, drain pan, refrigerant level, airflow issues, strange noises, verifying thermostat settings, and AC electrical control."
    },
    {
      "title": "AC Technical Inspection Fee 1.5 to 3.0 Ton",
      "subtitle": "Chilled Water FCU AC",
      "price": "195.00",
      "color": "d-green",
      "details": "AC inspection and diagnosis of insufficient cooling, over cooling, coils, valve strainer, actuator valve, supply grill for air quality. thermostat/sensor, air filter, capacitor, water leakage, drain pan, airflow issues, strange noises, verifying thermostat settings, AC electrical control and electric components, pipe, shutoff valves."
    },
    {
      "title": "AC Technical Inspection Fee 1.5 to 3.5 Ton",
      "subtitle": "Ducted / Central AC",
      "price": "195.00",
      "color": "l-green",
      "details": "AC inspection and diagnosis of insufficient cooling, over cooling, coils, thermostat/sensor, air filter, compressor, indoor/outdoor motors, capacitor, water leakage, drain pan, refrigerant level, airflow issues, strange noises, verifying thermostat settings, AC electrical control, electric components and pipe, shutoff valves, and actuator valve."
    },
    {
      "title": "AC Technical Inspection Fee 2.0 to 3.5 Ton",
      "subtitle": "Inverter AC",
      "price": "215.00",
      "color": "d-purple",
      "details": "AC inspection and diagnosis of insufficient cooling, over cooling, coils, PCB, thermostat/sensor, air filter, compressor, indoor/outdoor motors, capacitor, water leakage, drain pan, refrigerant level, airflow issues, strange noises, verifying thermostat settings, AC electrical control, electric components and pipes, shutoff valves, and actuator valves."
    },
    {
      "title": "AC Technical Inspection Fee 2.5 to 5.0 Ton",
      "subtitle": "VRV / VRF AC",
      "price": "535.00",
      "color": "l-blue",
      "details": "AC inspection and diagnosis of insufficient cooling, over cooling, inverter board, electric components, coils, PCB, thermostat/sensor, air filter, compressors, indoor/outdoor motors, capacitor, water leakage, drain pan, refrigerant level, airflow issues, strange noises, verifying thermostat settings, AC electrical control, and pipes, shutoff valves, and actuator valves, condensate pump, branch controller."
    },
    {
      "title": "AC Technical Inspection Fee 2.5 to 3.5 Ton",
      "subtitle": "Package Unit / Cassette AC",
      "price": "320.00",
      "color": "d-orange",
      "details": "AC inspection and diagnosis of insufficient cooling, over cooling, inverter board, electric components, coils, PCB, thermostat/sensor, air filter, compressors, indoor/outdoor motors, capacitor, relay, water leakage, drain pan, refrigerant level, airflow issues, strange noises, verifying thermostat settings, AC electrical control, and pipes, shutoff valves, and actuator valves, condensate pump, branch controller."
    }
  ];

  const cleaningServices = [
    {
      "title": "AC Cleaning Service Cost of 1.5 to 3.0 Ton",
      "subtitle": "Window and Split AC",
      "price": "230.00",
      "color": "d-blue",
      "details": {
        "included": "Servicing includes cleaning the condenser coil and filter to remove dust, sand, and dirt, as well as cleaning the drain line and water tray. Refrigerants will be topped up if required. Additionally, we will inspect the performance of the compressor, indoor and outdoor motors, cooling sensor, airflow issues, supply grill air quality, electrical connections, thermistor, PCB, and other AC components.",
        "benefits": [
          "Improve Indoor Air Quality & Flow",
          "Prevent Mold, Bacterial & Allergen Growth",
          "Increase Energy Efficiency & Potential Savings on Utility Bills",
          "Extend the Lifespan of Your AC and Peace of Mind"
        ]
      }
    },
    {
      "title": "AC Cleaning Service Cost of 1.5 to 3.0 Ton",
      "subtitle": "Chilled Water FCU AC",
      "price": "275.00",
      "color": "d-green",
      "details": {
        "included": "Servicing of the filters to remove dust, sand, and dirt. Clean the drain line water tray, along with the strainer valve and actuator valve. Inspect the performance of the strainer valve, actuator, and supply grill air quality. Check the thermostat and sensors, look for airflow issues and any unusual noises, and verify the thermostat settings.",
        "benefits": [
          "Improve Indoor Air Quality & Flow",
          "Prevent Mold, Bacterial & Allergen Growth",
          "Increase Energy Efficiency & Potential Savings on Utility Bills",
          "Extend the Lifespan of Your AC and Peace of Mind"
        ]
      }
    },
    {
      "title": "AC Cleaning Service Cost of 1.5 to 3.5 Ton",
      "subtitle": "Ducted / Central AC",
      "price": "315.00",
      "color": "l-green",
      "details": {
        "included": "Servicing includes cleaning the condenser coil and filter to remove dust, sand, and dirt, as well as cleaning the drain line and water tray. Refrigerants will be topped up if required. Additionally, we will inspect the performance of the compressor, indoor and outdoor motors, cooling sensor, airflow issues, supply grill air quality, PCB, and other AC components.",
        "benefits": [
          "Improve Indoor Air Quality & Flow",
          "Prevent Mold, Bacterial & Allergen Growth",
          "Increase Energy Efficiency & Potential Savings on Utility Bills",
          "Extend the Lifespan of Your AC and Peace of Mind"
        ]
      }
    },
    {
      "title": "AC Cleaning Service Cost of 2.0 to 3.5 Ton",
      "subtitle": "Inverter AC",
      "price": "345.00",
      "color": "d-purple",
      "details": {
        "included": "Servicing includes cleaning the condenser coil and filter to remove dust, sand, and dirt, as well as cleaning the drain line and water tray. Refrigerants will be topped up if required. Additionally, we will inspect the performance of the inverter compressor, inverter indoor and outdoor motors, cooling sensor, airflow issues, supply grill air quality, float switch, electrical connections, thermistor, PCB, and other AC components.",
        "benefits": [
          "Improve Indoor Air Quality & Flow",
          "Prevent Mold, Bacterial & Allergen Growth",
          "Increase Energy Efficiency & Potential Savings on Utility Bills",
          "Extend the Lifespan of Your AC and Peace of Mind"
        ]
      }
    },
    {
      "title": "AC Cleaning Service Cost of 2.5 to 5.0 Ton",
      "subtitle": "VRV / VRF AC",
      "price": "765.00",
      "color": "l-blue",
      "details": {
        "included": "Servicing includes cleaning the condenser coil and filter to remove dust, sand, and dirt, as well as cleaning the drain line and water tray. Refrigerant will be topped up if required. Additionally, we will inspect the performance of the inverter compressor, inverter indoor and outdoor motors, cooling sensor, airflow issues, supply grill air quality, float switch, electrical connections, thermistor, PCB, and other AC components.",
        "benefits": [
          "Improve Indoor Air Quality & Flow",
          "Prevent Mold, Bacterial & Allergen Growth",
          "Increase Energy Efficiency & Potential Savings on Utility Bills",
          "Extend the Lifespan of Your AC and Peace of Mind"
        ]
      }
    },
    {
      "title": "AC Cleaning Service Cost of Fee 2.5 to 3.5 Ton",
      "subtitle": "Package Unit / Cassette AC",
      "price": "535.00",
      "color": "d-orange",
      "details": {
        "included": "Servicing includes cleaning the condenser coil and filter to remove dust, sand, and dirt, as well as cleaning the drain line and water tray. Refrigerants will be topped up if required. Additionally, we will inspect the performance of the compressor, indoor and outdoor motors, cooling sensor, PCB, and other AC components.",
        "benefits": [
          "Improve Indoor Air Quality & Flow",
          "Prevent Mold, Bacterial & Allergen Growth",
          "Increase Energy Efficiency & Potential Savings on Utility Bills",
          "Extend the Lifespan of Your AC and Peace of Mind"
        ]
      }
    }
  ];

  const data = {
  "AC": [
    {
      type: "Window AC 1.5 to 2.5 Ton",
      services: [
        { name: "Inspection", description: "Onsite technical inspection Fee", price: "135 to 195 AED + VAT", warranty: "No Warranty" },
        { name: "Deep Cleaning Service", description: "Deep Cleaning Service and Gas topup", price: "245 to 360 AED", warranty: "2 Month" },
        { name: "Repair", description: "After the inspection, prices will be quoted based on the technical inspection report provided to the customer.", price: "-", warranty: "2 to 3 Month" },
        { name: "Part Replacement", description: "All warranty for spare part replacements should be valid for 3 month.", price: "-", warranty: "3 Month" }
      ]
    },
    {
      type: "Split AC 1.5 to 2.5 Ton",
      services: [
        { name: "Inspection", description: "There is a callout fee that applies each diagnosis.", price: "165 to 195 AED +VAT", warranty: "" },
        { name: "Basic Service", description: "Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "315 to 385 AED + VAT", warranty: "2 Month" },
        { name: "Deep Cleaning Service", description: "Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "340 to 430 AED + VAT", warranty: "2 Month" },
        { name: "Repair", description: "After the inspection, prices will be quoted based on the technical inspection report provided to the customer.", price: "-", warranty: "2 to 3 Month" },
        { name: "Part Replacement", description: "All warranty for spare part replacements should be valid for 3 month", price: "-", warranty: "3 Month" }
      ]
    },
    {
      type: "Central AC 1.5 to 2.5 Ton",
      services: [
        { name: "Inspection", description: "There is a callout fee that applies each diagnosis.", price: "167 to 230 AED +VAT", warranty: "" },
        { name: "Basic Service", description: "Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "280 to 380 AED + VAT", warranty: "2 Month" },
        { name: "Deep Cleaning Service", description: "Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "320 to 465 AED + VAT", warranty: "2 Month" },
        { name: "Repair", description: "After the inspection, prices will be quoted based on the technical inspection report provided to the customer.", price: "-", warranty: "2 to 3 Month" },
        { name: "Part Replacement", description: "All warranty for spare part replacements should be valid for 3 month", price: "-", warranty: "3 Month" }
      ]
    },
    {
      type: "Central AC 3.0 to 5.0 Ton",
      services: [
        { name: "Inspection", description: "There is a callout fee that applies each diagnosis.", price: "190 to 265 AED + VAT", warranty: "" },
        { name: "Basic Service", description: "Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "320 to 430 AED + VAT", warranty: "2 Month" },
        { name: "Deep Cleaning Service", description: "Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "420 to 580 AED + VAT", warranty: "2 Month" },
        { name: "Repair", description: "After the inspection, prices will be quoted based on the technical inspection report provided to the customer.", price: "-", warranty: "2 to 3 Month" },
        { name: "Part Replacement", description: "All warranty for spare part replacements should be valid for 3 month", price: "-", warranty: "3 Month" }
      ]
    },
    {
      type: "Chill Water FCU 1.5 to 3.5 Ton",
      services: [
        { name: "Inspection", description: "There is a callout fee that applies each diagnosis.", price: "165 to 230 AED + VAT", warranty: "" },
        { name: "Basic Service", description: "Cleaning service air filter, and drain lines, check and test chilled water line, actuator valve, thermostat", price: "280 to 380 AED+VAT", warranty: "2 Month" },
        { name: "Deep Cleaning Service", description: "Water pressure cleaning service indoor coil, air filter, and drain line, drain tray, check and test chilled water line, actuator valve, thermostat", price: "320 to 565 AED + VAT", warranty: "2 Month" },
        { name: "Repair", description: "After the inspection, prices will be quoted based on the technical inspection report provided to the customer.", price: "-", warranty: "2 to 3 Month" },
        { name: "Part Replacement", description: "All warranty for spare part replacements should be valid for 3 months", price: "-", warranty: "3 Month" }
      ]
    },
    {
      type: "Inverter and VRV & VRF 2.5 to 5.0 Ton",
      services: [
        { name: "Inspection", description: "There is a callout fee that applies each diagnosis.", price: "185 to 295 AED + VAT", warranty: "" },
        { name: "Basic Service", description: "Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "365 to 580 AED + VAT", warranty: "2 Month" },
        { name: "Deep Cleaning Service", description: "Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "430 to 580 AED + VAT", warranty: "2 Month" },
        { name: "Repair", description: "After the inspection, prices will be quoted based on the technical inspection report provided to the customer.", price: "-", warranty: "2 to 3 Month" },
        { name: "Part Replacement", description: "All warranty for spare part replacements should be valid for 3 month", price: "-", warranty: "3 Month" }
      ]
    },
    {
      type: "Package Unit HVAC 5.0 to 20.0 Ton",
      services: [
        { name: "Inspection", description: "There is a callout fee that applies each diagnosis.", price: "290 to 430 AED + VAT", warranty: "" },
        { name: "Basic Service", description: "Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "520 to 780 AED + VAT", warranty: "2 Month" },
        { name: "Deep Cleaning Service", description: "Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "695 to 830 AED + VAT", warranty: "2 Month" },
        { name: "Repair", description: "After the inspection, prices will be quoted based on the technical inspection report provided to the customer.", price: "-", warranty: "2 to 3 Month" },
        { name: "Part Replacement", description: "All warranty for spare part replacements should be valid for 3 month", price: "-", warranty: "3 Month" }
      ]
    }
  ]
};
const ServiceTable = ({ items, search }) => {
  return (
    <div className="table-responsive faj-price-table">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>AC Type</th>
            <th>Service</th>
            <th>Description</th>
            <th>Price</th>
            <th>Warranty</th>
          </tr>
        </thead>
        <tbody>
          {items
            .filter(item => item.type.toLowerCase().includes(search.toLowerCase()))
            .map((item, groupIndex) => (
              item.services.map((s, i) => (
                <tr className={`${item.type}-${i}`} key={`${item.type}-${i}`}>
                  {i === 0 && (
                    <td rowSpan={item.services.length}
                        className={groupIndex % 2 === 0 ? 'table-light' : 'table-secondary'}>
                      <b>{item.type}</b>
                    </td>
                  )}
                  <td><b>{s.name}</b></td>
                  <td>{s.description}</td>
                  <td>{s.price}</td>
                  <td>{s.warranty || '-'}</td>
                </tr>
              ))
            ))}
        </tbody>
      </table>
    </div>
  );
};
  return (
    <>
    <HelmetProvider>
            <Helmet>
              <title>Dubai Best AC Service Prices - Air Conditioner Maintenance</title>
              <meta name="description" content="Book 043300002 for affordable AC services in Dubai! We offer reliable maintenance, and repair for central AC, split AC, HVAC, VRV/VRF systems, & more." />
              <meta name="keywords" content={metaKeyword} />
              <meta name="author" content={metaAuthor} />
              <meta name="robots" content="index, follow" />
    
              <link rel="canonical" href={metaURL} />
              <meta property="og:type" content="website" />
              <meta property="og:locale" content="en_US" />
              <meta property="og:title" content="Dubai Best AC Service Prices - Air Conditioner Maintenance" />
              <meta property="og:description" content={metadescription} />
              <meta property="og:url" content={metaURL} />
              <meta property="og:image" content={metaImage} />
    
              {/* Twitter Card */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Dubai Best AC Service Prices - Air Conditioner Maintenance" />
              <meta name="twitter:description" content="Book 043300002 for affordable AC services in Dubai! We offer reliable maintenance, and repair for central AC, split AC, HVAC, VRV/VRF systems, & more." />
              <meta name="twitter:image" content={metaImage} />
              
            </Helmet>
          </HelmetProvider>
       {/* Importance Section */}
       <section className='section pt-3'>
            <div className='container'>
                <h1 className='text-center'>Dubai AC Service Price List</h1>
            </div>
       </section>
      <section id="importance-section" className="py-5 bg-dark-blue">
        <div className="container">
          <div className="row text-light">
            <div className="col-md-4 border-right">
              <h2 className="mb-0 text-light">Why AC Inspection is Necessary?</h2>
            </div>
            <div className="col-md-8">
              <p>Regular AC inspections diagnose potential issues early, ensuring peak performance and extending your unit&apos;s lifespan. By maintaining energy efficiency, inspections reduce energy bills and enhance overall system reliability. They also help improve indoor air quality by identifying and eliminating dust and mold, creating a healthier environment for your home or office.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Technical Inspection Section */}
      <section id="technical-inspection" className='py-4 bg-light-gray'>
        <div className="container">
          <div className="terms-box">
            <h6>TERMS AND CONDITIONS OF TECHNICAL INSPECTION</h6>
            <p className="terms-text">
              The AC technical inspection fee includes an on-site visit to diagnose the air conditioner unit by the technical team, with transportation charges to the Dubai premises. This amount will be deducted from the total cost in the final invoice if the customer needs any AC service in repair work/maintenance/cleaning service, or part replacement at the same time visit, not a second visit, and the second visit cost will be separate. Please note that this AC technical inspection fee is non-refundable. However, it does not cover the cost of carpentry work, gypsum ceiling access work for the AC unit, AC repair work, maintenance, or part replacement. And FAJ will provide quotation to the customer once the inspection is completed on-site.
            </p>
          </div>
        </div>
    </section>  
    {/* <section id="technical-inspection" className='py-2'>
        <div className="container">
          <div className="row gx-lg-3">
            {technicalServices.map((service, index) => (
              <ServiceCard key={`tech-${index}`} {...service} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Importance Section */}
      <section id="importance-section" className="py-5 bg-dark-blue">
        <div className="container">
          <div className="row  text-light">
            <div className="col-md-4 border-right">
              <h2 className="mb-0 text-light">Why AC Service is Important?</h2>
            </div>
            <div className="col-md-8">
              <p>
                AC service involves thorough cleaning, checking refrigerant levels, and ensuring all 
                components function properly. Regular servicing boosts efficiency, lowers energy bills, 
                and prevents unexpected breakdowns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Service Section */}
      <section id="cleaning-service" className='bg-light-gray py-4'>
        <div className="container">
          <div className="terms-box">
            <h6>TERMS AND CONDITIONS OF CLEANING SERVICE</h6>
            <p className="terms-text">
              The AC cleaning service fee includes an on-site visit to cleaning service the air conditioner unit by the technical team, with transportation charges to the Dubai premises. Please note that this AC cleaning service charge is non-refundable.The AC cleaning service does not cover the cost of any on-site carpentry work, gypsum ceiling access work for the AC unit, repair/maintenance/installation or spare part replacement; any additional work required on faulty AC unit will be quoted separately, and FAJ will quote accordingly to the customer with details.
            </p>
          </div>
        </div>
    </section>
    {/* <section id="cleaning-service" className='py-2'>
        <div className="container">
          <div className="row gx-lg-3">
            {cleaningServices.map((service, index) => (
              <ServiceCard key={`clean-${index}`} {...service} />
            ))}
          </div>
        </div>
      </section> */}
    {/* Add state for activeTab and search */}
    <div className='container py-4'>
    <ServiceTable items={data["AC"]} search="" />

    </div>
    </>
  );

};

export default ACServiceSection;
// Complete Technical Services Array
const technicalServices = [
  // Previous entries...
  {
    title: "AC Technical Inspection Fee 1.5 to 3.5 Ton",
    subtitle: "Ducted / Central AC",
    price: "195.00",
    color: "l-green",
    details: (
      <p className="px-4">
        AC inspection and diagnosis of insufficient cooling, over cooling, coils, thermostat/sensor,
        air filter, compressor, indoor/outdoor motors, capacitor, water leakage, drain pan,
        refrigerant level, airflow issues, strange noises, verifying thermostat settings,
        AC electrical control, pipes, and shutoff valves.
      </p>
    )
  },
  {
    title: "AC Technical Inspection Fee 2.0 to 3.5 Ton",
    subtitle: "Inverter AC",
    price: "215.00",
    color: "d-purple",
    details: (
      <p className="px-4">
        AC inspection and diagnosis of insufficient cooling, over cooling, coils, PCB,
        thermostat/sensor, air filter, compressor, motors, capacitor, water leakage,
        drain pan, refrigerant level, airflow issues, strange noises, electrical components,
        pipes, and valves.
      </p>
    )
  },
  {
    title: "AC Technical Inspection Fee 2.5 to 5.0 Ton",
    subtitle: "VRV/VRF AC",
    price: "535.00",
    color: "l-blue",
    details: (
      <p className="px-4">
        AC inspection and diagnosis of inverter board, electric components, coils, PCB,
        compressors, motors, capacitor, refrigerant level, condensate pump,
        branch controller, and system controls.
      </p>
    )
  },
  {
    title: "AC Technical Inspection Fee 2.5 to 3.5 Ton",
    subtitle: "Package Unit/Cassette AC",
    price: "320.00",
    color: "d-orange",
    details: (
      <p className="px-4">
        AC inspection and diagnosis of inverter board, electric components, coils,
        PCB, compressors, motors, capacitor, relay, water leakage, drain pan,
        refrigerant level, and system controls.
      </p>
    )
  }
];

// Complete Cleaning Services Array
const cleaningServices = [
  // Previous entries...
  {
    title: "AC Cleaning Service Cost of 1.5 to 3.5 Ton",
    subtitle: "Ducted / Central AC",
    price: "315.00",
    color: "l-green",
    details: (
      <>
        <p className="mb-0 px-3">
          <b>Included:</b><br />
          Complete cleaning of condenser coils, drain lines, and water trays.
          Inspection of electrical components, airflow systems, and thermostat settings.
        </p>
        <ul className="mt-2">
          <li>Enhanced air distribution</li>
          <li>Reduced energy consumption</li>
          <li>Prevention of microbial growth</li>
        </ul>
      </>
    )
  },
  {
    title: "AC Cleaning Service Cost of 2.0 to 3.5 Ton",
    subtitle: "Inverter AC",
    price: "345.00",
    color: "d-purple",
    details: (
      <>
        <p className="mb-0 px-3">
          <b>Included:</b><br />
          Specialized cleaning for inverter components, PCB maintenance,
          and thorough system diagnostics along with standard cleaning.
        </p>
        <ul className="mt-2">
          <li>Optimized inverter performance</li>
          <li>Improved temperature control</li>
          <li>Extended component lifespan</li>
        </ul>
      </>
    )
  },
  {
    title: "AC Cleaning Service Cost of 2.5 to 5.0 Ton",
    subtitle: "VRV/VRF AC",
    price: "765.00",
    color: "l-blue",
    details: (
      <>
        <p className="mb-0 px-3">
          <b>Included:</b><br />
          Comprehensive cleaning of complex VRV/VRF systems including branch controllers,
          condensate pumps, and multi-zone components.
        </p>
        <ul className="mt-2">
          <li>Maintained system efficiency</li>
          <li>Prevention of refrigerant leaks</li>
          <li>Enhanced multi-zone performance</li>
        </ul>
      </>
    )
  },
  {
    title: "AC Cleaning Service Cost of 2.5 to 3.5 Ton",
    subtitle: "Package Unit/Cassette AC",
    price: "535.00",
    color: "d-orange",
    details: (
      <>
        <p className="mb-0 px-3">
          <b>Included:</b><br />
          Specialized cleaning for cassette units including blower wheels,
          drain pans, and hidden components with accessibility challenges.
        </p>
        <ul className="mt-2">
          <li>Improved airflow pattern</li>
          <li>Reduced operational noise</li>
          <li>Enhanced cooling capacity</li>
        </ul>
      </>
    )
  }
];