import React, { lazy, Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const HeroBanner1 = lazy(() => import("../Components/HeroBanner/HeroBanner1"));
const About1 = lazy(() => import("../Components/About/About1"));
const Services1 = lazy(() => import("../Components/Services/Services1"));
const Choose1 = lazy(() => import("../Components/Choose/Choose1"));
const BeforeAfter = lazy(() => import("../Components/BeforeAfter/BeforeAfter"));
const Project1 = lazy(() => import("../Components/Project/Project1"));
const Contact1 = lazy(() => import("../Components/Contact/Contact"));
const Testimonial1 = lazy(() => import("../Components/Testimonial/Testimonial1"));
const Blog3 = lazy(() => import("../Components/Blog/Blog3"));
const Process = lazy(() => import("../Components/Process/Process"));
import data from "../Data/testimonial1.json";
const Loader = () => <div style={{ minHeight: "200px" }}>Loading...</div>;

const DEFAULT_SEO = {
  title: "FAJ / Installation, Repair and Maintenance Company in Dubai ",
  description:
    "FAJ Established in 2010, / with experts Air Conditioner, Refrigeration, Kitchen Equipment, Appliances installation, Repair & Maintenance Services in Dubai",
  author: "Faj Technical Services",
  keywords:
    "Ac Repair, Ac Repair In Dubai, Ac Repair Service, Ac Service, Washing Machine Repair, Washing Machine Service, Refrigerator Repair, Freezer Repair, Fridge Repair, Appliances Repair, Appliances Service, Appliances Fix, Appliances Maintenance, Appliances Installation, Appliances Dubai",
  url: "https://www.fajservices.ae/",
};

const Home = ({
  titleSeo = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  Author = DEFAULT_SEO.author,
  Keyword = DEFAULT_SEO.keywords,
  URL = DEFAULT_SEO.url,
}) => {
  const canonicalUrl = URL.replace(/\/?$/, "/");

  // State to trigger lazy loading of below-the-fold content
  const [loadRest, setLoadRest] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setLoadRest(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>{titleSeo}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={Keyword} />
        <meta name="author" content={Author} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={titleSeo} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <div className="homepage">
        {/* Hero loads immediately (LCP critical) */}
        <Suspense fallback={<Loader />}>
          <HeroBanner1 />
        </Suspense>

        {/* About loads right after Hero */}
        <Suspense fallback={<Loader />}>
          <About1
            img1="img/about_img_1.avif"
            img2="img/about_img_2.avif"
            img3="img/about_img_3.avif"
            expNumber="FAJ"
            expYers="was established"
            expTitle="Since"
            expTitleYear="2010"
            expDescrip="We are committed to delivering top-notch technical services that meet the highest international standards for exceptional quality."
            number="(+971) 507464712"
            telLink="tel:+971507464712"
            subTitle="About Us"
            Title="Speedy Services, Quality Results"
            Content="We are professional and committed to service, highlighting our dedication to providing exceptional results in repair, servicing, and maintenance contracts."
            feature1="Routine Maintenance, Let's Start Today"
            feature2="Fast, Efficient Repair Service"
            listItem={[
              "Efficiency through expert maintenance",
              "Expertise. Integrity. Responsiveness",
              "Comprehensive Diagnostic Check",
              "Quality workmanship",
              "Guaranteed Work",
            ]}
          />
        </Suspense>

        {/* Everything else loads ONLY after scroll */}
        {loadRest && (
          <>
            <Suspense fallback={<Loader />}>
              <Services1 />
            </Suspense>

            <Suspense fallback={<Loader />}>
              <Choose1
                img1="img/feature_img_1.avif"
                content="Installation, repair, or maintenance service agreement for your home, office, or commercial needs in Dubai, Sharjah and Abu Dhabi, offers expert and affordable solutions."
                btnName="Read more"
                btnUrl="about-us/"
                img2="img/whywechoose2.avif"
                img3="img/whychooseus.avif"
              />
            </Suspense>

            <Suspense fallback={<Loader />}>
              <BeforeAfter
                title="Recent Completed Projects"
                subTitle="Before & after"
                bgImg="img/background-image-2.avif"
                beforeImg="img/after_img_1.avif"
                afterTitle="After"
                afterImg="img/before_img_1.avif"
                beforeTitle="Before"
              />
            </Suspense>

            <Suspense fallback={<Loader />}>
              <Project1 />
            </Suspense>

            <Suspense fallback={<Loader />}>
              <Contact1
                Title="Contact Information"
                subTitle="FAJ location is easily accessible from Al Khail Road and Sheikh Zayed Road. Drop off your appliance at the workshop to receive a discount on the technical inspection fee and service.."
                address="Warehouse No - S-02 Gate 35 Street 18B - Al Quoz - Al Quoz Industrial Area 4 - Dubai - United Arab Emirates"
                email="Info@fajservices.ae"
                emailLink="mailto:info@fajservices.ae"
                number="+971 4 330 0002"
                numberLink="tel:+97143300002"
                number1="+971 50 746 4712"
                number1Link="tel:+971507464712"
                clientNumber="5,400"
                img="img/contact-us-image.avif"
                client="Happy Clients"
                subtitle2="Contact us"
                title2="Book An Appointment"
              />
            </Suspense>

            <Suspense fallback={<Loader />}>
              <Testimonial1
                subtitle="What Our Clients Say"
                title="Customer <span>Reviews</span>"
                bgImg="img/testimonialbg.jpg"
                testimonialData={data}
                sectionId="home-testimonials"
              />
            </Suspense>

            <Suspense fallback={<Loader />}>
              <Blog3 />
            </Suspense>

            <Suspense fallback={<Loader />}>
              <Process />
            </Suspense>
          </>
        )}
      </div>
    </>
  );
};

export default React.memo(Home);
