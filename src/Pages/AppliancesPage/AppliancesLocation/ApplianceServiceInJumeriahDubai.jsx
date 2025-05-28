import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInJumeriahDubaiDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInJumeriahDubaiDetail";

const ApplianceServiceInJumeriahDubai = () => {
  return (
   <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Jumer">
            </BreadCumb>
            <ApplianceServiceInJumeriahDubaiDetail/>
    </div>
  )
}

export default ApplianceServiceInJumeriahDubai
