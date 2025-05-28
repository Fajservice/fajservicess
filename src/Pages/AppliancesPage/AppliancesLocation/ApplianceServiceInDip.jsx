import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInDipDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInDipDetail";

const ApplianceServiceInDip = () => {
  return (
  <div className="serviceDetails">
              <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                  Title="Home Appliance Service in Dip">
              </BreadCumb>
              <ApplianceServiceInDipDetail />
      </div>
  )
}

export default ApplianceServiceInDip
