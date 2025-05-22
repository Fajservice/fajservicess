import BreadCumb from "../../../Components/Common/BreadCumb";
import FosterAppliancesServicesDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/FosterAppliancesServicesDetail';

const FosterAppliancesServices = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Foster-appliances-service-faj.avif"
        Title="Foster Home Appliances Repair service"
    ></BreadCumb>

    <FosterAppliancesServicesDetail />        
</div>
  );
};

export default FosterAppliancesServices;
