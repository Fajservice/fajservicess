
import BreadCumb from "../../../Components/Common/BreadCumb";
import AppliancesServiceInAlMizharDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServiceInAlMizharDetail";
const AppliancesServiceInAlMizhar = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Al Mizhar">
            </BreadCumb>
            <AppliancesServiceInAlMizharDetail/>
    </div>
  )
}

export default AppliancesServiceInAlMizhar
