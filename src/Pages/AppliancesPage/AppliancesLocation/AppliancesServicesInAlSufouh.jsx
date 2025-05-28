import BreadCumb from "../../../Components/Common/BreadCumb";
import AppliancesServicesInAlSufouhDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInAlSufouhDetail";

const AppliancesServicesInAlSufouh = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Al Sufouh">
            </BreadCumb>
            <AppliancesServicesInAlSufouhDetail />
    </div>
  )
}

export default AppliancesServicesInAlSufouh
