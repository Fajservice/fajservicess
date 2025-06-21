import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInJbrDubaiDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInJbrDubaidetail";
const ApplianceServiceInJbrDubai = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/appliances-banner-desktop-faj.avif"
        mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
        Title="Home Appliance Service in Jbr Dubai">
      </BreadCumb>
      <ApplianceServiceInJbrDubaiDetail />
    </div>
  )
}

export default ApplianceServiceInJbrDubai
