import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInDipDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInDipDetail";

const ApplianceServiceInDip = () => {
  return (
  <div className="serviceDetails">
              <BreadCumb
                  bgImg="img/banners/small-home.avif"
                  Title="Home Appliance Service in Dip">
              </BreadCumb>
              <ApplianceServiceInDipDetail />
      </div>
  )
}

export default ApplianceServiceInDip
