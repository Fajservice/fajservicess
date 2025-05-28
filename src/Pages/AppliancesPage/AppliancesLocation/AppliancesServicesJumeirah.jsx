import BreadCumb from "../../../Components/Common/BreadCumb";
import AppliancesServicesJumeirahDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesJumeirahDetail";
const AppliancesServicesJumeirah = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Appliances Services Jumeirah">
            </BreadCumb>
            <AppliancesServicesJumeirahDetail />
    </div>
  )
}

export default AppliancesServicesJumeirah
