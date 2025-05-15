import BreadCumb from "../../../Components/Common/BreadCumb";
import UnimacWashingMachineRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/UnimacWashingMachineRepairDetail';

const UnimacWashingMachineRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/unimac.avif"
        Title="Unimac Washing Machine Repair"
    ></BreadCumb>

    <UnimacWashingMachineRepairDetail />        
</div>
  );
};

export default UnimacWashingMachineRepair;
