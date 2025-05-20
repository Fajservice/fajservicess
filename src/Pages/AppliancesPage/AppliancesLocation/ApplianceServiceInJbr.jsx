import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInJbrDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInJbrDetail";

const ApplianceServiceInJbr = () => {
  return (
    <div className="serviceDetails">
              <BreadCumb
                  bgImg="img/banners/small-home.avif"
                  Title="Home Appliance Service in Jbr">
              </BreadCumb>
              <ApplianceServiceInJbrDetail />
    </div>
  )
}

export default ApplianceServiceInJbr
