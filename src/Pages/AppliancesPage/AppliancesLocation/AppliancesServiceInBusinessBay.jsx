import BreadCumb from "../../../Components/Common/BreadCumb";
import AppliancesServiceInBusinessBayDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServiceInBusinessBayDetail";

const AppliancesServiceInBusinessBay = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in Business Bay">
            </BreadCumb>
            <AppliancesServiceInBusinessBayDetail/>
    </div>
  )
}

export default AppliancesServiceInBusinessBay
