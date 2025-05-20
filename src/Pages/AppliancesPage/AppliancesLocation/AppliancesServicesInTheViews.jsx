import AppliancesServicesInTheViewsDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInTheViewsDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInTheViews = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Appliances Services In The Views">
            </BreadCumb>
            <AppliancesServicesInTheViewsDetail />
    </div>
  )
}

export default AppliancesServicesInTheViews
