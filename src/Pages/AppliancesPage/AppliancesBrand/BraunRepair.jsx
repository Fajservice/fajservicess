import BreadCumb from "../../../Components/Common/BreadCumb";
import BraunRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BraunRepairDetail.jsx';

const BraunRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        mobileBgImg="img/banners/homeappliancesbrands/mobile/BraunRepair.avif"
        bgImg="img/banners/homeappliancesbrands/desktop/BraunRepair.avif"
        Title="Braun Repair"
      ></BreadCumb>
      <BraunRepairDetail />
    </div>
  );
};

export default BraunRepair;
