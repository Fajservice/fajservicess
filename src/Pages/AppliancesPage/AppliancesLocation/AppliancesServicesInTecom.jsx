import AppliancesServicesInTecomDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInTecomDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInTecom = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Appliances Services In Tecom">
            </BreadCumb>
            <AppliancesServicesInTecomDetail />
    </div>
  )
}

export default AppliancesServicesInTecom
