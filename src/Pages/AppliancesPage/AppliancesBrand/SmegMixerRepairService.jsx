import BreadCumb from "../../../Components/Common/BreadCumb";
import SmegMixerRepairServiceDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/SmegMixerRepairServiceDetail';

const SmegMixerRepairService = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Smeg-mixer-repair-faj.avif"
        Title="Smeg Mixer Repair Service"
      ></BreadCumb>

      <SmegMixerRepairServiceDetail />
    </div>
  );
};

export default SmegMixerRepairService;
