import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInImpzyDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInImpzyDetail";

const ApplianceServiceInImpzy = () => {
  return (
    <div className="serviceDetails">
              <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                  Title="Home Appliance Service in IMPZ">
              </BreadCumb>
              <ApplianceServiceInImpzyDetail />
    </div>
  )
}

export default ApplianceServiceInImpzy
