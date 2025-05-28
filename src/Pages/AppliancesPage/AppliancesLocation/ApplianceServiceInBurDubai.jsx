import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInBurDubaiDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInBurDubaiDetail";

const ApplianceServiceInBurDubai = () => {
  return (
   <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Bur Dubai">
            </BreadCumb>
            <ApplianceServiceInBurDubaiDetail />
    </div>
  )
}

export default ApplianceServiceInBurDubai
