import AppliancesServicesInAlJafiliyaDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInAlJafiliyaDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInAlJafiliya = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Appliances Services In AlJafiliya">
            </BreadCumb>
            <AppliancesServicesInAlJafiliyaDetail />
    </div>
  )
}

export default AppliancesServicesInAlJafiliya
