import BreadCumb from "../../../Components/Common/BreadCumb";
import SubZeroFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SubZeroFridgeRepairDetail';

const SubZeroFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/ac-maintenance.avif"
        Title="Super General AC Repair in Dubai - Emergency AC Service Near Me"
    ></BreadCumb>

    <SubZeroFridgeRepairDetail />        
</div>
  );
};

export default SubZeroFridgeRepair;
