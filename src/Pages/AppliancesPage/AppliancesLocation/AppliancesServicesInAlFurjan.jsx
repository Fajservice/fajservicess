import AppliancesServicesInAlFurjanDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInAlFurjanDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInAlFurjan = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Appliances Services In AlFurjan">
            </BreadCumb>
            <AppliancesServicesInAlFurjanDetail />
    </div>
  )
}

export default AppliancesServicesInAlFurjan
