import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInTheGreensDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInTheGreensDetail";

const ApplianceServiceInTheGreens = () => {
  return (
    <div className="serviceDetails">
              <BreadCumb
                  bgImg="img/banners/small-home.avif"
                  Title="Home Appliance Service in The Greens">
              </BreadCumb>
              <ApplianceServiceInTheGreensDetail />
    </div>
  )
}

export default ApplianceServiceInTheGreens
