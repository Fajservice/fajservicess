import BreadCumb from "../../../Components/Common/BreadCumb";
import LiebherrRefrigeratorRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/LiebherrRefrigeratorRepairDetail.jsx';

const LiebherrRefrigeratorRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/Liebherr-appliances-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Liebherr-appliances-repair-faj.avif"
        Title="Liebherr Refrigerator Repair & Service"
      ></BreadCumb>

      <LiebherrRefrigeratorRepairDetail />
    </div>
  );
};

export default LiebherrRefrigeratorRepair;
