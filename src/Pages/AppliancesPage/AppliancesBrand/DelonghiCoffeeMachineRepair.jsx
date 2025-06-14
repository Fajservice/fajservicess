import BreadCumb from "../../../Components/Common/BreadCumb";
import DelonghiCoffeeMachineRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/DelonghiCoffeeMachineRepairDetail';

const DelonghiCoffeeMachineRepair = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        mobileBgImg="img/banners/homeappliancesbrands/mobile/DelonghiCoffeeMachineRepair.avif"
        bgImg="img/banners/homeappliancesbrands/DelonghiCoffeeMachineRepair.avif"
        Title="Delonghi Coffee Machine Repair"
      ></BreadCumb>

      <DelonghiCoffeeMachineRepairDetail />
    </div>
  );
};

export default DelonghiCoffeeMachineRepair;
