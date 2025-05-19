import AppliancesServiceInAlMamzarDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServiceInAlMamzarDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServiceInAlMamzar = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in Al Mamzar">
            </BreadCumb>
            <AppliancesServiceInAlMamzarDetail />
    </div>
  )
}

export default AppliancesServiceInAlMamzar
