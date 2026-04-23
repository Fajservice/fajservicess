import BreadCumb from "../../../Components/Common/BreadCumb";
import PhilipsRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/PhilipsRepairDetail';

const PhilipsRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        mobileBgImg="img/banners/homeappliancesbrands/mobile/PhilipsRepair.avif"
        bgImg="img/banners/homeappliancesbrands/desktop/PhilipsRepair.avif"
        Title="Philips Repair"
      ></BreadCumb>

      <PhilipsRepairDetail />
    </div>
  );
};

export default PhilipsRepair;
