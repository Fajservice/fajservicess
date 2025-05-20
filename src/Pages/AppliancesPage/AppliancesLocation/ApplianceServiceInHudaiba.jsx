import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInHudaibaDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInHudaibaDetail";

const ApplianceServiceInHudaiba = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in Hudaiba">
            </BreadCumb>
            <ApplianceServiceInHudaibaDetail />
    </div>
  )
}

export default ApplianceServiceInHudaiba
