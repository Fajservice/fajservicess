import React, { lazy, Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ImageSlider from "../Components/ImageSlider/ImageSlider";
const About1 = lazy(() => import("../Components/About/About1"));
const Services1 = lazy(() => import("../Components/Services/Services1"));
const Choose1 = lazy(() => import("../Components/Choose/Choose1"));
const BeforeAfter = lazy(() => import("../Components/BeforeAfter/BeforeAfter"));
const Project1 = lazy(() => import("../Components/Project/Project1"));
const Contact1 = lazy(() => import("../Components/Contact/Contact"));
const Testimonial1 = lazy(() => import("../Components/Testimonial/Testimonial1"));
const Blog3 = lazy(() => import("../Components/Blog/Blog3"));
const Process = lazy(() => import("../Components/Process/Process"));
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

// Skeleton Fallbacks - Reserve exact space to prevent CLS
const ChooseSkeleton = () => (
  <section style={{ minHeight: '600px' }}>
    <div className="cs_height_80 cs_height_lg_80"></div>
    <div className="container">
      <div style={{ height: 60, background: '#f0f0f0', borderRadius: 4, maxWidth: 300, margin: '0 auto 40px' }} />
      <div className="row cs_row_gap_40 cs_gap_y_40">
        <div className="col-xl-4">
          <div style={{ aspectRatio: '4/5', background: '#f0f0f0', borderRadius: 8 }} />
        </div>
        <div className="col-xl-4">
          {[1, 2, 3].map(i => (
            <div key={i} style={{ display: 'flex', gap: 15, marginBottom: 20 }}>
              <div style={{ width: 70, height: 70, borderRadius: '50%', background: '#f0f0f0', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ height: 18, background: '#f0f0f0', borderRadius: 4, marginBottom: 8, width: '60%' }} />
                <div style={{ height: 14, background: '#f0f0f0', borderRadius: 4, width: '90%' }} />
              </div>
            </div>
          ))}
        </div>
        <div className="col-xl-4">
          <div style={{ aspectRatio: '4/5', background: '#f0f0f0', borderRadius: 8 }} />
        </div>
      </div>
    </div>
    <div className="cs_height_70 cs_height_lg_70"></div>
  </section>
);

const ServicesSkeleton = () => (
  <section className="cs_gray_bg" style={{ minHeight: '650px' }}>
    <div className="cs_height_60"></div>
    <div className="container">
      <div style={{ height: 80, background: '#e8e8e8', borderRadius: 4, marginBottom: 40 }} />
      <div style={{ display: 'flex', gap: 30 }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ flex: 1, minHeight: 450, background: '#e8e8e8', borderRadius: 10 }} />
        ))}
      </div>
    </div>
    <div className="cs_height_40"></div>
  </section>
);

const AboutSkeleton = () => (
  <section style={{ minHeight: '600px' }}>
    <div className="cs_height_80 cs_height_lg_80"></div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6">
          <div style={{ aspectRatio: '1/1', background: '#f0f0f0', borderRadius: 8 }} />
        </div>
        <div className="col-xl-6">
          <div style={{ height: 300, background: '#f0f0f0', borderRadius: 8 }} />
        </div>
      </div>
    </div>
    <div className="cs_height_80 cs_height_lg_80"></div>
  </section>
);

const DEFAULT_SEO = {
  title: "FAJ / Installation, Repair and Maintenance Company in Dubai ",
  description:
    "FAJ Established in 2010, / with experts Air Conditioner, Refrigeration, Kitchen Equipment, Appliances installation, Repair & Maintenance Services in Dubai",
  author: "Faj Technical Services",
  keywords:
    "Ac Repair, Ac Repair In Dubai, Ac Repair Service, Ac Service, Washing Machine Repair, Washing Machine Service, Refrigerator Repair, Freezer Repair, Fridge Repair, Appliances Repair, Appliances Service, Appliances Fix, Appliances Maintenance, Appliances Installation, Appliances Dubai",
  url: "https://www.fajservices.ae/",
};

