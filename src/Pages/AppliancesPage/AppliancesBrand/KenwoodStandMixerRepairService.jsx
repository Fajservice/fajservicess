import BreadCumb from "../../../Components/Common/BreadCumb";
import KenwoodStandMixerRepairServiceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/KenwoodStandMixerRepairServiceDetail';

const KenwoodStandMixerRepairService = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/Kenwood-mixer-repair-service-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Kenwood-mixer-repair-service-faj.avif"
        Title="Kenwood StandMixer RepairService"
      ></BreadCumb>

      <KenwoodStandMixerRepairServiceDetail />
    </div>
  );
};

export default KenwoodStandMixerRepairService;
