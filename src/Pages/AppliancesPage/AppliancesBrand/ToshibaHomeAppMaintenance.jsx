import BreadCumb from "../../../Components/Common/BreadCumb";
import ToshibaHomeAppMaintenanceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/ToshibaHomeAppMaintenanceDetail';

const ToshibaHomeAppMaintenance = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/toshiba.avif"
        Title=""
    ></BreadCumb>

    <ToshibaHomeAppMaintenanceDetail />        
</div>
  );
};

export default ToshibaHomeAppMaintenance;
