import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceServiceInJumeirahParkDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/ApplianceServiceInJumeirahParkDetail";

const ApplianceServiceInJumeirahPark = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in Deira">
            </BreadCumb>
            <ApplianceServiceInJumeirahParkDetail />
    </div>
  )
}

export default ApplianceServiceInJumeirahPark
