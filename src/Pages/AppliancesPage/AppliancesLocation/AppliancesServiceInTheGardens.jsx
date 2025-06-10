import BreadCumb from "../../../Components/Common/BreadCumb";
import AppliancesServiceInTheGardensDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServiceInTheGardensDetail";

const AppliancesServiceInTheGardens = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif">
            </BreadCumb>
            <AppliancesServiceInTheGardensDetail/>
    </div>
  )
}

export default AppliancesServiceInTheGardens
