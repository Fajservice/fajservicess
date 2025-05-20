import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInJvtDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInJvtDetail";

const ApplianceServiceInJvt = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in JVT">
            </BreadCumb>
            <ApplianceServiceInJvtDetail />
    </div>
  )
}

export default ApplianceServiceInJvt
