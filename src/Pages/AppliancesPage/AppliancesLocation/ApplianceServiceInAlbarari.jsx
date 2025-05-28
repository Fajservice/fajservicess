import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInAlbarariDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInAlbarariDetail";

const ApplianceServiceInAlbarari = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Al Barari">
            </BreadCumb>
            <ApplianceServiceInAlbarariDetail />
    </div>
  )
}

export default ApplianceServiceInAlbarari
