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

  // Load all content immediately to fix scroll position on refresh
  const [loadRest, setLoadRest] = useState(true);

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
        <Suspense fallback={null}>
          <HeroBanner1 />
        </Suspense>

        <Suspense fallback={null}>
          <About1
            img1="img/about_img_1.webp"
            img2="img/about_img_2.webp"
            img3="img/about_img_3.webp"
            expDescrip="We are committed to delivering top-notch technical services that meet the highest international standards for exceptional quality."
            number="(+971) 507464712"
            telLink="tel:+971507464712"
            subTitle="About Us"
            Title="Speedy Services, Quality Results"
            Content="We are professional and committed to service, highlighting our dedication to providing exceptional results in repair, servicing, and maintenance contracts."
            listItem={[
              "Efficiency through expert maintenance",
              "Expertise. Integrity. Responsiveness",
              "Comprehensive Diagnostic Check",
              "Quality workmanship",
              "Guaranteed Work",
            ]}
          />
        </Suspense>

        <Suspense fallback={null}>
          <Services1 />
        </Suspense>

        <Suspense fallback={null}>
          <Choose1
            img1="img/feature_img_1.avif"
            content="Installation, repair, or maintenance service agreement for your home, office, or commercial needs in Dubai, Sharjah and Abu Dhabi, offers expert and affordable solutions"
            btnName="Read more"
            btnUrl="about-us/"
            img2="img/whywechoose2.avif"
            img3="img/whychooseus.avif"
          />
        </Suspense>

        <Suspense fallback={null}>
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

        <Suspense fallback={null}>
          <Project1 />
        </Suspense>

        <Suspense fallback={null}>
          <Contact1
            Title="Contact Information"
            subTitle="FAJ location is easily accessible from Al Khail Road and Sheikh Zayed Road. Drop off your appliance at the workshop to receive a discount on the technical inspection fee and service.."
            address="Warehouse # S-02 - Gate 35 Street 18B - Al Qouz Ind.fourth - Al Quoz - Dubai - United Arab Emirates"
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

        <Suspense fallback={null}>
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg="img/testimonialbg.jpg"
            testimonialData={data}
            sectionId="home-testimonials"
          />
        </Suspense>

        <Suspense fallback={null}>
          <Blog3 />
        </Suspense>

        <Suspense fallback={null}>
          <Process />
        </Suspense>
      </div>
    </>
  );
};

export default React.memo(Home);
