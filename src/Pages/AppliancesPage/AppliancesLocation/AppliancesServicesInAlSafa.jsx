import AppliancesServicesInAlSafaDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInAlSafaDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInAlSafa = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Appliances Services In AlSafa">
            </BreadCumb>
            <AppliancesServicesInAlSafaDetail />
    </div>
  )
}

export default AppliancesServicesInAlSafa
