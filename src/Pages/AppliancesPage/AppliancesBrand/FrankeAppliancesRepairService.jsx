import BreadCumb from "../../../Components/Common/BreadCumb";
import FrankeAppliancesRepairServiceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/FrankeAppliancesRepairServiceDetail.jsx';

const FrankeAppliancesRepairService = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/FrankeAppliancesRepairService.avif"
        Title="Franke Fridge Repair & Service"
      ></BreadCumb>

      <FrankeAppliancesRepairServiceDetail />
    </div>
  );
};

export default FrankeAppliancesRepairService;