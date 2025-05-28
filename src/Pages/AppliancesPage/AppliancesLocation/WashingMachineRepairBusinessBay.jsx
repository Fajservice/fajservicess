import WashingMachineRepairBusinessBayDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/WashingMachineRepairBusinessBayDetail";
import BreadCumb from "../../../Components/Common/BreadCumb";
const WashingMachineRepairBusinessBay = () => {
  return (
     <div className="serviceDetails">
            <BreadCumb
bgImg="img/banners/appliances-banner-desktop-faj.avif"
mobileBgImg="img/banners/appliances-banner-mobile-faj.avif"
                Title="Washing Machine Repair BusinessBay">
            </BreadCumb>
            <WashingMachineRepairBusinessBayDetail />
    </div>
  )
}

export default WashingMachineRepairBusinessBay
