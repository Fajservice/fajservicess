import BreadCumb from "../../Components/Common/BreadCumb";
import VacuumCleanerRepairDetail from "../../Components/ServiceDetails/HomeAppDetails/VacuumCleanerRepairDetail";



const VacuumCleanerRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/robot-vacuum.jpg"
                Title="Robot Vacuum Cleaner Repair & Service Center"
            ></BreadCumb>

            <VacuumCleanerRepairDetail></VacuumCleanerRepairDetail>


        </div>
    );
};

export default VacuumCleanerRepair;

