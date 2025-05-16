import BreadCumb from "../../../Components/Common/BreadCumb";
import WhiteWestinghouseFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/WhiteWestinghouseFridgeRepairDetail';

const WhiteWestinghouseFridgeRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/white-westing-house.avif"
        Title="White Westinghous Fridge Repair & Service"
      ></BreadCumb>

      <WhiteWestinghouseFridgeRepairDetail />
    </div>
  );
};

export default WhiteWestinghouseFridgeRepair;
