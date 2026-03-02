import { Helmet, HelmetProvider } from 'react-helmet-async'
import CMAppointmentBanner from '../../Components/LandingPages/CMAppoitmentBanner'
import CMBannerCta from '../../Components/LandingPages/CMBannerCta'
import CMBenefits from '../../Components/LandingPages/CMBenifit'
import CMExpress from '../../Components/LandingPages/CMExpress'
import CMFaqs from '../../Components/LandingPages/CMFaqs'
import CMServicesLP from '../../Components/LandingPages/CMServciesLP'
import CMTechincianCarousel from '../../Components/LandingPages/CMTechinicanCarousel'
import CMTestimonial from '../../Components/LandingPages/CMTestimonial'
import CMWhyChooseUs from '../../Components/LandingPages/CMWhyChooseUs'
import WhyChooseUS from '../../Components/WhyChooseUS/ACWhyChooseUs'
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const CoffeeMachineLandingPage = () => {
  return (<>
    <HelmetProvider>
                <Helmet>
                  <title>Coffee Machine Service Center in Dubai</title>
                  <meta name="description" content="Expert Coffee Machine Service in Dubai. Certified technicians for all major brands. Fast, reliable repairs & maintenance to minimize downtime. Call now for a free quote!" />
                  <meta name="robots" content="noindex, nofollow" />
        
                  <link rel="canonical" href="https://www.fajservices.ae/dubai-service-center-coffee-machine/" />
                  <meta property="og:type" content="website" />
                  <meta property="og:locale" content="en_US" />
                  <meta property="og:title" content="Coffee Machine Service Center in Dubai" />
                  <meta property="og:description" content="Expert Coffee Machine Service in Dubai. Certified technicians for all major brands. Fast, reliable repairs & maintenance to minimize downtime. Call now for a free quote!" />
        
                  {/* Twitter Card */}
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:title" content="Coffee Machine Service Center in Dubai" />
                  <meta name="twitter:description" content="Expert Coffee Machine Service in Dubai. Certified technicians for all major brands. Fast, reliable repairs & maintenance to minimize downtime. Call now for a free quote!" />
                  
                </Helmet>
              </HelmetProvider>
    <div>
        <CMBannerCta />
        <CMTechincianCarousel />
        <CMServicesLP />
        <CMAppointmentBanner />
        <CMTestimonial />
        <CMBenefits />
        <CMWhyChooseUs />
        <WhyChooseUS />
        <CMExpress />
        <CMFaqs />
    </div>
    </>
  )
}

export default CoffeeMachineLandingPage