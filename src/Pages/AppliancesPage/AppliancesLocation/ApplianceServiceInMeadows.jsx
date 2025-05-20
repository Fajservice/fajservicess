import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInMeadowsDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInMeadowsDetail";

const ApplianceServiceInMeadows = () => {
  return (
     <div className="serviceDetails">
              <BreadCumb
                  bgImg="img/banners/small-home.avif"
                  Title="Home Appliance Service in Meadows">
              </BreadCumb>
              <ApplianceServiceInMeadowsDetail />
    </div>
  )
}

export default ApplianceServiceInMeadows
