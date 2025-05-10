import BreadCumb from "../Components/Common/BreadCumb";
import ColdRoomRepairDetail from "../Components/ServiceDetails/ColdRoomRepairDetail";

const ColdRoomRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/ac_service-bannerbg.jpg"

                Title="Cold Room Repair"
            ></BreadCumb> 
            <ColdRoomRepairDetail></ColdRoomRepairDetail>           
        </div>
    );
};

export default ColdRoomRepair;