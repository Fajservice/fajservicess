import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import WashingMachineRepairNearMeDetail from "../../Components/ServiceDetails/DubaiDetails/WashingMachineRepairNearMeDetail.jsx";

const WashingMachineRepairNearMe = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/washing-machine.avif"
                mobileBgImg="img/banners/washing-machine.avif"
                Title="Washing Machine Repair Near Me - Dryer Service Dubai - FAJ"
            ></BreadCumb>
            <WashingMachineRepairNearMeDetail></WashingMachineRepairNearMeDetail>
        </div>
    );
};

export default WashingMachineRepairNearMe;