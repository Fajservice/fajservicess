import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInMankhoolDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInMankhoolDetail";

const ApplianceServiceInMankhool = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in Mankhool">
            </BreadCumb>
            <ApplianceServiceInMankhoolDetail />
    </div>
  )
}

export default ApplianceServiceInMankhool
