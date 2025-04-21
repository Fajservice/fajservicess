import {
  createHashRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AboutPage from "../Pages/AboutPage";
import AcServiceInDubai from "../Pages/AcServiceInDubai";
import AcMaintenanceDubai from "../Pages/AcMaintenanceDubai";
import AcAnnualMaintenanceContract from "../Pages/AcAnnualMaintenanceContract";
import AcRepairDubai from "../Pages/AcRepairDubai";
import WashingMachineRepairServiceDubai from "../Pages/WashingMachineRepairServiceDubai";
import RefrigeratorRepairInDubai from "../Pages/RefrigeratorRepairInDubai";
import ColdRoomRepair from "../Pages/ColdRoomRepair";
import ServicesPage from "../Pages/ServicesPage";
import ProjectPage from "../Pages/ProjectPage";
import ProjectDetailsPage from "../Pages/ProjectDetailsPage";
import TeamPage from "../Pages/TeamPage";
import TeamDetailsPage from "../Pages/TeamDetailsPage";
import BlogPage from "../Pages/BlogPage";
import ContactPage from "../Pages/ContactPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import DubaiAcServicePriceList from "../Pages/DubaiAcServicePriceList"
import AcRepairInRitz from "../Pages/AcRepairInRitz";
import ColemenAcRepair from "../Pages/ColemenAcRepair";
import AcRepairInSiliconOasis from "../Pages/AcRepairInSiliconOasis";
import AcRepairInMetha from "../Pages/AcRepairInMetha";
import AcRepairInJumeirahVillage from "../Pages/AcRepairInJumeirahVillage";
import AcRepairInJebelAliFreeZone from "../Pages/AcRepairInJebelAliFreeZone";
import YorkAcRepair from "../Pages/YorkAcRepair";
import SupraAcRepair from "../Pages/SupraAcRepair";
import DaikinAcRepair from "../Pages/DaikinAcRepair";
import FujitsuAcRepair from "../Pages/FujitsuAcRepair";
import AcRepairInArabianRanches2 from "../Pages/AcRepairInArabianRanches2";
import AcRepairInLimestoneHouseDifc from "../Pages/AcRepairInLimestoneHouseDifc";
import AcRepairInAcademyCity from "../Pages/AcRepairInAcademyCity";
import AcRepairinAlTawar from "../Pages/AcRepairinAlTawar";
import AcRepairinAlJafiliya from "../Pages/AcRepairinAlJafiliya";
import AcRepairinTheGreens from "../Pages/AcRepairinTheGreens";
import AcRepairInUmmAlSheif from "../Pages/AcRepairInUmmAlSheif";
import AcRepairInTheMeadows from "../Pages/AcRepairInTheMeadows";
import MideaAcRepair from "../Pages/MideaAcRepair";
import WestpointAcRepair from "../Pages/WestpointAcRepair";
import CoolineAcRepair from "../Pages/CoolineAcRepair";
import DaewooAcRepair from "../Pages/DaewooAcRepair";
import SkmAcRepair from "../Pages/SkmAcRepair";
export const router = createHashRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us/",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/services/",
        element: <ServicesPage />,
      },
      {
        path: "/ac-service-in-dubai/",
        element: <AcServiceInDubai></AcServiceInDubai>,
      },
      ,
      {
        path: "/ac-maintenance-dubai/",
        element: <AcMaintenanceDubai></AcMaintenanceDubai>,
      },
      {
        path: "/ac-annual-maintenance-contract/",
        element: <AcAnnualMaintenanceContract></AcAnnualMaintenanceContract>,
      },
      {
        path: "/ac-repair-dubai/",
        element: <AcRepairDubai></AcRepairDubai>,
      },
      {
        path: "/washing-machine-repair-service-dubai/",
        element: <WashingMachineRepairServiceDubai></WashingMachineRepairServiceDubai>,
      },
      {
        path: "/refrigerator-repair-service/",
        element: <RefrigeratorRepairInDubai></RefrigeratorRepairInDubai>,
      },
      {
        path: "/cold-room-repair/",
        element: <ColdRoomRepair></ColdRoomRepair>,
      },
      {
        path: "/coleman-ac-repair-in-dubai-coleman-ac-maintenance-in-dubai-coleman-ac-fix-in-dubai-coleman-ac-service-in-dubai-coleman-air-condition-repair-in-dubai-coleman-air-condition-maintenance-in-dubai-coleman/",
        element: <ColemenAcRepair></ColemenAcRepair>,
      },
      {
        path: "/supra-ac-repair-in-dubai-supra-ac-maintenance-in-dubai-supra-ac-fix-in-dubai-supra-ac-service-in-dubai-supra-air-condition-repair-in-dubai-supra-air-condition-maintenance-in-dubai-supra-air-condition/",
        element: <SupraAcRepair />,
      },
      {
        path: "/midea-ac-installation-maintenance-repair-fix-service-in-dubai/",
        element: <MideaAcRepair />,
      },
      {
        path: "/fujitsu-ac-repair-in-dubai-fujitsu-ac-maintenance-in-dubai-fujitsu-ac-fix-in-dubai-fujitsu-ac-service-in-dubai-fujitsu-air-condition-repair-in-dubai-fujitsu-air-condition-maintenance-in-dubai-fujitsu/",
        element: <FujitsuAcRepair />,
      },
      {
        path: "/daikin-ac-repair-in-dubai-daikin-ac-maintenance-in-dubai-daikin-ac-fix-in-dubai-daikin-ac-service-in-dubai-daikin-air-condition-repair-in-dubai-daikin-air-condition-maintenance-in-dubai-daikin-air-con/",
        element: <DaikinAcRepair />,
      },
      {
        path: "/daewoo-ac-repair-in-dubai-daewoo-ac-maintenance-in-dubai-daewoo-ac-fix-in-dubai-daewoo-ac-service-in-dubai-daewoo-air-condition-repair-in-dubai-daewoo-air-condition-maintenance-in-dubai-daewoo-air-con/",
        element: <DaewooAcRepair />,
      },
      {
        path: "/skm-ac-repair-in-dubai-skm-ac-maintenance-in-dubai-skm-ac-fix-in-dubai-skm-ac-service-in-dubai-skm-air-condition-repair-in-dubai-skm-air-condition-maintenance-in-dubai-skm-air-condition-maintenance-in/",
        element: <SkmAcRepair />,
      },
      {
        path: "/cooline-ac-repair-in-dubai-cooline-ac-maintenance-in-dubai-cooline-ac-fix-in-dubai-cooline-ac-service-in-dubai-cooline-air-condition-repair-in-dubai-cooline-air-condition-maintenance-in-dubai-cooline/",
        element: <CoolineAcRepair />,
      },
      {
        path: "/westpoint-ac-repair-in-dubai-westpoint-ac-maintenance-in-dubai-westpoint-ac-fix-in-dubai-westpoint-ac-service-in-dubai-west-point-air-condition-repair-in-dubai-west-point-air-condition-maintenance-in/",
        element: <WestpointAcRepair />,
      },
      {
        path: "/york-ac-repair-in-dubai-york-ac-maintenance-in-dubai-york-ac-fix-in-dubai-york-ac-service-in-dubai-york-air-condition-repair-in-dubai-york-air-condition-maintenance-in-dubai-york-air-condition-mainten/",
        element: <YorkAcRepair></YorkAcRepair>,
      },
      {
        path: "/project",
        element: <ProjectPage></ProjectPage>,
      },
      {
        path: "/project/project-details",
        element: <ProjectDetailsPage></ProjectDetailsPage>,
      },
      {
        path: "/team",
        element: <TeamPage></TeamPage>,
      },
      {
        path: "/team/team-details",
        element: <TeamDetailsPage></TeamDetailsPage>,
      },
      {
        path: "/blogs",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/blog/:slug",
        element: <BlogDetailsPage></BlogDetailsPage>,
      },
      {
        path: "/contact-us/",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/dubai-ac-service-price-list/",
        element: <DubaiAcServicePriceList></DubaiAcServicePriceList>,
      },
      {
        path: "/ac-services-in-the-ritz-carlton-difc/",
        element: <AcRepairInRitz></AcRepairInRitz>,
      },
      {
        path: "/ac-services-in-dubai-silicon-oasis/",
        element: <AcRepairInSiliconOasis></AcRepairInSiliconOasis>,
      },
      {
        path: "/ac-services-in-metha/",
        element: <AcRepairInMetha></AcRepairInMetha>,
      },
      {
        path: "/ac-services-in-jumeirah-village/",
        element: <AcRepairInJumeirahVillage />,
      },
      {
        path: "/ac-services-in-jebel-ali-free-zone/",
        element: <AcRepairInJebelAliFreeZone />,
      },
      {
        path: "/ac-services-in-umm-al-sheif/",
        element: <AcRepairInUmmAlSheif/>,
      },
      {
        path: "/ac-services-in-the-greens/",
        element: <AcRepairinTheGreens/>,
      },
      {
        path: "/ac-services-in-the-greens/",
        element: <AcRepairInTheMeadows/>,
      },
      {
        path: "/ac-services-in-al-jafiliya/",
        element: <AcRepairinAlJafiliya/>,
      },
      {
        path: "/ac-services-in-the-meadows/",
        element: <AcRepairinAlTawar/>,
      },
      {
        path: "/ac-services-in-academy-city/",
        element: <AcRepairInAcademyCity/>,
      },
      {
        path: "/ac-services-in-limestone-house-difc/",
        element: <AcRepairInLimestoneHouseDifc/>,
      },
      {
        path: "/ac-services-in-jumeirah-village-triangle/",
        element: <AcRepairInJumeirahVillage/>,
      },
      {
        path: "/ac-services-in-arabian-ranches-2/",
        element: <AcRepairInArabianRanches2/>,
      },
    ],
  }
], {
  //  basename: "/fajservicess"
});