import BreadCumb from "../../../Components/Common/BreadCumb";
import SpeedQueenWashingMachineRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SpeedQueenWashingMachineRepairDetail';

const SpeedQueenWashingMachineRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/Speed-Queen-washing-machine-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Speed-Queen-washing-machine-repair-faj.avif"
        Title="Speed Queen Washing Machine Repair"
      ></BreadCumb>

      <SpeedQueenWashingMachineRepairDetail />
    </div>
  );
};

export default SpeedQueenWashingMachineRepair;
