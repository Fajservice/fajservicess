import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ACTonnageCalculator = ({titleSeo, description, Author, Keyword, URL }) => {
    // For SEO
    const metatitle = String(titleSeo || "AC Tonnage Calculator | Calculate Your Ideal AC Size");
    const metadescription = String(description || "elcome to free AC Tonnage Calculator by FAJ Technical Services LLC. Find your perfect air conditioner size quickly and easily.");
    const metaAuthor = String(Author || "Faj Technical Services");
    const metaImage = String(Image || "https://www.fajservices.ae/dist/img/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif");
    const metaKeyword = String(Keyword || "FAJ, AC Tonnage Calculator, Air Conditioner Size Calculator");
    const metaURL = String(URL || "https://www.fajservices.ae/ac-tonnage-calculator/").replace(/\/?$/, '/');
  const [form, setForm] = useState({
    length: "",
    width: "",
    height: "",
    people: "",
    floorLevel: "top",
    windowLength: "",
    windowBreadth: "",
    appliances: "",
    windowDirection: "east"
  });
  const [tonnage, setTonnage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculateTonnage = () => {
    const {
      length,
      width,
      height,
      people,
      floorLevel,
      windowLength,
      windowBreadth,
      appliances,
      windowDirection
    } = form;

    const roomVolume = parseFloat(length) * parseFloat(width) * parseFloat(height);
    const glassArea = parseFloat(windowLength) * parseFloat(windowBreadth);
    let btu = roomVolume * 141.5; // base btu per cubic meter

    btu += people * 600;
    btu += appliances * 1000;

    if (floorLevel === "top") btu *= 1.15;
    else if (floorLevel === "ground") btu *= 0.95;

    if (windowDirection === "east" || windowDirection === "west") btu += glassArea * 870;
    else btu += glassArea * 435;

    const requiredTons = (btu / 12000).toFixed(2);
    setTonnage(requiredTons);
  };

  return (
    <>
            <HelmetProvider>
                <Helmet>
                    <title>{metatitle}</title>
                    <meta name="description" content={metadescription} />
                    <meta name="keywords" content={metaKeyword} />
                    <meta name="author" content={metaAuthor} />
                    <meta name="robots" content="index, follow" />

                    <link rel="canonical" href={metaURL} />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:title" content={metatitle} />
                    <meta property="og:description" content={metadescription} />
                    <meta property="og:url" content={metaURL} />
                    <meta property="og:image" content={metaImage} />

                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={metatitle} />
                    <meta name="twitter:description" content={metadescription} />
                    <meta name="twitter:image" content={metaImage} />
                    <meta name="twitter:url" content={metaURL} />
                </Helmet>
            </HelmetProvider>
            <section
                className="cs_page_heading cs_bg_filed cs_primary_bg"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/FAJ-Banner-calculator.jpg)` }}
            >
                </section>
                <div className="container h-100">
                    {/* Main row */}
                    <div className="row align-items-center h-100">
                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                            <h1 className="cs_white_color text-center" style={{ fontSize: "clamp(1.75rem, 5vw, 2.625rem)" }}>
                                AC Tonnage Calculator
                            </h1>
                        </div>
                        {/* Form section */}
                    </div>
                <div className="calculator max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">

                    {[
                        { label: "Room Length (m)", name: "length" },
                        { label: "Room Width (m)", name: "width" },
                        { label: "Room Height (m)", name: "height" },
                        { label: "Number of People", name: "people" },
                        { label: "Number of Appliances", name: "appliances" }
                    ].map(({ label, name }) => (
                        <div key={name} className="mb-4">
                        <label className="block font-semibold mb-1">{label}</label>
                        <input
                            type="number"
                            name={name}
                            value={form[name]}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            min="0"
                            step="0.1"
                            required
                        />
                        </div>
                    ))}

                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Floor Level</label>
                        <select
                        name="floorLevel"
                        value={form.floorLevel}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        >
                        <option value="top">Top Floor</option>
                        <option value="middle">Middle Floor</option>
                        <option value="ground">Ground Floor</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Glass Window Area (m²)</label>
                        <div className="flex gap-2">
                        <input
                            type="number"
                            name="windowLength"
                            value={form.windowLength}
                            onChange={handleChange}
                            placeholder="Length"
                            className="w-1/2 border p-2 rounded"
                            min="0"
                            step="0.1"
                        />
                        <input
                            type="number"
                            name="windowBreadth"
                            value={form.windowBreadth}
                            onChange={handleChange}
                            placeholder="Breadth"
                            className="w-1/2 border p-2 rounded"
                            min="0"
                            step="0.1"
                        />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Window Direction</label>
                        <select
                        name="windowDirection"
                        value={form.windowDirection}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        >
                        <option value="east">East</option>
                        <option value="west">West</option>
                        <option value="north">North</option>
                        <option value="south">South</option>
                        </select>
                    </div>

                    <button
                        onClick={calculateTonnage}
                        className="w-full bg-orange-500 hover:bg-orange-600 py-2 px-4 rounded font-bold"
                    >
                        Calculate Tonnage
                    </button>

                    {tonnage && (
                        <div className="mt-6 text-center">
                        <p className="font-semibold text-lg">Required AC Tonnage:</p>
                        <p className="text-2xl font-bold text-blue-600">{tonnage} Tons</p>
                        </div>
                    )}
                    </div>
                {/* Extra padding div to ensure proper spacing after the section */}
                <div className="pb-3 d-md-none"></div>
                
                </div>
                </>
   );
};

export default ACTonnageCalculator;