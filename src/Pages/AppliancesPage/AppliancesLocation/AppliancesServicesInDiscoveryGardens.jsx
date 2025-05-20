import AppliancesServicesInDiscoveryGardensDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInDiscoveryGardensDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInDiscoveryGardens = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Appliances Services In Discovery Gardens">
            </BreadCumb>
            <AppliancesServicesInDiscoveryGardensDetail />
    </div>
  )
}

export default AppliancesServicesInDiscoveryGardens
