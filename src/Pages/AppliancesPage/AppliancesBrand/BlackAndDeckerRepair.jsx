import BreadCumb from "../../../Components/Common/BreadCumb";
import BlackAndDeckerRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BlackAndDeckerRepairDetail';

const BlackAndDeckerRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        mobileBgImg="img/banners/homeappliancesbrands/mobile/BlackAndDeckerRepair.avif"
        bgImg="img/banners/homeappliancesbrands/desktop/BlackAndDeckerRepair.avif"
        Title="Black and Decker Repair"
      ></BreadCumb>

      <BlackAndDeckerRepairDetail />
    </div>
  );
};

export default BlackAndDeckerRepair;
