import BreadCumb from "../../Components/Common/BreadCumb";
import VacuumCleanerRepairDetail from "../../Components/ServiceDetails/HomeAppDetails/VacuumCleanerRepairDetail";



const VacuumCleanerRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/robot-vacuum.jpg"
                Title="Hob Repair Service Dubai"
            ></BreadCumb>

            <VacuumCleanerRepairDetail></VacuumCleanerRepairDetail>


        </div>
    );
};

export default VacuumCleanerRepair;

