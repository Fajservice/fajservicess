import BreadCumb from "../../../Components/Common/BreadCumb";
import SpeedQueenWashingMachineRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SpeedQueenWashingMachineRepairDetail';

const SpeedQueenWashingMachineRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Speed-Queen.avif"
        Title="Speed Queen Washing Machine Repair"
      ></BreadCumb>

      <SpeedQueenWashingMachineRepairDetail />
    </div>
  );
};

export default SpeedQueenWashingMachineRepair;
