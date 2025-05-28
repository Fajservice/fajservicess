import AppliancesServicesInVictoryHeightsDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInVictoryHeightsDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInVictoryHeights = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
        Title="Appliances Services In Victory Heights">
      </BreadCumb>
      <AppliancesServicesInVictoryHeightsDetail />
    </div>
  )
}

export default AppliancesServicesInVictoryHeights
