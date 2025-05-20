import AppliancesServicesInTheLakesDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInTheLakesDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInTheLakes = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Appliances Services In The Lakes">
            </BreadCumb>
            <AppliancesServicesInTheLakesDetail />
    </div>
  )
}

export default AppliancesServicesInTheLakes
