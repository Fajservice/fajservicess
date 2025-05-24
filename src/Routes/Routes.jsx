import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AboutPage from "../Pages/AboutPage";
import AcTonnageCalculator from "../Pages/AcTonnageCalculator";
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
import FrigidaireRefrigeratorRepair from "../Pages/AcPages/AcBrand/FrigidaireRefrigeratorRepair";
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
import KitchenEquipmentAMC from "../Pages/KitchenEquipPages/KitchenEquipmentAMC";
import KitchenEquipmentRepair from "../Pages/KitchenEquipPages/KitchenEquipmentRepair";
import IceMakerRepair from "../Pages/RefrigerationEquipPages/IceMakerRepair";
import RefrigerationAMCServices from "../Pages/RefrigerationEquipPages/RefrigerationAMCServices";
import CommercialRefrigerationMaintence from "../Pages/RefrigerationEquipPages/CommercialRefrigerationMaintence";
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
import MeatGrinderRepair from "../Pages/KitchenEquipPages/MeatGrinderRepair";
import CommercialDishwasherServices from "../Pages/CommercialDishwasherServices.jsx";
import CommercialWashingMachineRepair from "../Pages/CommercialLaundryEquipPages/CommercialWashingMachineRepair";
import CommercialLaundryEquipmentService from "../Pages/CommercialLaundryEquipPages/CommercialLaundryEquipmentService";
import AcRepairInDubaiInternationalFinancialCenter from "../Pages/AcPages/AcLocation/AcRepairInDubaiInternationalFinancialCenter";
import AcRepairInBurDubai from "../Pages/AcPages/AcLocation/AcRepairInBurDubai";
import AcRepairInSiliconOasisDubai from "../Pages/AcPages/AcLocation/AcRepairInSiliconOasisDubai";
import AcRepairInDubailandMazayaQueue from "../Pages/AcPages/AcLocation/AcRepairInDubailandMazayaQueue";
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
import AcRepairInRemraam from "../Pages/AcPages/AcLocation/AcRepairInRemraam";
import AcRepairInJqe from "../Pages/AcPages/AcLocation/AcRepairInJqe";
import AcRepairInDubaiSportCity from "../Pages/AcPages/AcLocation/AcRepairInDubaiSportCity";
import AcRepairInDubaiMarina from "../Pages/AcPages/AcLocation/AcRepairInDubaiMarina";
import AcRepairInJebelAliVillage from "../Pages/AcPages/AcLocation/AcRepairInJebelAliVillage";
import AcRepairInMankhool from "../Pages/AcPages/AcLocation/AcRepairInMankhool";
import AcRepairInTheViews from "../Pages/AcPages/AcLocation/AcRepairInTheViews";
import AcRepairInPalmJumeirah from "../Pages/AcPages/AcLocation/AcRepairInPalmJumeirah";
import AcRepairInJvc from "../Pages/AcPages/AcLocation/AcRepairInJvc";
import AcRepairInAlMamzar from "../Pages/AcPages/AcLocation/AcRepairInAlMamzar";
import AcRepairInAlMizhar from "../Pages/AcPages/AcLocation/AcRepairInAlMizhar";
import AcRepairInDamacHills from "../Pages/AcPages/AcLocation/AcRepairInDamacHills";
import AcRepairInDubaiHillsEstate from "../Pages/AcPages/AcLocation/AcRepairInDubaiHillsEstate";
import AcRepairInProductionCity from "../Pages/AcPages/AcLocation/AcRepairInProductionCity";
import AcRepairandServiceInEmiratesHills from "../Pages/AcPages/AcLocation/AcRepairandServiceInEmiratesHills";
import AcRepairandServiceInTownSquare from "../Pages/AcPages/AcLocation/AcRepairandServiceInTownSquare";
import AcServiceInDubai from "../Pages/AcServiceInDubai.jsx";
import BBQService from "../Pages/HomeAppPages/BBQService.jsx";
import IndesitWashingMachine from "../Pages/AppliancesPage/AppliancesBrand/IndesitWashingMachine.jsx";
import ElicaAppliancesService from "../Pages/AppliancesPage/AppliancesBrand/ElicaAppliancesService.jsx";
import FagorFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/FagorFridgeRepair.jsx";
import NeffFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/NeffFridgeRepair.jsx";
import AristonFrideRepair from "../Pages/AppliancesPage/AppliancesBrand/AristonFrideRepair.jsx";
import FisherPaykelFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/FisherPaykelFridgeRepair.jsx";
import SiemensHomeAppUnstallation from "../Pages/AppliancesPage/AppliancesBrand/SiemensHomeAppUnstallation.jsx";
import MaytagFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/MaytagFridgeRepair.jsx";
import SmegFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/SmegFridgeRepair.jsx";
import SubZeroFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/SubZeroFridgeRepair.jsx";
import HitachiFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/HitachiFridgeRepair.jsx";
import GaggenauFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/GaggenauFridgeRepair.jsx";
import WhirlpoolFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/WhirlpoolFridgeRepair.jsx";
import FosterAppliancesServices from "../Pages/AppliancesPage/AppliancesBrand/FosterAppliancesServices.jsx";
import TekaHomeAppInstllation from "../Pages/AppliancesPage/AppliancesBrand/TekaHomeAppInstllation.jsx";
import GorenjeFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/GorenjeFridgeRepair.jsx";
import MieleFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/MieleFridgeRepair.jsx";
import WolfHomeAppMaintenance from "../Pages/AppliancesPage/AppliancesBrand/WolfHomeAppMaintenance.jsx";
import ToshibaHomeAppMaintenance from "../Pages/AppliancesPage/AppliancesBrand/ToshibaHomeAppMaintenance.jsx";
import GibsoneFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/GibsoneFridgeRepair.jsx";
import VikingAppliancesService from "../Pages/AppliancesPage/AppliancesBrand/VikingAppliancesService.jsx";
import SamsungFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/SamsungFridgeRepair.jsx";
import SanyoHomeAppliance from "../Pages/AppliancesPage/AppliancesBrand/SanyoHomeAppliance.jsx";
import ElectroluxHomeAppliance from "../Pages/AppliancesPage/AppliancesBrand/ElectroluxHomeAppliance.jsx";
import BekoFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/BekoFridgeRepair.jsx";
import AegFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/AegFridgeRepair.jsx";
import BoschHomeAppliance from "../Pages/AppliancesPage/AppliancesBrand/BoschHomeAppliance.jsx";
import HisenseFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/HisenseFridgeRepair.jsx";
import PanasonicFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/PanasonicFridgeRepair.jsx";
import SiemensHomeAppliance from "../Pages/AppliancesPage/AppliancesBrand/SiemensHomeAppliance.jsx";
import TerimAppliance from "../Pages/AppliancesPage/AppliancesBrand/TerimAppliance.jsx";
import BlombergFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/BlombergFridgeRepair.jsx";
import DaewooHomeAppliance from "../Pages/AppliancesPage/AppliancesBrand/DaewooHomeAppliance.jsx";
import AftronFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/AftronFridgeRepair.jsx";
import HooverFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/HooverFridgeRepair.jsx";
import LgFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/LgFridgeRepair.jsx";
import DaewooHomeApplianceRepair from "../Pages/AppliancesPage/AppliancesBrand/DaewooHomeApplianceRepair.jsx";
import BoschHomeApplianceRepair from "../Pages/AppliancesPage/AppliancesBrand/BoschHomeApplianceRepair.jsx";
import FosterAppliance from "../Pages/AppliancesPage/AppliancesBrand/FosterAppliance.jsx";
import SamsungHomeApplianceRepair from "../Pages/AppliancesPage/AppliancesBrand/SamsungHomeApplianceRepair.jsx";
import ElectroluxFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/ElectroluxFridgeRepair.jsx";
import AdmiralFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/AdmiralFridgeRepair.jsx";
import BompaniFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/BompaniFridgeRepair.jsx";
import KenmoreAppliancesService from "../Pages/AppliancesPage/AppliancesBrand/KenmoreAppliancesService.jsx";
import SharpHomeAppliancesInstallation from "../Pages/AppliancesPage/AppliancesBrand/SharpHomeAppliancesInstallation.jsx";
import UnimacWashingMachineRepair from "../Pages/AppliancesPage/AppliancesBrand/UnimacWashingMachineRepair.jsx";
import HaierFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/HaierFridgeRepair.jsx";
import BaumaticAppliances from "../Pages/AppliancesPage/AppliancesBrand/BaumaticAppliances.jsx";
import FaberAppliancesService from "../Pages/AppliancesPage/AppliancesBrand/FaberAppliancesService.jsx";
import MarvelFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/MarvelFridgeRepair.jsx";
import BrandtFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/BrandtFridgeRepair.jsx";
import ThemadorAppliancesService from "../Pages/AppliancesPage/AppliancesBrand/ThemadorAppliancesService.jsx";
import BertazzoniRefrigeratorRepair from "../Pages/AppliancesPage/AppliancesBrand/BertazzoniRefrigeratorRepair.jsx";
import BostonRefrigeratorRepair from "../Pages/AppliancesPage/AppliancesBrand/BostonRefrigeratorRepair.jsx";
import KelvinatorHomeAppInstallation from "../Pages/AppliancesPage/AppliancesBrand/KelvinatorHomeAppInstallation.jsx";
import ZanussiFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/ZanussiFridgeRepair.jsx";
import SearsHomeAppInstallation from "../Pages/AppliancesPage/AppliancesBrand/SearsHomeAppInstallation.jsx";
import BaumaticRefrigeratorRepair from "../Pages/AppliancesPage/AppliancesBrand/BaumaticRefrigeratorRepair.jsx";
import GeGeneralElectricFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/GeGeneralElectricFridgeRepair.jsx";
import KitchenaidRefrigeratorRepair from "../Pages/AppliancesPage/AppliancesBrand/KitchenaidRefrigeratorRepair.jsx";
import WestpointFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/WestpointFridgeRepair.jsx";
import LiebherrRefrigeratorRepair from "../Pages/AppliancesPage/AppliancesBrand/LiebherrRefrigeratorRepair.jsx";
import WhiteWestinghouseFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/WhiteWestinghouseFridgeRepair.jsx";
import SpeedQueenWashingMachineRepair from "../Pages/AppliancesPage/AppliancesBrand/SpeedQueenWashingMachineRepair.jsx";
import FrankeAppliancesRepairService from "../Pages/AppliancesPage/AppliancesBrand/FrankeAppliancesRepairService.jsx";
import IfbRefrigeratorRepair from "../Pages/AppliancesPage/AppliancesBrand/IfbRefrigeratorRepair.jsx";
import KitchenaidStandMixerRepairService from "../Pages/AppliancesPage/AppliancesBrand/KitchenaidStandMixerRepairService.jsx";
import KenwoodStandMixerRepairService from "../Pages/AppliancesPage/AppliancesBrand/KenwoodStandMixerRepairService.jsx";
import CandyRefrigeratorRepair from "../Pages/AppliancesPage/AppliancesBrand/CandyRefrigeratorRepair.jsx";
import HotpointRefrigeratorRepair from "../Pages/AppliancesPage/AppliancesBrand/HotpointRefrigeratorRepair.jsx";
import DeDietrichFridgeRepair from "../Pages/AppliancesPage/AppliancesBrand/DeDietrichFridgeRepair.jsx";
import SmegMixerRepairService from "../Pages/AppliancesPage/AppliancesBrand/SmegMixerRepairService.jsx";
import LaGermaniaCookingRangeRepair from "../Pages/AppliancesPage/AppliancesBrand/LaGermaniaCookingRangeRepair.jsx";
import DelonghiCoffeeMachineRepair from "../Pages/AppliancesPage/AppliancesBrand/DelonghiCoffeeMachineRepair.jsx";
import AcRepairInDownTown from "../Pages/AcPages/AcLocation/AcRepairInDowntown.jsx";
import PortfolioPage from "../Pages/PortfolioPage.jsx";
import CigarcabnitService from "../Pages/HomeAppPages/CigarcabnitService.jsx";
import { Navigate } from "react-router-dom";
import AppliancesServiceInAlMamzar from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServiceInAlMamzar.jsx";
import AppliancesServiceInAlMizhar from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServiceInAlMizhar.jsx";
import AppliancesServiceInDamacHills from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServiceInDamacHills.jsx";
import AppliancesServiceInDubaiHillsEstate from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServiceInDubaiHillsEstate.jsx";
import AppliancesServiceInDubaiProductionCity from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServiceInDubaiProductionCity.jsx";

