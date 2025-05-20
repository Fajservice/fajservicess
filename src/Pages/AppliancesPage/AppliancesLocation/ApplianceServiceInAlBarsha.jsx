import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInAlBarshaDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInAlBarshaDetail";

const ApplianceServiceInAlBarsha = () => {
  return (
      <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in Al Barsha">
            </BreadCumb>
            <ApplianceServiceInAlBarshaDetail />
    </div>
  )
}

export default ApplianceServiceInAlBarsha
