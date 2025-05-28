import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInJebelAliFreeZoneDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInJebelAliFreeZoneDetail";

const ApplianceServiceInJebelAliFreeZone = () => {
  return (
        <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Jebel Ali Free Zone">
            </BreadCumb>
            <ApplianceServiceInJebelAliFreeZoneDetail />
    </div>
  )
}

export default ApplianceServiceInJebelAliFreeZone
