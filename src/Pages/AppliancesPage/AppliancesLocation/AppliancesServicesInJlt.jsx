import AppliancesServicesInJltDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInJltDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInJlt = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Appliances Services In Jlt">
            </BreadCumb>
            <AppliancesServicesInJltDetail />
    </div>
  )
}

export default AppliancesServicesInJlt
