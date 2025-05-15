import BreadCumb from "../../../Components/Common/BreadCumb";
import FaberAppliancesServiceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/FaberAppliancesServiceDetail';

const FaberAppliancesService = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Faber.avif"
        Title="Faber Appliances Service"
    ></BreadCumb>

    <FaberAppliancesServiceDetail />        
</div>
  );
};

export default FaberAppliancesService;
