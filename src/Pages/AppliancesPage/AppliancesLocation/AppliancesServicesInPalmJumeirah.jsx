import AppliancesServicesInPalmJumeirahDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInPalmJumeirahDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInPalmJumeirah = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/appliances-banner-desktop-faj.avif"
        mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
        Title="Appliances Services In PalmJumeirah">
      </BreadCumb>
      <AppliancesServicesInPalmJumeirahDetail />
    </div>
  )
}

export default AppliancesServicesInPalmJumeirah
