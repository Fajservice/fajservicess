import  { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const data = {
  "AC": [
    {
      type: "Window AC 1.5 to 2.5 Ton",
      services: [
        { name: "Inspection", description: "Onsite technical inspection Fee", price: "135 to 167 AED + VAT", warranty: "No Warranty" },
        { name: "Deep Cleaning Service", description: "Deep Cleaning Service and Gas topup", price: "245 to 280 AED", warranty: "2 Month" },
        { name: "Repair", description: "After the inspection, prices will be quoted based on the technical inspection report provided to the customer.", price: "-", warranty: "2 to 3 Month" },
        { name: "Part Replacement", description: "All warranty for spare part replacements should be valid for 3 month.", price: "-", warranty: "3 Month" }
      ]
    },
    {
      type: "Split AC 1.5 to 2.5 Ton",
      services: [
        { name: "Inspection", description: "There is a callout fee that applies each diagnosis.", price: "135 AED +VAT", warranty: "" },
        { name: "Basic Service", description: "Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "260 to 285 AED+VAT", warranty: "2 Month" },
        { name: "Deep Cleaning Service", description: "Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "290 to 340 AED + VAT", warranty: "2 Month" },
        { name: "Repair", description: "After the inspection, prices will be quoted based on the technical inspection report provided to the customer.", price: "-", warranty: "2 to 3 Month" },
        { name: "Part Replacement", description: "All warranty for spare part replacements should be valid for 3 month", price: "-", warranty: "3 Month" }
      ]
    },
    {
      type: "Central AC 1.5 to 2.5 Ton",
      services: [
        { name: "Inspection", description: "There is a callout fee that applies each diagnosis.", price: "135 to 167 AED +VAT", warranty: "" },
        { name: "Basic Service", description: "Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "260 to 285 AED+VAT", warranty: "2 Month" },
        { name: "Deep Cleaning Service", description: "Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "290 to 340 AED + VAT", warranty: "2 Month" },
        { name: "Repair", description: "After the inspection, prices will be quoted based on the technical inspection report provided to the customer.", price: "-", warranty: "2 to 3 Month" },
        { name: "Part Replacement", description: "All warranty for spare part replacements should be valid for 3 month", price: "-", warranty: "3 Month" }
      ]
    },
    {
      type: "Central AC 3.0 to 5.0 Ton",
      services: [
        { name: "Inspection", description: "There is a callout fee that applies each diagnosis.", price: "135 to 235 AED +VAT", warranty: "" },
        { name: "Basic Service", description: "Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "295 to 390 AED+VAT", warranty: "2 Month" },
        { name: "Deep Cleaning Service", description: "Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "335 to 435 AED + VAT", warranty: "2 Month" },
        { name: "Repair", description: "After the inspection, prices will be quoted based on the technical inspection report provided to the customer.", price: "-", warranty: "2 to 3 Month" },
        { name: "Part Replacement", description: "All warranty for spare part replacements should be valid for 3 month", price: "-", warranty: "3 Month" }
      ]
    },
    {
      type: "Chill Water FCU 1.5 to 3.5 Ton",
      services: [
        { name: "Inspection", description: "There is a callout fee that applies each diagnosis.", price: "135 to 167 AED +VAT", warranty: "" },
        { name: "Basic Service", description: "Cleaning service air filter, and drain lines, check and test chilled water line, actuator valve, thermostat", price: "260 to 285 AED+VAT", warranty: "2 Month" },
        { name: "Deep Cleaning Service", description: "Water pressure cleaning service indoor coil, air filter, and drain line, drain tray, check and test chilled water line, actuator valve, thermostat", price: "290 to 340 AED + VAT", warranty: "2 Month" },
        { name: "Repair", description: "After the inspection, prices will be quoted based on the technical inspection report provided to the customer.", price: "-", warranty: "2 to 3 Month" },
        { name: "Part Replacement", description: "All warranty for spare part replacements should be valid for 3 months", price: "-", warranty: "3 Month" }
      ]
    },
    {
      type: "Inverter and VRV & VRF 2.5 to 5.0 Ton",
      services: [
        { name: "Inspection", description: "There is a callout fee that applies each diagnosis.", price: "185 to 295 AED +VAT", warranty: "" },
        { name: "Basic Service", description: "Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "325 to 435 AED+VAT", warranty: "2 Month" },
        { name: "Deep Cleaning Service", description: "Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "450 to 565 AED + VAT", warranty: "2 Month" },
        { name: "Repair", description: "After the inspection, prices will be quoted based on the technical inspection report provided to the customer.", price: "-", warranty: "2 to 3 Month" },
        { name: "Part Replacement", description: "All warranty for spare part replacements should be valid for 3 month", price: "-", warranty: "3 Month" }
      ]
    },
    {
      type: "Package Unit HVAC 5.0 to 20.0 Ton",
      services: [
        { name: "Inspection", description: "There is a callout fee that applies each diagnosis.", price: "290 to 450 AED +VAT", warranty: "" },
        { name: "Basic Service", description: "Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "515 to 715 AED+VAT", warranty: "2 Month" },
        { name: "Deep Cleaning Service", description: "Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and drain line, gas top-up As per to AC requirements.", price: "695 to 780 AED + VAT", warranty: "2 Month" },
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

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("AC");
  const [search, setSearch] = useState("");

  return (
    <><HelmetProvider>
      <Helmet>
        <title>FAJ PRICE LIST</title>
        <meta name="description" content="Best prices of faj technical services llc"></meta>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.fajservices.ae/faj-price-list/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="FAJ PRICE LIST" />
        <meta property="og:description" content="Best prices of faj technical services llc" />
        <meta property="og:url" content="https://www.fajservices.ae/faj-price-list/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAJ PRICE LIST" />
        <meta name="twitter:description" content="Best prices of faj technical services llc" />

      </Helmet>
    </HelmetProvider>
    <div className="container py-4">
        <h1 className="text-center">FAJ Price List</h1>
        <ul className="nav nav-tabs mb-3">
          {Object.keys(data).map(category => (
            <li className="nav-item" key={category}>
              <button
                className={`nav-link ${activeTab === category ? "active" : ""}`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={`Search in ${activeTab}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </div>

        <ServiceTable items={data[activeTab]} search={search} />
      </div></>
  );
}