import BreadCumb from "../../../Components/Common/BreadCumb";
import AristonFrideRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/AristonFrideRepairDetail';

const AristonFrideRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/ac-maintenance.avif"
        Title="Ariston Washing Machine Repair"
    ></BreadCumb>

    <AristonFrideRepairDetail />        
</div>
  );
};

export default AristonFrideRepair;
