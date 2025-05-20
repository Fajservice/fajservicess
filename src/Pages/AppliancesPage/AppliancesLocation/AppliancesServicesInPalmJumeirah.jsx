import AppliancesServicesInPalmJumeirahDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInPalmJumeirahDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInPalmJumeirah = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Appliances Services In PalmJumeirah">
            </BreadCumb>
            <AppliancesServicesInPalmJumeirahDetail />
    </div>
  )
}

export default AppliancesServicesInPalmJumeirah
