import BreadCumb from "../Components/Common/BreadCumb";
import WashingMachineRepairServiceDubaiDetails from "../Components/ServiceDetails/WashingMachineRepairServiceDubaiDetails";

const WashingMachineRepairServiceDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg={`${import.meta.env.BASE_URL}/img/page_heading_1.jpg`}
                Title="Washing Machine Repair Service Dubai"
            ></BreadCumb> 
            <WashingMachineRepairServiceDubaiDetails></WashingMachineRepairServiceDubaiDetails>           
        </div>
    );
};

export default WashingMachineRepairServiceDubai;