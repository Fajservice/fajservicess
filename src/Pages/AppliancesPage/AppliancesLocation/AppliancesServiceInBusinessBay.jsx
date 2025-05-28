import BreadCumb from "../../../Components/Common/BreadCumb";
import AppliancesServiceInBusinessBayDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServiceInBusinessBayDetail";

const AppliancesServiceInBusinessBay = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Business Bay">
            </BreadCumb>
            <AppliancesServiceInBusinessBayDetail/>
    </div>
  )
}

export default AppliancesServiceInBusinessBay
