import AppliancesServicesInAlBadaaDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInAlBadaaDetail.jsx";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInAlBadaa = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Appliances Services In AlBadaa">
            </BreadCumb>
            <AppliancesServicesInAlBadaaDetail />
    </div>
  )
}

export default AppliancesServicesInAlBadaa
