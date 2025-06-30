import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInJebelAliDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInJebelAliDetail";

const ApplianceServiceInJebelAli = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/appliances-banner-desktop-faj.avif"
        mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
        Title="Home Appliance Service in Jebel Ali">
      </BreadCumb>
      <ApplianceServiceInJebelAliDetail />
    </div>
  )
}

export default ApplianceServiceInJebelAli
