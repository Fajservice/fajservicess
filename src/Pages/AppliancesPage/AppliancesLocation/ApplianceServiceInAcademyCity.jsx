import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInAcademyCityDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInAcademyCityDetail";

const ApplianceServiceInAcademyCity = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Academy City">
            </BreadCumb>
            <ApplianceServiceInAcademyCityDetail />
    </div>
  )
}

export default ApplianceServiceInAcademyCity
