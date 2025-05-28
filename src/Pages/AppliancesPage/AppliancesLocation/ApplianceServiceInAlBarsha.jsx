import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInAlBarshaDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInAlBarshaDetail";

const ApplianceServiceInAlBarsha = () => {
  return (
      <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Al Barsha">
            </BreadCumb>
            <ApplianceServiceInAlBarshaDetail />
    </div>
  )
}

export default ApplianceServiceInAlBarsha
