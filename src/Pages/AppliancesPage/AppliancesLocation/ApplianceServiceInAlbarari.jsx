import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInAlbarariDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInAlbarariDetail";

const ApplianceServiceInAlbarari = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in Al Barari">
            </BreadCumb>
            <ApplianceServiceInAlbarariDetail />
    </div>
  )
}

export default ApplianceServiceInAlbarari