import FajPriceList from "../Pages/FajPriceList.jsx";
import AppliancesServiceInTownSquare from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServiceInTownSquare.jsx";
import AppliancesServiceInAlGhadeerCommunity from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServiceInAlGhadeerCommunity.jsx";
import AppliancesServiceInLimestoneHouseDifc from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServiceInLimestoneHouseDifc.jsx";
import AppliancesServiceInInternationalMediaAndProductionZone from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServiceInInternationalMediaAndProductionZone.jsx";
import AppliancesServicesInJlt from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInJlt.jsx";
import AppliancesServicesInTheViews from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInTheViews.jsx";
import AppliancesServicesInAlSafa from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInAlSafa.jsx";

import AppliancesServicesInJumeirah from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInJumeirah.jsx";
import AppliancesServicesJumeirah from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesJumeirah.jsx";
import AppliancesServicesInDiscoveryGardens from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInDiscoveryGardens.jsx";
import AppliancesServicesInTheLakes from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInTheLakes.jsx";
import AppliancesServicesInJumeirahGolfEstates from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInJumeirahGolfEstates.jsx";
import HomeAppliancesServiceCentreInJltDubai from "../Pages/AppliancesPage/AppliancesLocation/HomeAppliancesServiceCentreInJltDubai.jsx";
import AppliancesServicesInEmiratesHills from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInEmiratesHills.jsx";
import AppliancesServicesInSiliconOasisDubai from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInSiliconOasisDubai.jsx";
import AppliancesServicesInVictoryHeights from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInVictoryHeights.jsx";
import AppliancesServicesInRemraam from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInRemraam.jsx";
import AppliancesServicesInAlJafiliya from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInAlJafiliya.jsx";
import AppliancesServicesInAlFurjan from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInAlFurjan.jsx";
import AppliancesServicesInDubaiInvestmentsPark from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInDubaiInvestmentsPark.jsx";
import AppliancesServicesInTecom from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInTecom.jsx";
import AppliancesServicesInAlBarshaSouth from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInAlBarshaSouth.jsx";
import AppliancesServicesInJumeirahVillage from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInJumeirahVillage.jsx";
import AppliancesServicesInAlBadaa from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInAlBadaa.jsx";
import AppliancesServicesInAlSatwa from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInAlSatwa.jsx";
import AppliancesServicesInDubaiHealthcareCity from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInDubaiHealthcareCity.jsx";

import AppliancesServicesInJumeirahIslands from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInJumeirahIslands.jsx";
import AppliancesServicesInJebelAliVillage from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInJebelAliVillage.jsx";
import AppliancesServicesInPalmJumeirah from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInPalmJumeirah.jsx";
import AppliancesServicesInFalconCityDubai from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInFalconCityDubai.jsx";
import AppliancesServicesInDubailandMazaya from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInDubailandMazaya.jsx";
import WashingMachineRepairInAlQuoz from "../Pages/AppliancesPage/AppliancesLocation/WashingMachineRepairInAlQuoz.jsx";
import WashingMachineRepairTownDubai from "../Pages/AppliancesPage/AppliancesLocation/WashingMachineRepairTownDubai.jsx";
import WashingMachineRepairBusinessBay from "../Pages/AppliancesPage/AppliancesLocation/WashingMachineRepairBusinessBay.jsx";
import WashingMachineRepairInDubaiMarina from "../Pages/AppliancesPage/AppliancesLocation/WashingMachineRepairInDubaiMarina.jsx";
import FridgeRepairInDubaiMarina from "../Pages/AppliancesPage/AppliancesLocation/FridgeRepairInDubaiMarina.jsx";
import WashingMachineRepairAlBarsha from "../Pages/AppliancesPage/AppliancesLocation/WashingMachineRepairAlBarsha.jsx";
import WashingMachineRepairPalmJumeirah from "../Pages/AppliancesPage/AppliancesLocation/WashingMachineRepairPalmJumeirah.jsx";
import FridgeRepairDubaiMarina from "../Pages/AppliancesPage/AppliancesLocation/FridgeRepairDubaiMarina.jsx";

