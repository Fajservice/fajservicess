import BreadCumb from "../../../Components/Common/BreadCumb";
import IndesitWashingMachineDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/IndesitWashingMachineDetail';

const IndesitWashingMachine = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/desktop/Indesit-washing-machine-Repair-faj.avif"
        mobileBgImg="img/banners/homeappliancesbrands/mobile/Indesit-washing-machine-Repair-faj.avif"
        Title="Indesit Washing Machine Repair & Service"
    ></BreadCumb>

    <IndesitWashingMachineDetail />        
</div>
  );
};

export default IndesitWashingMachine;
