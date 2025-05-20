import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInMudonDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInMudonDetail";

const ApplianceServiceInMudon = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in Mudon">
            </BreadCumb>
            <ApplianceServiceInMudonDetail />
    </div>
  )
}

export default ApplianceServiceInMudon
