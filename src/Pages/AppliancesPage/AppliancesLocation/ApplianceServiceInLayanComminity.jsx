import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInLayanComminityDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInLayanComminityDetail";

const ApplianceServiceInLayanComminity = () => {
  return (
       <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Layan Community">
            </BreadCumb>
            <ApplianceServiceInLayanComminityDetail />
    </div>
  )
}

export default ApplianceServiceInLayanComminity
