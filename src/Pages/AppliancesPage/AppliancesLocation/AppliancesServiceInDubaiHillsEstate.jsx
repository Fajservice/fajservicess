import BreadCumb from "../../../Components/Common/BreadCumb";
import AppliancesServiceInDubaiHillsEstateDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServiceInDubaiHillsEstateDetail";

const AppliancesServiceInDubaiHillsEstate = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Home Appliance Service in Al Damac Hills Estate">
            </BreadCumb>
            <AppliancesServiceInDubaiHillsEstateDetail/>
    </div>
  )
}

export default AppliancesServiceInDubaiHillsEstate
