import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInOudMethaDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInOudMethaDetail";

const ApplianceServiceInOudMetha = () => {
  return (
   <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Oud Metha">
            </BreadCumb>
            <ApplianceServiceInOudMethaDetail />
    </div>
  )
}

export default ApplianceServiceInOudMetha
