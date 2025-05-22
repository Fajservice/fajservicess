import BreadCumb from "../../../Components/Common/BreadCumb";
import AppliancesServicesJumeirahDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesJumeirahDetail";
const AppliancesServicesJumeirah = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Appliances Services Jumeirah">
            </BreadCumb>
            <AppliancesServicesJumeirahDetail />
    </div>
  )
}

export default AppliancesServicesJumeirah
