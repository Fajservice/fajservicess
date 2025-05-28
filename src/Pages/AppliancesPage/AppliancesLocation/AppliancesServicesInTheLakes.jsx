import AppliancesServicesInTheLakesDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInTheLakesDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInTheLakes = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Appliances Services In The Lakes">
            </BreadCumb>
            <AppliancesServicesInTheLakesDetail />
    </div>
  )
}

export default AppliancesServicesInTheLakes
