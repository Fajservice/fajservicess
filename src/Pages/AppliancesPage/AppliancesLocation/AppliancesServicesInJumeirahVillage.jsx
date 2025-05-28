import AppliancesServicesInJumeirahVillageDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInJumeirahVillageDetail.jsx";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInJumeirahVillage = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Appliances Services In Jumeirah Village">
            </BreadCumb>
            <AppliancesServicesInJumeirahVillageDetail />
    </div>
  )
}

export default AppliancesServicesInJumeirahVillage
