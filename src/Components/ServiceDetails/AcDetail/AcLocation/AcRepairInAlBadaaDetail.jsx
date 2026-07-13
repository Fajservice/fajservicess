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
import LocationKeyword from "./LocationKeyword";
import Testimonial1 from "../../../Testimonial/Testimonial1";
import PriceCard from "./PriceCard";
import BeforeAfter from "../../../BeforeAfter/BeforeAfter";
import AcBenefits from "../AcBenefit";
import Gallery from "../../../Svg/Gallery";
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
const AcRepairInAlBadaaDetail = ({
	subtitle,
	title,
	reviewsbg,
	titleSeo,
	description,
	Author,
	Keyword,
	URL,
	Image,
}) => {
	// For SEO
	const metatitle = titleSeo?.trim()
		? titleSeo
		: "Best AC Repair Company in Al Badaa | AC Servicing Near Me";
	const metadescription = String(
		description ||
			"Fast AC repair and services in Al Badaa, Dubai, call 043300002. FAJ offers help with split and central air conditioning cleaning and error fixing near you",
	);
	const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
	const metaKeyword = String(
		Keyword ||
			"AC Service Al Badaa, AC Repair Al Badaa, Air Conditioning Service Al Badaa, Air Conditioner Repair Al Badaa, Split AC Service Al Badaa, Central AC Service Al Badaa, Aircon Cleaning Al Badaa, Air Conditioner Maintenance Al Badaa",
	);
	const metaURL = String(
		URL ||
			"https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-badaa/",
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
						`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcLocation/AcRepairInAlBadaa.json`,
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
							Affordable AC Repair and Maintenance Services in Al Badaa, Dubai
						</h1>
						<p>
							Al Badaa is a busy place where people live and work. There are
							lots of apartments, villas, offices and shops. The air
							conditioning in Al Badaa is always on every single day. When the
							air conditioning system breaks down it gets really hot inside the
							apartments, villas and offices. This is especially true during the
							summer, in Dubai, when it is hot outside.
						</p>
						<p>
							<Link to="/">FAJ Technical Services L.L.C</Link> has been
							providing professional air conditioning services across Dubai
							since 2010. Our technicians provide{" "}
							<Link to="/services/air-conditioning-repair/ac-service/">
								AC repair
							</Link>
							, AC cleaning, AC maintenance, and AC installation services for
							homes or businesses in Al Badaa and nearby areas.
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
				<section className="section cs_py_30 bg-light-white">
					<div className="container">
						<div className="row gx-md-5">
							<div className="col-md-6">
								<h2 className="cs_fs_24 mb-1 text-align-left">
									Who Provides Reliable AC Repair Services in Al Badaa?
								</h2>
								<p className="mb-2">
									Choosing the right AC company becomes important when cooling
									problems start affecting your home or workplace. FAJ Technical
									Services L.L.C provides air conditioner repair, maintenance
									and cleaning services for apartments, villas, offices,
									restaurants, shops, and commercial buildings throughout Al
									Badaa.
								</p>

								<p>
									Our technicians are experienced in handling everything from
									small repairs to complete system troubleshooting and major
									component replacement.
								</p>
								<h2 className="cs_fs_24 text-align-left">
									How Can You Know Your AC Needs Servicing?
								</h2>
								<p className="mb-2">
									Most AC units show warning signs before they stop working
									completely.
								</p>
								<div className="row">
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Increase the electricity bills</li>
											<li>Poor cooling performance</li>
											<li>Weak airflow from vents</li>
										</ul>
									</div>
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Water dripping from the unit</li>
											<li>Strange noises during operation</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="col-md-6 ">
								<img
									className="bordered-img ac-bordered-img w-100"
									src={getImageSrc("AC-Repair-and-Maintenace-Service-Outdoor")}
									alt="AC Repair in Al Badaa"
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
									What's the Reason My AC is running but not cooling? 
								</h2>
								<p className="mb-2">
									An AC unit can continue running while still failing to cool the room properly. Several parts inside the system work together to produce cool air if a fault occurs in any one of them can reduce performance.
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
											<li>Thermostat problems</li>
										</ul>
									</div>
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Compressor faults</li>
											<li>Electrical issues</li>
											<li>Restricted airflow</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Who provides complete air conditioning services in Al Badaa?  */}
				<section className="section cs_py_30 bg-light-white">
					<div className="container">
						<h2 className="cs_fs_30 text-center">
							Who provides complete air conditioning services in Al Badaa?
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
											Some issues such as Cooling failures, electrical faults, thermostat problems, compressor issues and water leakage, can all affect system performance. Professional repairs help restore cooling quickly and safely.
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
											Cleaning air conditioners includes clearing filters, coils, and drainage systems of dust, grime, mold, and debris. This improves indoor air quality and enhances air flow.
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
											Regular maintenance keeps your system running smoothly throughout the year while safeguarding its vital components. It's your best defense against unexpected issues!
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
											Installation services are available for residential and commercial air conditioning systems. Every unit is installed according to manufacturer recommendations for reliable long-term operation.
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
											AMC's plans include regular inspections, proactive maintenance, and prioritized support all year round. This ensures that your experience remains smooth and hassle-free, giving you peace of mind.
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
							Why Is AC Maintenance Important in Dubai?
						</h2>
						<p>
							Air conditioning systems in Dubai work every time. Regular checks help them work better and reduce breakdowns.
						</p>

						<div className="row align-items-center">
							<div className="col-md-6">
								<img
									className="blue-border"
									src={getImageSrc(
										"What-is-covered-in-an-AC-Maintenance-Contract",
									)}
									alt="Air Conditioning Service in Al Badaa"
								/>
							</div>
							<div className="col-md-6">
								<ul className="mb-0">
									<li>
										<strong> Extreme Summer Temperatures: </strong> Dubai gets very hot in summer with temperatures above 40°C. Regular maintenance helps AC systems keep working well when they are used a lot.
									</li>

									<li>
										<strong> Better Energy Efficiency: </strong> When AC equipment is clean and well-maintained, it uses less electricity. This helps lower your utility bills every month.
									</li>

									<li>
										<strong> Equipment Life: </strong> Regular servicing reduces wear on major parts, which helps delay replacements.
									</li>
									<li>
										<strong> Healthier Indoor Air: </strong> Cleaning the system and removing dust improves the air quality inside. This is good for families, employees and visitors.
									</li>
									<li>
										<strong> Improved Indoor Comfort: </strong> A maintained air conditioner gives stable temperatures and balanced airflow throughout the property.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Common AC Problems That May Require Maintenance */}
				<section className="section cs_py_30 bg-light-gray">
					<div className="container">
						<h2 className="text-center">
							Most Common AC Problems
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
											Rooms may be uncomfortable due to blocked filters or weak airflow that reduces air circulation.
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
											The presence of warm air can lead to issues with the refrigerant, thermostat, or compressor.
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
											External sounds like grinding, rattling or buzzing are usually considered to be the indication of loose or damaged internal parts.
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
											Odors can be a result of dust buildup, bacteria, or mold developing inside the system/
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
											It is possible that irregular shutting and opening can signal thermostat or electrical issues.
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
											Even with the air conditioning running, you may still fail to properly remove indoor moisture when humidity levels are high.
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
											Blocking drainage lines and frozen coils are common causes of AC water leakage.
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
											An inefficient AC unit frequently consumes more electricity and performs harder than necessary.
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

				{/* HERE ARE THE */}
				<section className="section cs_py_30 bg-light-white">
					<div className="container">
						<h2 className="cs_fs_30 text-uppercase">
							Emergency AC Repair Service in Al Badaa
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
									Air conditioning systems can break down without warning especially when it's really hot outside, in the summer. Quick fixes help get things back to normal and stop more problems from happening.
								</p>
								<p className="mb-0">
									<strong>Emergency assistance is available for:</strong>
								</p>
								<ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-1">
									<li>
										AC not cooling
									</li>
									<li>
										Water leakage
									</li>
									<li>
										Compressor failure
									</li>
									<li>
										Electrical faults
									</li>
									<li>
										Thermostat issues
									</li>
									<li>
										Weak airflow
									</li>
									<li>
										Strange noises
									</li>
									<li>
										Complete system shutdown
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* The Benefits Of Regular AC Service*/}
				<AcBenefits city="Al Badaa" />

        {/* Why choose us AC */}
				<section className="section cs_py_30 bg-light-white">
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
											ensure that your needs are met quickly.{" "}
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
											Choose a day and time for your AC repair near me, Al Badaa
											Dubai or Sharjah. With a 3-4 hour window for when our
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
											We are experts in AC service in Al Badaa. This is why most
											major brands trust us to handle their service and
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
            <h2 className="cs_fs_24 text-align-left">We Handle All Types of AC Systems</h2>
            <p>
              We deal with all kinds of Air Conditioning systems in Dubai and the UAE.
            </p>
            <p className="mb-0"><strong>Window AC:</strong> Window Air Conditioning units are usually put in apartments, bedrooms, shops and staff rooms where we need to keep things cool in a small space.<br/><strong>Split AC:</strong> Split Air Conditioning systems are really popular in homes and offices because they cool well and are quiet.<br/><strong>Central AC:</strong> Central Air Conditioning systems are made for buildings where many rooms need to be cool all the time.<br/><strong>Chiller AC:</strong> Chiller Air Conditioning systems are used a lot in buildings, hotels and big places where we need to cool a lot.<br/><strong>Fan Coil Unit:</strong> Fan Coil Unit systems help get air to all parts of a building and keep the temperature right.<br/><strong>Package Unit AC:</strong> Package Unit Air Conditioning systems are often found in industrial places where we need to cool a lot.<br/><strong>Portable AC:</strong> Portable Air Conditioning units give us cool air and can be easily moved from room to room when we need them.<br/><strong>Ducted Split AC:</strong> Ducted Split Air Conditioning systems give us hidden cooling through air ducts. Are good for big houses, offices and large properties.<br/><strong>Ceiling AC:</strong> Ceiling Air Conditioning units give us air distribution, look clean and modern.<br/><strong>Inverter AC:</strong> Inverter Air Conditioning systems change how much power they use based on the room temperature, which helps use less electricity and keeps things cool all the time.</p>
          </div>
        </section>

        {/* We specialise in air conditioning services for the following brands */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_24 text-align-left">We specialise in air conditioning services for the following brands</h2>

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

				<section className="section cs_py_30 bg-dark-blue text-light">
					<div className="container text-center">
						<h3 className="cs_fs_30 text-light">
							Practical Tips to Improve Energy Efficiency
						</h3>
						<p>
							Learn easy and proven ways to save energy with your AC. Find tips
							to cut the cost and stay cool all summers!
						</p>
						<a
							href="https://www.fajservices.ae/files/Practical%20Tips%20to%20Improve%20Energy%20Efficiency%20of%20Your%20AC%20Infographic.pdf"
							className="btn-green-yellow"
							target="_blank"
							rel="noopener noreferrer"
						>
							Click Here to Save on Energy Bills
						</a>
					</div>
				</section>

				<section className="section cs_py_30">
					<div className="container text-center">
						<div className="row">
							<div className="col-lg-4">
								<div className="acsvs-sec-prefoot-sec-cone">
									<h3 className="cs_fs_20 mb-0">COOLING &amp; HEATING</h3>
									<span className="mb-5">Stay comfortable all year round</span>
									<div className="mb-5"></div>
									<h3 className="cs_fs_20 mb-0">BETTER AIR QUALITY</h3>
									<span className="mb-5">Reduce humidity, pollen and dust</span>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="acsvs-sec-prefoot-sec-ctwo">
									<img
										src={getImageSrc("benafit-acimg")}
										alt="Air Con Maintenance & AC Installation in Al Badaa"
									/>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="acsvs-sec-prefoot-sec-cthree">
									<h3 className="cs_fs_20 mb-0">PROTECT YOUR PROPERTY</h3>
									<span className="mb-5">
										Prevent damage to electronics and furnishings
									</span>
									<div className="mb-5"></div>
									<h3 className="cs_fs_20 mb-0">QUIET AND SECURE</h3>
									<span className="mb-5">No need to leave windows open</span>
								</div>
							</div>
						</div>
					</div>
				</section>

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

export default AcRepairInAlBadaaDetail;
