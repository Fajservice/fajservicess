import BreadCumb from "../../../Components/Common/BreadCumb";
import MarvelFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/MarvelFridgeRepairDetail';

const MarvelFridgeRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/marvel.avif"
        Title="Marvel Fridge Repair"
      ></BreadCumb>

      <MarvelFridgeRepairDetail />
    </div>
  );
};

export default MarvelFridgeRepair;
