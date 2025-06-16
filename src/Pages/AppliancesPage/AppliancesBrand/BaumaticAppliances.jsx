import BreadCumb from "../../../Components/Common/BreadCumb";
import BaumaticAppliancesDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BaumaticAppliancesDetail';

const BaumaticAppliances = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/Baumatic-Appliance-repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Baumatic-Appliance-repair-faj.avif"
        Title="Baumatic Appliances Repair in dubai"
      ></BreadCumb>

      <BaumaticAppliancesDetail />
    </div>
  );
};

export default BaumaticAppliances;
