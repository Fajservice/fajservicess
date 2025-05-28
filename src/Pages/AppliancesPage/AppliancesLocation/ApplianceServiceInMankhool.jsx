import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInMankhoolDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInMankhoolDetail";

const ApplianceServiceInMankhool = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Mankhool">
            </BreadCumb>
            <ApplianceServiceInMankhoolDetail />
    </div>
  )
}

export default ApplianceServiceInMankhool
