import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from "../../../Contact/Serviceappointemnt";
import CallNowButton from "../../../Buttons/CallNowButton";
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../../../Common/loadBackgroudImages";
import HeaderForm from "../../../Headeform/HeaderForm";
import FAJACPrice from "../../../Miscellaneous/FAJACPrice";
import Practicaltip from "../../../Common/Practicaltip";
import AcProperties from "../../../Common/AcProperties";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import LocationKeyword from "./LocationKeyword";
import Testimonial1 from "../../../Testimonial/Testimonial1";
import PriceCard from "./PriceCard";
import AcBenefits from "../AcBenefit";
import Gallery from "../../../Svg/Gallery";
import BeforeAfter from "../../../BeforeAfter/BeforeAfter";
const CDN = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA";
const getImageSrc = (imgPath) => {
	if (!imgPath) return "";
	if (imgPath.startsWith("https")) return imgPath;
	let variant = "mobile";
	if (typeof window !== "undefined") {
		const width = window.innerWidth;
		const realWidth = width;
		if (realWidth > 1200) {
			variant = "large";
		} else if (realWidth > 768) {
			variant = "desktop";
		} else if (realWidth > 480) {
			variant = "tablet";
		} else {
			variant = "mobile";
		}
	}
	return `${CDN}/${imgPath}/${variant}`;
};
const AcRepairInBusinessBayDetail = ({
	subtitle,
	title,
	reviewsbg,
	titleSeo,
	description,
	Author,
	Keyword,
	URL,
}) => {
	// For SEO
	const metatitle = String(
		titleSeo || "Best AC Repair in Business Bay | Same-Day AC Servicing",
	);
	const metadescription = String(
		description ||
			"Get the Best AC Repair in Burj Khalifa Lake Dubai - FAJ experts here for help your Central HVAC, Split Chiller FCU Aircon Servicing & Maintenance Dubai",
	);
	const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
	const metaKeyword = String(
		Keyword ||
			"AC Repair  in Business Bay, Air Conditioning Service in Business Bay, Air Con Maintenance & AC Installation in Business Bay",
	);
	const metaURL = String(
		URL ||
			"https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/business-bay/",
	);
	const metaImage = String(
		Image ||
			"https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/Experts-AC-Service-and-Maintenance/public",
	);
	subtitle = "Testimonial";
	title = "What our clients say About Us";
	reviewsbg = getImageSrc("testimonialbg");
	const accordionContentRef = useRef(null);
	const [openItemIndex, setOpenItemIndex] = useState(-1);
	const [firstItemOpen, setFirstItemOpen] = useState(true);
	// State for fetched data
	const [data, setData] = useState([]);
	const [testimonial_data, setTestimonialData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const handleItemClick = (index) => {
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
	useEffect(() => {
		loadBackgroudImages();
	}, []);
	// Fetch JSON data
	useEffect(() => {
		const fetchData = async () => {
			try {
				const [faqsResponse, testimonialsResponse] = await Promise.all([
					fetch(
						`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcLocation/AcRepairInBusinessBay.json`,
					),
					fetch(
						`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/AcServiceTestimonials.json`,
					),
				]);
				const faqsData = await faqsResponse.json();
				const testimonialsData = await testimonialsResponse.json();
				setData(faqsData);
				setTestimonialData(testimonialsData);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{metatitle}</title>
					<meta name="description" content={metadescription}></meta>
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
				</Helmet>
			</HelmetProvider>
			<HeaderForm />
			<div className="cs_service_details">
				<section className="section cs_py_30">
					<div className="container">
						<h1 className="cs_fs_30">
							Professional AC Repair and Maintenance Services in Business Bay |
							Near Me Dubai
						</h1>
						{/* <h2 className="cs_fs_30">Stay Cool this Summer with Expert AC Repair and Service in Dubai</h2> */}
						<p>
							Living in Business Bay means your air conditioner works a lot
							throughout the year. When it starts to cool less, the air feels
							weird or it just stops working. Daily life can get really
							stressful really fast. A maintained AC system helps keep your home
							or office cool, clean and comfy no matter the season.
						</p>
						<p>
							<Link to="/">FAJ Technical Services L.L.C</Link> has been an AC
							cleaning,{" "}
							<Link to="/services/air-conditioning-repair/ac-service/">
								AC maintenance
							</Link>
							, installing air conditioners and AC repair near me in Business
							Bay since 2010. Our technicians work on both home and office air
							conditioning systems. They provide effective solutions for all
							kinds of cooling issues near me in Dubai and the UAE.
						</p>
						<div id="get-quote" className=" mt-3">
							<div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
								<WhatsappIconButton />
							</div>
						</div>
						{/*  */}
					</div>
				</section>
				<PriceCard />
				{/* Experts AC Service and Maintenance */}
				<section className="section cs_py_30">
					<div className="container">
						<div className="row gx-md-5 expert_section_wrapper">
							<div className="col-md-6">
								<h2 className="cs_fs_24 mb-1 text-align-left">
									Who provides Air Conditioning Services in Business Bay?
								</h2>
								<p className="mb-2">
									Business Bay has a lot of towers, offices, retail outlets,
									restaurants and commercial properties. All of these places
									need Air Conditioning systems that work well. At FAJ Technical
									Services L.L.C we provide Air Conditioning solutions for all
									kinds of properties. We do everything from checks to big fixes
									for Air Conditioning systems.
								</p>
								<p>
									Our goal with Air Conditioning Services is simple: we want to
									make sure your Air Conditioning system works well and does not
									stop working.
								</p>
								<h2 className="cs_fs_24 text-align-left">
									Signs Your AC May Need Professional Attention{" "}
								</h2>
								<p className="mb-2">
									In case you notice the following issues, you may need AC
									servicing by experts.
								</p>
								<div className="row">
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Higher electricity bills than normal</li>
											<li>Weak or uneven airflow</li>
											<li>Air conditioner not cooling properly</li>
											<li>Water leaking from the unit</li>
										</ul>
									</div>
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Unusual noises during operation</li>
											<li>Unpleasant smells coming from vents</li>
											<li>High levels of humidity inside</li>
											<li>Regular system failures</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-6 ">
								<img
									className="bordered-img ac-bordered-img w-100"
									src={getImageSrc("AC-Repair-and-Maintenace-Service-Outdoor")}
									alt="AC Repair  in Business Bay"
								/>
							</div>
						</div>
						<div className="appointment-col border-small-top pt-3">
							<div id="get-quote" className=" mt-3">
								<div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
									<WhatsappIconButton />
									<CallNowButton />
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* AC Price Section */}
				<FAJACPrice></FAJACPrice>
				<section className="section cs_py_30 bg-light-gray">
					<div className="container">
						<div className="row gx-md-5 expert_section_wrapper">
							<div className="col-md-6 ">
								<img
									className="bordered-img w-100"
									src={getImageSrc("Experts-AC-Service-and-Maintenance")}
									alt="AC Repair in Bur Dubai"
								/>
							</div>
							<div className="col-md-6">
								<h2 className="cs_fs_24 mb-1 text-align-left">
									Why Does My AC Not Cool properly?
								</h2>
								<p className="mb-2">
									Many issues can affect cooling performance. Some of the most
									common explanations are:
								</p>
								<div className="row">
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Dirty air filters</li>
											<li>Low refrigerant levels</li>
											<li>Blocked condenser coils</li>
											<li>Faulty thermostat</li>
										</ul>
									</div>
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Compressor problems</li>
											<li>Electrical faults</li>
											<li>Restricted airflow</li>
										</ul>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12">
										<p className="mb-0">
											Expert diagnosis helps in identifying the exact reason and
											stops additional system damage.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Professional Air Conditioning Services in Bur Dubai */}
				<section className="section cs_py_30 bg-light-white">
					<div className="container">
						<h2 className="cs_fs_30 text-center">
							Air Conditioning Services Available in Business Bay 
						</h2>
						<div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
							<div className="col-12 col-md-4 col-lg-4">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											AC Repair Service
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											System performance can be impacted by cooling failures, water leaks, thermostat issues, compressor problems, and airflow limits. Expert repairs aid in the restoration of dependable cooling and stop additional issues.
										</p>
									</div>
								</div>
							</div>

							<div className="col-12 col-md-4 col-lg-4">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											AC Cleaning Service
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											We make sure to clean parts of your AC really well. This gets rid of dust, grime, mold and dirt. As a result, the air inside your home or office gets cleaner, and air circulation. Your AC cools better.
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-4 col-lg-4">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											AC Maintenance Service
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											Regular maintenance helps keep your air conditioning system working properly. It reduces wear on parts, reduces electricity bills, helps avoid expensive repairs and improves its performance
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-4 col-lg-4">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											AC Installation Service
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											We offer installation services for both home and office air conditioning systems. Proper installation is important because it helps your air conditioner unit work efficiently safely and effectively for a time.
										</p>
									</div>
								</div>
							</div>

							<div className="col-12 col-md-4 col-lg-4">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											Annual Maintenance Contract (AMC)
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											Our AMC plans include check-ups, maintenance of your air conditioner system to prevent problems, priority service when you need it in any emergency and you can get ongoing support all year round.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div id="get-quote" className="mb-0 mt-3">
							<div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
								<WhatsappIconButton />
							</div>
						</div>
					</div>
				</section>
				{/* Why is AC Maintenance Service Important in Dubai? */}
				<section className="section cs_py_30 bg-light-gray">
					<div className="container">
						<h2 className="cs_fs_30">
							Why Does AC Maintenance Matter in Business Bay?
						</h2>
						<p>
							In Business Bay AC maintenance is important if you want your system to keep working properly. FAJ Technical Services L.L.C provides complete maintenance solutions to help your AC run the way it should. We take care of problems before they start so you do not have to worry about sudden breakdowns. Our team makes sure your cooling system stays in good shape all year.
						</p>
						<div className="row align-items-center">
							<div className="col-md-6">
								<img
									className="blue-border"
									src={getImageSrc(
										"What-is-covered-in-an-AC-Maintenance-Contract",
									)}
									alt="Air Conditioning Service in Business Bay"
								/>
							</div>
							<div className="col-md-6">
								<ul className="mb-0">
									<li>
										<strong>Extreme Weather:</strong> Dubai faces harsh summer temperatures. Regular maintenance allows air conditioning systems to work successfully throughout extended periods of intense use. 
									</li>
									<li>
										<strong>Energy Efficiency: </strong> Air conditioning systems that are maintained properly do not have to work hard to make the indoor spaces cool. This helps to reduce the cost of electricity. 
									</li>
									<li>
										<strong>Longevity of Equipment: </strong>When you service the air conditioning systems regularly you can help the parts last longer. This means the system itself will last longer too. 
									</li>
									<li>
										<strong>Improve Air Quality: </strong> Regular maintenance of air conditioning systems helps to remove the dust and other bad things that are in the air. This makes the air inside the property cleaner. 
									</li>
									<li>
										<strong>Enhanced Comfort: </strong> Consistent maintenance contributes to year-round temperature stability and reliable cooling. 
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				{/* Common AC Problems That May Require Maintenance */}
				<section className="section cs_py_30">
					<div className="container">
						<h2 className="text-center">
							Common AC Problems
						</h2>
						<div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
							<div className="col-12 col-md-4 col-lg-3">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											Weak Airflow
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											The Air Conditioner has filters, blocked ducts or fan issues and this can reduce the airflow and affect the cooling performance of the Air Conditioner. 
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-4 col-lg-3">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											Warm Air
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											If AC has refrigerant levels, compressor faults, and thermostat problems. This may reason for warm air to come from the vents of the Air Conditioner.
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-4 col-lg-3">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											Strange Noises
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											In case you hear your AC making grinding, rattling, buzzing, and squealing sounds. This can indicate that the Air Conditioner has worn or loose components. 
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-4 col-lg-3">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											Foul Odors
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											AC makes a bad smell, which is often caused by dirt buildup, bacteria, mold, or clogged drainage systems in the Air Conditioner. 
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-4 col-lg-3">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											Frequent Cycling
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											AC is experiencing short cycling and this may occur because of thermostat issues, airflow restrictions, or electrical faults in it.
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-4 col-lg-3">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											High Humidity Level
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											The Air Conditioner should help control indoor moisture levels and excess humidity may indicate that the Air Conditioner has performance problems.
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-4 col-lg-3">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											Leakage Water
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											AC has blocked drain lines, frozen coils or drainage issues. This can cause water to leak from the Air Conditioner unit. 
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-4 col-lg-3">
								<div className="box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											Increased Energy Bills
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											A maintained Air Conditioner often consumes more energy while delivering less cooling and this can increase the electricity bills. 
										</p>
									</div>
								</div>
							</div>
						</div>
						<div id="get-quote" className="mb-0 mt-3">
							<div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
								<WhatsappIconButton />
							</div>
						</div>
					</div>
				</section>
				{/* Here are the */}
				<section className="section cs_py_30 bg-light-gray">
					<div className="container">
						<h2 className="cs_fs_30 text-uppercase">
							Emergency AC Repair Service in Business Bay
						</h2>
						<div className="row">
							<div className="col-xl-6">
								<iframe
									className="bordered-img blue-border"
									width="100%"
									height="350"
									src="https://www.youtube.com/embed/prUR0-lZlzg?si=96yf5hxyAA3bct8w"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
								></iframe>
							</div>
							<div className="col-xl-6">
								<p className="mb-0">
									A sudden AC breakdown can affect comfort, productivity, and indoor air quality.
								</p>
                <p className='mb-0'><strong>Unexpected AC failures can happen at any time. Fast assistance is available for:</strong></p>
								<ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-1">
									<li>
										AC not cooling
									</li>
									<li>
										Water leakage
									</li>
									<li>
										Electrical faults
									</li>
									<li>
										Thermostat problems
									</li>
                  <li>
                    Weak airflow
                  </li>
                  <li>
                    Unusual sounds
                  </li>
                  <li>
                    System not turning on
                  </li>
								</ul>
                <p className='mb-0'>We provide fast assistance for residential and commercial customers throughout Bur Dubai and nearby areas.
                </p>
							</div>
						</div>
					</div>
				</section>
				{/* The Benefits Of Regular AC Service*/}
				<AcBenefits city="Business Bay" />
				{/* Why choose us AC */}
				<section className="section cs_py_30">
					<div className="container container-md container-sm">
						<h2 className="my-3 why-choose-h2 text-center mb-3">
							CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR
							NEEDS!
						</h2>
						<div className="usps align-items-center	">
							{/* <!-- First Column --> */}
							<div className="uspcol col-1">
								<div className="uspitem">
									<div className="uspicon">
										<img
											src={getImageSrc("icon/fast-reliable")}
											alt="Fast, Reliable Service"
										/>
									</div>
									<div className="usptext">
										<h3>Reliable, Priority, and Quick</h3>
										<p>
											You can count on{" "}
											<a href="https://www.instagram.com/fajtechnicalservicesllc/">
												<b>efficient service</b>
											</a>
											! Our same-day AC repair or next-day AC service visits
											ensure that your needs are met quickly.
										</p>
									</div>
								</div>
								<div className="uspitem">
									<div className="uspicon">
										<img
											src={getImageSrc("icon/experts")}
											alt="We Are Experts"
										/>
									</div>
									<div className="usptext">
										<h3>Feeling Of Calm</h3>
										<p>
											With{" "}
											<a href="/services/air-conditioning-repair/ac-annual-maintenance-contract/">
												annual maintenance contract
											</a>
											, you get a full year of service, ensuring your AC runs
											smoothly and providing peace of mind.
										</p>
									</div>
								</div>
								<div className="uspitem mb-0">
									<div className="uspicon">
										<img
											src={getImageSrc("icon/full-control")}
											alt="FAJ icon service"
										/>
									</div>
									<div className="usptext">
										<h3>You Are in Control</h3>
										<p>
											Choose a day and time for your AC repair near me, Business
											Bay Dubai or Sharjah. With a 3-4 hour window for when our
											technician will arrive.
										</p>
									</div>
								</div>
							</div>
							{/* <!-- Delimit Section --> */}
							<div className="uspdelimit col-2 d-none d-xl-block">
								<img
									className="blue-border-2 w-100 why-choose-img"
									src={getImageSrc("ACServicescomponent-New")}
									alt="Ac Maintenance Services"
								/>
							</div>
							{/* <!-- Second Column --> */}
							<div className="uspcol col-3">
								<div className="uspitem">
									<div className="uspicon">
										<img
											src={getImageSrc("icon/value")}
											alt="FAJ icon service"
										/>
									</div>
									<div className="usptext">
										<h3>We Are Experts</h3>
										<p>
											We are experts in AC service in Business Bay. This is why
											most major brands trust us to handle their service and
											maintenance needs.
										</p>
									</div>
								</div>
								<div className="uspitem">
									<div className="uspicon">
										<img
											src={getImageSrc("icon/confidence-guarantee")}
											alt="FAJ icon service"
										/>
									</div>
									<div className="usptext">
										<h3>Great Value</h3>
										<p>
											We are dedicated to ensuring customer satisfaction with
											timely service, prompt issue resolution, and affordable
											prices.
										</p>
									</div>
								</div>
								<div className="uspitem mb-0">
									<div className="uspicon">
										<img
											src={getImageSrc("icon/trustworthy")}
											alt="FAJ icon service"
										/>
									</div>
									<div className="usptext">
										<h3>Trustworthy</h3>
										<p>
											Our{" "}
											<a href="https://www.facebook.com/acrepairservices">
												<b>skilled AC technicians</b>
											</a>{" "}
											are highly trained, and we provide excellent service for a
											variety of major AC brands efficiently.
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Delimit mobile --> */}
						<div className="col-12 uspdelimit w-100 text-center d-block d-none-1199 Xd-xl-none">
							<img
								className="blue-border-2 w-100"
								src={getImageSrc("ACServicescomponent-New")}
								alt="Ac Maintenance Services"
							/>
						</div>
					</div>
				</section>
				<BeforeAfter
					title="Recent Completed Projects"
					subTitle="Before & after"
					beforeImg={`${CDN}/after_img_1/public`}
					afterTitle="After"
					afterImg={`${CDN}/before_img_1/public`}
					beforeTitle="Before"
				/>
				{/* We Specialise in All Types of AC Systems */}

        <section className="section cs_py_30 bg-light-gray mt-3">
          <div className="container">
            <h2 className="cs_fs_24 text-align-left">We Specialise in All Types of AC Systems</h2>
            <p>
              At FAJ Technical Services L.L.C we repair and maintain all major air conditioning systems across Bur Dubai. Our technicians handle every unit with care to make sure you get smooth cooling and reliable performance.
            </p>
            <p className="mb-0"><strong>Window AC:</strong> We provide fast repair and servicing for Window AC units, fixing common cooling and airflow issues.<br/><strong>Split AC:</strong> Our team handles Split AC repair, cleaning, and maintenance for homes and offices with quick response service.<br/><strong>Central AC:</strong> FAJ Technical Services L.L.C offers complete Central AC maintenance and repair for buildings to ensure even and efficient cooling.<br/><strong>Chiller AC:</strong> We service Chiller AC systems used in large buildings and commercial spaces, keeping them running efficiently.<br/><strong>Fan Coil Unit (FCU):</strong> Our experts repair and maintain FCU systems to improve airflow and maintain proper cooling balance.<br/><strong>Package Unit AC:</strong> We provide reliable service for Package Unit AC systems used in commercial and industrial setups.<br/><strong>Portable AC:</strong> At FAJ Technical Services L.L.C experts quickly repair and service Portable AC units for small spaces and temporary cooling needs.<br/><strong>Ducted Split AC:</strong> We handle installation, repair, and maintenance of Ducted Split AC systems for full-property cooling.<br/><strong>Ceiling AC:</strong> Our technicians service Ceiling AC units to ensure quiet operation and consistent cooling performance.<br/><strong>Inverter AC:</strong> We specialize in Inverter AC systems, focusing on energy efficiency and smooth cooling performance.</p>
          </div>
        </section>

        {/* We specialise in air conditioning services for the following brands */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_24 text-align-left">We specialise in air conditioning services for the following brands</h2>

            {/* <ul className="mb-3">
              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/lg/">LG Air Conditioner Service</a>:</strong> FAJ offers reliable LG AC repair and services near me in Bur Dubai. With professionals who are experts in split, vrf, and central air conditioning units. Get reliable and fast AC service near you, including AC repair and maintenance in Bur Dubai.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/samsung/">Samsung Air Conditioner Repair and Service</a>:</strong> Based in Dubai, FAJ is your go-to destination for Samsung AC repair in Dubai Bur Dubai. Specialising in Samsung air conditioning repair service near me, we offer comprehensive air conditioning service ranging from AC fixing to AC cleaning service and AC maintenance in Bur Dubai.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/york/">York AC Service and Repair</a>:</strong> The York AC repair and service in Bur Dubai, ensures you don’t need to worry because you are in the right place. Yes, FAJ is where efficiency and reliability are prioritised, providing air conditioning service near me, Bur Dubai, AC cleaning service, and AC fixing.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/daikin/">Daikin Air Conditioner Maintenance</a>:</strong> Count on our experienced team to promptly and effectively address any challenges you may encounter with your Daikin air conditioning unit. We specialise in AC cleaning service and AC repairing in Bur Dubai, to ensure it operates at optimal functionality, providing you with a cool and comfortable environment when you need it most.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/trane/">Trane HVAC Repair</a>:</strong> With in-depth expertise in the repair of Trane air conditioning systems, we offer comprehensive Bur Dubai AC repair near me and AC cleaning services designed to ensure your unit operates at peak efficiency. Our specialized Trane AC maintenance and repair service in Bur Dubai, is conveniently available in your area, providing timely and effective solutions to keep your air conditioning system running smoothly and reliably. Whether you need routine home air conditioner repair near me or office AC service and maintenance in Bur Dubai or urgent repair, we are here to help you maintain a comfortable environment in your home or business.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/panasonic/">Panasonic AC Service and Repair</a>:</strong> No matter the issue with your Panasonic air conditioner, our skilled AC technicians in Bur Dubai and Sharjah can quickly diagnose and fix it. We offer reliable air conditioning services near me in Bur Dubai, and AC repair right in your Bur Dubai area, ensuring your system runs smoothly again. </li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/gree/">Gree AC Service and Maintenance</a>:</strong> Is your air conditioning unit not functioning properly, or are you seeing a Gree AC error displayed on the screen? You don’t have to struggle with uncomfortable temperatures or stale air any longer. At FAJ, we specialise in quickly restoring your Gree air conditioning to optimal performance. Our reliable air conditioning repair and maintenance services ensure that your system operates efficiently and effectively, preventing any further damage and discomfort. Whether you need emergency air conditioning repair near me in Bur Dubai, air conditioning service near me and routine AC maintenance services, or comprehensive air conditioning cleaning services in Dubai, we’ve got you covered. Enjoy a refreshing and cool environment once again with our professional solutions!</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/o-general/">O General AC Service and Repair</a>:</strong> For air conditioning cleaning services in Dubai, specialized help is crucial for effectively managing aircon issues. Our company provides hassle-free villa AC repair / office AC cleaning service or home AC maintenance services in Bur Dubai, conveniently available in both Dubai and Sharjah. Trust us to keep your home comfortable all year round.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/mitsubishi/">Mitsubishi Air Conditioner Service and Repair</a>:</strong> Seeking relief from scorching heat? Discover the secret to keeping your Mitsubishi AC running smoothly in Dubai! Our expert Mitsubishi Air Conditioning cleaning service and AC repairing ensure your AC stays cool and efficient, providing comfort and peace of mind. Expert Air conditioning cleaning service near me in Bur Dubai and Sharjah, aircon fixing and AC maintenance service in Bur Dubai. </li>

              <li><strong>Carrier AC Repair and Service in Dubai</strong>: We understand how essential Carrier air conditioning is for your home or business. FAJ provides fast and reliable Carrier air conditioner maintenance services in Bur Dubai, that are both efficient and dependable. Typically, regular cleaning service of your Carrier VRF (Variable Refrigerant Flow), central, split, package unit, or cassette type units in Bur Dubai and Sharjah is sufficient to keep your system running smoothly. However, if your Carrier air conditioning system experiences a breakdown, fault, or malfunction, it can negatively affect your indoor environment.</li>
            </ul> */}

            <LocationKeyword />

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <GetQuoteButton />
                <CallNowButton />
              </div>
            </div>
          </div>
        </section>
				<section className="section gallery_section bg-light-gray cs_py_30">
					<div className="container">
						<h2>
							Gallery <Gallery />
						</h2>
						<div className="row gx-3 gy-2">
							<div className="col-md-4 col-6">
								<img src={`${CDN}/AcService/slide1/public`} alt="Ac Service" />
							</div>
							<div className="col-md-4 col-6">
								<img src={`${CDN}/AcService/slide2/public`} alt="AC Repair" />
							</div>
							<div className="col-md-4 col-6">
								<img
									src={`${CDN}/AcService/slide3/public`}
									alt="AC Maintenance"
								/>
							</div>
							<div className="col-md-4 col-6">
								<img src={`${CDN}/AcService/slide4/public`} alt="AC CLeaning" />
							</div>
							<div className="col-md-4 col-6">
								<img src={`${CDN}/AcService/slide5/public`} alt="AC Fixing" />
							</div>
							<div className="col-md-4 col-6">
								<img
									src={`${CDN}/AcService/slide6/public`}
									alt="AC Gas Filling"
								/>
							</div>
						</div>
					</div>
				</section>
				<Practicaltip></Practicaltip>
				<AcProperties></AcProperties>
				{/* Maintenance Contract */}
				<MaintenanceContract />
				{/* testimobial section */}
				<Testimonial1
					subtitle="What Our Clients Say"
					title="Customer <span>Reviews</span>"
					bgImg={reviewsbg}
					testimonialData={testimonial_data}
					sectionId="home-testimonials"
				/>
				<section className="section cs_py_30 bg-dark-blue text-light">
					<Serviceappointemnt
						subtitle2="Contact us"
						title2="Book An Appointment"
					></Serviceappointemnt>
				</section>
				{/* Faqs */}
				<section className="section cs_py_30">
					<div className="container">
						<h3 className="cs_fs_30">FAQ&apos;s</h3>
						<div className="cs_accordians_wrapper cs_style_1 p-0">
							{data.map((item, index) => (
								<div
									key={index}
									className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`}
								>
									<div
										className="cs_accordian_head"
										onClick={() => handleItemClick(index)}
									>
										<span className="cs_fs_16 cs_semibold mb-0">
											{item.title}
										</span>
										<span className="cs_accordian_toggle">
											<svg
												width="20"
												height="20"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className={`eye-open ${index === openItemIndex ? "d-none" : ""}`}
											>
												<path
													d="M8 2V14M2 8H14"
													stroke="#1E1E1E"
													strokeWidth="2.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											{/* Eye Slash */}
											<svg
												width="20"
												height="20"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className={`eye-slash ${index !== openItemIndex ? "d-none" : ""}`}
											>
												<path
													d="M2 8H14"
													stroke="#1E1E1E"
													strokeWidth="2.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</span>
									</div>
									<div className="cs_accordian_body" ref={accordionContentRef}>
										<p
											className="mb-0"
											dangerouslySetInnerHTML={{
												__html: item.desc.replace(/\n/g, "<br>"),
											}}
										></p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default AcRepairInBusinessBayDetail;
