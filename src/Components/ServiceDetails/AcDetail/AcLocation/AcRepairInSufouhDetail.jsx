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
const AcRepairInSufouhDetail = ({
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
		titleSeo ||
			"AC Service & AC Repair Near Me in Al Sufouh | Expert Technicians",
	);
	const metadescription = String(
		description ||
			"Best AC cleaning service in Al Sufouh, Dubai. We are experts in central & split air conditioning repairs & maintenance. Also AC compressor & motor fix",
	);
	const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
	const metaKeyword = String(
		Keyword ||
			"AC Services in Al Sufouh, AC Repair in Al Sufouh, Air Conditioner Maintenance Dubai, Aircon Service Dubai, Split AC Repair Dubai, Central AC Service Dubai, AC Installation Dubai, AC Cleaning Dubai, Air Conditioning Services Dubai",
	);
	const metaURL = String(
		URL ||
			"https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-sufouh/",
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
						`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcLocation/AcRepairInSufouh.json`,
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
							Same Day AC Repair and Maintenance in Al Sufouh | AC Service Near Me
						</h1>
						<p>
							Al Sufouh is an area in Dubai that has apartments, villas, hotels, offices, universities, shops and commercial buildings. When air conditioners are running for hours, even a small cooling problem can make things uncomfortable. If there is no airflow, there are water leaks or the AC stops cooling it should be checked before the issue becomes worse. Keeping cooling units well maintained helps them work properly and last a long time.
						</p>
						<p>
							<Link to="/">FAJ Technical Services L.L.C</Link> has been providing <Link to="/services/air-conditioning-repair/ac-service/">AC Repair service</Link>, AC Maintenance Dubai, AC cleaning and Air Conditioning Services since 2010. Our AC technicians handle cooling problems, leaks, electrical faults, unusual sounds and other issues for residential and commercial properties in Al Sufouh.
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
						<div className="row gx-md-5 expert_section_wrapper">
							<div className="col-md-6">
								<h2 className="cs_fs_24 mb-1 text-align-left">
									Who provides the best AC repair services in Al Sufouh?
								</h2>
								<p className="mb-2">
									Finding a reliable AC repair company matters when your cooling system stops working properly. FAJ Technical Services L.L.C offers Air Conditioner Repair, AC Service Near Me, AC Repair Near Me, AC Installation and routine maintenance in Al Sufouh.
								</p>
								<p>
									Our technicians inspect the cooling unit before starting major work. This helps identify the actual fault instead of replacing parts without checking the system. We work on AC systems used in homes, offices, shops, hotels, restaurants and other properties around Al Sufouh.
								</p>
								<h2 className="cs_fs_24 text-align-left">
									Which signs show the AC needs service?
								</h2>
								<p className="mb-2">
									Most ACs show some common small signs before major failure. If you focus on these small issues and fix them on time, it can save you from costly repairs.
								</p>
								<div className="row">
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Higher electricity consumption</li>
											<li>AC takes longer to cool</li>
											<li>Weak airflow from vents</li>
										</ul>
									</div>
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Water around the indoor unit</li>
											<li>Unusual buzzing or rattling</li>
                      <li>Bad smell when the AC starts</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="col-md-6 ">
								<img
									className="bordered-img ac-bordered-img w-100"
									src={getImageSrc("AC-Repair-and-Maintenace-Service-Outdoor")}
									alt="Best AC Repair Service in Al Sufouh"
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
									alt="AC Repair in Al Sufouh"
								/>
							</div>
							<div className="col-md-6">
								<h2 className="cs_fs_24 mb-1 text-align-left">
									Why Is My AC Not Cooling?
								</h2>
								<p className="mb-2">
									An AC may keep running without giving enough cold air. This can happen when airflow is restricted or an important cooling component is not working properly.
								</p>
								<b>Common causes include:</b>
								<div className="row">
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Dirty air filters</li>
											<li>Low refrigerant or a refrigerant leak</li>
											<li>Blocked condenser coil</li>
											<li>Dirty evaporator coil</li>
										</ul>
									</div>
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Thermostat problems</li>
											<li>Compressor faults</li>
											<li>Electrical issues</li>
                      <li>Restricted airflow</li>
										</ul>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12">
										<p className="mb-0">
											Proper AC troubleshooting helps determine why the system is not cooling instead of guessing at the fault. If the refrigerant is low, an AC Gas Refill may be required after checking for the reason behind the loss.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Professional Air Conditioning Services in Al Sufouh */}
				<section className="section cs_py_30 bg-light-white">
					<div className="container">
						<h2 className="cs_fs_30 text-center">
							Professional Air Conditioning Services
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
											We repair AC not cooling issues, compressor faults, thermostat problems, refrigerant leaks, electrical faults and AC water leakage to restore normal cooling.
										</p>
									</div>
								</div>
							</div>

							<div className="col-12 col-md-4 col-lg-4">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											AC Cleaning Services
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											Our AC cleaning services include removing dust and buildup from filters, coils and drain lines. This supports better airflow, cleaner indoor air and improved cooling efficiency.
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
											Routine AC maintenance checks important components before they cause trouble. Preventive servicing can improve performance, energy efficiency and system reliability.
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
											We install all types of AC units for both residential and commercial properties. Our technicians install AC systems with attention to correct size and placement according to manufacturer instructions.
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
											In our <Link to="/services/air-conditioning-repair/ac-annual-maintenance-contract/">Annual Maintenance Contract</Link>, we provide scheduled inspections and we check your AC unit regularly, which helps to reduce sudden breakdowns and costly repairs.
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
							Why is AC Maintenance Service Important in Al Sufouh?
						</h2>
						<p>
							Air conditioners in Al Sufouh can work for many hours because of Dubai's warm climate. Regular AC maintenance helps the cooling system handle this workload and reduces the chance of sudden failure.
						</p>

						<div className="row align-items-center">
							<div className="col-md-6">
								<img
									className="blue-border"
									src={getImageSrc(
										"What-is-covered-in-an-AC-Maintenance-Contract",
									)}
									alt="Air Conditioning Service in Al Sufouh"
								/>
							</div>
							<div className="col-md-6">
								<ul className="mb-0">
									<li>
										<strong> Extreme Weather: </strong> During the summer in Dubai, the heat is really high. It puts a lot of pressure on compressors, coils and other parts of the air conditioning system. Checking these parts regularly helps the system deal with all the use it gets.
									</li>
									<li>
										<strong> Energy Efficiency: </strong> When filters and coils get dirty, the air conditioning has to work harder. Cleaning and taking care of these parts can make the system work better. Can help keep electricity use under control.
									</li>
									<li>
										<strong> Longevity of Equipment: </strong> Regular service makes sure the important parts of the system don't get much stress. This can help the cooling unit last longer and keep working well.
									</li>
									<li>
										<strong> Improved Air Quality: </strong> Cleaning the filters and coils and the places where water drains out helps get rid of dust and moisture that can make the air inside not so clean.
									</li>
									<li>
										<strong> Enhanced Comfort: </strong> When the air conditioning is taken care of properly, it gives steady temperatures and better airflow and makes sure the inside of the building stays cool and comfortable.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Common AC Problems That May Require Maintenance */}
				<section className="section cs_py_30 bg-light-white">
					<div className="container">
						<h2 className="cs_fs_30 text-center">Most Common AC Problems </h2>
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
											Blocked filters, dirty coils or fan problems can reduce airflow. Cleaning and inspection can help restore stronger air movement.
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
											Warm air may point to low refrigerant, a faulty thermostat, compressor trouble or restricted airflow inside the system.
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
											Buzzing, grinding or rattling can come from loose parts, fan problems or worn components that need inspection.
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
											Musty smells often develop when dust, moisture, mould or bacteria collect inside filters, coils or drain areas.
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
											An AC that starts and stops too often may have thermostat, electrical, airflow or cooling system problems.
										</p>
									</div>
								</div>
							</div>

							<div className="col-12 col-md-4 col-lg-3">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											High Humidity Levels
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											If the AC cannot remove enough moisture, rooms may feel damp even when the cooling system is running.
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-4 col-lg-3">
								<div className=" box-content-container rounded border shadow">
									<div className="text-center">
										<h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
											Leaking Water
										</h3>
									</div>
									<div className="inner-apcs-feat-desc">
										<p className="p-2 mb-0">
											Water around the AC can result from a blocked drain line, frozen evaporator coil or dirty filter.
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
											Dirty components, poor airflow and other AC efficiency problems can increase energy bills. 
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
				<section className="section cs_py_30 bg-light-gray">
					<div className="container">
						<h2 className="cs_fs_30 text-uppercase">
							Emergency AC Repair Service in Al Sufouh
						</h2>
						<div className="row align-items-center">
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
								<p>
									A sudden AC breakdown can be difficult to deal with during Dubai's hottest days. Fast attention can restore cooling and prevent a small fault from affecting other components.
								</p>
								<p className="mb-0">
									<strong>
										Our Emergency AC Repair service can help with:
									</strong>
								</p>
								<ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-1">
									<li>AC not cooling</li>
									<li>AC not turning on</li>
									<li>Water leakage</li>
									<li>Electrical faults</li>
									<li>Thermostat problems</li>
									<li>Compressor failures</li>
									<li>Weak airflow</li>
									<li>Strange noises</li>
								</ul>
								<p className="mb-0">
									Our AC technicians provide support for residential and commercial properties across Dubai, subject to technician availability and the nature of the problem.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* The Benefits Of Regular AC Service*/}
				<AcBenefits city="Al Sufouh" />

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
											Choose a day and time for your AC repair near me, Bur
											Dubai or Sharjah. With a 3-4 hour window for when our
											technician will arrive
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
											We are experts in AC service in Al Sufouh. This is why
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
						<h2 className="cs_fs_24 text-align-left">
							We Specialise in All Types of AC Systems
						</h2>
						<p>
							At FAJ Technical Services L.L.C we repair and maintain all major
							air conditioning systems across Al Sufouh. Our technicians handle
							every unit with care to make sure you get smooth cooling and
							reliable performance.
						</p>
						<p className="mb-0">
							<strong>Central AC:</strong> Central AC systems provide cooling to several rooms through one system. They are suitable for larger villas, offices, schools and commercial properties.
							<br />
							<strong>Chiller AC:</strong> Chiller systems are built for larger cooling requirements and are commonly found in hotels, commercial buildings and other high-demand facilities.
							<br />
							<strong>Fan Coil Unit (FCU):</strong> FCU systems distribute conditioned air through individual areas and help maintain comfortable temperatures across different parts of a building.
							<br />
							<strong>Package Unit AC:</strong> Package units combine major cooling components in one system and are often used where strong cooling is required for commercial spaces.
							<br />
							<strong>Portable AC:</strong> Portable AC units are useful when flexible cooling is needed. They can be moved between rooms without permanent installation.
							<br />
							<strong>Ducted Split AC:</strong> Ducted split systems use concealed ductwork to distribute cool air across several rooms while keeping the interior neat.
							<br />
							<strong>Ceiling AC:</strong> Ceiling-mounted units provide wide air distribution and work well in offices, shops, restaurants and other spaces with limited wall area.
							<br />
							<strong>Inverter AC:</strong> Inverter systems adjust compressor speed according to cooling demand, helping maintain a steady temperature while reducing unnecessary energy use.
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

						{/* <ul className="mb-3">
              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/lg/">LG Air Conditioner Service</a>:</strong> FAJ offers reliable LG AC repair and services near me in Al Sufouh. With professionals who are experts in split, vrf, and central air conditioning units. Get reliable and fast AC service near you, including AC repair and maintenance in Al Sufouh.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/samsung/">Samsung Air Conditioner Repair and Service</a>:</strong> Based in Dubai, FAJ is your go-to destination for Samsung AC repair in Dubai Al Sufouh. Specialising in Samsung air conditioning repair service near me, we offer comprehensive air conditioning service ranging from AC fixing to AC cleaning service and AC maintenance in Al Sufouh.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/york/">York AC Service and Repair</a>:</strong> The York AC repair and service in Al Sufouh, ensures you don’t need to worry because you are in the right place. Yes, FAJ is where efficiency and reliability are prioritised, providing air conditioning service near me, Al Sufouh, AC cleaning service, and AC fixing.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/daikin/">Daikin Air Conditioner Maintenance</a>:</strong> Count on our experienced team to promptly and effectively address any challenges you may encounter with your Daikin air conditioning unit. We specialise in AC cleaning service and AC repairing in Al Sufouh, to ensure it operates at optimal functionality, providing you with a cool and comfortable environment when you need it most.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/trane/">Trane HVAC Repair</a>:</strong> With in-depth expertise in the repair of Trane air conditioning systems, we offer comprehensive Al Sufouh AC repair near me and AC cleaning services designed to ensure your unit operates at peak efficiency. Our specialized Trane AC maintenance and repair service in Al Sufouh, is conveniently available in your area, providing timely and effective solutions to keep your air conditioning system running smoothly and reliably. Whether you need routine home air conditioner repair near me or office AC service and maintenance in Al Sufouh or urgent repair, we are here to help you maintain a comfortable environment in your home or business.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/panasonic/">Panasonic AC Service and Repair</a>:</strong> No matter the issue with your Panasonic air conditioner, our skilled AC technicians in Al Sufouh and Sharjah can quickly diagnose and fix it. We offer reliable air conditioning services near me in Al Sufouh, and AC repair right in your Al Sufouh area, ensuring your system runs smoothly again. </li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/gree/">Gree AC Service and Maintenance</a>:</strong> Is your air conditioning unit not functioning properly, or are you seeing a Gree AC error displayed on the screen? You don’t have to struggle with uncomfortable temperatures or stale air any longer. At FAJ, we specialise in quickly restoring your Gree air conditioning to optimal performance. Our reliable air conditioning repair and maintenance services ensure that your system operates efficiently and effectively, preventing any further damage and discomfort. Whether you need emergency air conditioning repair near me in Al Sufouh, air conditioning service near me and routine AC maintenance services, or comprehensive air conditioning cleaning services in Dubai, we’ve got you covered. Enjoy a refreshing and cool environment once again with our professional solutions!</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/o-general/">O General AC Service and Repair</a>:</strong> For air conditioning cleaning services in Dubai, specialized help is crucial for effectively managing aircon issues. Our company provides hassle-free villa AC repair / office AC cleaning service or home AC maintenance services in Al Sufouh, conveniently available in both Dubai and Sharjah. Trust us to keep your home comfortable all year round.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/mitsubishi/">Mitsubishi Air Conditioner Service and Repair</a>:</strong> Seeking relief from scorching heat? Discover the secret to keeping your Mitsubishi AC running smoothly in Dubai! Our expert Mitsubishi Air Conditioning cleaning service and AC repairing ensure your AC stays cool and efficient, providing comfort and peace of mind. Expert Air conditioning cleaning service near me in Al Sufouh and Sharjah, aircon fixing and AC maintenance service in Al Sufouh. </li>

              <li><strong>Carrier AC Repair and Service in Dubai</strong>: We understand how essential Carrier air conditioning is for your home or business. FAJ provides fast and reliable Carrier air conditioner maintenance services in Al Sufouh, that are both efficient and dependable. Typically, regular cleaning service of your Carrier VRF (Variable Refrigerant Flow), central, split, package unit, or cassette type units in Al Sufouh and Sharjah is sufficient to keep your system running smoothly. However, if your Carrier air conditioning system experiences a breakdown, fault, or malfunction, it can negatively affect your indoor environment.</li>
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
										alt="Air Con Maintenance & AC Installation in Al Sufouh"
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
					bgImg={reviewsbg}
					testimonialData={testimonial_data}
					sectionId="home-testimonials"
				/>
				{/* Faqs */}
				<section className="section cs_py_30 bg-dark-blue text-light">
					<Serviceappointemnt
						subtitle2="Contact us"
						title2="Book An Appointment"
					></Serviceappointemnt>
				</section>
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

export default AcRepairInSufouhDetail;
