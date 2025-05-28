import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInNadAlShebaDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInNadAlShebaDetail";

const ApplianceServiceInNadAlSheba = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Nad Al Sheba">
            </BreadCumb>
            <ApplianceServiceInNadAlShebaDetail />
    </div>
  )
}

export default ApplianceServiceInNadAlSheba
