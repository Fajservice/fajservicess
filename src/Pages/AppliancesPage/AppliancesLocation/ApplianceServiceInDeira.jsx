import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInDeiraDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInDeiraDetail";

const ApplianceServiceInDeira = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in Deira">
            </BreadCumb>
            <ApplianceServiceInDeiraDetail />
    </div>
  )
}

export default ApplianceServiceInDeira
