import AppliancesServicesInRemraamDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInRemraamDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInRemraam = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Appliances Services In Remraam">
            </BreadCumb>
            <AppliancesServicesInRemraamDetail />
    </div>
  )
}

export default AppliancesServicesInRemraam