const heroSlides = [
  {
    image: `${CDN}/4707802c-9c00-4a6f-b8c4-aa21dd4e0600/public`,
    alt: "FAJ ensures comfort with professional air conditioning services year-round",
    content: true,
    title: "FAJ ensures comfort with professional air conditioning services year-round!",
    description: "We provide honest, friendly, and professional repair, servicing, maintenance contracts, and installation through our expert technicians",
    buttonText: "Read more",
    buttonLink: "/about-us/",
    phone: "(+971) 507464712",
    phoneLink: "tel:+971507464712"
  },
  {
    image: `${CDN}/ddb50f9f-9093-4a7d-9bae-c10479570c00/public`,
    alt: "FAJ are specialist in domestic and commercial appliance repair and maintenance",
    content: true,
    title: "FAJ are specialist in domestic and commercial appliance repair and maintenance",
    description: "We understand that appliance breakdowns can happen at any time, which is why our team at FAJ is always ready to respond and repair quickly",
    buttonText: "Read more",
    buttonLink: "/about-us/",
    phone: "(+971) 507464712",
    phoneLink: "tel:+971507464712"
  },
  {
    image: `${CDN}/b9e9f46b-45bd-4f4e-62f2-999539063600/public`,
    alt: "We are here to help you with your commercial refrigeration system repair problems",
    content: true,
    title: "We are here to help you with your commercial refrigeration system repair problems",
    description: "At FAJ Refrigeration and Freezer Maintenance, we focus on keeping your products and premises at the optimal temperature, helping you maintain your cool!",
    buttonText: "Read more",
    buttonLink: "/about-us/",
    phone: "(+971) 507464712",
    phoneLink: "tel:+971507464712"
  }
];

const Home = ({
  titleSeo = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  Author = DEFAULT_SEO.author,
  Keyword = DEFAULT_SEO.keywords,
  URL = DEFAULT_SEO.url,
}) => {
  const canonicalUrl = URL.replace(/\/?$/, "/");

  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/testimonial1.json`)
      .then(res => res.json())
      .then(data => setTestimonialData(data))
      .catch(err => console.error('Error fetching testimonial data:', err));
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
        <ImageSlider 
          slides={heroSlides}
          autoPlay={true}
          interval={5000}
          showDots={true}
          showArrows={true}
        />

        <Suspense fallback={<AboutSkeleton />}>
          <About1
            img1={`${CDN}/about_img_1/public`}
            img2={`${CDN}/about_img_2/public`}
            img3={`${CDN}/about_img_3/public`}
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

        <Suspense fallback={<ServicesSkeleton />}>
          <Services1 />
        </Suspense>

        <Suspense fallback={<ChooseSkeleton />}>
          <Choose1
            img1={`${CDN}/feature_img_1/public`}
            content="Installation, repair, or maintenance service agreement for your home, office, or commercial needs in Dubai, Sharjah and Abu Dhabi, offers expert and affordable solutions"
            btnName="Read more"
            btnUrl="about-us/"
            img2={`${CDN}/whywechoose2/public`}
            img3={`${CDN}/whychooseus/public`}
          />
        </Suspense>

        <Suspense fallback={<div style={{ minHeight: 500 }} />}>
          <BeforeAfter
            title="Recent Completed Projects"
            subTitle="Before & after"
            beforeImg={`${CDN}/after_img_1/public`}
            afterTitle="After"
            afterImg={`${CDN}/before_img_1/public`}
            beforeTitle="Before"
          />
        </Suspense>

        <Suspense fallback={<div style={{ minHeight: 600 }} />}>
          <Project1 />
        </Suspense>

        <Suspense fallback={<div style={{ minHeight: 700 }} />}>
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
            img={`${CDN}/contact-us-image/public`}
            client="Happy Clients"
            subtitle2="Contact us"
            title2="Book An Appointment"
          />
        </Suspense>

        {testimonialData.length > 0 && (
          <Suspense fallback={<div style={{ minHeight: 500 }} />}>
            <Testimonial1
              subtitle="What Our Clients Say"
              title="Customer <span>Reviews</span>"
              bgImg={`${CDN}/testimonialbg/public`}
              testimonialData={testimonialData}
              sectionId="home-testimonials"
            />
          </Suspense>
        )}

        <Suspense fallback={<div style={{ minHeight: 400 }} />}>
          <Blog3 />
        </Suspense>

        <Suspense fallback={<div style={{ minHeight: 400 }} />}>
          <Process />
        </Suspense>
      </div>
    </>
  );
};

export default React.memo(Home);