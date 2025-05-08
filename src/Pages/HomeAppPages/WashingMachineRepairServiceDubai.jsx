
import BreadCumb from "../../Components/Common/BreadCumb";
import WashingMachineRepairServiceDubaiDetail from "../../Components/ServiceDetails/HomeAppDetails/WashingMachineRepairServiceDubaiDetail";

const WashingMachineRepairServiceDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/banners/washing-machine.jpg"
                Title="Washing Machine Repair Service in Dubai"
            ></BreadCumb> 
            <WashingMachineRepairServiceDubaiDetail></WashingMachineRepairServiceDubaiDetail>

        </div>
    );
};

export default WashingMachineRepairServiceDubai;
