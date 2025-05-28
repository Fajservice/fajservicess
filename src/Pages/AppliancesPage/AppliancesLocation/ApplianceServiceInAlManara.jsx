import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInAlManaraDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInAlManaraDetail";

const ApplianceServiceInAlManara = () => {
  return (
   <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Springs">
            </BreadCumb>
            <ApplianceServiceInAlManaraDetail />
    </div>
  )
}

export default ApplianceServiceInAlManara
