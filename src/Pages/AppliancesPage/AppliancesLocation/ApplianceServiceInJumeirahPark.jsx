import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInJumeirahParkDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInJumeirahParkDetail";

const ApplianceServiceInJumeirahPark = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Deira">
            </BreadCumb>
            <ApplianceServiceInJumeirahParkDetail />
    </div>
  )
}

export default ApplianceServiceInJumeirahPark
