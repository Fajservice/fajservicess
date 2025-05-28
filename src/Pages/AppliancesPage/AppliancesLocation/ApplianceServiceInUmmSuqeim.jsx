import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInUmmSuqeimDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInUmmSuqeimDetail";

const ApplianceServiceInUmmSuqeim = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Umm Suqeim">
            </BreadCumb>
            <ApplianceServiceInUmmSuqeimDetail/>
    </div>
  )
}

export default ApplianceServiceInUmmSuqeim
