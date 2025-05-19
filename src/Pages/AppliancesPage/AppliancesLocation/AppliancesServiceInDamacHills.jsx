import BreadCumb from "../../../Components/Common/BreadCumb";
import AppliancesServiceInDamacHillsDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServiceInDamacHillsDetail";

const AppliancesServiceInDamacHills = () => {
  return (
   <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in Al Damac Hills">
            </BreadCumb>
            <AppliancesServiceInDamacHillsDetail/>
    </div>
  )
}

export default AppliancesServiceInDamacHills
