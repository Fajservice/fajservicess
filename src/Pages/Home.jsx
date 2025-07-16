import React, { lazy, Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Lazy load components with React.lazy
const HeroBanner1 = lazy(() => import('../Components/HeroBanner/HeroBanner1'));
const About1 = lazy(() => import('../Components/About/About1'));
const Services1 = lazy(() => import('../Components/Services/Services1'));
const Choose1 = lazy(() => import('../Components/Choose/Choose1'));
const BeforeAfter = lazy(() => import('../Components/BeforeAfter/BeforeAfter'));
const Project1 = lazy(() => import('../Components/Project/Project1'));
const Contact1 = lazy(() => import('../Components/Contact/Contact'));
const Testimonial1 = lazy(() => import('../Components/Testimonial/Testimonial1'));
const Blog3 = lazy(() => import('../Components/Blog/Blog3'));
const Process = lazy(() => import('../Components/Process/Process'));


const Loader = () => <div>Loading...</div>;

const DEFAULT_SEO = {
  title: "FAJ / AC Repair In Dubai - Freezer Service Appliances Fix",
  description: "FAJ Established in 2010, / We offer professional AC Repair, Freezer, Refrigerator, Fridge, Washing Machine Maintenance Service Company Dubai",
  author: "Faj Technical Services",
  keywords: "Ac Repair, Ac Repair In Dubai, Ac Repair Service, Ac Service, Washing Machine Repair, Washing Machine Service, Refrigerator Repair, Freezer Repair, Fridge Repair, Appliances Repair, Appliances Service, Appliances Fix, Appliances Maintenance, Appliances Installation, Appliances Dubai",
  url: "https://www.fajservices.ae/"
};

const Home = ({ 
  titleSeo = DEFAULT_SEO.title, 
  description = DEFAULT_SEO.description, 
  Author = DEFAULT_SEO.author, 
  Keyword = DEFAULT_SEO.keywords, 
  URL = DEFAULT_SEO.url 
}) => {
  const canonicalUrl = URL.replace(/\/?$/, '/');

  return (
    <>
      <HelmetProvider>
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
      </HelmetProvider>

      <div className="homepage">
        <Suspense fallback={<Loader />}>
          <HeroBanner1 />
        </Suspense>
        
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
            address="Warehouse # 2, Street 18b, Al Quoz Industrial Area # 4 Dubai – United Arab Emirates."
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
            subtitle="Testimonial"
            title="What our clients say <br> About Us"
            bgImg="img/testimonialbg.jpg"
          />
        </Suspense>
        
        <Suspense fallback={<Loader />}>
          <Blog3 />
        </Suspense>
        
        <Suspense fallback={<Loader />}>
          <Process />
        </Suspense>
      </div>
    </>
  );
};

export default React.memo(Home);