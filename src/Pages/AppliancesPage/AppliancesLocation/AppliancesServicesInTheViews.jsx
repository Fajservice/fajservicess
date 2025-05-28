import AppliancesServicesInTheViewsDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInTheViewsDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInTheViews = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Appliances Services In The Views">
            </BreadCumb>
            <AppliancesServicesInTheViewsDetail />
    </div>
  )
}

export default AppliancesServicesInTheViews
