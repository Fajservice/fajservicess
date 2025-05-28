import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInUmmAllSheifDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInUmmAlSheifDetail";

const ApplianceServiceInUmmAlSheif = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Umm Al Sheif">
            </BreadCumb>
            <ApplianceServiceInUmmAllSheifDetail/>
    </div>
  )
}

export default ApplianceServiceInUmmAlSheif
