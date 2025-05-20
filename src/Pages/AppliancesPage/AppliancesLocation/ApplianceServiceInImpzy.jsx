import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInImpzyDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInImpzyDetail";

const ApplianceServiceInImpzy = () => {
  return (
    <div className="serviceDetails">
              <BreadCumb
                  bgImg="img/banners/small-home.avif"
                  Title="Home Appliance Service in Impzy">
              </BreadCumb>
              <ApplianceServiceInImpzyDetail />
    </div>
  )
}

export default ApplianceServiceInImpzy
