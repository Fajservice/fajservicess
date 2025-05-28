import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInJvtDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInJvtDetail";

const ApplianceServiceInJvt = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in JVT">
            </BreadCumb>
            <ApplianceServiceInJvtDetail />
    </div>
  )
}

export default ApplianceServiceInJvt
