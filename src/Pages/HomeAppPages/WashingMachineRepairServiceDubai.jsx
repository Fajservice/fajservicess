
import BreadCumb from "../../Components/Common/BreadCumb";
import WashingMachineRepairServiceDubaiDetail from "../../Components/ServiceDetails/HomeAppDetails/WashingMachineRepairServiceDubaiDetail";

const WashingMachineRepairServiceDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/banners/Oven-Repair-Service.jpg"
                Title="Gas & Electrical Oven Repair Service in Dubai"
            ></BreadCumb> 
            <WashingMachineRepairServiceDubaiDetail></WashingMachineRepairServiceDubaiDetail>

        </div>
    );
};

export default WashingMachineRepairServiceDubai;
