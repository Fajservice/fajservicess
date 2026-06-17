import BreadCumb from "../../../Components/Common/BreadCumb.jsx";
import JuraCoffeeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/JuraCoffeeRepairDetail.jsx';

const JuraCoffeeRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        mobileBgImg="img/banners/homeappliancesbrands/mobile/JuraCoffeeRepair.avif"
        bgImg="img/banners/homeappliancesbrands/desktop/JuraCoffeeRepair.avif"
        Title="Sage Repair"
      ></BreadCumb>
      <JuraCoffeeRepairDetail />
    </div>
  );
};

export default JuraCoffeeRepair;
