import AppliancesServicesInJumeirahDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInJumeirahDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInJumeirah = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Appliances Services In Jumeirah">
            </BreadCumb>
            <AppliancesServicesInJumeirahDetail />
    </div>
  )
}

export default AppliancesServicesInJumeirah
