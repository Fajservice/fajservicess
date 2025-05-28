import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInDubaiMotorCityDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInDubaiMotorCityDetail";

const ApplianceServiceInDubaiMotorCity = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Dubai Motor City">
            </BreadCumb>
            <ApplianceServiceInDubaiMotorCityDetail />
    </div>
  )
}

export default ApplianceServiceInDubaiMotorCity
