import AppliancesServicesInEmiratesHillsDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServicesInEmiratesHillsDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const AppliancesServicesInEmiratesHills = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Appliances Services In Emirates Hills">
            </BreadCumb>
            <AppliancesServicesInEmiratesHillsDetail />
    </div>
  )
}

export default AppliancesServicesInEmiratesHills
