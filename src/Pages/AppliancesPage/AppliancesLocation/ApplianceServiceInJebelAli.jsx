import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInJebelAliDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInJebelAliDetail";

const ApplianceServiceInJebelAli = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in Jebel Ali">
            </BreadCumb>
            <ApplianceServiceInJebelAliDetail />
    </div>
  )
}

export default ApplianceServiceInJebelAli
