import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInArabianRanchesDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInArabianRanchesDetail";

const ApplianceServiceInArabianRanches = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Arabian Ranches">
            </BreadCumb>
            <ApplianceServiceInArabianRanchesDetail />
    </div>
  )
}

export default ApplianceServiceInArabianRanches
