import AppliancesServicesInJebelAliVillageDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInJebelAliVillageDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInJebelAliVillage = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Appliances Services In JebelAliVillage">
            </BreadCumb>
            <AppliancesServicesInJebelAliVillageDetail />
    </div>
  )
}

export default AppliancesServicesInJebelAliVillage
