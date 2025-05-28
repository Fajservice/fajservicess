import BreadCumb from "../../../Components/Common/BreadCumb";
import ToshibaHomeAppMaintenanceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/ToshibaHomeAppMaintenanceDetail';

const ToshibaHomeAppMaintenance = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/toshiba-washing-machine-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/toshiba-fridge-repair-faj.avif"
        Title="Toshiba Home Appliances & Maintenance"
    ></BreadCumb>

    <ToshibaHomeAppMaintenanceDetail />        
</div>
  );
};

export default ToshibaHomeAppMaintenance;
