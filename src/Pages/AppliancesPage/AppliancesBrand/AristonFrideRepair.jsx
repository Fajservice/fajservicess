import BreadCumb from "../../../Components/Common/BreadCumb";
import AristonFrideRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/AristonFrideRepairDetail';

const AristonFrideRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/Ariston-fridge-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Ariston-fridge-repair-faj.avif"
        Title="Ariston Washing Machine Repair"
    ></BreadCumb>

    <AristonFrideRepairDetail />        
</div>
  );
};

export default AristonFrideRepair;
