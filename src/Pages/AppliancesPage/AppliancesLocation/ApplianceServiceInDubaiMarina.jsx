import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInDubaiMarinaDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInDubaiMarinaDetail";

const ApplianceServiceInDubaiMarina = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Dubai Marina">
            </BreadCumb>
            <ApplianceServiceInDubaiMarinaDetail />
    </div>
  )
}

export default ApplianceServiceInDubaiMarina
