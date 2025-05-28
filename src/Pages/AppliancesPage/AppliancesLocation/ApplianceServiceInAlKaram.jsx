import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInAlKaramDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInAlKaramDetail";

const ApplianceServiceInAlKaram = () => {
  return (
    <div className="serviceDetails">
              <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                  Title="Home Appliance Service in Al Karam">
              </BreadCumb>
              <ApplianceServiceInAlKaramDetail />
    </div>
  )
}

export default ApplianceServiceInAlKaram
