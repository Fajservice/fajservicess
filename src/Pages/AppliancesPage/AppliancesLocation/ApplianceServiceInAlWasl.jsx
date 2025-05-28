import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInAlWaslDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInAlWaslDetail";

const ApplianceServiceInAlWasl = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Al Wasl">
            </BreadCumb>
            <ApplianceServiceInAlWaslDetail />
    </div>
  )
}

export default ApplianceServiceInAlWasl
