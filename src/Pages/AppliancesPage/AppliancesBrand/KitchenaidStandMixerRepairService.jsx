import BreadCumb from "../../../Components/Common/BreadCumb";
import KitchenaidStandMixerRepairServiceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/KitchenaidStandMixerRepairServiceDetail';

const KitchenaidStandMixerRepairService = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/KitchenaidStandMixerRepairService.avif"
        Title="Kitchenaid StandMixer Repair Service"
      ></BreadCumb>

      <KitchenaidStandMixerRepairServiceDetail />
    </div>
  );
};

export default KitchenaidStandMixerRepairService;
