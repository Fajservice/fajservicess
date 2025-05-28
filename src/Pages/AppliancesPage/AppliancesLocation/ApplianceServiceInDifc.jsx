import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInDifcDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInDifcDetail";
const ApplianceServiceInDifc = () => {
  return (
      <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Deira">
            </BreadCumb>
            <ApplianceServiceInDifcDetail />
    </div>
  )
}

export default ApplianceServiceInDifc
