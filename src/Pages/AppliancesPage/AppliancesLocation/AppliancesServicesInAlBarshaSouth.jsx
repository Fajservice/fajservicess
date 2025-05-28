import AppliancesServicesInAlBarshaSouthDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInAlBarshaSouthDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInAlBarshaSouth = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Appliances Services In AlBarsha South">
            </BreadCumb>
            <AppliancesServicesInAlBarshaSouthDetail />
    </div>
  )
}

export default AppliancesServicesInAlBarshaSouth
