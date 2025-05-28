import AppliancesServicesInAlBadaaDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInAlBadaaDetail.jsx";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInAlBadaa = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Appliances Services In AlBadaa">
            </BreadCumb>
            <AppliancesServicesInAlBadaaDetail />
    </div>
  )
}

export default AppliancesServicesInAlBadaa
