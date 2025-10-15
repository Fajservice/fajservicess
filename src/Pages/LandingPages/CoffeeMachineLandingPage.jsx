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

const CoffeeMachineLandingPage = () => {
  return (
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
  )
}

export default CoffeeMachineLandingPage