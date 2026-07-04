import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInimpzDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInImpzDetail";

const ApplianceServiceInimpz = () => {
  return (
    <div className="serviceDetails">
              <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                  Title="Home Appliance Service in IMPZ">
              </BreadCumb>
              <ApplianceServiceInimpzDetail />
    </div>
  )
}

export default ApplianceServiceInimpz
