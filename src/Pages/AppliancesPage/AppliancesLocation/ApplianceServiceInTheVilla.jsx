import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInTheVillaDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInTheVillaDetail";

const ApplianceServiceInTheVilla = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in The Villa">
            </BreadCumb>
            <ApplianceServiceInTheVillaDetail />
    </div>
  )
}

export default ApplianceServiceInTheVilla
