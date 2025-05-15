import BreadCumb from "../../../Components/Common/BreadCumb";
import SubZeroFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SubZeroFridgeRepairDetail';

const SubZeroFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Subzero-fridge-repair.avif"
        Title="Sub Zero Fridge Repair"
    ></BreadCumb>

    <SubZeroFridgeRepairDetail />        
</div>
  );
};

export default SubZeroFridgeRepair;
