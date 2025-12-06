import BreadCumb from "../../../Components/Common/BreadCumb";
import RoboRockVacuumCleanerRepairAndServiceDetail from "../../../Components/ServiceDetails/HomeAppDetails/RoboRockVacuumCleanerRepairAndServiceDetail.jsx";

const RoboRockVacuumCleanerRepairAndService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/robot-vacuum-cleaner-repair-and-service-center-faj.avif"
                mobileBgImg="img/banners/Robot-Vacuum-Cleaner-Repair-and-Service-Center-FAJ-mobile.avif"
                Title="Robot Vacuum Cleaner Repair & Service Center"
            ></BreadCumb>

            <RoboRockVacuumCleanerRepairAndServiceDetail></RoboRockVacuumCleanerRepairAndServiceDetail>


        </div>
    );
};

export default RoboRockVacuumCleanerRepairAndService;