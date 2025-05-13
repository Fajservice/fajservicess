import BreadCumb from "../../../Components/Common/BreadCumb";
import NeffFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/NeffFridgeRepairDetail';

const NeffFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/ac-maintenance.avif"
        Title="Neff Fridge Repair & Service"
    ></BreadCumb>

    <NeffFridgeRepairDetail />        
</div>
  );
};

export default NeffFridgeRepair;
