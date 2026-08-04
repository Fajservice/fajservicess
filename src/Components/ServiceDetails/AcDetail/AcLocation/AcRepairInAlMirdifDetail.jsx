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
const AcRepairInAlMirdifDetail = ({
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
	const metatitle = titleSeo?.trim()
		? titleSeo
		: "Fast AC Repair and Servicing In Al Mirdif | Inverter AC Fix Dubai";
	const metadescription = String(
		description ||
			"FAJ offers inverter AC repair services in Al Mirdif. Our AC technicians are experts in Chiller FCU, HVAC maintenance and repairs in your area, Dubai",
	);
	const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
	const metaURL = String(
		URL ||
			"https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-mirdif/",
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
						`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcLocation/AcRepairInAlMirdif.json`,
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
							Professional AC Repair and Maintenance Services in Al Mirdif | Reliable AC Service Near Me
						</h1>
						<p>
							Al Mirdif is a residential neighborhood in Dubai that is a popular choice for families looking for a quiet neighborhood. Families often prefer living here due to its tranquility and the distance from the hustle and bustle of the city. Al Mirdif residents rely on their air conditioners all year long. AC units are extremely important in this region during hot and lengthy summer months. When a system fails, it becomes very difficult to stay indoors and carry on with daily life.
						</p>
						<p>
							<Link to="https://www.fajservices.ae">FAJ Technical Services L.L.C</Link> has been repairing and maintaining air conditioners in Dubai since 2010. Our team provides <Link to="https://www.fajservices.ae/services/air-conditioning-repair/ac-service/">AC repair</Link>, air conditioning repair, AC service, AC maintenance, AC cleaning, and new AC installation services for homes and businesses in Al Mirdif. We have worked on many AC units in this area and we know the common problems that come up here.
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
									Who provides the best AC repair services in Al Mirdif?
								</h2>
								<p className="mb-2">
									Nobody wants to endure a broken AC during Dubai's scorching summer. If you are searching for AC repair near me, AC service near me, or air conditioner repair in Al Mirdif, our experienced technicians are ready to help. The villas, townhouses, apartments, schools and small shops in Al Mirdif are being serviced by FAJ Technical Services L.L.C for AC Repair and Maintenance. Our technicians have the experience to swiftly identify the real issue. They check the entire system, look for gas leaks, test the wiring, and ensure that everything is in order. We update customers throughout to ensure there are no surprises. 
								</p>
								<h2 className="cs_fs_24 text-align-left">
									Which signs show the AC needs service?
								</h2>
								<p className="mb-2">
									If you notice any of these signs, you must contact an expert technician who can repair your AC professionally. We are here to assist your AC cooling system in achieving optimal efficiency.
								</p>
								<div className="row">
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Higher electricity bills</li>
											<li>Air is not blowing cold</li>
											<li>Drips from your air conditioner</li>
										</ul>
									</div>
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Loss of AC performance</li>
											<li>Poor AC airflow, making noises</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="col-md-6 ">
								<img
									className="bordered-img ac-bordered-img w-100"
									src={getImageSrc("AC-Repair-and-Maintenace-Service-Outdoor")}
									alt="Best AC Repair Service in Al Mirdif"
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
									alt="AC Repair in Al Mirdif"
								/>
							</div>
							<div className="col-md-6">
								<h2 className="cs_fs_24 mb-1 text-align-left">
									Why Is My AC Not Cooling?
								</h2>
								<p className="mb-2">
									Many people face this issue. The AC is running but the room does not get cool. There are several reasons why this happens.
								</p>
								<b>Here are the common causes:</b>
								<div className="row">
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Air filters are blocked with dust</li>
											<li>Refrigerant gas has dropped below the required level</li>
											<li>Outdoor coils are dirty and cannot release heat</li>
											<li>Thermostat is not reading the temperature right</li>
										</ul>
									</div>
									<div className="col-sm-6">
										<ul className="mb-0">
											<li>Compressor has started to wear out</li>
											<li>There is a problem with the electrical wiring</li>
											<li>Airflow is restricted somewhere in the system</li>
										</ul>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12">
										<p className="mb-0">
											A full inspection is the only way to know for sure. Our technicians check each part and fix the actual cause, not just the symptom.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Professional Air Conditioning Services in Al Mirdif */}
				<section className="section cs_py_30 bg-light-white">
					<div className="container">
						<h2 className="cs_fs_30 text-center">
							Professional Air Conditioning Services in Al Mirdif
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
											We handle all kinds of AC problems including cooling failures, water leaks, thermostat faults, and compressor breakdowns. Our team checks the entire system and restores proper cooling.
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
											We provide professional AC cleaning, including AC filter cleaning, coil cleaning, and drain line cleaning to remove dirt, dust, and mould. This helps the air flow better and makes the indoor air fresher and cleaner.
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
											Regular AC maintenance keeps your cooling system in good condition and helps prevent unexpected breakdowns. We check all the parts, find any developing issues, and make sure your system runs without any trouble.
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
											We provide professional AC installation services for homes, villas, apartments, offices, and commercial spaces. Our team follows all the right steps to make sure the unit works safely and efficiently.
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
											With an <Link to="/services/air-conditioning-repair/ac-annual-maintenance-contract/">Annual Maintenance Contract (AMC)</Link>, we visit your property regularly to service your AC and keep it in top condition. You also get priority support whenever you call us.
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
							Why is AC Maintenance Service Important in Al Mirdif?
						</h2>
						<p>
							The AC units in this area work for many hours every day because of Dubai's harsh summer. They can work more effectively and last longer with regular maintenance.
						</p>

						<div className="row align-items-center">
							<div className="col-md-6">
								<img
									className="blue-border"
									src={getImageSrc(
										"What-is-covered-in-an-AC-Maintenance-Contract",
									)}
									alt="Air Conditioning Service in Al Mirdif"
								/>
							</div>
							<div className="col-md-6">
								<ul className="mb-0">
									<li>
										{" "}
										<strong> Extreme Weather: </strong> Dubai has very high temperatures during summer. Your AC won't be able to cope with the heat if it is not serviced on time. It will try even harder and could fail during the time of need.
									</li>
									<li>
										{" "}
										<strong> Energy Savings: </strong> A clean AC uses less electricity. There is no dust on the filters and coils, and the system operates without any problems. This will enable you to control your electric bills.
									</li>
									<li>
										{" "}
										<strong> Longer Life: </strong> Regular servicing keeps the key components of the air conditioner from becoming damaged early. The system lasts longer and doesn't need to be replaced in the near future.
									</li>
									<li>
										{" "}
										<strong> Improved Air Quality: </strong> Dust and dirt are captured within the AC over time. Cleaning them out will make your home's air cleaner. This is good for your health.
									</li>
									<li>
										{" "}
										<strong> Balanced Cooling: </strong> When the AC is well-maintained, it circulates cool air throughout the room. There will be no colder parts and warmer parts of the room.
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
											The filters are likely clogged if the air doesn't move out quickly. The fan can be faulty at times. It is typically resolved with a quick clean.
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
											If the AC blows warm air, then it is an indication of either low gas or a damaged compressor. It also may be the thermostat. It requires attention by a technician. 
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
											Hearing grinding or rattling? Something is loose or broken on the inside. Do not wait for it to get worse.
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
											Bad smells come from mould or dampness inside the system. A deep clean will remove it.
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
											If your AC keeps switching on and off, the thermostat or wiring may be at fault.
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
											A room that feels sticky means the AC is not pulling moisture out. It needs professional care.
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
											Water coming from the indoor unit is often due to a blocked drain or frozen parts.
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
											An inefficient AC uses more power. If your bills are climbing, your system is not running as it should.
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
							Emergency AC Repair Service in Al Mirdif
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
									AC problems can come up at any time. When the weather is hot and your system fails, you cannot afford to wait. We offer emergency AC repair and same-day AC service to get your cooling system running again as quickly as possible. 
								</p>
								<p className="mb-0">
									<strong>
										Our emergency service includes:
									</strong>
								</p>
								<ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-1">
									<li>AC not cooling</li>
									<li>AC not turning on</li>
									<li>Water leakage</li>
									<li>Electrical faults</li>
									<li>Compressor problems</li>
									<li>Thermostat issues</li>
									<li>Weak airflow</li>
									<li>Unusual noises</li>
								</ul>
								<p className="mb-0">
									We serve homes, schools, small businesses and industries across Al Mirdif with quick response times.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* The Benefits Of Regular AC Service*/}
				<AcBenefits city="Al Mirdif" />

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
											Choose a day and time for your AC repair near me, Al
											Mirdif or Sharjah. With a 3-4 hour window for when our
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
											We are experts in AC service in Al Mirdif. This is why
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
							FAJ Technical Services L.L.C repairs and maintains different AC systems used in Al Mirdif. Our technicians know how to handle every type.
						</p>
						<p className="mb-0">
							<strong>Central AC:</strong> These systems are designed for large villas and buildings that need cooling in every room. They use ducts to send cool air across the property.
							<br />
							<strong>Split AC:</strong> This is the most common type in apartments and homes. They are quiet, efficient, and easy to maintain.
							<br />
							<strong>Chiller AC:</strong> These are used in larger buildings and commercial spaces. They provide heavy cooling for long periods.
							<br />
							<strong>Fan Coil Unit (FCU):</strong> FCUs send cool air to different zones of a building. They are often found in offices and apartment blocks.
							<br />
							<strong>Package Unit AC:</strong> These are used in commercial spaces that need high cooling capacity. All parts are packed into a single unit.
							<br />
							<strong>Portable AC:</strong> These are easy to move around and are used when you need temporary cooling.
							<br />
							<strong>Ducted Split AC:</strong> This is a hidden system that works through ducts in the ceiling. It is good for larger homes and offices.
							<br />
							<strong>Ceiling AC:</strong> Installed above the ceiling, these units save space and provide wide air coverage.
							<br />
							<strong>Inverter AC:</strong> These systems adjust their speed to save energy. They keep temperatures steady and are popular in Dubai.
							<br />
							<strong>Cassette AC:</strong> These fit into the ceiling and send air from all sides. They work well in shops and offices.
							<br />
							<strong>Floor Standing AC:</strong> These stand on the floor and are used in places where wall mounting is not possible.
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
              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/lg/">LG Air Conditioner Service</a>:</strong> FAJ offers reliable LG AC repair and services near me in Al Mirdif. With professionals who are experts in split, vrf, and central air conditioning units. Get reliable and fast AC service near you, including AC repair and maintenance in Al Mirdif.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/samsung/">Samsung Air Conditioner Repair and Service</a>:</strong> Based in Dubai, FAJ is your go-to destination for Samsung AC repair in Dubai Al Mirdif. Specialising in Samsung air conditioning repair service near me, we offer comprehensive air conditioning service ranging from AC fixing to AC cleaning service and AC maintenance in Al Mirdif.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/york/">York AC Service and Repair</a>:</strong> The York AC repair and service in Al Mirdif, ensures you don’t need to worry because you are in the right place. Yes, FAJ is where efficiency and reliability are prioritised, providing air conditioning service near me, Al Mirdif, AC cleaning service, and AC fixing.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/daikin/">Daikin Air Conditioner Maintenance</a>:</strong> Count on our experienced team to promptly and effectively address any challenges you may encounter with your Daikin air conditioning unit. We specialise in AC cleaning service and AC repairing in Al Mirdif, to ensure it operates at optimal functionality, providing you with a cool and comfortable environment when you need it most.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/trane/">Trane HVAC Repair</a>:</strong> With in-depth expertise in the repair of Trane air conditioning systems, we offer comprehensive Al Mirdif AC repair near me and AC cleaning services designed to ensure your unit operates at peak efficiency. Our specialized Trane AC maintenance and repair service in Al Mirdif, is conveniently available in your area, providing timely and effective solutions to keep your air conditioning system running smoothly and reliably. Whether you need routine home air conditioner repair near me or office AC service and maintenance in Al Mirdif or urgent repair, we are here to help you maintain a comfortable environment in your home or business.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/panasonic/">Panasonic AC Service and Repair</a>:</strong> No matter the issue with your Panasonic air conditioner, our skilled AC technicians in Al Mirdif and Sharjah can quickly diagnose and fix it. We offer reliable air conditioning services near me in Al Mirdif, and AC repair right in your Al Mirdif area, ensuring your system runs smoothly again. </li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/gree/">Gree AC Service and Maintenance</a>:</strong> Is your air conditioning unit not functioning properly, or are you seeing a Gree AC error displayed on the screen? You don’t have to struggle with uncomfortable temperatures or stale air any longer. At FAJ, we specialise in quickly restoring your Gree air conditioning to optimal performance. Our reliable air conditioning repair and maintenance services ensure that your system operates efficiently and effectively, preventing any further damage and discomfort. Whether you need emergency air conditioning repair near me in Al Mirdif, air conditioning service near me and routine AC maintenance services, or comprehensive air conditioning cleaning services in Dubai, we’ve got you covered. Enjoy a refreshing and cool environment once again with our professional solutions!</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/o-general/">O General AC Service and Repair</a>:</strong> For air conditioning cleaning services in Dubai, specialized help is crucial for effectively managing aircon issues. Our company provides hassle-free villa AC repair / office AC cleaning service or home AC maintenance services in Al Mirdif, conveniently available in both Dubai and Sharjah. Trust us to keep your home comfortable all year round.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/mitsubishi/">Mitsubishi Air Conditioner Service and Repair</a>:</strong> Seeking relief from scorching heat? Discover the secret to keeping your Mitsubishi AC running smoothly in Dubai! Our expert Mitsubishi Air Conditioning cleaning service and AC repairing ensure your AC stays cool and efficient, providing comfort and peace of mind. Expert Air conditioning cleaning service near me in Al Mirdif and Sharjah, aircon fixing and AC maintenance service in Al Mirdif. </li>

              <li><strong>Carrier AC Repair and Service in Dubai</strong>: We understand how essential Carrier air conditioning is for your home or business. FAJ provides fast and reliable Carrier air conditioner maintenance services in Al Mirdif, that are both efficient and dependable. Typically, regular cleaning service of your Carrier VRF (Variable Refrigerant Flow), central, split, package unit, or cassette type units in Al Mirdif and Sharjah is sufficient to keep your system running smoothly. However, if your Carrier air conditioning system experiences a breakdown, fault, or malfunction, it can negatively affect your indoor environment.</li>
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
										alt="Air Con Maintenance & AC Installation in Al Mirdif"
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

export default AcRepairInAlMirdifDetail;
