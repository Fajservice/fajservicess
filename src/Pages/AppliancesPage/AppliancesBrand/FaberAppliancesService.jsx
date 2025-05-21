import BreadCumb from "../../../Components/Common/BreadCumb";
import FaberAppliancesServiceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/FaberAppliancesServiceDetail';

const FaberAppliancesService = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Faber-appliance-repair-faj.avif"
        Title="Faber Appliances Service"
      ></BreadCumb>

      <FaberAppliancesServiceDetail />
    </div>
  );
};

export default FaberAppliancesService;
