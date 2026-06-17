import BreadCumb from "../../../Components/Common/BreadCumb.jsx";
import DysonRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/DysonRepairDetail.jsx';

const DysonRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        mobileBgImg="img/banners/homeappliancesbrands/mobile/DysonRepair.avif"
        bgImg="img/banners/homeappliancesbrands/desktop/DysonRepair.avif"
        Title="Dyson Repair"
      ></BreadCumb>
      <DysonRepairDetail />
    </div>
  );
};

export default DysonRepair;
