import BreadCumb from "../../../Components/Common/BreadCumb";
import BaumaticAppliancesDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BaumaticAppliancesDetail';

const BaumaticAppliances = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Baumatic-banner.avif"
        Title="Baumatic Appliances Repair in dubai"
      ></BreadCumb>

      <BaumaticAppliancesDetail />
    </div>
  );
};

export default BaumaticAppliances;
