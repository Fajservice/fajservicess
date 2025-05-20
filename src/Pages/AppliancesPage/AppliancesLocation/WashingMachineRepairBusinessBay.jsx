import WashingMachineRepairBusinessBayDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/WashingMachineRepairBusinessBayDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const WashingMachineRepairBusinessBay = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Washing Machine Repair BusinessBay">
            </BreadCumb>
            <WashingMachineRepairBusinessBayDetail />
    </div>
  )
}

export default WashingMachineRepairBusinessBay
