import BreadCumb from "../../../Components/Common/BreadCumb.jsx";
import IceCreamMachineRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/IceCreamMachineRepairDetail.jsx';

const IceCreamMachineRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        mobileBgImg="img/banners/homeappliancesbrands/mobile/IceCreamMachineRepair.avif"
        bgImg="img/banners/homeappliancesbrands/desktop/IceCreamMachineRepair.avif"
        Title="Sage Repair"
      ></BreadCumb>
      <IceCreamMachineRepairDetail />
    </div>
  );
};

export default IceCreamMachineRepair;
