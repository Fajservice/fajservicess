import BreadCumb from "../../../Components/Common/BreadCumb";
import AppliancesServicesInAlBadaDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInAlBadaDetail";

const AppliancesServicesInAlBada = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/appliances-banner-desktop-faj.avif"
        mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
        Title="Home Appliance Service in Al Bada">
      </BreadCumb>
      <AppliancesServicesInAlBadaDetail></AppliancesServicesInAlBadaDetail>

    </div>
  )
}

export default AppliancesServicesInAlBada
