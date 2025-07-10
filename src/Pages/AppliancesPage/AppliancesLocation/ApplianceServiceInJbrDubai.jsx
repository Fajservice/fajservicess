import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInJbrdubaiDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInJbrDubaiDetail";
const ApplianceServiceInJbrDubai = () => {
  return (
    <>
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/appliances-banner-desktop-faj.avif"
        mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
        Title="Home Appliance Service in Jbr Dubai">
      </BreadCumb>
    </div>
    <ApplianceServiceInJbrdubaiDetail />
    </>
  )
}

export default ApplianceServiceInJbrDubai
