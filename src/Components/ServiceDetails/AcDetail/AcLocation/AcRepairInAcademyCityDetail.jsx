import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Serviceappointemnt from "../../../Contact/Serviceappointemnt";
import CallNowButton from "../../../Buttons/CallNowButton";

import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../../../Common/loadBackgroudImages";
import HeaderForm from "../../../Headeform/HeaderForm";
import FAJACPrice from "../../../Miscellaneous/FAJACPrice";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import AcProperties from "../../../Common/AcProperties";
import Practicaltip from "../../../Common/Practicaltip";
import LocationKeyword from "./LocationKeyword";
import Testimonial1 from "../../../Testimonial/Testimonial1";
import { EyeIcon, EyeSlashIcon } from "../../../../icons/EyeIcon";
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
const AcRepairInAcademyCityDetail = ({
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
		titleSeo || "Low-Cost AC Repair and AC Servicing in Academy City Dubai",
	);
	const metadescription = String(
		description ||
			"Top-rated air conditioning company offering AC repair and service in Academy City, Dubai. FAJ is here to assist you with HVAC maintenance nearby",
	);
	const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
	const metaKeyword = String(
		Keyword ||
			"AC Repair in Academy City, Air Conditioning Service in Academy City, Air Con Maintenance & Air Con Installation in Academy City",
	);
	const metaURL = String(
		URL ||
			"https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/academy-city/",
	);
	const metaImage = String(
		Image ||
			"https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
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
						`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcLocation/AcRepairInAcademyCity.json`,
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
				<section className="section cs_py_30 bg-light-white">
					<div className="container">
						<h1 className="cs_fs_30">
							Cost-Effective Air Conditioning Repair and Service in Academy City
							| Dubai
						</h1>
						<p>
							Academy City is home to universities, student residences, offices
							and educational facilities where it is really important to have a
							cool indoor environment all year round. When an air conditioner
							stops working it can be really tough to study, work and do daily
							activities, especially when it is very hot in Dubai.
						</p>
						<p>
							FAJ Technical Services L.L.C has been providing air conditioner
							repair and maintenance services in Dubai since 2010. Our expert
							technicians can fix air conditioners, clean, and service air
							conditioners. They can install new air conditioners for
							apartments, villas, offices, schools and commercial properties in
							Academy City and nearby areas.
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
				<section className="section cs_py_30 pb-0">
					<div className="container">
						<div className="row gx-md-5 expert_section_wrapper align-items-center">
							<div className="col-md-6">
								<h2 className="cs_fs_24 mb-1">
									Who Provides Professional AC Repair Services in Academy City?
								</h2>
								<p className="mb-2">
									Finding an air conditioner company is crucial when cooling
									problems start affecting your home, office, classroom or
									business space. FAJ Technical Services L.L.C provides air
									conditioning services for residential and commercial customers
									all over Academy City.
								</p>
								<p>
									Our technicians can handle everything from cooling issues to
									complete system repairs, no matter which brand and which type
									of air conditioner unit you have.
								</p>
								<h2 className="cs_fs_24 align-items-center">
									How Do You Know Your AC Needs Servicing?
								</h2>
								<p className="mb-2">
									Many cooling systems show warning signs before a major
									breakdown happens.
								</p>
								<div className="row">
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Higher electricity bills</li>
											<li>Reduced cooling performance</li>
											<li>Weak airflow from vents</li>
										</ul>
									</div>
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Water leaking from the unit</li>
											<li>Unusual noises during operation</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="col-md-6 ">
								<img
									className="bordered-img ac-bordered-img w-100"
									src={getImageSrc("AC-Repair-and-Maintenace-Service-Outdoor")}
									alt="Air Con Maintenance & Air Con Installation in Academy City"
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
									Why Is My Air Conditioner Running But Not Cooling?
								</h2>
								<p className="mb-2">
									A running air conditioner unit does not always mean proper
									cooling is taking place. Several components work together to
									produce cool air and failure in one part can reduce
									performance.
								</p>
								<p>
									<strong>Some common reasons include:</strong>
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
											<li>Electrical issues</li>
											<li>Restricted airflow</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* We Offer Air Conditioning Services in Dubai Marina  */}
				<section className="section cs_py_30 bg-light-white">
					<div className="container">
						<h2 className="cs_fs_30 text-center">
							Complete Air Conditioning Services in Academy City
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
											If your air conditioner is not working right it can be
											because of a lot of things. It could be the compressor,
											the thermostat or even water leaking. When you get a
											professional to fix it your AC will start working really
											fast.
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
											When we clean your AC, we get rid of all the dirt and mold
											that builds up. We clean the filters, the coils and the
											drainage system. This helps the air flow and makes the
											air, inside your home cleaner.
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
											It is an idea to have your air conditioner checked
											regularly. This helps keep all the parts working well and
											your air conditioner will keep working efficiently all
											year round.
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
											Installation services are available for residential and
											commercial air conditioning systems. Every unit is
											installed according to manufacturer recommendations for
											reliable long-term operation.
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
											AMC offers an exciting array of services designed to keep
											your systems running smoothly all year round! With our
											scheduled visits, thorough preventive maintenance, and
											priority support, you'll enjoy peace of mind.
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
				<section className="section cs_py_30 bg-light-white">
					<div className="container">
						<h2 className="cs_fs_30">
							Why Is AC Maintenance Important in Academy City?
						</h2>
						<p>
							Educational facilities, offices and residential buildings in
							Academy City rely on air conditioning systems a lot. They use them
							every day, so to keep them working regular servicing is necessary.
							This helps prevent breakdowns and makes sure they work
							efficiently.
						</p>

						<div className="row align-items-center">
							<div className="col-md-6">
								<img
									className="blue-border"
									src={getImageSrc(
										"What-is-covered-in-an-AC-Maintenance-Contract",
									)}
									alt="Air Conditioning Service in Academy City"
								/>
							</div>
							<div className="col-md-6">
								<ul className="mb-0">
									<li>
										<strong>Extreme Heat: </strong>Dubai gets very hot in
										summer, where temperatures can go above 40°C. During this
										time air conditioning systems are used a lot. Regular
										maintenance helps them work better when they are used
										heavily.
									</li>
									<li>
										<strong>Better Energy Efficiency: </strong> When air
										conditioning systems are clean and well-maintained they use
										less electricity which also helps with bills. This helps
										reduce utility costs every month.
									</li>
									<li>
										<strong>Longer Equipment Life: </strong> Routine maintenance
										reduces wear on important components and helps delay
										expensive replacements.
									</li>
									<li>
										<strong>Cleaner Indoor Air: </strong>Removing dust, dirt and
										contaminants from the system improves indoor air quality for
										students, employees and families.
									</li>
									<li>
										<strong>Improved Comfort: </strong>A properly maintained
										system delivers stable temperatures and better airflow
										throughout the property.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Common AC Problems We Solve */}
				<section className="section cs_py_30 bg-light-gray">
					<div className="container">
						<h2 className="text-center">Common AC Problems We Solve</h2>
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
											Airflow gets weak when filters get blocked or there's some
											restriction. This makes rooms uncomfortable.
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
											Sometimes, air comes out warm; it happens when refrigerant
											levels are low there's a compressor fault or the
											thermostat has a problem.
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
											If you hear grinding, rattling or buzzing sounds, it
											usually means there's an issue inside.
										</p>
									</div>
								</div>
							</div>

							<div className="col-12 col-md-4 col-lg-3">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											Bad Smells
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											Unpleasant smells often come from mold, bacteria or dirt
											that's trapped inside the AC system.
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
											If your AC keeps turning on and off it might be a reason
											for a thermostat or electrical issue.
										</p>
									</div>
								</div>
							</div>

							<div className="col-12 col-md-4 col-lg-3">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											High Humidity
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											If the AC isn't removing moisture well in indoor spaces
											then it can feel uncomfortable even when it's running.
										</p>
									</div>
								</div>
							</div>

							<div className="col-12 col-md-4 col-lg-3">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											Water Leakage
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											Water leaks often happen because drainage lines get
											blocked or coils freeze.
										</p>
									</div>
								</div>
							</div>

							<div className="col-12 col-md-4 col-lg-3">
								<div className="box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											High Electricity Bills
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											If your AC is not working properly it uses more power than
											it should which increases your electricity bills.
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

				{/* Here are the  */}
				<section className="section cs_py_30 bg-light-white">
					<div className="container">
						<h2 className="cs_fs_30 text-uppercase">
							Emergency AC Repair Service in Academy City
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
									Air conditioner failures can happen without warning,
									especially during peak summer temperatures. Quick repairs help
									restore comfort and prevent further damage to the system.
								</p>
								<p className="mb-0">
									<strong>Emergency assistance is available for:</strong>
								</p>
								<ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-1">
									<li>Air conditioner not cooling</li>
									<li>Water leakage</li>
									<li>Compressor failure</li>
									<li>Electrical faults</li>
									<li>Thermostat issues</li>
									<li>Weak airflow</li>
									<li>Strange noises</li>
									<li>Complete system shutdown</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* The Benefits Of Regular AC Service*/}
				<AcBenefits city="Academy City" />

				{/* Why choose us AC */}
				<section className="section cs_py_30 bg-light-gray">
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
											Choose a day and time for your AC repair near me, Academy
											City Dubai or Sharjah. With a 3-4 hour window for when our
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
											We are experts in AC service in Academy City. This is why
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

				{/* We Handle All Types of AC Systems */}

				<section className="section cs_py_30 bg-light-gray mt-3">
					<div className="container">
						<h2 className="cs_fs_24 text-align-left">
							We Handle All Types of AC Systems
						</h2>
						<p>
							Rooms need different kinds of air conditioners. Here is a simple
							look at the kinds of air conditioners we handle for fixing,
							maintenance and installation.
						</p>
						<p className="mb-0">
							<strong>Window AC:</strong> Window air conditioner units are
							commonly used in rooms, staff accommodation and shops. They are
							reliable systems that provide cooling for compact spaces.
							<br />
							<strong>Split AC:</strong> Split air conditioner systems are
							widely used in apartments, classrooms and offices because they
							provide quiet operation and efficient cooling.
							<br />
							<strong>Central AC:</strong> Central air conditioner systems are
							suitable for large buildings where consistent cooling is needed
							across multiple rooms and areas.
							<br />
							<strong>Chiller AC:</strong> Chiller systems are often installed
							in commercial buildings and educational facilities where large
							cooling loads are required.
							<br />
							<strong>Fan Coil Unit (FCU):</strong> FCU systems help distribute
							conditioned air throughout different sections of a building while
							maintaining temperature control.
							<br />
							<strong>Package Unit AC:</strong> Package units are commonly used
							in commercial and industrial environments where larger cooling
							capacities are needed.
							<br />
							<strong>Portable AC:</strong> Portable air conditioner units offer
							temporary cooling solutions and can be moved easily between
							different locations.
							<br />
							<strong>Ducted Split AC:</strong> Ducted systems provide hidden
							cooling through air ducts and are ideal for villas, offices and
							larger properties.
							<br />
							<strong>Ceiling AC:</strong> Ceiling-mounted systems provide wide
							air distribution while maintaining a clean interior appearance.
							<br />
							<strong>Inverter AC:</strong> Inverter technology helps reduce
							electricity usage while maintaining stable room temperatures and
							better energy efficiency.
						</p>
					</div>
				</section>

				{/* We specialise in air conditioning services for the following brands */}
				<section className="section cs_py_30">
					<div className="container">
						<h2 className="cs_fs_24 text-align-left">
							We specialise in air conditioning services for the following
							brands
						</h2>
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
					bgImg="testimonialbg"
					testimonialData={testimonial_data}
					sectionId="home-testimonials"
				/>

				<section className="section cs_py_30 bg-dark-blue text-light">
					<Serviceappointemnt
						subtitle2="Contact us"
						title2="Book An Appointment"
					></Serviceappointemnt>
				</section>
				{/* FAQ&apos;s */}
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
											<i className="bi bi-eye text-light">
												<EyeIcon />
											</i>
											<i className="bi bi-eye-slash text-light">
												<EyeSlashIcon />
											</i>
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

export default AcRepairInAcademyCityDetail;
