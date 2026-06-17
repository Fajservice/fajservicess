import BreadCumb from "../../../Components/Common/BreadCumb.jsx";
import KarcherVacuumRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/KarcherVacuumRepairDetail.jsx';

const KarcherVacuumRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        mobileBgImg="img/banners/homeappliancesbrands/mobile/KarcherVacuumRepair.avif"
        bgImg="img/banners/homeappliancesbrands/desktop/KarcherVacuumRepair.avif"
        Title="Sage Repair"
      ></BreadCumb>
      <KarcherVacuumRepairDetail />
    </div>
  );
};

export default KarcherVacuumRepair;
