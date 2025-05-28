import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInJumeriahHeightsDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInJumeriahHeightsDetail";

const ApplianceServiceInJumeriahHeights = () => {
  return (
   <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Jumerirah Heights">
            </BreadCumb>
            <ApplianceServiceInJumeriahHeightsDetail />
    </div>
  )
}

export default ApplianceServiceInJumeriahHeights
