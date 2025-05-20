import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInAlRaffaDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInAlRaffaDetail";

const ApplianceServiceInAlRaffa = () => {
  return (
   <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in Al Raffa">
            </BreadCumb>
            <ApplianceServiceInAlRaffaDetail />
    </div>
  )
}

export default ApplianceServiceInAlRaffa
