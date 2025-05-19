import BreadCumb from "../../../Components/Common/BreadCumb";
import WolfHomeAppMaintenanceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/WolfHomeAppMaintenanceDetail';

const WolfHomeAppMaintenance = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Wolf.avif"
        Title="Wolf Home Appliances Repair and Services in duabi
"
    ></BreadCumb>

    <WolfHomeAppMaintenanceDetail />        
</div>
  );
};

export default WolfHomeAppMaintenance;
