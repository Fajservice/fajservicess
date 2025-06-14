import BreadCumb from "../../../Components/Common/BreadCumb";
import ZanussiFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/ZanussiFridgeRepairDetail';

const ZanussiFridgeRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/zanussi-dryer-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/zanussi-dryer-repair-faj.avif"
        Title="Zanussi Fridge Repair"
      ></BreadCumb>

      <ZanussiFridgeRepairDetail />
    </div>
  );
};

export default ZanussiFridgeRepair;