import AppliancesServiceInBusinessBay from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServiceInBusinessBay.jsx";
import AppliancesServiceInTheGardens from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServiceInTheGardens.jsx";
import ApplianceServiceInTheRitzCarltonDifc from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInTheRitzCarltonDifc.jsx";
import ApplianceServiceInOudMetha from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInOudMetha.jsx";
import ApplianceServiceInUmmAlSheif from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInUmmAlSheif.jsx";
import ApplianceServiceInUmmSuqeim from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInUmmSuqeim.jsx";
import ApplianceServiceInJebelAliIndustrialArea from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJebelAliIndustrialArea.jsx";
import ApplianceServiceInJumeriahDubai from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJumeriahDubai.jsx";
import ApplianceServiceInJumeriahHeights from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJumeriahHeights.jsx";
import ApplianceServiceInTheVilla from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInTheVilla.jsx";
import ApplianceServiceInBurDubai from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInBurDubai.jsx";
import ApplianceServiceInAlWahaCommunity from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInAlWahaCommunity.jsx";
import ApplianceServiceInJumeirahVillageTriangle from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJumeirahVillageTriangle.jsx";
import ApplianceServiceInMankhool from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInMankhool.jsx";
import ApplianceServiceInTheSprings from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInTheSprings.jsx";
import ApplianceServiceInAlManara from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInAlManara.jsx";
import ApplianceServiceInAlbarari from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInAlbarari.jsx";
import ApplianceServiceInJvt from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJvt.jsx";
import ApplianceServiceInNadAlSheba from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInNadAlSheba.jsx";
import ApplianceServiceInDubaiMarina from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInDubaiMarina.jsx";
import ApplianceServiceInAlBarsha from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInAlBarsha.jsx";
import ApplianceServiceInArabianRanches from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInArabianRanches.jsx";
import ApplianceServiceInJumeirahVillageCircle from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJumeirahVillageCircle.jsx";
import ApplianceServiceInDubaiMotorCity from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInDubaiMotorCity.jsx";
import ApplianceServiceInAlWasl from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInAlWasl.jsx";
import ApplianceServiceInJebelAliDip from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJebelAliDip.jsx";
import ApplianceServiceInAcademyCity from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInAcademyCity.jsx";
import ApplianceServiceInDubailandTheVilla from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInDubailandTheVilla.jsx";
import ApplianceServiceInJvc from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJvc.jsx";
import ApplianceServiceInDeira from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInDeira.jsx";
import ApplianceServiceInJumeirahBeachResidence from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJumeirahBeachResidence.jsx";
import ApplianceServiceInJge from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJge.jsx";
import ApplianceServiceInHudaiba from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInHudaiba.jsx";
import ApplianceServiceInJebelAliFreeZone from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJebelAliFreeZone.jsx";
import ApplianceServiceInDubaiSportCity from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInDubaiSportCity.jsx";
import ApplianceServiceInDubaiInternetCity from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInDubaiInternetCity.jsx";
import ApplianceServiceInJbrDubai from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJbrDubai.jsx";
import ApplianceServiceInMudon from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInMudon.jsx";
import ApplianceServiceInJebelAli from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJebelAli.jsx";
import ApplianceServiceInDip from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInDip.jsx";
import ApplianceServiceInIndexTowerDifc from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInIndexTowerDifc.jsx";
import ApplianceServiceInImpzy from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInImpzy.jsx";
import ApplianceServiceInJbr from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJbr.jsx";
import ApplianceServiceInFlamingoVillasDubai from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInFlamingoVillasDubai.jsx";
import ApplianceServiceInCedreVillasSiliconOasisDubai from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInCedreVillasSiliconOasisDubai.jsx";
import ApplianceServiceInAlKaram from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInAlKaram.jsx";
import ApplianceServiceInTheGreens from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInTheGreens.jsx";
import ApplianceServiceInArabianRanches2 from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInArabianRanches2.jsx";
import ApplianceServiceInJumeirahLakeTowers from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJumeirahLakeTowers.jsx";
import ApplianceServiceInDubaiMediaCity from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInDubaiMediaCity.jsx";
import ApplianceServiceInMeadows from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInMeadows.jsx";
import ApplianceServiceInDubaiStudioCity from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInDubaiStudioCity.jsx";
import AppliancesServicesInAlSufouh from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInAlSufouh.jsx";
import AppliancesServicesInAlBada from "../Pages/AppliancesPage/AppliancesLocation/AppliancesServicesInAlBada.jsx";
import ApplianceServiceInDubaiSiliconOasis from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInDubaiSiliconOasis.jsx";
import ApplianceServiceInLayanComminity from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInLayanComminity.jsx";
import ApplianceServiceInDubailandMazayaQueuePoint from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInDubailandMazayaQueuePoint.jsx";
import ApplianceServiceInAlRaffa from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInAlRaffa.jsx";
import ApplianceServiceInDifc from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInDifc.jsx";
import ApplianceServiceInJumeirahPark from "../Pages/AppliancesPage/AppliancesLocation/ApplianceServiceInJumeirahPark.jsx";
import { PopupProvider } from "../Components/PopupContext.jsx";
export const router = createBrowserRouter([
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
        path: "/ac-tonnage-calculator/",
        element: <AcTonnageCalculator />
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
      {
        path: "/services/",
        element: <ServicesPage />,
      },
      {
        path: "/faj-price-list/",
        element: <FajPriceList />,
      },
      {
        path: "/ac-service-in-dubai/",
        element: <AcServiceInDubai />,
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
        path: "/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/",
        element: <BBQService />
      },
      {
        path: "/cigar-humidor-repair/",
        element: <CigarcabnitService />
      },
      {
        path: "/our-portfolio/",
        element: <PortfolioPage />
      },
      {
        path: "/oven-repair-service/",
        element: <OvenRepairService></OvenRepairService>,
      },
      {
        path: "/cooking-equipment-service/",
        element: <GasRangeRepair />
      },
      {
        path: "/meat-grinder-repair/",
        element: <MeatGrinderRepair />
      },

      {
        path: "/commercial-dishwasher-repair/",
        element: <CommercialDishwasherServices />
      },
      {
        path: "/commercial-washing-machine-repair/",
        element: <CommercialWashingMachineRepair />
      },
      {
        path: "/commercial-laundry-equipment-service/",
        element: <CommercialLaundryEquipmentService />
      },
      {
        path: "/commercial-kitchen-equipment-amc/",
        element: <KitchenEquipmentAMC />,
      },
      {
        path: "/commercial-cooking-appliances-repair-service/",
        element: <KitchenEquipmentRepair />,
      },
      {
        path: "/ice-maker-repair/",
        element: <IceMakerRepair />,
      },
      {
        path: "/commercial-refrigeration-maintenance-contact-services/",
        element: <RefrigerationAMCServices />,
      },
      {
        path: "/commercial-refrigeration-maintenance/",
        element: <CommercialRefrigerationMaintence />,
      },
      {
        path: "/gas-cooker-repair-service/",
        element: <GasRangeRepairService></GasRangeRepairService>,
      },
      {
        path: "/dishwasher-repair-service/",
        element: <DishwasherRepair />
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
        path: "/frigidaire-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: <FrigidaireRefrigeratorRepair />
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
        path: "/indesit-fridge-repair-in-dubai-indesit-washing-machine-repair-in-dubai-indesit-cooker-repair-in-dubai-indesit-oven-repair-in-dubai-indesit-appliances-maintenance-in-dubai-indesit-refrigerator-fix-repa/",
        element: <IndesitWashingMachine />
      },
      {
        path: "/elica-appliances-service/",
        element: <ElicaAppliancesService />
      },
      {
        path: "/fagor-fridge-repair-in-dubai-fagor-washing-machine-repair-in-dubai-fagor-cooker-repair-in-dubai-fagor-oven-repair-in-dubai-fagor-appliances-maintenance-in-dubai-fagor-refrigerator-fix-repairs-service/",
        element: <FagorFridgeRepair />,
      },
      {
        path: "/neff-fridge-repair-in-dubai-neff-washing-machine-repair-in-dubai-neff-cooker-repair-in-dubai-neff-oven-repair-in-dubai-neff-appliances-maintenance-in-dubai-neff-refrigerator-fix-repairs-service-in-dub/",
        element: <NeffFridgeRepair />
      },
      {
        path: "/ariston-fridge-repair-in-dubai-ariston-washing-machine-repair-in-dubai-ariston-cooker-repair-in-dubai-ariston-oven-repair-in-dubai-ariston-appliances-maintenance-in-dubai-ariston-refrigerator-fix-repa/",
        element: <AristonFrideRepair />
      },
      {
        path: "/fisher-and-paykel-fridge-repair-in-dubai-fisher-and-paykel-washing-machine-repair-in-dubai-fisher-and-paykel-cooker-repair-in-dubai-fisher-and-paykel-oven-repair-in-dubai-fisher-and-paykel-appliances/",
        element: <FisherPaykelFridgeRepair />
      },
      {
        path: "/siemens-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <SiemensHomeAppUnstallation />
      },
      {
        path: "/maytag-fridge-repair-in-dubai-maytag-washing-machine-repair-in-dubai-maytag-cooker-repair-in-dubai-maytag-oven-repair-in-dubai-maytag-appliances-maintenance-in-dubai-maytag-refrigerator-fix-repairs-se/",
        element: <MaytagFridgeRepair />
      },
      {
        path: "/smeg-fridge-repair-in-dubai-smeg-washing-machine-repair-in-dubai-smeg-cooker-repair-in-dubai-smeg-oven-repair-in-dubai-smeg-appliances-maintenance-in-dubai-smeg-refrigerator-fix-repairs-service-in-dub/",
        element: <SmegFridgeRepair />
      },
      {
        path: "/sub-zero-fridge-repair-in-dubai-sub-zero-washing-machine-repair-in-dubai-sub-zero-cooker-repair-in-dubai-sub-zero-oven-repair-in-dubai-sub-zero-appliances-maintenance-in-dubai-sub-zero-refrigerator-fi/",
        element: <SubZeroFridgeRepair />
      },
      {
        path: "/hitachi-fridge-repair-in-dubai-hitachi-washing-machine-repair-in-dubai-hitachi-cooker-repair-in-dubai-hitachi-oven-repair-in-dubai-hitachi-appliances-maintenance-in-dubai-hitachi-refrigerator-fix-repa/",
        element: <HitachiFridgeRepair />
      },
      {
        path: "/gaggenau-fridge-repair-in-dubai-gaggenau-washing-machine-repair-in-dubai-gaggenau-cooker-repair-in-dubai-gaggenau-oven-repair-in-dubai-gaggenau-appliances-maintenance-in-dubai-gaggenau-refrigerator-fi/",
        element: <GaggenauFridgeRepair />
      },
      {
        path: "/whirlpool-fridge-repair-in-dubai-whirlpool-washing-machine-repair-in-dubai-whirlpool-cooker-repair-in-dubai-whirlpool-oven-repair-in-dubai-whirlpool-appliances-maintenance-in-dubai-whirlpool-refrigera/",
        element: <WhirlpoolFridgeRepair />,
      },
      {
        path: "/foster-appliances-services-foster-dishwasher-repair-service-in-dubai-foster-cooking-range-repair-service-in-dubai-foster-cooktop-repair-service-in-dubai-foster-oven-repair-in-dubai-foster-rangetop-r/",
        element: <FosterAppliancesServices />,
      },
      {
        path: "/teka-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <TekaHomeAppInstllation />,
      },
      {
        path: "/gorenje-fridge-repair-in-dubai-gorenje-washing-machine-repair-in-dubai-gorenje-cooker-repair-in-dubai-gorenje-oven-repair-in-dubai-gorenje-appliances-maintenance-in-dubai-gorenje-refrigerator-fix-repa/",
        element: <GorenjeFridgeRepair />,
      },
      {
        path: "/miele-fridge-repair-in-dubai-miele-washing-machine-repair-in-dubai-miele-cooker-repair-in-dubai-miele-oven-repair-in-dubai-miele-appliances-maintenance-in-dubai-miele-refrigerator-fix-repairs-service/",
        element: <MieleFridgeRepair />,
      },
      {
        path: "/wolf-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <WolfHomeAppMaintenance />,
      },
      {
        path: "/toshiba-home-appliance-installation-maintenance-repair-fix-service-in-dubai-2/",
        element: <ToshibaHomeAppMaintenance />,
      },
      {
        path: "/gibson-fridge-repair-in-dubai-gibson-washing-machine-repair-in-dubai-gibson-cooker-repair-in-dubai-gibson-oven-repair-in-dubai-gibson-appliances-maintenance-in-dubai-gibson-refrigerator-fix-repairs-se/",
        element: <GibsoneFridgeRepair />,
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
        element: <AcRepairInUmmAlSheif />,
      },
      {
        path: "/ac-services-in-the-greens/",
        element: <AcRepairinTheGreens />,
      },
      {
        path: "/ac-services-in-al-jafiliya/",
        element: <AcRepairinAlJafiliya />,
      },
      {
        path: "/ac-services-in-the-meadows/",
        element: <AcRepairinTheMeadows />,
      },
      {
        path: "/ac-services-in-academy-city/",
        element: <AcRepairInAcademyCity />,
      },
      {
        path: "/ac-services-in-limestone-house-difc/",
        element: <AcRepairInLimestoneHouseDifc />,
      },
      {
        path: "/ac-services-in-jumeirah-village-triangle/",
        element: <AcRepairInJumeriahVillageTriangle />,
      },
      {
        path: "/ac-services-in-arabian-ranches-2/",
        element: <AcRepairInArabianRanches2 />,
      },
      {
        path: "/ac-services-in-dubai-studio-city/",
        element: <AcRepairInDubaiStudioCity />,
      },
      {
        path: "/ac-services-jumeirah-islands/",
        element: <AcRepairInJumeirahIslands />,
      },
      {
        path: "/ac-repair-al-qusais/",
        element: <AcRepairInAlQusais />,
      },
      {
        path: "/ac-services-in-the-springs/",
        element: <AcRepairInTheSprings />,
      },
      {
        path: "/ac-services-in-al-mirdif/",
        element: <AcRepairInAlMirdif />,
      },
      {
        path: "/ac-services-in-international-media-and-production-zone/",
        element: <AcRepairInInternationalMediaAndProductionZone />,
      },
      {
        path: "/ac-services-in-jumeirah-village-circle/",
        element: <AcRepairInJumeirahVillageCircle />,
      },
      {
        path: "/ac-services-in-business-bay/",
        element: <AcRepairInBusinessBay />,
      },
      {
        path: "/ac-services-in-arabian-ranches/",
        element: <AcRepairInArabianRanches />,
      },
      {
        path: "/ac-services-in-dip/",
        element: <AcRepairInDip />,
      },
      {
        path: "/ac-services-in-discovery-gardens/",
        element: <AcRepairInDiscoveryGardens />,
      },
      {
        path: "/ac-services-in-al-waha-community/",
        element: <AcRepairInAlWahaCommunity />,
      },
      {
        path: "/ac-services-in-hudaiba/",
        element: <AcRepairInHudaiba />,
      },
      {
        path: "/ac-services-in-impz/",
        element: <AcRepairInImpz />,
      },
      {
        path: "/ac-services-in-al-satwa/",
        element: <AcRepairInAlSatwa />,
      },
      {
        path: "/ac-repair-in-jafza-air-condition-maintenance-in-jafza-air-conditioning-fix-amc-service-in-jebel-ali-free-zone-dubai/",
        element: <AcRepairInAlJafza />,
      },
      {
        path: "/ac-services-in-al-khawaneej/",
        element: <AcRepairInAlKhawaneej />,
      },
      {
        path: "/ac-services-in-al-manara/",
        element: <AcRepairInAlManara />,
      },
      {
        path: "/ac-services-in-jumeirah-golf-estates/",
        element: <AcRepairInJumeirahGolfEstates />,
      },
      {
        path: "/ac-services-in-layan-community/",
        element: <AcRepairInLayanCommunity />,
      },
      {
        path: "/ac-services-in-al-badaa/",
        element: <AcRepairInAlBadaa />,
      },
      {
        path: "/ac-services-dubai-internet-city/",
        element: <AcRepairInDubaiInternetCity />,
      },
      {
        path: "/ac-services-in-jumeirah-lake-towers/",
        element: <AcRepairInJumeirahLakeTowers />,
      },
      {
        path: "/ac-services-in-al-tawar/",
        element: <AcRepairinAlTawar />,
      },
      {
        path: "/ac-services-in-al-barsha-south/",
        element: <AcRepairInAlBarshaSouth />,
      },
      {
        path: "/ac-services-in-the-gardens/",
        element: <AcRepairInGardens />,
      },
      {
        path: "/ac-services-in-jbr/",
        element: <AcRepairInJBR />,
      },
      {
        path: "/ac-services-in-flamingo-villas/",
        element: <AcRepairInFlamingoVillas />,
      },
      {
        path: "/ac-services-in-al-quoz/",
        element: <AcRepairInAlQuoz />,
      },
      {
        path: "/ac-services-in-jebel-ali-dip/",
        element: <AcRepairInJebelAliDip />,
      },
      {
        path: "/ac-services-in-al-sufouh/",
        element: <AcRepairInSufouh />,
      },
      {
        path: "/ac-services-in-jumeirah-beach-residence/",
        element: <AcRepairInJumeirahBeachResidence />,
      },
      {
        path: "/ac-services-in-the-villa/",
        element: <AcRepairInTheVilla />,
      },
      {
        path: "/ac-services-in-jumeirah-heights/",
        element: <AcRepairInJumeirahHeights />,
      },
      {
        path: "/ac-services-in-al-quoz-industrial-area/",
        element: <AcRepairInQuozIndustrialArea />,
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
        element: <AcRepairInDeira />,
      },
      {
        path: "/ac-services-in-al-furjan/",
        element: <AcRepairInAlFurjan />,
      },
      {
        path: "/ac-services-jumeirah-park/",
        element: <AcRepairInJumeirahPark />,
      },
      {
        path: "/ac-services-in-ras-al-khor-industrial-area/",
        element: <AcRepairInRasAlKhorIndustrialArea />,
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
      {
        path: "/ac-services-in-palm-jumeirah/",
        element: <AcRepairInPalmJumeirah />,
      },
      {
        path: "/ac-services-in-jvc/",
        element: <AcRepairInJvc />,
      },
      {
        path: "/ac-repair-and-ac-service-in-al-mamzar/",
        element: <AcRepairInAlMamzar />,
      },
      {
        path: "/ac-repair-and-ac-service-in-al-mizhar/",
        element: <AcRepairInAlMizhar />,
      },
      {
        path: "/ac-repair-and-ac-service-in-al-mizhar/",
        element: <AcRepairInAlMizhar />,
      },
      {
        path: "/ac-repair-and-ac-service-in-damac-hills/",
        element: <AcRepairInDamacHills />,
      },
      {
        path: "/ac-repair-and-ac-service-in-dubai-hills-estate/",
        element: <AcRepairInDubaiHillsEstate />,
      },
      {
        path: "/ac-repair-and-ac-service-in-dubai-production-city/",
        element: <AcRepairInProductionCity />,
      },
      {
        path: "/ac-repair-and-ac-service-in-emirates-hills/",
        element: <AcRepairandServiceInEmiratesHills />,
      },
      {
        path: "/ac-repair-and-ac-service-in-town-square/",
        element: <AcRepairandServiceInTownSquare />,
      },
      {
        path: "/ac-services-in-old-town-dubai/",
        element: <AcRepairInOldTown />,
      },
      {
        path: "/ac-services-in-dubai-international-financial-centre/",
        element: <AcRepairInDubaiInternationalFinancialCenter />,
      },
      {
        path: "/indesit-fridge-repair-in-dubai-indesit-washing-machine-repair-in-dubai-indesit-cooker-repair-in-dubai-indesit-oven-repair-in-dubai-indesit-appliances-maintenance-in-dubai-indesit-refrigerator-fix-repa/",
        element: <IndesitWashingMachine />,
      },
      {
        path: "/viking-appliances-service/",
        element: <VikingAppliancesService />,
      },
      {
        path: "/samsung-fridge-repair-in-dubai-samsung-washing-machine-repair-in-dubai-samsung-cooker-repair-in-dubai-samsung-oven-repair-in-dubai-samsung-appliances-maintenance-in-dubai-samsung-refrigerator-fix-repa/",
        element: <SamsungFridgeRepair />,
      },
      {
        path: "/sanyo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <SanyoHomeAppliance />,
      },
      {
        path: "/electrolux-home-appliances-repair/",
        element: <ElectroluxHomeAppliance />,
      },
      {
        path: "/beko-fridge-repair-in-dubai-beko-washing-machine-repair-in-dubai-beko-cooker-repair-in-dubai-beko-oven-repair-in-dubai-beko-appliances-maintenance-in-dubai-beko-refrigerator-fix-repairs-service-in-dub/",
        element: <BekoFridgeRepair />,
      },
      {
        path: "/aeg-fridge-repair-in-dubai-aeg-washing-machine-repair-in-dubai-aeg-cooker-repair-in-dubai-aeg-oven-repair-in-dubai-aeg-appliances-maintenance-in-dubai-aeg-refrigerator-fix-repairs-service-in-dubai-aeg/",
        element: <AegFridgeRepair />,
      },
      {
        path: "/bosch-home-appliances-repair/",
        element: <BoschHomeAppliance />,
      },
      {
        path: "/hisense-fridge-repair-in-dubai-hisense-washing-machine-repair-in-dubai-hisense-cooker-repair-in-dubai-hisense-oven-repair-in-dubai-hisense-appliances-maintenance-in-dubai-hisense-refrigerator-fix-repa/",
        element: <HisenseFridgeRepair />,
      },
      {
        path: "/panasonic-fridge-repair-in-dubai-panasonic-washing-machine-repair-in-dubai-panasonic-cooker-repair-in-dubai-panasonic-oven-repair-in-dubai-panasonic-appliances-maintenance-in-dubai-panasonic-refrigera/",
        element: <PanasonicFridgeRepair />,
      },
      {
        path: "/siemens-home-appliances-repair/",
        element: <SiemensHomeAppliance />,
      },
      {
        path: "/terim-appliances-service/",
        element: <TerimAppliance />,
      },
      {
        path: "/blomberg-fridge-repair-in-dubai-blomberg-washing-machine-repair-in-dubai-blomberg-cooker-repair-in-dubai-blomberg-oven-repair-in-dubai-blomberg-appliances-maintenance-in-dubai-blomberg-refrigerator-fi/",
        element: <BlombergFridgeRepair />,
      },
      {
        path: "/daewoo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <DaewooHomeApplianceRepair />,
      },
      {
        path: "/aftron-fridge-repair-in-dubai-aftron-washing-machine-repair-in-dubai-aftron-cooker-repair-in-dubai-aftron-oven-repair-in-dubai-aftron-appliances-maintenance-in-dubai-aftron-refrigerator-fix-repairs-se/",
        element: <AftronFridgeRepair />,
      },
      {
        path: "/hoover-fridge-repair-in-dubai-hoover-washing-machine-repair-in-dubai-hoover-cooker-repair-in-dubai-hoover-oven-repair-in-dubai-hoover-appliances-maintenance-in-dubai-hoover-refrigerator-fix-repairs-se/",
        element: <HooverFridgeRepair />,
      },
      {
        path: "/lg-fridge-repair-in-dubai-lg-washing-machine-repair-in-dubai-lg-cooker-repair-in-dubai-lg-oven-repair-in-dubai-lg-appliances-maintenance-in-dubai-lg-refrigerator-fix-repairs-service-in-dubai-lg-dishwa/",
        element: <LgFridgeRepair />,
      },
      {
        path: "/daewoo-home-appliances-repair/",
        element: <DaewooHomeAppliance />,
      },
      {
        path: "/bosch-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <BoschHomeApplianceRepair />,
      },
      {
        path: "/foster-appliances-service/",
        element: <FosterAppliance />,
      },
      {
        path: "/samsung-home-appliances-repair/",
        element: <SamsungHomeApplianceRepair />,
      },
      {
        path: "/electrolux-fridge-repair-in-dubai-electrolux-washing-machine-repair-in-dubai-electrolux-cooker-repair-in-dubai-electrolux-oven-repair-in-dubai-electrolux-appliances-maintenance-in-dubai-electrolux-ref/",
        element: <ElectroluxFridgeRepair />,
      },

      {
        path: "/admiral-fridge-repair-in-dubai-admiral-washing-machine-repair-in-dubai-admiral-cooker-repair-in-dubai-admiral-oven-repair-in-dubai-admiral-appliances-maintenance-in-dubai-admiral-refrigerator-fix-repa/",
        element: <AdmiralFridgeRepair />,
      },
      {
        path: "/bompani-fridge-repair-in-dubai-bompani-washing-machine-repair-in-dubai-bompani-cooker-repair-in-dubai-bompani-oven-repair-in-dubai-bompani-appliances-maintenance-in-dubai-bompani-refrigerator-fix-repa/",
        element: <BompaniFridgeRepair />,
      },
      {
        path: "/kenmore-appliances-service/",
        element: <KenmoreAppliancesService />,
      },
      {
        path: "/sharp-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <SharpHomeAppliancesInstallation />,
      },
      {
        path: "/unimac-washing-machine-repair-in-dubai-unimac-dryer-repair-in-dubai-unimac-washer-dryer-repair-in-dubai-unimac-maintenance-in-dubai-unimac-laundry-service-in-dubai-unimac-dubai/",
        element: <UnimacWashingMachineRepair />,
      },
      {
        path: "/haier-fridge-repair-in-dubai-haier-washing-machine-repair-in-dubai-haier-cooker-repair-in-dubai-haier-oven-repair-in-dubai-haier-appliances-maintenance-in-dubai-haier-refrigerator-fix-repairs-service/",
        element: <HaierFridgeRepair />,
      },
      {
        path: "/baumatic-appliances/",
        element: <BaumaticAppliances />,
      },
      {
        path: "/faber-appliances-service/",
        element: <FaberAppliancesService />,
      },
      {
        path: "/marvel-fridge-repair-in-dubai-marvel-washing-machine-repair-in-dubai-marvel-cooker-repair-in-dubai-marvel-oven-repair-in-dubai-marvel-appliances-maintenance-in-dubai-marvel-refrigerator-fix-repairs-se/",
        element: <MarvelFridgeRepair />,
      },
      {
        path: "/brandt-fridge-repair-in-dubai-brandt-washing-machine-repair-in-dubai-brandt-cooker-repair-in-dubai-brandt-oven-repair-in-dubai-brandt-appliances-maintenance-in-dubai-brandt-refrigerator-fix-repairs-se/",
        element: <BrandtFridgeRepair />,
      },

      {
        path: "/thermador-appliances-service/",
        element: <ThemadorAppliancesService />,
      },
      {
        path: "/bertazzoni-refrigerator-repair-in-dubai-bertazzoni-appliances-service-bertazzoni-fridge-repair-in-dubai-bertazzoni-washing-machine-washer-bertazzoni-dryer-repair-in-dubai-bertazzoni-dishwasher-cooker/",
        element: <BertazzoniRefrigeratorRepair />,
      },
      {
        path: "/boston-refrigerator-repair-in-dubai-boston-appliances-service-boston-fridge-repair-in-dubai-boston-washing-machine-washer-boston-dryer-repair-in-dubai-boston-dishwasher-cooker/",
        element: <BostonRefrigeratorRepair />,
      },
      {
        path: "/kelvinator-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <KelvinatorHomeAppInstallation />,
      },
      {
        path: "/zanussi-fridge-repair-in-dubai-zanussi-washing-machine-repair-in-dubai-zanussi-cooker-repair-in-dubai-zanussi-oven-repair-in-dubai-zanussi-appliances-maintenance-in-dubai-zanussi-refrigerator-fix-repa/",
        element: <ZanussiFridgeRepair />,
      },
      {
        path: "/sears-home-appliances-installation-maintenance-repair-fix-service-in-dubai/",
        element: <SearsHomeAppInstallation />,
      },

      {
        path: "/baumatic-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai-error/",
        element: <BaumaticRefrigeratorRepair />,
      },
      {
        path: "/ge-general-electric-fridge-repair-in-dubai-ge-general-electric-washing-machine-repair-in-dubai-ge-general-electric-cooker-repair-in-dubai-ge-general-electric-oven-repair-in-dubai-ge-general-electric-a/",
        element: <GeGeneralElectricFridgeRepair />,
      },
      {
        path: "/kitchenaid-refrigerator-repair-in-dubai-fridge-repair-in-dubai-kitchenaid-freezer-maintenance-in-dubai-washing-machine-repair-in-dubai-dishwasher-kitchenaid-cooker-oven-repairs-fix-service-in-dubai/",
        element: <KitchenaidRefrigeratorRepair />,
      },
      {
        path: "/westpoint-fridge-repair-in-dubai-westpoint-washing-machine-repair-in-dubai-westpoint-cooker-repair-in-dubai-westpoint-oven-repair-in-dubai-westpoint-refrigerator-fix-repairs-service-in-dubai-west-poin/",
        element: <WestpointFridgeRepair />,
      },
      {
        path: "/liebherr-refrigerator-repair-in-dubai-liebherr-fridge-repair-in-dubai-liebherr-freezer-maintenance-service-in-dubai/",
        element: <LiebherrRefrigeratorRepair />,
      },
      {
        path: "/white-westinghouse-fridge-repair-in-dubai-white-westinghouse-washing-machine-repair-in-dubai-white-westinghouse-cooker-repair-in-dubai-white-westinghouse-oven-repair-in-dubai-white-westinghouse-applia/",
        element: <WhiteWestinghouseFridgeRepair />,
      },
      {
        path: "/speed-queen-washing-machine-repair-in-dubai-speed-queen-dryer-repair-in-dubai-speed-queen-washer-dryer-repair-in-dubai-maintenance-fix-service-in-dubai/",
        element: <SpeedQueenWashingMachineRepair />,
      },
      {
        path: "/franke-appliances-repair-service-in-dubai/",
        element: <FrankeAppliancesRepairService />,
      },
      {
        path: "/ifb-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: <IfbRefrigeratorRepair />,
      },
      {
        path: "/kitchenaid-stand-mixer-repair-service-near-me-dubai/",
        element: <KitchenaidStandMixerRepairService />,
      },
      {
        path: "/kenwood-stand-mixer-repair-service-near-me-dubai/",
        element: <KenwoodStandMixerRepairService />,
      },
      {
        path: "/candy-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: <CandyRefrigeratorRepair />,
      },
      {
        path: "/hotpoint-refrigerator-repair-in-dubai-hotpoint-fridge-repair-in-dubai-hotpoint-washing-machine-repair-in-dubai-hotpoint-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: <HotpointRefrigeratorRepair />,
      },
      {
        path: "/de-dietrich-fridge-repair-in-dubai-de-dietrich-washing-machine-repair-in-dubai-de-dietrich-cooker-repair-in-dubai-de-dietrich-oven-repair-in-dubai-de-dietrich-appliances-maintenance-in-dubai-de-dietri/",
        element: <DeDietrichFridgeRepair />,
      },
      {
        path: "/smeg-mixer-repair-service-near-me-dubai/",
        element: <SmegMixerRepairService />,
      },
      {
        path: "/la-germania-cooking-range-repair-in-dubai-la-germania-oven-repair-in-dubai-la-germania-cooker-repair-in-dubai-la-germania-cooker-oven-maintenance-service-in-dubai-refrigerator-repair-in-dubai-fridge-r/",
        element: <LaGermaniaCookingRangeRepair />,
      },
      {
        path: "/delonghi-coffee-machine-repair/",
        element: <DelonghiCoffeeMachineRepair />,
      },
      {
        path: "/appliances-services-in-al-mamzar/",
        element: <AppliancesServiceInAlMamzar />,
      },
      {
        path: "/appliances-services-in-al-mizhar/",
        element: <AppliancesServiceInAlMizhar />,
      },
      {
        path: "/appliances-services-in-damac-hills/",
        element: <AppliancesServiceInDamacHills />,
      },
      {
        path: "/appliances-services-in-dubai-hills-estate/",
        element: <AppliancesServiceInDubaiHillsEstate />,
      },
      {
        path: "/appliances-services-in-dubai-production-city/",
        element: <AppliancesServiceInDubaiProductionCity />,
      },
      {
        path: "/appliances-services-in-town-square/",
        element: <AppliancesServiceInTownSquare />,
      },
      {
        path: "/appliances-services-in-business-bay/",
        element: <AppliancesServiceInBusinessBay />,
      },
      {
        path: "/appliances-services-in-al-ghadeer-community/",
        element: <AppliancesServiceInAlGhadeerCommunity />,
      },
      {
        path: "/appliances-services-in-the-gardens/",
        element: <AppliancesServiceInTheGardens />,
      },
      {
        path: "/appliances-services-in-the-limestone-house-difc/",
        element: <AppliancesServiceInLimestoneHouseDifc />,
      },
      {
        path: "/appliances-services-in-international-media-and-production-zone/",
        element: <AppliancesServiceInInternationalMediaAndProductionZone />,
      },
      {
        path: "/appliances-services-in-jlt/",
        element: <AppliancesServicesInJlt />,
      },
      {
        path: "/appliances-services-in-the-views/",
        element: <AppliancesServicesInTheViews />,
      },
      {
        path: "/appliances-services-in-al-safa/",
        element: <AppliancesServicesInAlSafa />,
      },
      {
        path: "/appliances-services-in-jumeirah-park/",
        element: <AppliancesServicesInJumeirah />,
      },
      {
        path: "/appliances-services-jumeirah/",
        element: <AppliancesServicesJumeirah />,
      },
      {
        path: "/appliances-services-in-discovery-gardens/",
        element: <AppliancesServicesInDiscoveryGardens />,
      },
      {
        path: "/appliances-services-in-the-lakes/",
        element: <AppliancesServicesInTheLakes />,
      },

      {
        path: "/appliances-services-in-jumeirah-golf-estates/",
        element: <AppliancesServicesInJumeirahGolfEstates />,
      },
      {
        path: "/home-appliances-installation-maintenance-repair-fix-service-centre-in-jlt-dubai/",
        element: < HomeAppliancesServiceCentreInJltDubai />,
      },
      {
        path: "/appliances-services-in-emirates-hills/",
        element: <AppliancesServicesInEmiratesHills />,
      },
      {
        path: "/appliances-services-in-silicon-oasis-dubai/",
        element: <AppliancesServicesInSiliconOasisDubai />,
      },
      {
        path: "/appliances-services-in-victory-heights/",
        element: <AppliancesServicesInVictoryHeights />,
      },
      {
        path: "/appliances-services-in-remraam/",
        element: <AppliancesServicesInRemraam />,
      },
      {
        path: "/appliances-services-in-al-jafiliya/",
        element: <AppliancesServicesInAlJafiliya />,
      },
      {
        path: "/appliances-services-in-al-furjan/",
        element: <AppliancesServicesInAlFurjan />,
      },
      {
        path: "/appliances-services-in-dubai-investments-park/",
        element: <AppliancesServicesInDubaiInvestmentsPark />,
      },
      {
        path: "/appliances-services-in-tecom/",
        element: <AppliancesServicesInTecom />,
      },
      {
        path: "/appliances-services-in-al-barsha-south/",
        element: <AppliancesServicesInAlBarshaSouth />,
      },
      {
        path: "/appliances-services-in-jumeirah-village/",
        element: <AppliancesServicesInJumeirahVillage />,
      },
      {
        path: "/appliances-services-in-al-badaa/",
        element: <AppliancesServicesInAlBadaa />,
      },
      {
        path: "/appliances-services-in-al-satwa/",
        element: <AppliancesServicesInAlSatwa />,
      },
      {
        path: "/appliances-services-in-dubai-healthcare-city/",
        element: <AppliancesServicesInDubaiHealthcareCity />,
      },
      {
        path: "/appliances-services-in-jumeirah-islands/",
        element: <AppliancesServicesInJumeirahIslands />,
      },
      {
        path: "/appliances-services-in-jebel-ali-village/",
        element: <AppliancesServicesInJebelAliVillage />,
      },
      {
        path: "/appliances-services-in-palm-jumeirah/",
        element: <AppliancesServicesInPalmJumeirah />,
      },
      {
        path: "/appliances-services-in-dubailand-mazaya/",
        element: <AppliancesServicesInDubailandMazaya />,
      },
      {
        path: "/appliances-services-in-falcon-city-dubai/",
        element: <AppliancesServicesInFalconCityDubai />,
      },
      {
        path: "/appliances-services-in-arabian-ranches/",
        element: <ApplianceServiceInArabianRanches />
      },
      {
        path: "/washing-machine-repair-in-al-quoz-refrigerator-repair-in-al-quoz-fridge-repair-in-al-quoz-dishwasher-oven-cooker-stove-appliance-maintenance-fix-service-in-al-quoz-dubai/",
        element: <WashingMachineRepairInAlQuoz />,
      },
      {
        path: "/washing-machine-repair-town-dubai-fridge-repair-town-dubai-refrigerator-repairing-town-dubai-cooker-stove-oven-cooking-range-repairs-fix-service-centre-town-dubai-dishwasher-installation-fixing-mainte/",
        element: <WashingMachineRepairTownDubai />,
      },
      {
        path: "/washing-machine-repair-business-bay-fridge-repair-business-bay-refrigerator-repairing-business-bay-cooker-stove-oven-cooking-range-repairs-fix-service-centre-business-bay-dishwasher-installation-fixin/",
        element: <WashingMachineRepairBusinessBay />,
      },
      {
        path: "/washing-machine-repair-in-dubai-marina-fridge-repair-in-dubai-marina-refrigerator-repairing-in-dubai-marina-cooker-stove-oven-cooking-range-repairs-fix-service-centre-in-dubai-marina-dishwasher-instal/",
        element: <WashingMachineRepairInDubaiMarina />,
      },
      {
        path: "/fridge-repair-in-dubai-marina-washing-machine-repair-in-dubai-marina-dishwasher-repair-in-dubai-marina-refrigerator-repair-maintenance-in-dubai-marina-cooker-oven-repair-fix-service-in-cooking-range-e/",
        element: <FridgeRepairInDubaiMarina />,
      },
      {
        path: "/washing-machine-repair-al-barsha-dubai-fridge-repair-al-barsha-dubai-refrigerator-repairing-al-barsha-dubai-cooker-stove-oven-cooking-range-repairs-fix-service-centre-al-barsha-dubai-dishwasher-inst-2/",
        element: <WashingMachineRepairAlBarsha />,
      },
      {
        path: "/washing-machine-repair-palm-jumeirah-fridge-repair-palm-jumeirah-refrigerator-repairing-palm-jumeirah-cooker-stove-oven-cooking-range-repairs-fix-service-centre-palm-jumeirah-dishwasher-installation-f/",
        element: <WashingMachineRepairPalmJumeirah />,
      },
      {
        path: "/fridge-repair-dubai-marina/",
        element: <FridgeRepairDubaiMarina />,
      },
      {
        path: "/appliances-services-in-the-ritz-carlton-difc/",
        element: <ApplianceServiceInTheRitzCarltonDifc />,
      },
      {
        path: "/appliances-services-in-oud-metha/",
        element: <ApplianceServiceInOudMetha />,
      },
      {
        path: "/appliances-services-in-umm-al-sheif/",
        element: <ApplianceServiceInUmmAlSheif />,
      },
      {
        path: "/appliances-services-in-umm-suqeim/",
        element: <ApplianceServiceInUmmSuqeim />,
      },
      {
        path: "/appliances-services-in-jebel-ali-industrial-area/",
        element: <ApplianceServiceInJebelAliIndustrialArea />,
      },
      {
        path: "/home-appliances-installation-maintenance-repair-fix-service-centre-in-jumeirah-dubai/",
        element: <ApplianceServiceInJumeriahDubai />,
      },
      {
        path: "/appliances-services-in-jumeirah-heights/",
        element: <ApplianceServiceInJumeriahHeights />,
      },
      {
        path: "/appliances-services-in-dubai-silicon-oasis/",
        element: <ApplianceServiceInDubaiSiliconOasis />,
      },
      {
        path: "/appliances-services-in-the-villa/",
        element: <ApplianceServiceInTheVilla />,
      },
      {
        path: "/appliances-services-in-al-waha-community/",
        element: <ApplianceServiceInAlWahaCommunity />,
      },
      {
        path: "/appliances-services-in-bur-dubai/",
        element: <ApplianceServiceInBurDubai />,
      },
      {
        path: "/appliances-services-in-jumeirah-village-triangle/",
        element: <ApplianceServiceInJumeirahVillageTriangle />,
      },
      {
        path: "/appliances-services-in-mankhool/",
        element: <ApplianceServiceInMankhool />,
      },
      {
        path: "/appliances-services-in-the-springs/",
        element: <ApplianceServiceInTheSprings />,
      },
      {
        path: "/appliances-services-in-al-manara/",
        element: <ApplianceServiceInAlManara />,
      },
      {
        path: "/appliances-services-in-al-barari/",
        element: <ApplianceServiceInAlbarari />,
      },
      {
        path: "/appliances-services-in-jvt/",
        element: <ApplianceServiceInJvt />,
      },
      {
        path: "/appliances-services-in-jvt/",
        element: <ApplianceServiceInJvt />,
      },
      {
        path: "/appliances-services-in-nad-al-sheba/",
        element: <ApplianceServiceInNadAlSheba />,
      },
      {
        path: "/appliances-services-in-dubai-marina/",
        element: <ApplianceServiceInDubaiMarina />,
      },
      {
        path: "/appliances-services-in-al-barsha/",
        element: <ApplianceServiceInAlBarsha />,
      },
      {
        path: "/appliances-services-in-arabian-ranches/",
        element: <ApplianceServiceInArabianRanches />,
      },
      {
        path: "/appliances-services-in-jumeirah-village-circle/",
        element: <ApplianceServiceInJumeirahVillageCircle />,
      },
      {
        path: "/appliances-services-in-dubai-motor-city/",
        element: <ApplianceServiceInDubaiMotorCity />,
      },
      {
        path: "/appliances-services-in-al-wasl/",
        element: <ApplianceServiceInAlWasl />,
      },
      {
        path: "/appliances-services-in-jebel-ali-dip/",
        element: <ApplianceServiceInJebelAliDip />,
      },
      {
        path: "/appliances-services-in-academy-city/",
        element: <ApplianceServiceInAcademyCity />,
      },
      {
        path: "/appliances-services-in-dubailand-the-villa/",
        element: <ApplianceServiceInDubailandTheVilla/>,
      },
      {
        path: "/ApplianceServiceInLayanComminity/",
        element: <ApplianceServiceInLayanComminity/>,
      },
      {
        path: "/appliances-services-in-layan-community/",
        element: <ApplianceServiceInLayanComminity/>,
      },
      {
        path: "/appliances-services-in-jvc/",
        element: <ApplianceServiceInJvc/>,
      },
      {
        path: "/appliances-services-in-deira/",
        element: <ApplianceServiceInDeira />,
      },
      {
        path: "/appliances-services-in-jumeirah-beach-residence/",
        element: <ApplianceServiceInJumeirahBeachResidence />,
      },
      {
        path: "/appliances-services-in-jge/",
        element: <ApplianceServiceInJge />,
      },
      {
        path: "/appliances-services-in-hudaiba/",
        element: <ApplianceServiceInHudaiba />,
      },
      {
        path: "/appliances-services-in-jebel-ali-free-zone/",
        element: <ApplianceServiceInJebelAliFreeZone />,
      },
      {
        path: "/appliances-services-in-dubai-sports-city/",
        element: <ApplianceServiceInDubaiSportCity />,
      },
      {
        path: "/appliances-services-in-dubai-internet-city/",
        element: <ApplianceServiceInDubaiInternetCity />,
      },
      {
        path: "/appliances-washing-machine-fridge-dishwasher-service-jbr-dubai/",
        element: <ApplianceServiceInJbrDubai/>,
      },
      {
        path: "/appliances-services-in-mudon/",
        element: <ApplianceServiceInMudon />,
      },
      {
        path: "/appliances-services-in-jebel-ali/",
        element: <ApplianceServiceInJebelAli />,
      },
      {
        path: "/appliances-services-in-dip/",
        element: <ApplianceServiceInDip />,
      },
      {
        path: "/appliances-services-in-index-tower-difc/",
        element: <ApplianceServiceInIndexTowerDifc />,
      },
      {
        path: "/appliances-services-in-impzy/",
        element: <ApplianceServiceInImpzy />,
      },
      {
        path: "/appliances-services-in-jbr/",
        element: <ApplianceServiceInJbr />,
      },
      {
        path: "/appliances-services-in-dubailand-mazaya-queue-point/",
        element: <ApplianceServiceInDubailandMazayaQueuePoint />,
      },
      {
        path: "/appliances-services-in-flamingo-villas-dubai/",
        element: <ApplianceServiceInFlamingoVillasDubai />,
      },
      {
        path: "/appliances-services-in-cedre-villas-silicon-oasis-dubai/",
        element: <ApplianceServiceInCedreVillasSiliconOasisDubai />,
      },
      {
        path: "/appliances-services-in-al-karama/",
        element: <ApplianceServiceInAlKaram />,
      },
      {
        path: "/appliances-services-in-the-greens/",
        element: <ApplianceServiceInTheGreens />,
      },
      {
        path: "/appliances-services-in-arabian-ranches-2/",
        element: <ApplianceServiceInArabianRanches2 />,
      },
      {
        path: "/appliances-services-in-jumeirah-lake-towers/",
        element: <ApplianceServiceInJumeirahLakeTowers />,
      },
      {
        path: "/appliances-services-in-dubai-media-city/",
        element: <ApplianceServiceInDubaiMediaCity />,
      },
      {
        path: "/appliances-services-in-the-meadows/",
        element: <ApplianceServiceInMeadows />,
      },
      {
        path: "/appliances-services-in-dubai-studio-city/",
        element: <ApplianceServiceInDubaiStudioCity />,
      },
      {
        path: "/appliances-services-in-al-sufouh/",
        element: <AppliancesServicesInAlSufouh />,
      },
      {
        path: "/appliances-services-in-al-bada/",
        element: <AppliancesServicesInAlBada />,
      },
      {
        path: "/appliances-services-in-al-raffa/",
        element: <ApplianceServiceInAlRaffa />,
      },
      {
        path: "/appliances-services-in-difc/",
        element: <ApplianceServiceInDifc />,
      },
      {
        path: "/appliances-services-in-jumeirah-park/",
        element: <ApplianceServiceInJumeirahPark />,
      },
    ],
  }
], {
  //  basename: "/fajservicess"
});
