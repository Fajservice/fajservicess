import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInAlWahaCommunityDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInAlWahaCommunityDetail";

const ApplianceServiceInAlWahaCommunity = () => {
  return (
   <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in The Villa">
            </BreadCumb>
            <ApplianceServiceInAlWahaCommunityDetail />
    </div>
  )
}

export default ApplianceServiceInAlWahaCommunity
