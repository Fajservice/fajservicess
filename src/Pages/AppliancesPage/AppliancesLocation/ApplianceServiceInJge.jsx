import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInJgeDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInJgeDetail";

const ApplianceServiceInJge = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in Jge">
            </BreadCumb>
            <ApplianceServiceInJgeDetail />
    </div>
  )
}

export default ApplianceServiceInJge
