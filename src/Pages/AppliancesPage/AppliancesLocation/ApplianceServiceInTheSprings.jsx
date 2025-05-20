import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInTheSpringsDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInTheSpringsDetail";

const ApplianceServiceInTheSprings = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in Springs">
            </BreadCumb>
            <ApplianceServiceInTheSpringsDetail />
    </div>
  )
}

export default ApplianceServiceInTheSprings
