import BreadCumb from "../../../Components/Common/BreadCumb.jsx";
import SageRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SageRepairDetail.jsx';

const SageRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        mobileBgImg="img/banners/homeappliancesbrands/mobile/SageRepair.avif"
        bgImg="img/banners/homeappliancesbrands/desktop/SageRepair.avif"
        Title="Sage Repair"
      ></BreadCumb>
      <SageRepairDetail />
    </div>
  );
};

export default SageRepair;
