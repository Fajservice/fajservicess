import AppliancesServicesInDiscoveryGardensDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInDiscoveryGardensDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInDiscoveryGardens = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Appliances Services In Discovery Gardens">
            </BreadCumb>
            <AppliancesServicesInDiscoveryGardensDetail />
    </div>
  )
}

export default AppliancesServicesInDiscoveryGardens
