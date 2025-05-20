import AppliancesServicesInAlSatwaDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInAlSatwaDetail.jsx";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInAlSatwa = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Appliances Services In AlSatwa">
            </BreadCumb>
            <AppliancesServicesInAlSatwaDetail />
    </div>
  )
}

export default AppliancesServicesInAlSatwa
