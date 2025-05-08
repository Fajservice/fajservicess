import {
  createHashRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AboutPage from "../Pages/AboutPage";
import AcServiceInDubai from "../Pages/AcPages/AcLocation/AcServiceInDubai";
import AcMaintenanceDubai from "../Pages/AcMaintenanceDubai";
import AcAnnualMaintenanceContract from "../Pages/AcAnnualMaintenanceContract";
import AcRepairDubai from "../Pages/AcRepairDubai";
import FreestandingHomeAppliancesRepairService from "../Pages/HomeAppPages/FreestandingHomeAppliancesRepairService";
import CoffeeMachineServiceCenterInDubai from "../Pages/CoffeeMachineServiceCenterInDubai";
import CommercialCoffeeMachineRepair from "../Pages/CommercialCoffeeMachineRepair";
import WashingMachineRepairServiceDubai from "../Pages/HomeAppPages/WashingMachineRepairServiceDubai";
import RefrigeratorRepairInDubai from "../Pages/HomeAppPages/RefrigeratorRepairInDubai";
import HobRepair from "../Pages/HomeAppPages/HobRepair";
import OvenRepairService from "../Pages/HomeAppPages/OvenRepairService";
import GasRangeRepairService from "../Pages/HomeAppPages/GasRangeRepairService";
import DishwasherRepair from "../Pages/HomeAppPages/DishwasherRepair";
import VacuumCleanerRepair from "../Pages/HomeAppPages/VacuumCleanerRepair";
import SmallAppliancesRepair from "../Pages/HomeAppPages/SmallAppliancesRepair";
import IntegratedApplianceRepair from "../Pages/HomeAppPages/IntegratedApplianceRepair";
import AppliancesMaintenanceContract from "../Pages/HomeAppPages/AppliancesMaintenanceContract";
import ColdRoomRepair from "../Pages/ColdRoomRepair";
import ServicesPage from "../Pages/ServicesPage";
import ProjectPage from "../Pages/ProjectPage";
import ProjectDetailsPage from "../Pages/ProjectDetailsPage";
import TeamPage from "../Pages/TeamPage";
import TeamDetailsPage from "../Pages/TeamDetailsPage";
import BlogPage from "../Pages/BlogPage";
import ContactPage from "../Pages/ContactPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import DubaiAcServicePriceList from "../Pages/DubaiAcServicePriceList";
import AcRepairInRitz from "../Pages/AcPages/AcLocation/AcRepairInRitz";
import ColemenAcRepair from "../Pages/AcPages/AcBrand/ColemenAcRepair";
import AcRepairInSiliconOasis from "../Pages/AcPages/AcLocation/AcRepairInSiliconOasis";
import AcRepairInMetha from "../Pages/AcPages/AcLocation/AcRepairInMetha";
import AcRepairInJumeirahVillage from "../Pages/AcPages/AcLocation/AcRepairInJumeirahVillage";
import YorkAcRepair from "../Pages/AcPages/AcBrand/YorkAcRepair";
import SupraAcRepair from "../Pages/AcPages/AcBrand/SupraAcRepair";
import DaikinAcRepair from "../Pages/AcPages/AcBrand/DaikinAcRepair";
import FujitsuAcRepair from "../Pages/AcPages/AcBrand/FujitsuAcRepair";
import AcRepairInArabianRanches2 from "../Pages/AcPages/AcLocation/AcRepairInArabianRanches2";
import AcRepairInLimestoneHouseDifc from "../Pages/AcPages/AcLocation/AcRepairInLimestoneHouseDifc";
import AcRepairInAcademyCity from "../Pages/AcPages/AcLocation/AcRepairInAcademyCity";
import AcRepairinAlJafiliya from "../Pages/AcPages/AcLocation/AcRepairinAlJafiliya";
import AcRepairinTheGreens from "../Pages/AcPages/AcLocation/AcRepairinTheGreens";
import AcRepairInUmmAlSheif from "../Pages/AcPages/AcLocation/AcRepairInUmmAlSheif";
import MideaAcRepair from "../Pages/AcPages/AcBrand/MideaAcRepair";
import WestpointAcRepair from "../Pages/AcPages/AcBrand/WestpointAcRepair";
import CoolineAcRepair from "../Pages/AcPages/AcBrand/CoolineAcRepair";
import AcRepairInDubaiStudioCity from "../Pages/AcPages/AcLocation/AcRepairInDubaiStudioCity";
import AcRepairInJumeirahIslands from "../Pages/AcPages/AcLocation/AcRepairInJumeirahIslands";
import AcRepairInAlQusais from "../Pages/AcPages/AcLocation/AcRepairInAlQusais";
import AcRepairInTheSprings from "../Pages/AcPages/AcLocation/AcRepairInTheSprings";
import AcRepairInAlMirdif from "../Pages/AcPages/AcLocation/AcRepairInAlMirdif";
import AcRepairInInternationalMediaAndProductionZone from "../Pages/AcPages/AcLocation/AcRepairInInternationalMediaAndProductionZone";
import AcRepairInJumeirahVillageCircle from "../Pages/AcPages/AcLocation/AcRepairInJumeirahVillageCircle";
import AcRepairInBusinessBay from "../Pages/AcPages/AcLocation/AcRepairInBusinessBay";
import DaewooAcRepair from "../Pages/AcPages/AcBrand/DaewooAcRepair";
import SkmAcRepair from "../Pages/AcPages/AcBrand/SkmAcRepair";
import BlueStarAcRepair from "../Pages/AcPages/AcBrand/BlueStarAcRepair";
import AcRepairInArabianRanches from "../Pages/AcPages/AcLocation/AcRepairInArabianRanches";
import AcRepairInDip from "../Pages/AcPages/AcLocation/AcRepairInDip";
import AcRepairInDiscoveryGardens from "../Pages/AcPages/AcLocation/AcRepairInDiscoveryGardens";
import AcRepairInAlWahaCommunity from "../Pages/AcPages/AcLocation/AcRepairInAlWahaCommunity";
import AcRepairInHudaiba from "../Pages/AcPages/AcLocation/AcRepairInHudaiba";
import AcRepairInImpz from "../Pages/AcPages/AcLocation/AcRepairInImpz";
import AcRepairInAlSatwa from "../Pages/AcPages/AcLocation/AcRepairInAlSatwa";
import AcRepairInAlJafza from "../Pages/AcPages/AcLocation/AcRepairInAlJafza";
import AcRepairInJumeriahVillageTriangle from "../Pages/AcPages/AcLocation/AcRepairInJumeriahVillageTriangle";
import AcRepairInAlKhawaneej from "../Pages/AcPages/AcLocation/AcRepairInAlKhawaneej";
import AcRepairInAlManara from "../Pages/AcPages/AcLocation/AcRepairInAlManara";
import AcRepairInLayanCommunity from "../Pages/AcPages/AcLocation/AcRepairInLayanCommunity";
import AcRepairInAlBadaa from "../Pages/AcPages/AcLocation/AcRepairInAlBadaa";
import AcRepairinAlTawar from "../Pages/AcPages/AcLocation/AcRepairinAlTawar";
import AcRepairInJumeirahLakeTowers from "../Pages/AcPages/AcLocation/AcRepairInJumeirahLakeTowers";
import RheemAcRepair from "../Pages/AcPages/AcBrand/RheemAcRepair";
import RuudAcRepair from "../Pages/AcPages/AcBrand/RuudAcRepair";
import AcRepairinTheMeadows from "../Pages/AcPages/AcLocation/AcRepairinTheMeadows";
import AcRepairInJumeirahGolfEstates from "../Pages/AcPages/AcLocation/AcRepairInJumeirahGolfEstates";
import AcRepairInDubaiInternetCity from "../Pages/AcPages/AcLocation/AcRepairInDubaiInternetCity";
import AcRepairInAlBarshaSouth from "../Pages/AcPages/AcLocation/AcRepairInAlBarshaSouth";
import TraneAcRepair from "../Pages/AcPages/AcBrand/TraneAcRepair";
import SuperGeneralAcRepair from "../Pages/AcPages/AcBrand/SuperGeneralAcRepair";
import ToshibaAcRepair from "../Pages/AcPages/AcBrand/ToshibaAcRepair";
import LgAcRepair from "../Pages/AcPages/AcBrand/LgAcRepair";
import AftronAcRepair from "../Pages/AcPages/AcBrand/AftronAcRepair";
import PanasonicAcRepair from "../Pages/AcPages/AcBrand/PanasonicAcRepair";
import WhirlpoolAcRepair from "../Pages/AcPages/AcBrand/WhirlpoolAcRepair";
import SamsungAcRepair from "../Pages/AcPages/AcBrand/SamsungAcRepair";
import McquayAcRepair from "../Pages/AcPages/AcBrand/McquayAcRepair";
import NikaiAcRepair from "../Pages/AcPages/AcBrand/NikaiAcRepair";
import AcRepairInJebelAliFreeZone from "../Pages/AcPages/AcLocation/AcRepairInJebelAliFreeZone";
import AcRepairInGardens from "../Pages/AcPages/AcLocation/AcRepairInGardens";
import AcRepairInJBR from "../Pages/AcPages/AcLocation/AcRepairInJBR";
import AcRepairInFlamingoVillas from "../Pages/AcPages/AcLocation/AcRepairInFlamingoVillas";
import AcRepairInAlQuoz from "../Pages/AcPages/AcLocation/AcRepairInAlQuoz";
import AcRepairInJebelAliDip from "../Pages/AcPages/AcLocation/AcRepairInJebelAliDip";
import AcRepairInSufouh from "../Pages/AcPages/AcLocation/AcRepairInSufouh";
import CrafftAcRepair from "../Pages/AcPages/AcBrand/CrafftAcRepair";
import LennoxAcRepair from "../Pages/AcPages/AcBrand/LennoxAcRepair";
import HitachiAcRepair from "../Pages/AcPages/AcBrand/HitachiAcRepair";
import OGeneralAcRepair from "../Pages/AcPages/AcBrand/OGeneralAcRepair";
import BryantAcRepair from "../Pages/AcPages/AcBrand/BryantAcRepair";
import WhiteWestingHouseAcRepair from "../Pages/AcPages/AcBrand/WhiteWestingHouseAcRepair";
import MitsubishiAcRepair from "../Pages/AcPages/AcBrand/MitsubishiAcRepair";
import SanyoAcRepair from "../Pages/AcPages/AcBrand/SanyoAcRepair";
import DaikoolAcRepair from "../Pages/AcPages/AcBrand/DaikoolAcRepair";
import GoodmanAcRepair from "../Pages/AcPages/AcBrand/GoodmanAcRepair";
import SubZeroAcRepair from "../Pages/AcPages/AcBrand/SubZeroAcRepair";
import GreeAcRepair from "../Pages/AcPages/AcBrand/GreeAcRepair";
import HaierAcRepair from "../Pages/AcPages/AcBrand/HaierAcRepair";
import TCLAcRepair from "../Pages/AcPages/AcBrand/TCLAcRepair";
import AcRepairInTheVilla from "../Pages/AcPages/AcLocation/AcRepairInTheVilla";
import AcRepairInJumeirahBeachResidence from "../Pages/AcPages/AcLocation/AcRepairInJumeirahBeachResidence";
import OvenRepair from "../Pages/KitchenEquipPages/OvenRepair";
import DeepFryerService from "../Pages/KitchenEquipPages/DeepFryerService";
import KitchenEquipmentAMC from "../Pages/KitchenEquipPages/KitchenEquipmentAMC";
import KitchenEquipmentRepair from "../Pages/KitchenEquipPages/KitchenEquipmentRepair";
import  IceMakerRepair from "../Pages/RefrigerationEquipPages/IceMakerRepair";
import  RefrigerationAMCServices from "../Pages/RefrigerationEquipPages/RefrigerationAMCServices";
import  WalkInRefrigerationServices from "../Pages/RefrigerationEquipPages/WalkInRefrigerationServices";
import  FreezerAndChillerMaintenance from "../Pages/RefrigerationEquipPages/FreezerAndChillerMaintenance";
import  CommercialRefrigeratorRepair from "../Pages/RefrigerationEquipPages/CommercialRefrigeratorRepair";
import AcRepairInJumeirahHeights from "../Pages/AcPages/AcLocation/AcRepairInJumeirahHeights";
import AcRepairInQuozIndustrialArea from "../Pages/AcPages/AcLocation/AcRepairInQuozIndustrialArea";
import AcRepairInTheLakes from "../Pages/AcPages/AcLocation/AcRepairInTheLakes";
import AcRepairInBurjKhalifaLake from "../Pages/AcPages/AcLocation/AcRepairInBurjKhalifaLake";
import AcRepairInUmmSuqeim from "../Pages/AcPages/AcLocation/AcRepairInUmmSuqeim";
import AcRepairInJvt from "../Pages/AcPages/AcLocation/AcRepairInJvt";
import AcRepairInJumeirah from "../Pages/AcPages/AcLocation/AcRepairInJumeirah";
import AcRepairInJebelAli from "../Pages/AcPages/AcLocation/AcRepairInJebelAli";
import AcRepairInEmiratesHills from "../Pages/AcPages/AcLocation/AcRepairInEmiratesHills";
import AcRepairInJLT from "../Pages/AcPages/AcLocation/AcRepairInJLT";
import AcRepairInIndexTowerDifc from "../Pages/AcPages/AcLocation/AcRepairInIndexTowerDifc";
import AcRepairInAlRashidiya from "../Pages/AcPages/AcLocation/AcRepairInAlRashidiya";
import HotPlateRepair from "../Pages/KitchenEquipPages/HotPlateRepair";
import PizzaOvenMaintenance from "../Pages/KitchenEquipPages/PizzaOvenMaintenance";
import GasRangeRepair from "../Pages/KitchenEquipPages/GasRangeRepair";
import AcRepairInAlkarama from "../Pages/AcPages/AcLocation/AcRepairInAlkarama";
import AcRepairInsouthRidge from "../Pages/AcPages/AcLocation/AcRepairInsouthRidge";
import AcRepairInNadAlHammar from "../Pages/AcPages/AcLocation/AcRepairInNadAlHammar";
import AcRepairInMudon from "../Pages/AcPages/AcLocation/AcRepairInMudon";
import AcRepairInDubaiHealthcareCity from "../Pages/AcPages/AcLocation/AcRepairInDubaiHealthcareCity";
import AcRepairInKnowledgeVillage from "../Pages/AcPages/AcLocation/AcRepairInKnowledgeVillage";
import AcRepairInDeira from "../Pages/AcPages/AcLocation/AcRepairInDeira";
import AcRepairInAlFurjan from "../Pages/AcPages/AcLocation/AcRepairInAlFurjan";
import AcRepairInJumeirahPark from "../Pages/AcPages/AcLocation/AcRepairInJumeirahPark";
import AcRepairInRasAlKhorIndustrialArea from "../Pages/AcPages/AcLocation/AcRepairInRasAlKhorIndustrialArea";
import AcRepairInAlWarqa from "../Pages/AcPages/AcLocation/AcRepairInAlWarqa";
import AcRepairInDubailandTheVillaPoint from "../Pages/AcPages/AcLocation/AcRepairInDubailandTheVillaPoint";
import AcRepairInAlWasl from "../Pages/AcPages/AcLocation/AcRepairInAlWasl";
import AcRepairInInvestmentsPark from "../Pages/AcPages/AcLocation/AcRepairInInvestmentsPark";
import AcRepairInAlaweer from "../Pages/AcPages/AcLocation/AcRepairInAlaweer";
import AcRepairInDifc from "../Pages/AcPages/AcLocation/AcRepairInDifc";
import AcRepairInAlBarsha from "../Pages/AcPages/AcLocation/AcRepairInAlBarsha";
import AcRepairInAlRaffa from "../Pages/AcPages/AcLocation/AcRepairInAlRaffa";
import AcRepairInOldTown from "../Pages/AcPages/AcLocation/AcRepairInOldTown";
import FoodWarmerRepair from "../Pages/KitchenEquipPages/FoodWarmerRepair";
import MeatGrinderRepair from "../Pages/KitchenEquipPages/MeatGrinderRepair";
import DoughMixerRepair from "../Pages/KitchenEquipPages/DoughMixerRepair";
import AcRepairInDubaiInternationalFinancialCenter from "../Pages/AcPages/AcLocation/AcRepairInDubaiInternationalFinancialCenter";
import AcRepairInBurDubai from "../Pages/AcPages/AcLocation/AcRepairInBurDubai";
import AcRepairInSiliconOasisDubai from "../Pages/AcPages/AcLocation/AcRepairInSiliconOasisDubai";
import AcRepairInDubailandMazayaQueue from "../Pages/AcPages/AcLocation/AcRepairInDubailandMazayaQueue";
import AcRepairInDownTown from "../Pages/AcPages/AcLocation/AcRepairInDowntown";
import AcRepairInNadAlSheba from "../Pages/AcPages/AcLocation/AcRepairInNadAlSheba";
import AcRepairInAlBarari from "../Pages/AcPages/AcLocation/AcRepairInAlBarari";
import AcRepairInBaySquare from "../Pages/AcPages/AcLocation/AcRepairInBaySquare";
import AcRepairInMediaCity from "../Pages/AcPages/AcLocation/AcRepairInMediaCity";
import AcRepairInUmmRamool from "../Pages/AcPages/AcLocation/AcRepairInUmmRamool";
import AcRepairInCedreVillasSiliconOasisDubai from "../Pages/AcPages/AcLocation/AcRepairInCedreVillasSiliconOasisDubai";
import AcRepairInMotorCity from "../Pages/AcPages/AcLocation/AcRepairInMotorCity";
import AcRepairInVictoryHeights from "../Pages/AcPages/AcLocation/AcRepairInVictoryHeights";
import AcRepairInRemraam2 from "../Pages/AcPages/AcLocation/AcRepairInRemraam2";
import AcRepairInAlSafa from "../Pages/AcPages/AcLocation/AcRepairInAlSafa";
import AcRepairInRemraan from "../Pages/AcPages/AcLocation/AcRepairInRemraam";
import AcRepairInRemraam from "../Pages/AcPages/AcLocation/AcRepairInRemraam";
import AcRepairInJqe from "../Pages/AcPages/AcLocation/AcRepairInJqe";
import AcRepairInDubaiSportCity from "../Pages/AcPages/AcLocation/AcRepairInDubaiSportCity";
import AcRepairInDubaiMarina from "../Pages/AcPages/AcLocation/AcRepairInDubaiMarina";
import AcRepairInJebelAliVillage from "../Pages/AcPages/AcLocation/AcRepairInJebelAliVillage";
import AcRepairInMankhool from "../Pages/AcPages/AcLocation/AcRepairInMankhool";
import AcRepairInTheViews from "../Pages/AcPages/AcLocation/AcRepairInTheViews";
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
      {
        path: "/ac-maintenance-dubai/",
        element: <AcMaintenanceDubai></AcMaintenanceDubai>,
      },
      {
        path: "/ac-annual-maintenance-contract/",
        element: <AcAnnualMaintenanceContract />,
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
        path: "/coffee-machine-service-center-in-dubai/",
        element: <CoffeeMachineServiceCenterInDubai></CoffeeMachineServiceCenterInDubai>,
      }, 
      {
        path: "/coffee-machine-repairs/",
        element: <CommercialCoffeeMachineRepair></CommercialCoffeeMachineRepair>,
      },
      {
        path: "/hob-repair-service/",
        element: <HobRepair></HobRepair>,
      },
      {
        path: "/oven-repair-service/",
        element: <OvenRepairService></OvenRepairService>,
      },
      {
        path: "/hot-plate-repair/",
        element: <HotPlateRepair />
      },
      {
        path: "/pizza-oven-maintenance/",
        element: <PizzaOvenMaintenance />
      },
      {
        path: "/gas-cooker-repair/",
        element: <GasRangeRepair />
      },
      {
        path: "/deep-fryer-service/",
        element: <DeepFryerService/>,
      },
      {
        path: "/meat-grinder-repair/",
        element: <MeatGrinderRepair  />
      },
      {
        path: "/dough-mixer-repair",
        element: <DoughMixerRepair />
      },
      {
        path: "/food-warmer-repair/",
        element: <FoodWarmerRepair/>,
      },
      {
        path: "/commercial-kitchen-equipment-amc/",
        element: <KitchenEquipmentAMC/>,
      },
      {
        path: "/commercial-cooking-appliances-repair-service/",
        element: <KitchenEquipmentRepair/>,
      },
      {
        path: "/ice-maker-repair/",
        element: <IceMakerRepair/>,
      },
      {
        path: "/commercial-freezer-chiller-amc-service/",
        element: <RefrigerationAMCServices/>,
      },
      {
        path: "/walk-in-freezer-display-freezer-open-freezer-maintenance/",
        element: <WalkInRefrigerationServices/>,
      },
      {
        path: "/freezer-chiller-repair-service/",
        element: <FreezerAndChillerMaintenance/>,
      },
      {
        path: "/commercial-refrigeration-services/",
        element: <CommercialRefrigeratorRepair/>,
      },
      {
        path: "/gas-cooker-repair-service/",
        element: <GasRangeRepairService></GasRangeRepairService>,
      },
      {
        path: "/dishwasher-repair-service/",
        element: <DishwasherRepair/>
      },      
      {
        path: "/oven-repair/",
        element: <OvenRepair />
      },
      {
        path: "/robot-vacuum-cleaner-repair/",
        element: <VacuumCleanerRepair />
      },
      {
        path: "/small-home-appliances-service-center-in-dubai/",
        element: <SmallAppliancesRepair />
      },
      {
        path: "/built-in-appliances-repair-service/",
        element: <IntegratedApplianceRepair />
      },
      {
        path: "/appliances-amc-service/",
        element: <AppliancesMaintenanceContract />
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
        path: "/trane-ac-repair-in-dubai-trane-ac-maintenance-in-dubai-trane-ac-fix-in-dubai-trane-ac-service-in-dubai-trane-air-condition-repair-in-dubai-trane-air-condition-maintenance-in-dubai-trane-air-condition/",
        element: <TraneAcRepair />,
      },
      {
        path: "/super-general-ac-repair-in-dubai-super-general-ac-maintenance-in-dubai-super-general-ac-fix-in-dubai-super-general-ac-service-in-dubai-super-general-air-condition-repair-in-dubai-super-general-air-con/",
        element: <SuperGeneralAcRepair />
      },
      {
        path: "/toshiba-ac-repair-in-dubai-toshiba-ac-maintenance-in-dubai-toshiba-ac-fix-in-dubai-toshiba-ac-service-in-dubai-toshiba-air-condition-repair-in-dubai-toshiba-air-condition-maintenance-in-dubai-toshiba/",
        element: <ToshibaAcRepair />
      },
      {
        path: "/lg-ac-repair-in-dubai/",
        element: <LgAcRepair />
      },
      {
        path: "/aftron-ac-repair-maintenance-service-in-dubai-2/",
        element: <AftronAcRepair />
      },
      {
        path: "/panasonic-ac-repair-in-dubai-panasonic-ac-maintenance-in-dubai-panasonic-ac-fix-in-dubai-panasonic-ac-service-in-dubai-panasonic-air-condition-repair-in-dubai-panasonic-air-condition-maintenance-in-du/",
        element: <PanasonicAcRepair />
      },
      {
        path: "/whirlpool-air-condition-repair-in-dubai-ac-maintenance-in-dubai-air-conditioning-fix-repairs-service-in-dubai/",
        element: <WhirlpoolAcRepair />
      },
      {
        path: "/samsung-ac-repair-in-dubai/",
        element: <SamsungAcRepair />
      },
      {
        path: "/mcquay-ac-repair-in-dubai-mcquay-ac-maintenance-in-dubai-mcquay-ac-fix-in-dubai-mcquay-ac-service-in-dubai-mcquay-air-condition-repair-in-dubai-mcquay-air-condition-maintenance-in-dubai-mcquay-air-con/",
        element: <McquayAcRepair />
      },
      {
        path: "/nikai-ac-repair-in-dubai-nikai-ac-maintenance-in-dubai-nikai-ac-fix-in-dubai-nikai-ac-service-in-dubai-nikai-air-condition-repair-in-dubai-nikai-air-condition-maintenance-in-dubai-nikai-air-condition/",
        element: <NikaiAcRepair />
      },
      {
        path: "/crafft-ac-repair-in-dubai-crafft-ac-maintenance-in-dubai-crafft-ac-fix-in-dubai-crafft-ac-service-in-dubai-crafft-air-condition-repair-in-dubai-crafft-air-condition-maintenance-in-dubai-crafft-air-con/",
        element: <CrafftAcRepair />
      },
      {
        path: "/lennox-ac-repair-in-dubai-lennox-ac-maintenance-in-dubai-lennox-ac-fix-in-dubai-lennox-ac-service-in-dubai-lennox-air-condition-repair-in-dubai-lennox-air-condition-maintenance-in-dubai-lennox-air-con/",
        element: <LennoxAcRepair />
      },
      {
        path: "/hitachi-ac-repair-in-dubai-hitachi-ac-maintenance-in-dubai-hitachi-ac-fix-in-dubai-hitachi-ac-service-in-dubai-hitachi-air-condition-repair-in-dubai-hitachi-air-condition-maintenance-in-dubai-hitachi/",
        element: <HitachiAcRepair />
      },
      {
        path: "/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/",
        element: <OGeneralAcRepair />
      },
      {
        path: "/bryant-ac-repair-in-dubai-bryant-ac-maintenance-in-dubai-bryant-ac-fix-in-dubai-bryant-ac-service-in-dubai-bryant-air-condition-repair-in-dubai-bryant-air-condition-maintenance-in-dubai-bryant-air-con/",
        element: <BryantAcRepair />
      },
      {
        path: "/white-westinghouse-ac-repair-in-dubai-white-westinghouse-ac-maintenance-in-dubai-white-westinghouse-ac-fix-in-dubai-white-westinghouse-ac-service-in-dubai-white-westinghouse-air-condition-repair-in-du/",
        element: <WhiteWestingHouseAcRepair />
      },
      {
        path: "/mitsubishi-ac-repair-in-dubai/",
        element: <MitsubishiAcRepair />
      },
      {
        path: "/sanyo-ac-repair-in-dubai-sanyo-ac-maintenance-in-dubai-sanyo-ac-fix-in-dubai-sanyo-ac-service-in-dubai-sanyo-air-condition-repair-in-dubai-sanyo-air-condition-maintenance-in-dubai-sanyo-air-condition/",
        element: <SanyoAcRepair />
      },
      {
        path: "/daikool-ac-repair-in-dubai-daikool-ac-maintenance-in-dubai-daikool-ac-fix-in-dubai-daikool-ac-service-in-dubai-daikool-air-condition-repair-in-dubai-daikool-air-condition-maintenance-in-dubai-daikool/",
        element: <DaikoolAcRepair />
      },
      {
        path: "/goodman-ac-repair-in-dubai-goodman-ac-maintenance-in-dubai-goodman-ac-fix-in-dubai-goodman-ac-service-in-dubai-goodman-air-condition-repair-in-dubai-goodman-air-condition-maintenance-in-dubai-goodman/",
        element: <GoodmanAcRepair />
      },
      {
        path: "/sub-zero-ac-installation-maintenance-repair-fix-service-in-dubai/",
        element: <SubZeroAcRepair />
      },
      {
        path: "/gree-ac-repair-in-dubai/",
        element: <GreeAcRepair />
      },
      {
        path: "/haier-ac-repair-in-dubai-haier-ac-maintenance-in-dubai-haier-ac-fix-in-dubai-haier-ac-service-in-dubai-haier-air-condition-repair-in-dubai-haier-air-condition-maintenance-in-dubai-haier-air-condition/",
        element: <HaierAcRepair />
      },
      {
        path: "/tcl-ac-repair-in-dubai/",
        element: <TCLAcRepair />
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
        element: <AcRepairInRitz />,
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
      {
        path: "/ac-services-in-the-gardens/",
        element: <AcRepairInGardens/>,
      },
      {
        path: "/ac-services-in-jbr/",
        element: <AcRepairInJBR/>,
      },
      {
        path: "/ac-services-in-flamingo-villas/",
        element: <AcRepairInFlamingoVillas/>,
      },
      {
        path: "/ac-services-in-al-quoz/",
        element: <AcRepairInAlQuoz/>,
      },
      {
        path: "/ac-services-in-jebel-ali-dip/",
        element: <AcRepairInJebelAliDip/>,
      },
      {
        path: "/ac-services-in-al-sufouh/",
        element: <AcRepairInSufouh/>,
      },
      {
        path: "/ac-services-in-jumeirah-beach-residence/",
        element: <AcRepairInJumeirahBeachResidence/>,
      },
      {
        path: "/ac-services-in-the-villa/",
        element: <AcRepairInTheVilla/>,
      },
      {
        path: "/ac-services-in-jumeirah-heights/",
        element: <AcRepairInJumeirahHeights/>,
      },
      {
        path: "/ac-services-in-al-quoz-industrial-area/",
        element: <AcRepairInQuozIndustrialArea/>,
      },
      {
        path: "/ac-services-in-the-lakes/",
        element: <AcRepairInTheLakes />,
      },
      {
        path: "/ac-services-in-the-lakes/",
        element: <AcRepairInBurjKhalifaLake />,
      },
      {
        path: "/ac-services-in-umm-suqeim/",
        element: <AcRepairInUmmSuqeim />,
      },
      {
        path: "/ac-services-in-jvt/",
        element: <AcRepairInJvt />,
      },
      {
        path: "/ac-services-in-jumeirah/",
        element: <AcRepairInJumeirah />,
      },
      {
        path: "/ac-services-in-jumeirah/",
        element: <AcRepairInJumeirah />,
      },
      {
        path: "/ac-services-in-jebel-ali/",
        element: <AcRepairInJebelAli />,
      },
      {
        path: "/ac-services-in-emirates-hills/",
        element: <AcRepairInEmiratesHills />,
      },
      {
        path: "/ac-services-jlt/",
        element: <AcRepairInJLT />,
      },
      {
        path: "/ac-services-in-index-tower-difc/",
        element: <AcRepairInIndexTowerDifc />,
      },
      {
        path: "/ac-services-in-al-rashidiya/",
        element: <AcRepairInAlRashidiya />,
      },
      {
        path: "/ac-services-in-al-karama/",
        element: <AcRepairInAlkarama />,
      },
      {
        path: "/ac-services-in-south-ridge/",
        element: <AcRepairInsouthRidge />,
      },
      {
        path: "/ac-services-in-nad-al-hammar/",
        element: <AcRepairInNadAlHammar />,
      },
      {
        path: "/ac-services-in-nad-al-hammar/",
        element: <AcRepairInMudon />,
      },
      {
        path: "/ac-services-in-dubai-healthcare-city/",
        element: <AcRepairInDubaiHealthcareCity />,
      },
      {
        path: "/ac-services-in-knowledge-village/",
        element: <AcRepairInKnowledgeVillage />,
      },
      {
        path: "/ac-services-in-deira/",
        element: <AcRepairInDeira/>,
      },
      {
        path: "/ac-services-in-al-furjan/",
        element: <AcRepairInAlFurjan/>,
      },
      {
        path: "/ac-services-jumeirah-park/",
        element: <AcRepairInJumeirahPark/>,
      },
      {
        path: "/ac-services-in-ras-al-khor-industrial-area/",
        element: <AcRepairInRasAlKhorIndustrialArea/>,
      },
      {
        path: "/ac-services-in-al-warqa/",
        element: <AcRepairInAlWarqa />,
      },
      {
        path: "/ac-services-in-dubailand-the-villa-point/",
        element: <AcRepairInDubailandTheVillaPoint />,
      },
      {
        path: "/ac-services-in-al-wasl/",
        element: <AcRepairInAlWasl />,
      },
      {
        path: "/ac-services-in-dubai-investments-park/",
        element: <AcRepairInInvestmentsPark />,
      },
      {
        path: "/ac-services-in-al-aweer/",
        element: <AcRepairInAlaweer />,
      },
      {
        path: "/ac-services-in-difc/",
        element: <AcRepairInDifc />,
      },
      {
        path: "/ac-repair-in-al-barsha-air-condition-maintenance-in-al-barsha-air-conditioning-fix-amc-service-in-al-barsha-dubai/",
        element: <AcRepairInAlBarsha />,
      },
      {
        path: "/ac-services-in-al-raffa/",
        element: <AcRepairInAlRaffa />,
      },
      {
        path: "/ac-services-in-dubai-international-financial-centre/",
        element: <AcRepairInDubaiInternationalFinancialCenter />,
      },
      {
        path: "/ac-services-in-bur-dubai/",
        element: <AcRepairInBurDubai />,
      },
      {
        path: "/ac-services-in-silicon-oasis-dubai/",
        element: <AcRepairInSiliconOasisDubai />,
      },
      {
        path: "/ac-services-in-burj-khalifa-lake/",
        element: <AcRepairInBurjKhalifaLake />,
      },
      {
        path: "/ac-services-in-dubailand-mazaya-queue/",
        element: <AcRepairInDubailandMazayaQueue />,
      },
      {
        path: "/ac-services-in-al-bada/",
        element: <AcRepairInAlBadaa />,
      },
      {
        path: "/ac-services-in-mudon/",
        element: <AcRepairInMudon />,
      },
      {
        path: "/ac-services-in-nad-al-sheba/",
        element: <AcRepairInNadAlSheba />,
      },
      {
        path: "/ac-services-in-downtown/",
        element: <AcRepairInDownTown />,
      },
      {
        path: "/ac-services-in-al-barari/",
        element: <AcRepairInAlBarari />,
      },
      {
        path: "/ac-services-in-bay-square/",
        element: <AcRepairInBaySquare />,
      },
      {
        path: "/ac-services-in-media-city/",
        element: <AcRepairInMediaCity />,
      },
      {
        path: "/ac-services-in-umm-ramool/",
        element: <AcRepairInUmmRamool />,
      },
      {
        path: "/ac-services-in-cedre-villas-silicon-oasis-dubai/",
        element: <AcRepairInCedreVillasSiliconOasisDubai />,
      },
      {
        path: "/ac-services-in-motor-city/",
        element: <AcRepairInMotorCity />,
      },
      {
        path: "/ac-services-in-victory-heights/",
        element: <AcRepairInVictoryHeights />,
      },
      {
        path: "/ac-services-in-remraam-2/",
        element: <AcRepairInRemraam2 />,
      },
      {
        path: "/ac-services-in-al-safa/",
        element: <AcRepairInAlSafa />,
      },
      {
        path: "/ac-services-in-remraam/",
        element: <AcRepairInRemraam />,
      },
      {
        path: "/ac-services-in-jge/",
        element: <AcRepairInJqe />,
      },
      {
        path: "/ac-services-in-dubai-sport-city/",
        element: <AcRepairInDubaiSportCity />,
      },
      {
        path: "/ac-services-in-dubai-marina/",
        element: <AcRepairInDubaiMarina />,
      },
      {
        path: "/ac-services-in-jebel-ali-village/",
        element: <AcRepairInJebelAliVillage />,
      },
      {
        path: "/ac-services-in-mankhool/",
        element: <AcRepairInMankhool />,
      },
      {
        path: "/ac-services-in-the-views/",
        element: <AcRepairInTheViews />,
      },
    ],
  }
], {
  //  basename: "/fajservicess"
});