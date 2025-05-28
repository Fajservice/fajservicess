import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInJvcDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInJvcDetail";

const ApplianceServiceInJvc = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Jvc">
            </BreadCumb>
            <ApplianceServiceInJvcDetail />
    </div>
  )
}

export default ApplianceServiceInJvc
