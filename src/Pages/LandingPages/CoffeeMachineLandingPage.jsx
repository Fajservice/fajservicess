import CMAppointmentBanner from '../../Components/LandingPages/CMAppoitmentBanner'
import CMBannerCta from '../../Components/LandingPages/CMBannerCta'
import CMLogoService from '../../Components/LandingPages/CMLogoLP'
import CMQuoteForm from '../../Components/LandingPages/CMQuoteForm'
import CMServicesLP from '../../Components/LandingPages/CMServciesLP'
import CMTechinicianCarousel from '../../Components/LandingPages/CMTechinicanCarousel'

const CoffeeMachineLandingPage = () => {
  return (
    <div>
        <CMBannerCta />
        <CMTechinicianCarousel />
        <CMServicesLP />
        <CMAppointmentBanner />
        <CMLogoService />
        <CMQuoteForm />
    </div>
  )
}

export default CoffeeMachineLandingPage