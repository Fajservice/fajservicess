import BreadCumb from "../../../Components/Common/BreadCumb";
import EcovacsVacuumCleanerRepairAndServiceDetail from "../../../Components/ServiceDetails/HomeAppDetails/EcovacsVacuumCleanerRepairAndServiceDetail";

const EcovacsVacuumCleanerRepairAndService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/robot-vacuum-cleaner-repair-and-service-center-faj.avif"
                mobileBgImg="img/banners/Robot-Vacuum-Cleaner-Repair-and-Service-Center-FAJ-mobile.avif"
                Title="Robot Vacuum Cleaner Repair & Service Center"
            ></BreadCumb>

            <EcovacsVacuumCleanerRepairAndServiceDetail></EcovacsVacuumCleanerRepairAndServiceDetail>


        </div>
    );
};

export default EcovacsVacuumCleanerRepairAndService;