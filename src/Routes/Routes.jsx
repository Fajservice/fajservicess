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
import FreestandingHomeAppliancesRepairService from "../Pages/FreestandingHomeAppliancesRepairService";
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
import AcRepairinAlJafiliya from "../Pages/AcRepairinAlJafiliya";
import AcRepairinTheGreens from "../Pages/AcRepairinTheGreens";
import AcRepairInUmmAlSheif from "../Pages/AcRepairInUmmAlSheif";
import MideaAcRepair from "../Pages/MideaAcRepair";
import WestpointAcRepair from "../Pages/WestpointAcRepair";
import CoolineAcRepair from "../Pages/CoolineAcRepair";
import AcRepairInDubaiStudioCity from "../Pages/AcRepairInDubaiStudioCity";
import AcRepairInJumeirahIslands from "../Pages/AcRepairInJumeirahIslands";
import AcRepairInAlQusais from "../Pages/AcRepairInAlQusais";
import AcRepairInTheSprings from "../Pages/AcRepairInTheSprings";
import AcRepairInAlMirdif from "../Pages/AcRepairInAlMirdif";
import AcRepairInInternationalMediaAndProductionZone from "../Pages/AcRepairInInternationalMediaAndProductionZone";
import AcRepairInJumeirahVillageCircle from "../Pages/AcRepairInJumeirahVillageCircle";
import AcRepairInBusinessBay from "../Pages/AcRepairInBusinessBay";
import DaewooAcRepair from "../Pages/DaewooAcRepair";
import SkmAcRepair from "../Pages/SkmAcRepair";
import BlueStarAcRepair from "../Pages/BlueStarAcRepair";
import AcRepairInArabianRanches from "../Pages/AcRepairInArabianRanches";
import AcRepairInDip from "../Pages/AcRepairInDip";
import AcRepairInDiscoveryGardens from "../Pages/AcRepairInDiscoveryGardens";
import AcRepairInAlWahaCommunity from "../Pages/AcRepairInAlWahaCommunity";
import AcRepairInHudaiba from "../Pages/AcRepairInHudaiba";
import AcRepairInImpz from "../Pages/AcRepairInImpz";
import AcRepairInAlSatwa from "../Pages/AcRepairInAlSatwa";
import AcRepairInAlJafza from "../Pages/AcRepairInAlJafza";
import AcRepairInJumeriahVillageTriangle from "../Pages/AcRepairInJumeriahVillageTriangle";
import AcRepairInAlKhawaneej from "../Pages/AcRepairInAlKhawaneej";
import AcRepairInAlManara from "../Pages/AcRepairInAlManara";
import AcRepairInLayanCommunity from "../Pages/AcRepairInLayanCommunity";
import AcRepairInAlBadaa from "../Pages/AcRepairInAlBadaa";
import AcRepairinAlTawar from "../Pages/AcRepairinAlTawar";
import AcRepairInJumeirahLakeTowers from "../Pages/AcRepairInJumeirahLakeTowers";
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
        path: "/appliances-repair-service/",
        element: <FreestandingHomeAppliancesRepairService></FreestandingHomeAppliancesRepairService>,
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
        path: "/blue-star-ac-repair-in-dubai-blue-star-ac-maintenance-in-dubai-blue-star-ac-fix-in-dubai-blue-star-ac-service-in-dubai-blue-star-air-condition-repair-in-dubai-blue-star-air-condition-maintenance-in-du/",
        element: <BlueStarAcRepair />,
      },
      {
        path: "/rheem-ac-maintenance-in-dubai/",
        element: <RheemAcRepair />,
      },
      {
        path: "/ruud-ac-repair-in-dubai-ruud-ac-maintenance-in-dubai-ruud-ac-fix-in-dubai-ruud-ac-service-in-dubai-ruud-air-condition-repair-in-dubai-ruud-air-condition-maintenance-in-dubai-ruud-air-condition-mainten/",
        element: <RuudAcRepair />,
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
        path: "/ac-services-in-al-jafiliya/",
        element: <AcRepairinAlJafiliya/>,
      },
      {
        path: "/ac-services-in-the-meadows/",
        element: <AcRepairinTheMeadows/>,
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
        element: <AcRepairInJumeriahVillageTriangle/>,
      },
      {
        path: "/ac-services-in-arabian-ranches-2/",
        element: <AcRepairInArabianRanches2/>,
      },
      {
        path: "/ac-services-in-dubai-studio-city/",
        element: <AcRepairInDubaiStudioCity/>,
      },
      {
        path: "/ac-services-jumeirah-islands/",
        element: <AcRepairInJumeirahIslands/>,
      },
      {
        path: "/ac-repair-al-qusais/",
        element: <AcRepairInAlQusais/>,
      },
      {
        path: "/ac-services-in-the-springs/",
        element: <AcRepairInTheSprings/>,
      },
      {
        path: "/ac-services-in-al-mirdif/",
        element: <AcRepairInAlMirdif/>,
      },
      {
        path: "/ac-services-in-international-media-and-production-zone/",
        element: <AcRepairInInternationalMediaAndProductionZone/>,
      },
      {
        path: "/ac-services-in-jumeirah-village-circle/",
        element: <AcRepairInJumeirahVillageCircle/>,
      },
      {
        path: "/ac-services-in-business-bay/",
        element: <AcRepairInBusinessBay/>,
      },
      {
        path: "/ac-services-in-arabian-ranches/",
        element: <AcRepairInArabianRanches/>,
      },
      {
        path: "/ac-services-in-dip/",
        element: <AcRepairInDip/>,
      },
      {
        path: "/ac-services-in-discovery-gardens/",
        element: <AcRepairInDiscoveryGardens/>,
      },
      {
        path: "/ac-services-in-al-waha-community/",
        element: <AcRepairInAlWahaCommunity/>,
      },
      {
        path: "/ac-services-in-hudaiba/",
        element: <AcRepairInHudaiba/>,
      },
      {
        path: "/ac-services-in-impz/",
        element: <AcRepairInImpz/>,
      },
      {
        path: "/ac-services-in-al-satwa/",
        element: <AcRepairInAlSatwa/>,
      },
      {
        path: "/ac-repair-in-jafza-air-condition-maintenance-in-jafza-air-conditioning-fix-amc-service-in-jebel-ali-free-zone-dubai/",
        element: <AcRepairInAlJafza/>,
      },
      {
        path: "/ac-services-in-al-khawaneej/",
        element: <AcRepairInAlKhawaneej/>,
      },
      {
        path: "/ac-services-in-al-manara/",
        element: <AcRepairInAlManara/>,
      },
      {
        path: "/ac-services-in-jumeirah-golf-estates/",
        element: <AcRepairInJumeirahGolfEstates/>,
      },
      {
        path: "/ac-services-in-layan-community/",
        element: <AcRepairInLayanCommunity/>,
      },
      {
        path: "/ac-services-in-al-badaa/",
        element: <AcRepairInAlBadaa/>,
      },
      {
        path: "/ac-services-dubai-internet-city/",
        element: <AcRepairInDubaiInternetCity/>,
      },
      {
        path: "/ac-services-in-jumeirah-lake-towers/",
        element: <AcRepairInJumeirahLakeTowers/>,
      },
      {
        path: "/ac-services-in-al-tawar/",
        element: <AcRepairinAlTawar/>,
      },
      {
        path: "/ac-services-in-al-barsha-south/",
        element: <AcRepairInAlBarshaSouth/>,
      },
    ],
  }
], {
  //  basename: "/fajservicess"
});