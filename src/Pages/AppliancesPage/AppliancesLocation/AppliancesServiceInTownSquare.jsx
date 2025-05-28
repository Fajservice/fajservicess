import BreadCumb from "../../../Components/Common/BreadCumb";
import AppliancesServiceInTownSquareDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServiceInTownSquareDetail";

const AppliancesServiceInTownSquare = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Town Square">
            </BreadCumb>
            <AppliancesServiceInTownSquareDetail />
    </div>
  )
}

export default AppliancesServiceInTownSquare
