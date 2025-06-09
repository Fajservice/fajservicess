import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInJebelAliDipDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInJebelAliDipDetail";

const ApplianceServiceInJebelAliDip = () => {
  return (
   <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Jabel Ali Dip">
            </BreadCumb>
            <ApplianceServiceInJebelAliDipDetail />
    </div>
  )
}

export default ApplianceServiceInJebelAliDip
