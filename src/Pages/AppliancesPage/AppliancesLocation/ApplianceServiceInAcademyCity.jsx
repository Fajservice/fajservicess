import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInAcademyCityDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInAcademyCityDetail";

const ApplianceServiceInAcademyCity = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/app-banner-test.avif"
        mobileBgImg="img/banners/app-banner-test.avif"
        Title="Home Appliance Service in Academy City">
      </BreadCumb>
      <ApplianceServiceInAcademyCityDetail />
    </div>
  )
}

export default ApplianceServiceInAcademyCity
