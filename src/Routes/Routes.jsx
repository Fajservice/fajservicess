import { createBrowserRouter, Navigate } from "react-router-dom";
import * as Components from "./allComponents.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Components.Main />,
    children: [
      {
        path: "/",
        element: <Components.Home />,
      },
      {
        path: "/about-us/",
        element: <Components.AboutPage />,
      },
      {
        path: "/who-we-are/",
        element: <Components.WhoWeArePage />,
      },
      {
        path: "/our-vision-and-mission/",
        element: <Components.OurVisionAndMissionPage />,
      },
      {
        path: "/our-history/",
        element: <Components.OurHistoryPage />,
      },
      {
        path: "/our-team/",
        element: <Components.OurTeamPage />,
      },
      {
        path: "/ac-tonnage-calculator/",
        element: <Components.AcTonnageCalculator />,
      },
      {
        path: "/orphan/",
        element: <Components.Orphan />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
      {
        path: "/services/",
        element: <Components.ServicesPage />,
      },
      {
        path: "/faj-price-list/",
        element: <Components.FajPriceList />,
      },
      {
        path: "/services/air-conditioning-repair/ac-service/",
        element: <Components.AcServiceInDubai />,
      },
      {
        path: "/services/coffee-machine/",
        element: <Components.CoffeeMachine />,
      },
      {
        path: "/services/air-conditioning-repair/",
        element: <Components.AirConditioningCatg />,
      },
      {
        path: "/services/kitchen-equipment-maintenance/",
        element: <Components.KitchenEquipmentPage />,
      },
      {
        path: "/services/refrigeration-equipment/",
        element: <Components.RefrigerationEquipmentCatg />,
      },
      {
        path: "/services/commercial-laundry-equipment/",
        element: <Components.CommercialLaundaryEquipmentPage />,
      },
      {
        path: "/services/air-conditioning-repair/تصليح-مكيفات-الهواء-خدمة-وصيانة-دبي/",
        element: <Components.AcServiceInDubaiArabic />,
      },
      {
        path: "/services/air-conditioning-repair/ac-annual-maintenance-contract/",
        element: <Components.AcAnnualMaintenanceContract />,
      },
      {
        path: "/electrical-plumbing-service/",
        element: <Components.ElectricalPlumbingService />,
      },
      {
        path: "/dubai/near-me/",
        element: <Components.NearMe />,
      },
      {
        path: "/faqs/",
        element: <Components.Faqs />,
      },
      {
        path: "/dubai/ac-repair-near-me/",
        element: <Components.AcRepairNearMe />,
      },
      {
        path: "/dubai/refrigerator-repair-near-me/",
        element: <Components.RefrigeratorRepairNearMe />,
      },
      {
        path: "/dubai/washing-machine-repair-near-me/",
        element: < Components.WashingMachineRepairNearMe />,
      },
      {
        path: "/services/home-appliances-repair/appliances-repair-service/",
        element: < Components.FreestandingHomeAppliancesRepairService />,
      },
      {
        path: "/services/coffee-machine/coffee-machine-service-center/",
        element: < Components.CoffeeMachineServiceCenterInDubai />,
      },
      {
        path: "/services/coffee-machine/coffee-machine-repairs/",
        element: < Components.CommercialCoffeeMachineRepair />,
      },
      {
        path: "/services/home-appliances-repair/hob-repair-service/",
        element: <Components.HobRepair />,
      },
      {
        path: "/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/",
        element: <Components.BBQService />,
      },
      {
        path: "/services/home-appliances-repair/cigar-humidor-repair/",
        element: <Components.CigarcabnitService />,
      },
      {
        path: "/our-portfolio/",
        element: <Components.PortfolioPage />,
      },
      {
        path: "/services/home-appliances-repair/oven-repair-service/",
        element: <Components.OvenRepairService />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/victory-heights/",
        element: <Components.AcRepairInVictoryHeights />,
      },
      {
        path: "/services/kitchen-equipment-maintenance/rational-commercial-kitchen-equipment-repair-and-maintenance-service-dubai/",
        element: <Components.RationalCommercialKitchenEquipmentRepairService />,
      },
      {
        path: "/services/kitchen-equipment-maintenance/unox-commercial-oven-repair-and-maintenance-service-dubai/",
        element: <Components.UnoxCommercialOvenRepairService />,
      },
      {
        path: "/services/kitchen-equipment-maintenance/commercial-cooking-appliances-repair-service/",
        element: <Components.CookingEquipmentService />,
      },
      {
        path: "/services/kitchen-equipment-maintenance/meat-grinder-repair/",
        element: <Components.MeatGrinderRepair />,
      },
      {
        path: "/services/commercial-dishwasher-repair/",
        element: <Components.CommercialDishwasherServices />,
      },
      {
        path: "/services/commercial-washing-machine-repair/",
        element: <Components.CommercialWashingMachineRepair />,
      },
      {
        path: "/services/commercial-laundry-equipment-service/",
        element: <Components.CommercialLaundryEquipmentService />,
      },
      {
        path: "/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-amc/",
        element: <Components.KitchenEquipmentAMC />,
      },
      {
        path: "/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-maintenance-services/",
        element: <Components.KitchenEquipmentRepair />,
      },
      {
        path: "/services/refrigeration-equipment/ice-maker-repair/",
        element: <Components.IceMakerRepair />,
      },
      {
        path: "/services/refrigeration-equipment/commercial-refrigeration-maintenance-contact-services/",
        element: <Components.RefrigerationAMCServices />,
      },
      {
        path: "/services/refrigeration-equipment/commercial-refrigeration-maintenance/",
        element: <Components.CommercialRefrigerationMaintence />,
      },
      {
        path: "/services/home-appliances-repair/gas-cooker-repair-service/",
        element: <Components.GasRangeRepairService />,
      },
      {
        path: "/services/home-appliances-repair/dishwasher-repair-service/",
        element: <Components.DishwasherRepair />,
      },
      {
        path: "/services/kitchen-equipment-maintenance/oven-repair/",
        element: <Components.OvenRepair />,
      },
      {
        path: "/services/home-appliances-repair/robot-vacuum-cleaner-repair/",
        element: <Components.VacuumCleanerRepair />,
      },
      {
        path: "/services/home-appliances-repair/small-home-appliances-service-center-in-dubai/",
        element: <Components.SmallAppliancesRepair />,
      },
      {
        path: "/services/home-appliances-repair/built-in-appliances-repair-service/",
        element: <Components.IntegratedApplianceRepair />,
      },
      {
        path: "/services/home-appliances-repair/appliances-amc-service/",
        element: <Components.AppliancesMaintenanceContract />,
      },
      {
        path: "/services/home-appliances-repair/washing-machine-repair-service-dubai/",
        element: <Components.WashingMachineRepairServiceDubai />,
      },
      {
        path: "/services/home-appliances-repair/refrigerator-repair-service/",
        element: <Components.RefrigeratorRepairInDubai />,
      },
      {
        path: "/services/air-conditioning-repair/brands/coleman/",
        element: <Components.ColemenAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/supra/",
        element: <Components.SupraAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/midea/",
        element: <Components.MideaAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/fujitsu/",
        element: <Components.FujitsuAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/daikin/",
        element: <Components.DaikinAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/daewoo/",
        element: <Components.DaewooAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/skm/",
        element: <Components.SkmAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/cooline/",
        element: <Components.CoolineAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/westpoint/",
        element: <Components.WestpointAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/york/",
        element: <Components.YorkAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/blue-star/",
        element: <Components.BlueStarAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/rheem/",
        element: <Components.RheemAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/ruud/",
        element: <Components.RuudAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/trane/",
        element: <Components.TraneAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/super-general/",
        element: <Components.SuperGeneralAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/toshiba/",
        element: <Components.ToshibaAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/lg/",
        element: <Components.LgAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/aftron/",
        element: <Components.AftronAcRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/frigidaire/",
        element: <Components.FrigidaireRefrigeratorRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/panasonic/",
        element: <Components.PanasonicAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/whirlpool/",
        element: <Components.WhirlpoolAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/samsung/",
        element: <Components.SamsungAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/mcquay/",
        element: <Components.McquayAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/nikai/",
        element: <Components.NikaiAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/crafft/",
        element: <Components.CrafftAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/lennox/",
        element: <Components.LennoxAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/hitachi/",
        element: <Components.HitachiAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/o-general/",
        element: <Components.OGeneralAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/bryant/",
        element: <Components.BryantAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/white-westinghouse/",
        element: <Components.WhiteWestingHouseAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/mitsubishi/",
        element: <Components.MitsubishiAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/sanyo/",
        element: <Components.SanyoAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/daikool/",
        element: <Components.DaikoolAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/goodman/",
        element: <Components.GoodmanAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/sub-zero/",
        element: <Components.SubZeroAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/gree/",
        element: <Components.GreeAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/haier/",
        element: <Components.HaierAcRepair />,
      },
      {
        path: "/services/air-conditioning-repair/brands/tcl/",
        element: <Components.TCLAcRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/elica/",
        element: <Components.ElicaAppliancesService />,
      },
      {
        path: "/services/home-appliances-repair/brands/fagor/",
        element: <Components.FagorFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/neff/",
        element: <Components.NeffFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/ariston/",
        element: <Components.AristonFrideRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/fisher-paykel/",
        element: <Components.FisherPaykelFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/siemens/",
        element: <Components.SiemensHomeAppUnstallation />,
      },
      {
        path: "/services/home-appliances-repair/brands/maytag/",
        element: <Components.MaytagFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/difc/",
        element: <Components.ApplianceServiceInDifc />,
      },
      {
        path: "/services/home-appliances-repair/brands/smeg/",
        element: <Components.SmegFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/sub-zero/",
        element: <Components.SubZeroFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/hitachi/",
        element: <Components.HitachiFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/gaggenau/",
        element: <Components.GaggenauFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/whirlpool/",
        element: <Components.WhirlpoolFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/teka/",
        element: <Components.TekaHomeAppInstllation />,
      },
      {
        path: "/services/home-appliances-repair/brands/gorenje/",
        element: <Components.GorenjeFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/miele/",
        element: <Components.MieleFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/wolf/",
        element: <Components.WolfHomeAppMaintenance />,
      },
      {
        path: "/services/home-appliances-repair/brands/toshiba/",
        element: <Components.ToshibaHomeAppMaintenance />,
      },
      {
        path: "/services/home-appliances-repair/brands/gibson/",
        element: <Components.GibsoneFridgeRepair />,
      },
      {
        path: "/project",
        element: <Components.ProjectPage />,
      },
      {
        path: "/services/home-appliances-repair/",
        element: <Components.HomeAppliancesPage />,
      },
      {
        path: "/blogs",
        element: <Components.BlogPage />,
      },
      {
        path: "/blog/:slug",
        element: <Components.BlogDetailsPage />,
      },
      {
        path: "/contact-us/",
        element: <Components.ContactPage />,
      },
      {
        path: "/privacy-policy/",
        element: <Components.PrivacyPolicyPage />,
      },
      {
        path: "/refund-policy/",
        element: <Components.RefundPolicyPage />,
      },
      {
        path: "/terms-and-conditions/",
        element: <Components.TermsConditionsPage />,
      },
      {
        path: "/dubai-ac-service-price-list/",
        element: <Components.DubaiAcServicePriceList />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/the-ritz-carlton-difc/",
        element: <Components.AcRepairInRitz />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/dubai-silicon-oasis/",
        element: <Components.AcRepairInSiliconOasis />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/metha/",
        element: <Components.AcRepairInMetha />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jumeirah-village/",
        element: <Components.AcRepairInJumeirahVillage />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jebel-ali-free-zone/",
        element: <Components.AcRepairInJebelAliFreeZone />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/umm-al-sheif/",
        element: <Components.AcRepairInUmmAlSheif />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/the-greens/",
        element: <Components.AcRepairinTheGreens />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-jafiliya/",
        element: <Components.AcRepairinAlJafiliya />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/the-meadows/",
        element: <Components.AcRepairinTheMeadows />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/",
        element: <Components.CoverageAreaPage />,
      },
      
      {
        path: "/services/air-conditioning-repair/brands/",
        element: <Components.BrandsPage />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/academy-city/",
        element: <Components.AcRepairInAcademyCity />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/limestone-house-difc/",
        element: <Components.AcRepairInLimestoneHouseDifc />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/arabian-ranches-2/",
        element: <Components.AcRepairInArabianRanches2 />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/dubai-studio-city/",
        element: <Components.AcRepairInDubaiStudioCity />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jumeirah-islands/",
        element: <Components.AcRepairInJumeirahIslands />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-qusais/",
        element: <Components.AcRepairInAlQusais />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/the-springs/",
        element: <Components.AcRepairInTheSprings />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-mirdif/",
        element: <Components.AcRepairInAlMirdif />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/international-media-and-production-zone/",
        element: <Components.AcRepairInInternationalMediaAndProductionZone />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/business-bay/",
        element: <Components.AcRepairInBusinessBay />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/arabian-ranches/",
        element: <Components.AcRepairInArabianRanches />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/dip/",
        element: <Components.AcRepairInDip />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/discovery-gardens/",
        element: <Components.AcRepairInDiscoveryGardens />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-waha-community/",
        element: <Components.AcRepairInAlWahaCommunity />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/hudaiba/",
        element: <Components.AcRepairInHudaiba />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/impz/",
        element: <Components.AcRepairInImpz />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-satwa/",
        element: <Components.AcRepairInAlSatwa />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jafza/",
        element: <Components.AcRepairInAlJafza />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-khawaneej/",
        element: <Components.AcRepairInAlKhawaneej />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-manara/",
        element: <Components.AcRepairInAlManara />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jumeirah-golf-estates/",
        element: <Components.AcRepairInJumeirahGolfEstates />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/layan-community/",
        element: <Components.AcRepairInLayanCommunity />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-badaa/",
        element: <Components.AcRepairInAlBadaa />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/dubai-internet-city/",
        element: <Components.AcRepairInDubaiInternetCity />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jumeirah-lake-towers/",
        element: <Components.AcRepairInJumeirahLakeTowers />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-tawar/",
        element: <Components.AcRepairinAlTawar />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-barsha-south/",
        element: <Components.AcRepairInAlBarshaSouth />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/the-gardens/",
        element: <Components.AcRepairInGardens />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jbr/",
        element: <Components.AcRepairInJBR />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/flamingo-villas/",
        element: <Components.AcRepairInFlamingoVillas />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-quoz/",
        element: <Components.AcRepairInAlQuoz />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jebel-ali-dip/",
        element: <Components.AcRepairInJebelAliDip />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-sufouh/",
        element: <Components.AcRepairInSufouh />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jumeirah-beach-residence/",
        element: <Components.AcRepairInJumeirahBeachResidence />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/the-villa/",
        element: <Components.AcRepairInTheVilla />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jumeirah-heights/",
        element: <Components.AcRepairInJumeirahHeights />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-quoz-industrial-area/",
        element: <Components.AcRepairInQuozIndustrialArea />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/the-lakes/",
        element: <Components.AcRepairInTheLakes />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/umm-suqeim/",
        element: <Components.AcRepairInUmmSuqeim />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jvt/",
        element: <Components.AcRepairInJvt />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jumeirah/",
        element: <Components.AcRepairInJumeirah />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jebel-ali/",
        element: <Components.AcRepairInJebelAli />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/emirates-hills/",
        element: <Components.AcRepairInEmiratesHills />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jlt/",
        element: <Components.AcRepairInJLT />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/index-tower-difc/",
        element: <Components.AcRepairInIndexTowerDifc />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-rashidiya/",
        element: <Components.AcRepairInAlRashidiya />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-karama/",
        element: <Components.AcRepairInAlkarama />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/south-ridge/",
        element: <Components.AcRepairInsouthRidge />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/nad-al-hammar/",
        element: <Components.AcRepairInNadAlHammar />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/dubai-healthcare-city/",
        element: <Components.AcRepairInDubaiHealthcareCity />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/knowledge-village/",
        element: <Components.AcRepairInKnowledgeVillage />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/deira/",
        element: <Components.AcRepairInDeira />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-furjan/",
        element: <Components.AcRepairInAlFurjan />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jumeirah-park/",
        element: <Components.AcRepairInJumeirahPark />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/ras-al-khor-industrial-area/",
        element: <Components.AcRepairInRasAlKhorIndustrialArea />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-warqa/",
        element: <Components.AcRepairInAlWarqa />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/dubailand-the-villa-point/",
        element: <Components.AcRepairInDubailandTheVillaPoint />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-wasl/",
        element: <Components.AcRepairInAlWasl />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/dubai-investments-park/",
        element: <Components.AcRepairInInvestmentsPark />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-aweer/",
        element: <Components.AcRepairInAlaweer />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/difc/",
        element: <Components.AcRepairInDifc />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-barsha/",
        element: <Components.AcRepairInAlBarsha />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-raffa/",
        element: <Components.AcRepairInAlRaffa />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/dubai-international-financial-centre/",
        element: <Components.AcRepairInDubaiInternationalFinancialCenter />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/bur-dubai/",
        element: <Components.AcRepairInBurDubai />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/burj-khalifa-lake/",
        element: <Components.AcRepairInBurjKhalifaLake />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/dubailand-mazaya-queue/",
        element: <Components.AcRepairInDubailandMazayaQueue />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-bada/",
        element: <Components.AcRepairInAlBada />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/mudon/",
        element: <Components.AcRepairInMudon />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/nad-al-sheba/",
        element: <Components.AcRepairInNadAlSheba />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/downtown/",
        element: <Components.AcRepairInDownTown />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-barari/",
        element: <Components.AcRepairInAlBarari />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/bay-square/",
        element: <Components.AcRepairInBaySquare />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/media-city/",
        element: <Components.AcRepairInMediaCity />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/umm-ramool/",
        element: <Components.AcRepairInUmmRamool />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/cedre-villas-silicon-oasis-dubai/",
        element: <Components.AcRepairInCedreVillasSiliconOasisDubai />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/motor-city/",
        element: <Components.AcRepairInMotorCity />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/remraam-2/",
        element: <Components.AcRepairInRemraam2 />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-safa/",
        element: <Components.AcRepairInAlSafa />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/remraam/",
        element: <Components.AcRepairInRemraam />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jge/",
        element: <Components.AcRepairInJqe />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/dubai-sport-city/",
        element: <Components.AcRepairInDubaiSportCity />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/dubai-marina/",
        element: <Components.AcRepairInDubaiMarina />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jebel-ali-village/",
        element: <Components.AcRepairInJebelAliVillage />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/mankhool/",
        element: <Components.AcRepairInMankhool />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/the-views/",
        element: <Components.AcRepairInTheViews />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/palm-jumeirah/",
        element: <Components.AcRepairInPalmJumeirah />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jvc/",
        element: <Components.AcRepairInJvc />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-mamzar/",
        element: <Components.AcRepairInAlMamzar />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/al-mizhar/",
        element: <Components.AcRepairInAlMizhar />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/damac-hills/",
        element: <Components.AcRepairInDamacHills />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/dubai-hills-estate/",
        element: <Components.AcRepairInDubaiHillsEstate />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/dubai-production-city/",
        element: <Components.AcRepairInProductionCity />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/town-square/",
        element: <Components.AcRepairandServiceInTownSquare />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/old-town-dubai/",
        element: <Components.AcRepairInOldTown />,
      },

      {
        path: "/services/home-appliance-repair/coverage-area/",
        element: <Components.HomeCoverageAreaPage />,
      },

      {
        path: "/services/home-appliances-repair/brands/",
        element: <Components.HomeAppBrandPage />,
      },
      {
        path: "/services/home-appliances-repair/brands/indesit/",
        element: <Components.IndesitWashingMachine />,
      },
      {
        path: "/services/home-appliances-repair/brands/viking/",
        element: <Components.VikingAppliancesService />,
      },
      {
        path: "/services/home-appliances-repair/brands/sanyo/",
        element: <Components.SanyoHomeAppliance />,
      },
      {
        path: "/services/home-appliances-repair/brands/beko/",
        element: <Components.BekoFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/aeg/",
        element: <Components.AegFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/hisense/",
        element: <Components.HisenseFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/panasonic/",
        element: <Components.PanasonicFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/siemens/",
        element: <Components.SiemensHomeAppliance />,
      },
      {
        path: "/services/home-appliances-repair/brands/terim/",
        element: <Components.TerimAppliance />,
      },
      {
        path: "/services/home-appliances-repair/brands/blomberg/",
        element: <Components.BlombergFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/daewoo/",
        element: <Components.DaewooHomeApplianceRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/aftron/",
        element: <Components.AftronFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/hoover/",
        element: <Components.HooverFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/lg/",
        element: <Components.LgFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/foster/",
        element: <Components.FosterAppliance />,
      },
      {
        path: "/services/home-appliances-repair/brands/samsung/",
        element: <Components.SamsungHomeApplianceRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/electrolux/",
        element: <Components.ElectroluxFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/admiral/",
        element: <Components.AdmiralFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/bompani/",
        element: <Components.BompaniFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/kenmore/",
        element: <Components.KenmoreAppliancesService />,
      },
      {
        path: "/services/home-appliances-repair/brands/sharp/",
        element: <Components.SharpHomeAppliancesInstallation />,
      },
      {
        path: "/services/home-appliances-repair/brands/unimac/",
        element: <Components.UnimacWashingMachineRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/haier/",
        element: <Components.HaierFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/baumatic/",
        element: <Components.BaumaticAppliances />,
      },
      {
        path: "/services/home-appliances-repair/brands/faber/",
        element: <Components.FaberAppliancesService />,
      },
      {
        path: "/services/home-appliances-repair/brands/marvel/",
        element: <Components.MarvelFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/brandt/",
        element: <Components.BrandtFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/thermador/",
        element: <Components.ThemadorAppliancesService />,
      },
      {
        path: "/services/home-appliances-repair/brands/bertazzoni/",
        element: <Components.BertazzoniRefrigeratorRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/boston/",
        element: <Components.BostonRefrigeratorRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/kelvinator/",
        element: <Components.KelvinatorHomeAppInstallation />,
      },
      {
        path: "/services/home-appliances-repair/brands/zanussi/",
        element: <Components.ZanussiFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/sears/",
        element: <Components.SearsHomeAppInstallation />,
      },
      {
        path: "/services/home-appliances-repair/brands/ge-general-electric/",
        element: <Components.GeGeneralElectricFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/kitchenaid/",
        element: <Components.KitchenaidRefrigeratorRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/westpoint/",
        element: <Components.WestpointFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/liebherr/",
        element: <Components.LiebherrRefrigeratorRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/white-westinghouse/",
        element: <Components.WhiteWestinghouseFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/speed-queen/",
        element: <Components.SpeedQueenWashingMachineRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/franke/",
        element: <Components.FrankeAppliancesRepairService />,
      },
      {
        path: "/services/home-appliances-repair/brands/ifb/",
        element: <Components.IfbRefrigeratorRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/kitchenaid-stand-mixer-repair/",
        element: <Components.KitchenaidStandMixerRepairService />,
      },
      {
        path: "/services/home-appliances-repair/brands/kenwood/",
        element: <Components.KenwoodStandMixerRepairService />,
      },
      {
        path: "/services/home-appliances-repair/brands/candy/",
        element: <Components.CandyRefrigeratorRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/hotpoint/",
        element: <Components.HotpointRefrigeratorRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/de-dietrich/",
        element: <Components.DeDietrichFridgeRepair />,
      },
      {
        path: "/services/home-appliances-repair/brands/smeg-mixer-repair/",
        element: <Components.SmegMixerRepairService />,
      },
      {
        path: "/services/home-appliances-repair/brands/la-germania/",
        element: <Components.LaGermaniaCookingRangeRepair />,
      },
      {
        path: "/services/home-appliances-repair/ecovacs-vacuum-cleaner-repair-and-service-in-dubai/",
        element: <Components.EcovacsVacuumCleanerRepairAndService />,
      },
      {
        path: "/services/home-appliances-repair/roborock-vacuum-cleaner-repair-service-in-dubai/",
        element: <Components.RoboRockVacuumCleanerRepairAndService />,
      },
      {
        path: "/services/home-appliances-repair/brands/delonghi/",
        element: <Components.DelonghiCoffeeMachineRepair />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-mamzar/",
        element: <Components.AppliancesServiceInAlMamzar />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/",
        element: <Components.HomeCoverageAreaPage />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/damac-hills/",
        element: <Components.AppliancesServiceInDamacHills />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/dubai-hills-estate/",
        element: <Components.AppliancesServiceInDubaiHillsEstate />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/dubai-production-city/",
        element: <Components.AppliancesServiceInDubaiProductionCity />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/town-square/",
        element: <Components.AppliancesServiceInTownSquare />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/business-bay/",
        element: <Components.AppliancesServiceInBusinessBay />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-ghadeer-community/",
        element: <Components.AppliancesServiceInAlGhadeerCommunity />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/the-gardens/",
        element: <Components.AppliancesServiceInTheGardens />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/the-limestone-house-difc/",
        element: <Components.AppliancesServiceInLimestoneHouseDifc />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/international-media-and-production-zone/",
        element: <Components.AppliancesServiceInInternationalMediaAndProductionZone />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jlt/",
        element: <Components.AppliancesServicesInJlt />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-mizhar/",
        element: <Components.AppliancesServiceInAlMizhar />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/the-views/",
        element: <Components.AppliancesServicesInTheViews />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-safa/",
        element: <Components.AppliancesServicesInAlSafa />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/academy-city/",
        element: <Components.ApplianceServiceInAcademyCity/>,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jumeirah/",
        element: <Components.AppliancesServicesJumeirah />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/discovery-gardens/",
        element: <Components.AppliancesServicesInDiscoveryGardens />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/the-lakes/",
        element: <Components.AppliancesServicesInTheLakes />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jumeirah-golf-estates/",
        element: <Components.AppliancesServicesInJumeirahGolfEstates />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/emirates-hills/",
        element: <Components.AppliancesServicesInEmiratesHills />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/victory-heights/",
        element: <Components.AppliancesServicesInVictoryHeights />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/remraam/",
        element: <Components.AppliancesServicesInRemraam />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-jafiliya/",
        element: <Components.AppliancesServicesInAlJafiliya />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-furjan/",
        element: <Components.AppliancesServicesInAlFurjan />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/dubai-investments-park/",
        element: <Components.AppliancesServicesInDubaiInvestmentsPark />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/tecom/",
        element: <Components.AppliancesServicesInTecom />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-barsha-south/",
        element: <Components.AppliancesServicesInAlBarshaSouth />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jumeirah-village/",
        element: <Components.AppliancesServicesInJumeirahVillage />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-badaa/",
        element: <Components.AppliancesServicesInAlBadaa />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-satwa/",
        element: <Components.AppliancesServicesInAlSatwa />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/dubai-healthcare-city/",
        element: <Components.AppliancesServicesInDubaiHealthcareCity />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jumeirah-islands/",
        element: <Components.AppliancesServicesInJumeirahIslands />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jebel-ali-village/",
        element: <Components.AppliancesServicesInJebelAliVillage />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/palm-jumeirah/",
        element: <Components.AppliancesServicesInPalmJumeirah />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/dubailand-mazaya/",
        element: <Components.AppliancesServicesInDubailandMazaya />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/falcon-city-dubai/",
        element: <Components.AppliancesServicesInFalconCityDubai />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/arabian-ranches/",
        element: <Components.ApplianceServiceInArabianRanches />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-quoz/",
        element: <Components.WashingMachineRepairInAlQuoz />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/town-dubai/",
        element: <Components.WashingMachineRepairTownDubai />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/business-bay/",
        element: <Components.WashingMachineRepairBusinessBay />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/the-ritz-carlton-difc/",
        element: <Components.ApplianceServiceInTheRitzCarltonDifc />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/oud-metha/",
        element: <Components.ApplianceServiceInOudMetha />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/umm-al-sheif/",
        element: <Components.ApplianceServiceInUmmAlSheif />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/umm-suqeim/",
        element: <Components.ApplianceServiceInUmmSuqeim />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jebel-ali-industrial-area/",
        element: <Components.ApplianceServiceInJebelAliIndustrialArea />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jumeirah-dubai/",
        element: <Components.ApplianceServiceInJumeriahDubai />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jumeirah-heights/",
        element: <Components.ApplianceServiceInJumeriahHeights />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/dubai-silicon-oasis/",
        element: <Components.ApplianceServiceInDubaiSiliconOasis />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/the-villa/",
        element: <Components.ApplianceServiceInTheVilla />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-waha-community/",
        element: <Components.ApplianceServiceInAlWahaCommunity />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/bur-dubai/",
        element: <Components.ApplianceServiceInBurDubai />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jumeirah-village-triangle/",
        element: <Components.ApplianceServiceInJumeirahVillageTriangle />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/mankhool/",
        element: <Components.ApplianceServiceInMankhool />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/the-springs/",
        element: <Components.ApplianceServiceInTheSprings />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-manara/",
        element: <Components.ApplianceServiceInAlManara />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-barari/",
        element: <Components.ApplianceServiceInAlbarari />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jvt/",
        element: <Components.ApplianceServiceInJvt />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/nad-al-sheba/",
        element: <Components.ApplianceServiceInNadAlSheba />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/dubai-marina/",
        element: <Components.ApplianceServiceInDubaiMarina />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-barsha/",
        element: <Components.ApplianceServiceInAlBarsha />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jumeirah-village-circle/",
        element: <Components.ApplianceServiceInJumeirahVillageCircle />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/dubai-motor-city/",
        element: <Components.ApplianceServiceInDubaiMotorCity />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-wasl/",
        element: <Components.ApplianceServiceInAlWasl />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jebel-ali-dip/",
        element: <Components.ApplianceServiceInJebelAliDip />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/dubailand-the-villa/",
        element: <Components.ApplianceServiceInDubailandTheVilla />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/layan-community/",
        element: <Components.ApplianceServiceInLayanComminity />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jvc/",
        element: <Components.ApplianceServiceInJvc />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/deira/",
        element: <Components.ApplianceServiceInDeira />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jumeirah-beach-residence/",
        element: <Components.ApplianceServiceInJumeirahBeachResidence />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jge/",
        element: <Components.ApplianceServiceInJge />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/hudaiba/",
        element: <Components.ApplianceServiceInHudaiba />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jebel-ali-free-zone/",
        element: <Components.ApplianceServiceInJebelAliFreeZone />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/dubai-sports-city/",
        element: <Components.ApplianceServiceInDubaiSportCity />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/dubai-internet-city/",
        element: <Components.ApplianceServiceInDubaiInternetCity />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jbr-dubai/",
        element: <Components.ApplianceServiceInJbrDubai />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/mudon/",
        element: <Components.ApplianceServiceInMudon />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jebel-ali/",
        element: <Components.ApplianceServiceInJebelAli />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/dip/",
        element: <Components.ApplianceServiceInDip />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/index-tower-difc/",
        element: <Components.ApplianceServiceInIndexTowerDifc />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/impzy/",
        element: <Components.ApplianceServiceInImpzy />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jbr/",
        element: <Components.ApplianceServiceInJbr />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/dubailand-mazaya-queue-point/",
        element: <Components.ApplianceServiceInDubailandMazayaQueuePoint />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/flamingo-villas-dubai/",
        element: <Components.ApplianceServiceInFlamingoVillasDubai />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/cedre-villas-silicon-oasis-dubai/",
        element: <Components.ApplianceServiceInCedreVillasSiliconOasisDubai />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-karama/",
        element: <Components.ApplianceServiceInAlKaram />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/the-greens/",
        element: <Components.ApplianceServiceInTheGreens />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/arabian-ranches-2/",
        element: <Components.ApplianceServiceInArabianRanches2 />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jumeirah-lake-towers/",
        element: <Components.ApplianceServiceInJumeirahLakeTowers />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/dubai-media-city/",
        element: <Components.ApplianceServiceInDubaiMediaCity />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/the-meadows/",
        element: <Components.ApplianceServiceInMeadows />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/dubai-studio-city/",
        element: <Components.ApplianceServiceInDubaiStudioCity />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-sufouh/",
        element: <Components.AppliancesServicesInAlSufouh />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-bada/",
        element: <Components.AppliancesServicesInAlBada />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/al-raffa/",
        element: <Components.ApplianceServiceInAlRaffa />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/difc/",
        element: <Components.ApplianceServiceInDifc />,
      },
      {
        path: "/services/home-appliances-repair/coverage-area/jumeirah-park/",
        element: <Components.ApplianceServiceInJumeirahPark />,
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/jebel-ali-industrial-area/",
        element: <Components.AcRepairInJebelAliIndustrialArea />,
      },
      {
        path: "/dubai-service-center-coffee-machine/",
        element: <Components.CoffeeMachineLandingPage />,
      },
      {
        path: "/career/",
        element: <Components.Career />,
      },
      {
        path: "/testimonials/",
        element: <Components.Testimonials />,
      },

      
      // Redirection
      {
        path: "/blog/is-air-fryer-healthy.php",
        element: <Navigate to="/blog/is-air-fryer-healthy/" replace />
      },
      {
        path: "/cigar-cabinet-humidifier-repair",
        element: <Navigate to="/cigar-humidor-repair/" replace />
      },
      {
        path: "/coffee-machine-repair/",
        element: <Navigate to="/coffee-machine-service-center-in-dubai/" replace />
      },
      {
        path: "/commercial-refrigeration-services/",
        element: <Navigate to="/services/refrigeration-equipment/commercial-refrigeration-maintenance/" replace />
      },
      {
        path: "/washing-machine-service-center-dubai/",
        element: <Navigate to="/washing-machine-repair-service-dubai/" replace />
      },
      {
        path: "/ac-services-in-silicon-oasis-dubai/",
        element: <Navigate to="/ac-services-in-dubai-silicon-oasis/" replace />
      },
      {
        path: "/appliances-services-in-silicon-oasis-dubai/",
        element: <Navigate to="/appliances-services-in-dubai-silicon-oasis/" replace />
      },
      {
        path: "/commercial-cooking-equipment-repair/",
        element: <Navigate to="/commercial-cooking-appliances-repair-service/" replace />
      },
      {
        path: "/walk-in-freezer-display-freezer-open-freezer-maintenance/",
        element: <Navigate to="/services/refrigeration-equipment/commercial-refrigeration-maintenance/" replace />
      },
      {
        path: "/fridge-freezer-repair-service-in-dubai/",
        element: <Navigate to="/refrigerator-repair-service/" replace />
      },
      {
        path: "/tumble-dryer-repairs-dubai/",
        element: <Navigate to="/washing-machine-repair-service-dubai/" replace />
      },
      {
        path: "/commercial-freezer-chiller-amc-service/",
        element: <Navigate to="/commercial-refrigeration-maintenance-contact-services/" replace />
      },
      {
        path: "/freezer-chiller-repair-service/",
        element: <Navigate to="/refrigerator-repair-service/" replace />
      },
      {
        path: "/cigar-cabinet-humidifier-repair/",
        element: <Navigate to="/cigar-humidor-repair/" replace />
      },
      {
        path: "/bosch-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/" replace />
      },

      {
        path: "/ac-maintenance-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/ac-service/" replace />
      },
      {
        path: "/dishwasher-cleaning-guidee/",
        element: <Navigate to="/blog/dishwasher-cleaning-guide/" replace />
      },

      {
        path: "/bompani-modena-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/bompani/" replace />
      },
      {
        path: "/dist/img/Kitchen-Equipment-Maintenance-Service.jpg/",
        element: <Navigate to="/" replace />
      },
      {
        path: "/dist/img/Laundry-equipment-services.jpg",
        element: <Navigate to="/" replace />
      },
      {
        path: "/dist/img/feature_img_1.webp",
        element: <Navigate to="/" replace />
      },
      {
        path: "/assets/images/icons/ovens-app.svg",
        element: <Navigate to="/" replace />
      },
      {
        path: "/assets/images/icons/fridge-freezer-app.svg",
        element: <Navigate to="/" replace />
      },
      {
        path: "/assets/images/icons/ppm.png",
        element: <Navigate to="/" replace />
      },
      {
        path: "/appliances-services-in-the-greens-4/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/the-greens/" replace />
      },
      {
        path: "/ac-services-in-dubailand-mazaya-queue.php",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/dubailand-mazaya-queue/" replace />
      },
      {
        path: "/dist/img/ourvalues/",
        element: <Navigate to="/" replace />
      },
      {
        path: "/skm-ac-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/brands/skm/" replace />
      },
      {
        path: "/lennox-ac-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/brands/lennox/" replace />
      },
      {
        path: "/washer-dryer-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/washing-machine-repair-service-dubai/" replace />
      },
      {
        path: "/maytag-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/maytag/" replace />
      },
      {
        path: "/ac-services-in-jumeirah-golf-estates.php",
        element: <Navigate to="/" replace />
      },
     
      {
        path: "/white-westinghouse-fridge-repair-in-dubai-white-westinghouse-washing-machine-repair-in-dubai-white-westinghouse-cooker-repair-in-dubai-white-westinghouse-oven-repair-in-dubai-white-westinghouse-applia.php",
        element: <Navigate to="/services/home-appliances-repair/brands/white-westinghouse/" replace />
      },
      {
        path: "/ac-services-jumeirah-park.php",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jumeirah-park/" replace />
      },
      {
        path: "/rheem-ac-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/brands/rheem/" replace />
      },
      
      {
        path: "/ac-services-in-jumeirah-village-circle.php",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jvc/" replace />
      },
      {
        path: "/assets/react-vendor-BHMQA5SJ.js:11:109109",
        element: <Navigate to="/" replace />
      },
      {
        path: "/form/contact-form.php",
        element: <Navigate to="/" replace />
      },
      {
        path: "/assets/react-vendor-BTxBydMo.js:11:104284",
        element: <Navigate to="/" replace />
      },
      {
        path: "/appliances-services-in-jebel-ali-dip.php",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jebel-ali-dip/" replace />
      },
      {
        path: "/ac-services-in-the-villa.php",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/the-villa/" replace />
      },
      {
        path: "/appliances-services-in-bur-dubai.php",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/bur-dubai/" replace />
      },
      {
        path: "/washer-dryer-service/",
        element: <Navigate to="/" replace />
      },
      {
        path: "/appliances-services-in-dubai-sports-city.php",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubai-sports-city/" replace />
      },
      {
        path: "/appliances-services-in-jebel-ali-free-zone.php",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jebel-ali-free-zone/" replace />
      },
      {
        path: "/coleman-ac-repair-in-dubai-coleman-ac-maintenance-in-dubai-coleman-ac-fix-in-dubai-coleman-ac-service-in-dubai-coleman-air-condition-repair-in-dubai-coleman-air-condition-maintenance-in-dubai-coleman.php",
        element: <Navigate to="/services/home-appliances-repair/brands/coleman/" replace />
      },
      {
        path: "/ac-services-in-arabian-ranches-2.php",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/arabian-ranches-2/" replace />
      },
      {
        path: "/hitachi-ac-repair-in-dubai-hitachi-ac-maintenance-in-dubai-hitachi-ac-fix-in-dubai-hitachi-ac-service-in-dubai-hitachi-air-condition-repair-in-dubai-hitachi-air-condition-maintenance-in-dubai-hitachi.php",
        element: <Navigate to="/services/home-appliances-repair/brands/hitachi/" replace />
      },
      {
        path: "/ac-services-in-jvt.php",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jvt/" replace />
      },
      {
        path: "/ac-services-in-jvt/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jvt/" replace />
      },

      {
        path: "/ac-services-in-dubai-studio-city.php",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/dubai-studio-city/" replace />
      },
      {
        path: "/sanyo-home-appliance-installation-maintenance-repair-fix-service-in-dubai.php",
        element: <Navigate to="/services/home-appliances-repair/brands/sanyo/" replace />
      },
      {
        path: "/wolf-home-appliance-installation-maintenance-repair-fix-service-in-dubai.php",
        element: <Navigate to="/services/home-appliances-repair/brands/wolf/" replace />
      },
      
      // Blogs Redirect
      {
        path: "/blog/blog-details",
        element: <Navigate to="/blogs/" replace />
      },
      {
        path: "/blog/hvac-contractor-in-dubai-your-ultimate-guide-2023.php",
        element: <Navigate to="/blog/hvac-contractor-in-dubai-your-ultimate-guide-2023/" replace />
      },
      {
        path: "/blog/top-loading-washing-machines-a-complete-guidelines.php",
        element: <Navigate to="/blog/top-loading-washing-machines-a-complete-guidelines/" replace />
      },
      {
        path: "/blog/its-time-for-an-ac-cleaning.php",
        element: <Navigate to="/blog/its-time-for-an-ac-cleaning" replace />
      },
      {
        path: "/blog/front-loading-washing-machines.php",
        element: <Navigate to="/blog/front-loading-washing-machines" replace />
      },
      {
        path: "/blog/the-gas-cooker-a-reliable-appliance-for-modern-kitchens.php",
        element: <Navigate to="/blog/the-gas-cooker-a-reliable-appliance-for-modern-kitchens/" replace />
      },
      {
        path: "/blog/ai-made-automatic-office-coffee-machines-are-future.php",
        element: <Navigate to="/blog/ai-made-automatic-office-coffee-machines-are-future/" replace />
      },
      {
        path: "/blog/ai-made-automatic-office-coffee-machines-are-future.php",
        element: <Navigate to="/blog/ai-made-automatic-office-coffee-machines-are-future/" replace />
      },
      {
        path: "/blog/ac-repair-maintenance-difference.php",
        element: <Navigate to="/blog/ac-repair-maintenance-difference/" replace />
      },
      {
        path: "/blog/Refrigerator-Repair-Near-Me/",
        element: <Navigate to="/blog/swift-solutions-refrigerator-repair-near-me-for-quick-fixes/" replace />
      },
      {
        path: "/blog/what-is-vent-mode.php",
        element: <Navigate to="/blog/what-is-vent-mode/" replace />
      },
      {
        path: "/blog/what-is-ac-filter.php",
        element: <Navigate to="/blog/what-is-ac-filter/" replace />
      },
      {
        path: "/blog/how-to-set-ac-temperature-for-cooling.php",
        element: <Navigate to="/blog/how-to-set-ac-temperature-for-cooling/" replace />
      },
      {
        path: "/ac-annual-maintenance-contract/",
        element: <Navigate to="/services/air-conditioning-repair/ac-annual-maintenance-contract/" replace />
      },
      {
        path: "/ac-repair-dubai.php",
        element: <Navigate to="/services/air-conditioning-repair/ac-service/" replace />
      },
      {
        path: "/services/air-conditioning-repair/ac-service/",
        element: <Navigate to="/services/air-conditioning-repair/ac-service/" replace />
      },
      {
        path: "/services/air-conditioning/ac-service/",
        element: <Navigate to="/services/air-conditioning-repair/ac-service/" replace />
      },
      {
        path: "/services/air-conditioning-repair/ac-service/",
        element: <Navigate to="/services/air-conditioning-repair/ac-service/" replace />
      },
      {
        path: "/blogs/how-to-set-ac-temperature-for-cooling",
        element: <Navigate to="/blog/how-to-set-ac-temperature-for-cooling" replace />
      },
      {
        path: "/blogs/how-to-clean-ac-filter-for-all-types-a-step-by-step-guide",
        element: <Navigate to="/blog/how-to-clean-ac-filter-for-all-types-a-step-by-step-guide" replace />
      },
      {
        path: "/blogs/blogs/how-to-clean-washing-machine/",
        element: <Navigate to="/blog/how-to-clean-washing-machine/" replace />
      },
      {
        path: "/blogs/ac-repair-maintenance-difference/",
        element: <Navigate to="/blog/ac-repair-maintenance-difference/" replace />
      },
      {
        path: "/blogs/gree-ac-wifi-setup/",
        element: <Navigate to="/blog/gree-ac-wifi-setup/" replace />
      },
      {
        path: "/blogs/how-to-clean-daikin-ac-indoor-unit/",
        element: <Navigate to="/blog/how-to-clean-daikin-ac-indoor-unit/" replace />
      },
      {
        path: "/blogs/delonghi-coffee-machine-faqs-answered/",
        element: <Navigate to="/blog/delonghi-coffee-machine-faqs-answered/" replace />
      },
      {
        path: "/blogs/benefits-of-smart-thermostats/",
        element: <Navigate to="/blog/benefits-of-smart-thermostats/" replace />
      },
      {
        path: "/blogs/dubai-heatwave-tips-ac-importance/",
        element: <Navigate to="blog/dubai-heatwave-tips-ac-importance/" replace />
      },
      {
        path: "/blogs/how-to-reset-o-general-ac/",
        element: <Navigate to="/blog/how-to-reset-o-general-ac/" replace />
      },
      {
        path: "/blogs/refrigerator-inverter-technology/",
        element: <Navigate to="/blog/refrigerator-inverter-technology/" replace />
      },
      {
        path: "/blogs/top-10-signs-you-need-ac-repair-in-dubai/",
        element: <Navigate to="/blog/top-10-signs-you-need-ac-repair-in-dubai/" replace />
      },
      {
        path: "/blogs/washing-machine-problems-and-solutions-dubai/",
        element: <Navigate to="/blog/washing-machine-problems-and-solutions-dubai/" replace />
      },
      {
        path: "/blogs/10-coffee-machine-problems-and-how-to-diy-fix-them-like-a-pro/",
        element: <Navigate to="/blog/10-coffee-machine-problems-and-how-to-diy-fix-them-like-a-pro/" replace />
      },
      {
        path: "/coffee-machine-service-center-in-dubai/",
        element: <Navigate to="/services/coffee-machine/coffee-machine-service-center/" replace />
      },
      {
        path: "/coffee-machine-repairs/",
        element: <Navigate to="/services/coffee-machine/coffee-machine-repairs/" replace />
      },
      {
        path: "/hob-repair-service/",
        element: <Navigate to="/services/home-appliances-repair/hob-repair-service/" replace />
      },
      {
        path: "/oven-repair-service/",
        element: <Navigate to="/services/home-appliances-repair/oven-repair-service/" replace />
      },
      {
        path: "/gas-cooker-repair-service/",
        element: <Navigate to="/services/home-appliances-repair/gas-cooker-repair-service/" replace />
      },
      {
        path: "/dishwasher-repair-service/",
        element: <Navigate to="/services/home-appliances-repair/dishwasher-repair-service/" replace />
      },
      {
        path: "/refrigerator-repair-service/",
        element: <Navigate to="/services/home-appliances-repair/refrigerator-repair-service/" replace />
      },
      {
        path: "/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/" replace />
      },
      {
        path: "/cigar-humidor-repair/",
        element: <Navigate to="/services/home-appliances-repair/cigar-humidor-repair/" replace />
      },
      {
        path: "/robot-vacuum-cleaner-repair/",
        element: <Navigate to="/services/home-appliances-repair/robot-vacuum-cleaner-repair/" replace />
      },
      {
        path: "/small-home-appliances-service-center-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/small-home-appliances-service-center-in-dubai/" replace />
      },
      {
        path: "/washing-machine-repair-service-dubai/",
        element: <Navigate to="/services/home-appliances-repair/washing-machine-repair-service-dubai/" replace />
      },
      {
        path: "/built-in-appliances-repair-service/",
        element: <Navigate to="/services/home-appliances-repair/built-in-appliances-repair-service/" replace />
      },
      {
        path: "/appliances-repair-service/",
        element: <Navigate to="/services/home-appliances-repair/appliances-repair-service/" replace />
      },
      {
        path: "/appliances-amc-service/",
        element: <Navigate to="/services/home-appliances-repair/appliances-amc-service/" replace />
      }, {
        path: "/services/home-appliances/hob-repair-service/",
        element: <Navigate to="/services/home-appliances-repair/hob-repair-service/" replace />
      },
      {
        path: "/services/home-appliances/oven-repair-service/",
        element: <Navigate to="/services/home-appliances-repair/oven-repair-service/" replace />
      },
      {
        path: "/services/home-appliances/gas-cooker-repair-service/",
        element: <Navigate to="/services/home-appliances-repair/gas-cooker-repair-service/" replace />
      },
      {
        path: "/services/home-appliances/dishwasher-repair-service/",
        element: <Navigate to="/services/home-appliances-repair/dishwasher-repair-service/" replace />
      },
      {
        path: "/services/home-appliances/refrigerator-repair-service/",
        element: <Navigate to="/services/home-appliances-repair/refrigerator-repair-service/" replace />
      },
      {
        path: "/services/home-appliances/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/" replace />
      },
      {
        path: "/services/home-appliances/cigar-humidor-repair/",
        element: <Navigate to="/services/home-appliances-repair/cigar-humidor-repair/" replace />
      },
      {
        path: "/services/home-appliances/robot-vacuum-cleaner-repair/",
        element: <Navigate to="/services/home-appliances-repair/robot-vacuum-cleaner-repair/" replace />
      },
      {
        path: "/services/home-appliances/small-home-appliances-service-center-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/small-home-appliances-service-center-in-dubai/" replace />
      },
      {
        path: "/services/home-appliances/washing-machine-repair-service-dubai/",
        element: <Navigate to="/services/home-appliances-repair/washing-machine-repair-service-dubai/" replace />
      },
      {
        path: "/services/home-appliances/built-in-appliances-repair-service/",
        element: <Navigate to="/services/home-appliances-repair/built-in-appliances-repair-service/" replace />
      },
      {
        path: "/services/home-appliances/appliances-repair-service/",
        element: <Navigate to="/services/home-appliances-repair/appliances-repair-service/" replace />
      },
      {
        path: "/services/home-appliances/appliances-amc-service/",
        element: <Navigate to="/services/home-appliances-repair/appliances-amc-service/" replace />
      },
      {
        path: "/services/kitchen-equipment/oven-repair/",
        element: <Navigate to="/services/kitchen-equipment-maintenance/oven-repair/" replace />
      },
      {
        path: "/oven-repair/",
        element: <Navigate to="/services/kitchen-equipment-maintenance/oven-repair/" replace />
      },
      {
        path: "/services/kitchen-equipment/meat-grinder-repair/",
        element: <Navigate to="/services/kitchen-equipment-maintenance/meat-grinder-repair/" replace />
      },
      {
        path: "/meat-grinder-repair/",
        element: <Navigate to="/services/kitchen-equipment-maintenance/meat-grinder-repair/" replace />
      },
      {
        path: "/services/kitchen-equipment/commercial-kitchen-equipment-amc/",
        element: <Navigate to="/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-amc/" replace />
      },
      {
        path: "/commercial-kitchen-equipment-amc/",
        element: <Navigate to="/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-amc/" replace />
      },
      {
        path: "/services/kitchen-equipment/commercial-kitchen-equipment-maintenance-services/",
        element: <Navigate to="/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-maintenance-services/" replace />
      },
      {
        path: "/commercial-kitchen-equipment-maintenance-services/",
        element: <Navigate to="/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-maintenance-services/" replace />
      },
      {
        path: "/services/kitchen-equipment/commercial-cooking-appliances-repair-service/",
        element: <Navigate to="/services/kitchen-equipment-maintenance/commercial-cooking-appliances-repair-service/" replace />
      },
      {
        path: "/commercial-cooking-appliances-repair-service/",
        element: <Navigate to="/services/kitchen-equipment-maintenance/commercial-cooking-appliances-repair-service/" replace />
      },
      {
        path: "/services/kitchen-equipment/rational-commercial-kitchen-equipment-repair-and-maintenance-service-dubai/",
        element: <Navigate to="/services/kitchen-equipment-maintenance/rational-commercial-kitchen-equipment-repair-and-maintenance-service-dubai/" replace />
      },
      {
        path: "/services/kitchen-equipment/unox-commercial-oven-repair-and-maintenance-service-dubai/",
        element: <Navigate to="/services/kitchen-equipment-maintenance/unox-commercial-oven-repair-and-maintenance-service-dubai/" replace />
      },
      {
        path: "/rational-commercial-kitchen-equipment-repair-and-maintenance-service-dubai/",
        element: <Navigate to="/services/kitchen-equipment-maintenance/rational-commercial-kitchen-equipment-repair-and-maintenance-service-dubai/" replace />
      },
      {
        path: "/unox-commercial-oven-repair-and-maintenance-service-dubai/",
        element: <Navigate to="/services/kitchen-equipment-maintenance/unox-commercial-oven-repair-and-maintenance-service-dubai/" replace />
      },
      {
        path: "/ice-maker-repair/",
        element: <Navigate to="/services/refrigeration-equipment/ice-maker-repair/" replace />
      },
      {
        path: "/commercial-refrigeration-maintenance-contact-services/",
        element: <Navigate to="/services/refrigeration-equipment/commercial-refrigeration-maintenance-contact-services/" replace />
      },
      {
        path: "/commercial-refrigeration-maintenance/",
        element: <Navigate to="/services/refrigeration-equipment/commercial-refrigeration-maintenance/" replace />
      },
      {
        path: "/service",
        element: <Navigate to="/services/" replace />
      },
      {
        path: "/ac-repair-and-ac-service-in-emirates-hills/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/emirates-hills/" replace />
      },
      {
        path: "/ac-repair-and-ac-service-in-town-square/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/town-square/" replace />
      },
      {
        path: "/ac-services-in-academy-city/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/academy-city/" replace />
      },
      {
        path: "/ac-services-in-al-aweer/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-aweer/" replace />
      },
      {
        path: "/ac-services-in-al-badaa/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-badaa/" replace />
      },
      {
        path: "/ac-services-in-al-barsha-south/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-barsha-south/" replace />
      },
      {
        path: "/ac-services-in-al-barsha/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-barsha/" replace />
      },
      {
        path: "/ac-services-in-al-furjan/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-furjan/" replace />
      },
      {
        path: "/ac-services-in-al-jafiliya/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-jafiliya/" replace />
      },
      {
        path: "/ac-repair-in-jafza-air-condition-maintenance-in-jafza-air-conditioning-fix-amc-service-in-jebel-ali-free-zone-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jafza/" replace />
      },
      {
        path: "/ac-services-in-al-karama/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-karama/" replace />
      },
      {
        path: "/ac-services-in-al-khawaneej/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-khawaneej/" replace />
      },
      {
        path: "/ac-services-in-al-mamzar/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-mamzar/" replace />
      },
      {
        path: "/ac-services-in-al-manara/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-manara/" replace />
      },
      {
        path: "/ac-services-in-al-mirdif/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-mirdif/" replace />
      },
      {
        path: "/ac-services-in-al-mizhar/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-mizhar/" replace />
      },
      {
        path: "/ac-services-in-al-quoz/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-quoz/" replace />
      },
      {
        path: "/ac-repair-al-qusais/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-qusais/" replace />
      },
      {
        path: "/ac-services-in-al-raffa/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-raffa/" replace />
      },
      {
        path: "/ac-services-in-al-rashidiya/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-rashidiya/" replace />
      },
      {
        path: "/ac-services-in-al-safa/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-safa/" replace />
      },
      {
        path: "/ac-services-in-al-satwa/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-satwa/" replace />
      },
      {
        path: "/ac-services-in-al-tawar/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-tawar/" replace />
      },
      {
        path: "/ac-services-in-al-waha-community/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-waha-community/" replace />
      },
      {
        path: "/ac-services-in-al-warqa/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-warqa/" replace />
      },
      {
        path: "/ac-services-in-al-wasl/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-wasl/" replace />
      },
      {
        path: "/ac-services-in-arabian-ranches-2/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/arabian-ranches-2/" replace />
      },
      {
        path: "/ac-services-in-arabian-ranches/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/arabian-ranches/" replace />
      },
      {
        path: "/ac-services-in-bay-square/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/bay-square/" replace />
      },
      {
        path: "/ac-services-in-bur-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/bur-dubai/" replace />
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/ac-services-in-bur-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/bur-dubai/" replace />
      },
      {
        path: "/ac-services-in-burj-khalifa-lake/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/burj-khalifa-lake/" replace />
      },
      {
        path: "/ac-services-in-business-bay/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/business-bay/" replace />
      },
      {
        path: "/ac-services-in-cedre-villas-silicon-oasis-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/cedre-villas-silicon-oasis-dubai/" replace />
      },
      {
        path:"/ac-repair-and-ac-service-in-damac-hills/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/damac-hills/" replace />
      },
      {
        path: "/ac-services-in-damac-hills/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/damac-hills/" replace />
      },
      {
        path: "/ac-services-in-deira/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/deira/" replace />
      },
      {
        path: "/ac-services-in-difc/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/difc/" replace />
      },
      {
        path: "/ac-services-in-dip/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/dip/" replace />
      },
      {
        path: "/ac-services-in-discovery-gardens/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/discovery-gardens/" replace />
      },
      {
        path: "/ac-services-in-downtown/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/downtown/" replace />
      },
      {
        path: "/ac-services-in-dubai-healthcare-city/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/dubai-healthcare-city/" replace />
      },
      {
        path: "/ac-repair-and-ac-service-in-dubai-hills-estate/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/dubai-hills-estate/" replace />
      },
      {
        path: "/ac-services-in-dubai-international-financial-centre/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/difc/" replace />
      },
      {
        path: "/ac-services-dubai-internet-city/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubai-internet-city/" replace />
      },
      {
        path: "/ac-services-in-dubailand-mazaya-queue/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/dubailand-mazaya-queue/" replace />
      },
      {
        path: "/ac-services-in-dubailand-the-villa-point/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/dubailand-the-villa-point/" replace />
      },
      {
        path: "/ac-services-in-dubai-marina/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/dubai-marina/" replace />
      },
      {
        path: "/ac-services-in-dubai-sport-city/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/dubai-sport-city/" replace />
      },
      {
        path: "/ac-services-in-dubai-studio-city/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/dubai-studio-city/" replace />
      },
      {
        path: "/ac-services-in-flamingo-villas/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/flamingo-villas/" replace />
      },
      {
        path: "/ac-services-in-the-gardens/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/the-gardens/" replace />
      },
      {
        path: "/ac-services-in-hudaiba/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/hudaiba/" replace />
      },
      {
        path: "/ac-services-in-impz/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/impz/" replace />
      },
      {
        path: "/ac-services-in-index-tower-difc/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/index-tower-difc/" replace />
      },
      {
        path: "/ac-services-in-international-media-and-production-zone/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/international-media-and-production-zone/" replace />
      },
      {
        path: "/ac-services-in-dubai-investments-park/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/dip/" replace />
      },
      {
        path: "/ac-services-in-jbr/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jbr/" replace />
      },
      {
        path: "/ac-services-in-jebel-ali/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jebel-ali/" replace />
      },
      {
        path: "/ac-services-in-jebel-ali-dip/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jebel-ali-dip/" replace />
      },
      {
        path: "/ac-services-in-jebel-ali-free-zone/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jebel-ali-free-zone/" replace />
      },
      {
        path: "/ac-services-in-jebel-ali-village/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jebel-ali-village/" replace />
      },
      {
        path: "/ac-services-jlt/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jlt/" replace />
      },
      {
        path: "/ac-services-in-jge/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jge/" replace />
      },
      {
        path: "/ac-services-in-jumeirah-beach-residence/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jumeirah-beach-residence/" replace />
      },
      {
        path: "/ac-services-in-jumeirah/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jumeirah/" replace />
      },
      {
        path: "/ac-services-in-jumeirah-golf-estates/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jumeirah-golf-estates/" replace />
      },
      {
        path: "/ac-services-in-jumeirah-heights/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jumeirah-heights/" replace />
      },
      {
        path: "/ac-services-jumeirah-islands/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jumeirah-islands/" replace />
      },
      {
        path: "/ac-services-in-jumeirah-lake-towers/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jumeirah-lake-towers/" replace />
      },
      {
        path: "/ac-services-jumeirah-park/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jumeirah-park/" replace />
      },
      {
        path: "/ac-services-in-jumeirah-village-circle/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jvc/" replace />
      },
      {
        path: "/ac-services-in-jumeirah-village/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jumeirah-village/" replace />
      },
      {
        path: "/ac-services-in-jumeirah-village-triangle/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jvt/" replace />
      },
      {
        path: "/ac-services-in-jvc/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jvc/" replace />
      },
      {
        path: "/ac-services-in-knowledge-village/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/knowledge-village/" replace />
      },
      {
        path: "/ac-services-in-layan-community/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/layan-community/" replace />
      },
      {
        path: "/ac-services-in-limestone-house-difc/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/limestone-house-difc/" replace />
      },
      {
        path: "/ac-services-in-media-city/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/media-city/" replace />
      },
      {
        path: "/ac-services-in-metha/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/metha/" replace />
      },
      {
        path: "/ac-services-in-motor-city/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/motor-city/" replace />
      },
      {
        path: "/ac-services-in-mudon/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/mudon/" replace />
      },
      {
        path: "/ac-services-in-nad-al-hammar/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/nad-al-hammar/" replace />
      },
      {
        path: "/ac-services-in-nad-al-sheba/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/nad-al-sheba/" replace />
      },
      {
        path: "/ac-services-in-old-town-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/old-town-dubai/" replace />
      },
      {
        path: "/ac-services-in-palm-jumeirah/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/palm-jumeirah/" replace />
      },
      {
        path: "/ac-repair-and-ac-service-in-dubai-production-city/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/dubai-production-city/" replace />
      },
      {
        path: "/ac-services-in-al-quoz-industrial-area/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-quoz-industrial-area/" replace />
      },
      {
        path: "/ac-services-in-ras-al-khor-industrial-area/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/ras-al-khor-industrial-area/" replace />
      },
      {
        path: "/ac-services-in-remraam-2/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/remraam-2/" replace />
      },
      {
        path: "/ac-services-in-remraam/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/remraam/" replace />
      },
      {
        path: "/ac-services-in-the-ritz-carlton-difc/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/the-ritz-carlton-difc/" replace />
      },
      {
        path: "/ac-services-in-dubai-silicon-oasis/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/dubai-silicon-oasis/" replace />
      },
      {
        path: "/ac-services-in-south-ridge/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/south-ridge/" replace />
      },
      {
        path: "/ac-services-in-al-sufouh/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-sufouh/" replace />
      },
      {
        path: "/ac-services-in-the-greens/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/the-greens/" replace />
      },
      {
        path: "/ac-services-in-the-lakes/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/the-lakes/" replace />
      },
      {
        path: "/ac-services-in-the-meadows/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/the-meadows/" replace />
      },
      {
        path: "/ac-services-in-the-springs/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/the-springs/" replace />
      },
      {
        path: "/ac-services-in-the-views/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/the-views/" replace />
      },
      {
        path: "/ac-services-in-the-villa/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/the-villa/" replace />
      },
      {
        path: "/ac-services-in-umm-al-sheif/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/umm-al-sheif/" replace />
      },
      {
        path: "/ac-services-in-umm-ramool/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/umm-ramool/" replace />
      },
      {
        path: "/ac-services-in-umm-suqeim/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/umm-suqeim/" replace />
      },
      {
        path: "/ac-services-in-victory-heights/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/victory-heights/" replace />
      },
      {
        path: "/ac-services-in-jebel-ali-industrial-area/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/jebel-ali-industrial-area/" replace />
      },
      {
        path: "/ac-services-in-mankhool/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/mankhool/" replace />
      },

      // Appliances redirections
      {
        path: "/appliances-services-in-academy-city/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/academy-city/" replace />
      },
      {
        path: "/appliances-services-in-al-barsha/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-barsha/" replace />
      },
      {
        path: "/appliances-services-in-al-karama/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-karama/" replace />
      },
      {
        path: "/appliances-services-in-al-barari/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-barari/" replace />
      },
      {
        path: "/appliances-services-in-al-manara/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-manara/" replace />
      },
      {
        path: "/appliances-services-in-al-raffa/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-raffa/" replace />
      },
      {
        path: "/appliances-services-in-al-waha-community/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-waha-community/" replace />
      },
      {
        path: "/appliances-services-in-al-wasl/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-wasl/" replace />
      },
      {
        path: "/appliances-services-in-arabian-ranches-2/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/arabian-ranches-2/" replace />
      },
      {
        path: "/appliances-services-in-arabian-ranches/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/arabian-ranches/" replace />
      },
      {
        path: "/appliances-services-in-bur-dubai/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/bur-dubai/" replace />
      },
      {
        path: "/appliances-services-in-cedre-villas-silicon-oasis-dubai/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/cedre-villas-silicon-oasis-dubai/" replace />
      },
      {
        path: "/appliances-services-in-deira/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/deira/" replace />
      },
      {
        path: "/appliances-services-in-difc/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/difc/" replace />
      },
      {
        path: "/appliances-services-in-dip/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dip/" replace />
      },
      {
        path: "/appliances-services-in-dubai-internet-city",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubai-internet-city/" replace />
      },
      {
        path: "/appliances-services-in-dubailand-mazaya-queue-point/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubailand-mazaya-queue-point/" replace />
      },
      {
        path: "/appliances-services-in-dubailand-the-villa/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubailand-the-villa/" replace />
      },
      {
        path: "/appliances-services-in-dubai-marina/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubai-marina/" replace />
      },
      {
        path: "/appliances-services-in-dubai-media-city/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubai-media-city/" replace />
      },
      {
        path: "/appliances-services-in-dubai-motor-city/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubai-motor-city/" replace />
      },
      {
        path: "/appliances-services-in-dubai-silicon-oasis/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubai-silicon-oasis/" replace />
      },
      {
        path: "/appliances-services-in-dubai-sports-city/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubai-sports-city/" replace />
      },
      {
        path: "/appliances-services-in-dubai-studio-city/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubai-studio-city/" replace />
      },
      {
        path: "/appliances-services-in-flamingo-villas-dubai/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/flamingo-villas-dubai/" replace />
      },
      {
        path: "/appliances-services-in-impzy/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/impzy/" replace />
      },
      {
        path: "/appliances-services-in-index-tower-difc/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/index-tower-difc/" replace />
      },
      {
        path: "/appliances-services-in-jbr/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jbr/" replace />
      },
      {
        path: "/appliances-washing-machine-fridge-dishwasher-service-jbr-dubai/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jbr/" replace />
      },
      {
        path: "/appliances-services-in-jebel-ali/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jebel-ali/" replace />
      },
      {
        path: "/appliances-services-in-jebel-ali-dip/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jebel-ali-dip/" replace />
      },
      {
        path: "/appliances-services-in-jebel-ali-free-zone/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jebel-ali-free-zone/" replace />
      },
      {
        path: "/appliances-services-in-jebel-ali-industrial-area/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jebel-ali-industrial-area/" replace />
      },
      {
        path: "/appliances-services-in-jge/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jge/" replace />
      },
      {
        path: "/appliances-services-in-jumeirah-beach-residence/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jumeirah-beach-residence/" replace />
      },
      {
        path: "/appliances-services-in-jumeirah-lake-towers/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jumeirah-lake-towers/" replace />
      },
      {
        path: "/appliances-services-in-jumeirah-park/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jumeirah-park/" replace />
      },
      {
        path: "/appliances-services-in-jumeirah-village-circle/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jumeirah-village-circle/" replace />
      },
      {
        path: "/home-appliances-installation-maintenance-repair-fix-service-centre-in-jumeirah-dubai/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jumeirah-dubai/" replace />
      },
      {
        path: "/appliances-services-in-jumeirah-heights/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jumeirah-heights/" replace />
      },
      {
        path: "/appliances-services-in-jvc/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jvc/" replace />
      },
      {
        path: "/appliances-services-in-jvt/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jvt/" replace />
      },
      {
        path: "/appliances-services-in-layan-community/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/layan-community/" replace />
      },
      {
        path: "/appliances-services-in-mankhool/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/mankhool/" replace />
      },
      {
        path: "/appliances-services-in-the-meadows/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/the-meadows/" replace />
      },
      {
        path: "/appliances-services-in-mudon/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/mudon/" replace />
      },
      {
        path: "/appliances-services-in-nad-al-sheba/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/nad-al-sheba/" replace />
      },
      {
        path: "/appliances-services-in-oud-metha/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/oud-metha/" replace />
      },
      {
        path: "/appliances-services-in-the-greens/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/the-greens/" replace />
      },
      {
        path: "/appliances-services-in-the-ritz-carlton-difc/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/the-ritz-carlton-difc/" replace />
      },
      {
        path: "/appliances-services-in-the-springs/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/the-springs/" replace />
      },
      {
        path: "/appliances-services-in-the-villa/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/the-villa/" replace />
      },
      {
        path: "/appliances-services-in-umm-al-sheif/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/umm-al-sheif/" replace />
      },
      {
        path: "/appliances-services-in-umm-suqeim/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/umm-suqeim/" replace />
      },
      {
        path: "/appliances-services-in-al-ghadeer-community/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-ghadeer-community/" replace />
      },
      {
        path: "/appliances-services-in-al-mamzar/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-mamzar/" replace />
      },
      {
        path: "/appliances-services-in-al-mizhar/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-mizhar/" replace />
      },
      {
        path: "/appliances-services-in-business-bay/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/business-bay/" replace />
      },
      {
        path: "/appliances-services-in-damac-hills/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/damac-hills/" replace />
      },
      {
        path: "/appliances-services-in-dubai-hills-estate/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubai-hills-estate/" replace />
      },
      {
        path: "/appliances-services-in-dubai-production-city/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubai-production-city/" replace />
      },
      {
        path: "/appliances-services-in-international-media-and-production-zone/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/international-media-and-production-zone/" replace />
      },
      {
        path: "/appliances-services-in-the-limestone-house-difc/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/the-limestone-house-difc/" replace />
      },
      {
        path: "/appliances-services-in-the-gardens/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/the-gardens/" replace />
      },
      {
        path: "/appliances-services-in-town-square/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/town-square/" replace />
      },
      {
        path: "/appliances-services-in-al-badaa/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-badaa/" replace />
      },
      {
        path: "/appliances-services-in-al-barsha-south/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-barsha-south/" replace />
      },
      {
        path: "/appliances-services-in-al-furjan/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-furjan/" replace />
      },
      {
        path: "/appliances-services-in-al-jafiliya/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-jafiliya/" replace />
      },
      {
        path: "/appliances-services-in-al-safa/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-safa/" replace />
      },
      {
        path: "/appliances-services-in-al-satwa/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-satwa/" replace />
      },
      {
        path: "/appliances-services-in-al-sufouh/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-sufouh/" replace />
      },
      {
        path: "/appliances-services-in-dubai-healthcare-city/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubai-healthcare-city/" replace />
      },
      {
        path: "/appliances-services-in-dubailand-mazaya/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubailand-mazaya/" replace />
      },
      {
        path: "/appliances-services-in-falcon-city-dubai/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/falcon-city-dubai/" replace />
      },
      {
        path: "/appliances-services-in-jebel-ali-village/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jebel-ali-village/" replace />
      },
      {
        path: "/appliances-services-in-jlt/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jlt/" replace />
      },
      {
        path: "/appliances-services-in-jumeirah/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jumeirah/" replace />
      },
      {
        path: "/appliances-services-in-jumeirah-islands/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jumeirah-islands/" replace />
      },
      {
        path: "/appliances-services-in-jumeirah-village/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jumeirah-village/" replace />
      },
      {
        path: "/appliances-services-in-palm-jumeirah/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/palm-jumeirah/" replace />
      },
      {
        path: "/appliances-services-in-remraam/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/remraam/" replace />
      },
      {
        path: "/appliances-services-in-tecom/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/tecom/" replace />
      },
      {
        path: "/appliances-services-in-the-lakes/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/the-lakes/" replace />
      },
      {
        path: "/appliances-services-in-the-views/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/the-views/" replace />
      },
      {
        path: "/appliances-services-in-victory-heights/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/victory-heights/" replace />
      },
      {
        path: "/appliances-services-in-jumeirah/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jumeirah/" replace />
      },
      {
        path: "/fridge-repair-dubai-marina/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubai-marina/" replace />
      },
      {
        path: "/fridge-repair-in-dubai-marina-washing-machine-repair-in-dubai-marina-dishwasher-repair-in-dubai-marina-refrigerator-repair-maintenance-in-dubai-marina-cooker-oven-repair-fix-service-in-cooking-range-e/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubai-marina/" replace />
      },
      {
        path: "/home-appliances-installation-maintenance-repair-fix-service-centre-in-jlt-dubai/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/jlt/" replace />
      },
      {
        path: "/washing-machine-repair-al-barsha-dubai-fridge-repair-al-barsha-dubai-refrigerator-repairing-al-barsha-dubai-cooker-stove-oven-cooking-range-repairs-fix-service-centre-al-barsha-dubai-dishwasher-inst-2/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-barsha/" replace />
      },
      {
        path: "/washing-machine-repair-business-bay-fridge-repair-business-bay-refrigerator-repairing-business-bay-cooker-stove-oven-cooking-range-repairs-fix-service-centre-business-bay-dishwasher-installation-fixin/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/business-bay/" replace />
      },
      {
        path: "/washing-machine-repair-in-al-quoz-refrigerator-repair-in-al-quoz-fridge-repair-in-al-quoz-dishwasher-oven-cooker-stove-appliance-maintenance-fix-service-in-al-quoz-dubai/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/al-quoz/" replace />
      },
      {
        path: "/washing-machine-repair-in-dubai-marina-fridge-repair-in-dubai-marina-refrigerator-repairing-in-dubai-marina-cooker-stove-oven-cooking-range-repairs-fix-service-centre-in-dubai-marina-dishwasher-instal/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/dubai-marina/" replace />
      },
      {
        path: "/washing-machine-repair-palm-jumeirah-fridge-repair-palm-jumeirah-refrigerator-repairing-palm-jumeirah-cooker-stove-oven-cooking-range-repairs-fix-service-centre-palm-jumeirah-dishwasher-installation-f/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/palm-jumeirah/" replace />
      },
      {
        path: "/washing-machine-repair-town-dubai-fridge-repair-town-dubai-refrigerator-repairing-town-dubai-cooker-stove-oven-cooking-range-repairs-fix-service-centre-town-dubai-dishwasher-installation-fixing-mainte/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/town-dubai/" replace />
      },
      {
        path: "/wasn-dubai-cooker-stove-oven-cooking-range-repairs-fix-service-centre-town-dubai-dishwasher-installation-fixing-mainte/",
        element: <Navigate to="/services/home-appliances-repair/coverage-area/town-dubai/" replace />
      },
      // Ac Brand redirections
      {
        path: "/aftron-ac-repair-maintenance-service-in-dubai-2/",
        element: <Navigate to="/services/air-conditioning-repair/brands/aftron/" replace />
      },
      {
        path: "/blue-star-ac-repair-in-dubai-blue-star-ac-maintenance-in-dubai-blue-star-ac-fix-in-dubai-blue-star-ac-service-in-dubai-blue-star-air-condition-repair-in-dubai-blue-star-air-condition-maintenance-in-du/",
        element: <Navigate to="/services/air-conditioning-repair/brands/blue-star/" replace />
      },
      {
        path: "/bryant-ac-repair-in-dubai-bryant-ac-maintenance-in-dubai-bryant-ac-fix-in-dubai-bryant-ac-service-in-dubai-bryant-air-condition-repair-in-dubai-bryant-air-condition-maintenance-in-dubai-bryant-air-con/",
        element: <Navigate to="/services/air-conditioning-repair/brands/bryant/" replace />
      },
      {
        path: "/coleman-ac-repair-in-dubai-coleman-ac-maintenance-in-dubai-coleman-ac-fix-in-dubai-coleman-ac-service-in-dubai-coleman-air-condition-repair-in-dubai-coleman-air-condition-maintenance-in-dubai-coleman/",
        element: <Navigate to="/services/air-conditioning-repair/brands/coleman/" replace />
      },
      {
        path: "/cooline-ac-repair-in-dubai-cooline-ac-maintenance-in-dubai-cooline-ac-fix-in-dubai-cooline-ac-service-in-dubai-cooline-air-condition-repair-in-dubai-cooline-air-condition-maintenance-in-dubai-cooline/",
        element: <Navigate to="/services/air-conditioning-repair/brands/cooline/" replace />
      },
      {
        path: "/crafft-ac-repair-in-dubai-crafft-ac-maintenance-in-dubai-crafft-ac-fix-in-dubai-crafft-ac-service-in-dubai-crafft-air-condition-repair-in-dubai-crafft-air-condition-maintenance-in-dubai-crafft-air-con/",
        element: <Navigate to="/services/air-conditioning-repair/brands/crafft/" replace />
      },
      {
        path: "/daewoo-ac-repair-in-dubai-daewoo-ac-maintenance-in-dubai-daewoo-ac-fix-in-dubai-daewoo-ac-service-in-dubai-daewoo-air-condition-repair-in-dubai-daewoo-air-condition-maintenance-in-dubai-daewoo-air-con/",
        element: <Navigate to="/services/air-conditioning-repair/brands/daewoo/" replace />
      },
      {
        path: "/daikin-ac-repair-in-dubai-daikin-ac-maintenance-in-dubai-daikin-ac-fix-in-dubai-daikin-ac-service-in-dubai-daikin-air-condition-repair-in-dubai-daikin-air-condition-maintenance-in-dubai-daikin-air-con/",
        element: <Navigate to="/services/air-conditioning-repair/brands/daikin/" replace />
      },
      {
        path: "/daikool-ac-repair-in-dubai-daikool-ac-maintenance-in-dubai-daikool-ac-fix-in-dubai-daikool-ac-service-in-dubai-daikool-air-condition-repair-in-dubai-daikool-air-condition-maintenance-in-dubai-daikool/",
        element: <Navigate to="/services/air-conditioning-repair/brands/daikool/" replace />
      },
      {
        path: "/fujitsu-ac-repair-in-dubai-fujitsu-ac-maintenance-in-dubai-fujitsu-ac-fix-in-dubai-fujitsu-ac-service-in-dubai-fujitsu-air-condition-repair-in-dubai-fujitsu-air-condition-maintenance-in-dubai-fujitsu/",
        element: <Navigate to="/services/air-conditioning-repair/brands/fujitsu/" replace />
      },
      {
        path: "/goodman-ac-repair-in-dubai-goodman-ac-maintenance-in-dubai-goodman-ac-fix-in-dubai-goodman-ac-service-in-dubai-goodman-air-condition-repair-in-dubai-goodman-air-condition-maintenance-in-dubai-goodman/",
        element: <Navigate to="/services/air-conditioning-repair/brands/goodman/" replace />
      },
      {
        path: "/gree-ac-repair-in-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/brands/gree/" replace />
      },
      {
        path: "/haier-ac-repair-in-dubai-haier-ac-maintenance-in-dubai-haier-ac-fix-in-dubai-haier-ac-service-in-dubai-haier-air-condition-repair-in-dubai-haier-air-condition-maintenance-in-dubai-haier-air-condition/",
        element: <Navigate to="/services/air-conditioning-repair/brands/haier/" replace />
      },
      
      {
        path: "/hitachi-ac-repair-in-dubai-hitachi-ac-maintenance-in-dubai-hitachi-ac-fix-in-dubai-hitachi-ac-service-in-dubai-hitachi-air-condition-repair-in-dubai-hitachi-air-condition-maintenance-in-dubai-hitachi/",
        element: <Navigate to="/services/air-conditioning-repair/brands/hitachi/" replace />
      },
      {
        path: "/lennox-ac-repair-in-dubai-lennox-ac-maintenance-in-dubai-lennox-ac-fix-in-dubai-lennox-ac-service-in-dubai-lennox-air-condition-repair-in-dubai-lennox-air-condition-maintenance-in-dubai-lennox-air-con/",
        element: <Navigate to="/services/air-conditioning-repair/brands/lennox/" replace />
      },
      {
        path: "/lg-ac-repair-in-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/brands/lg/" replace />
      },
      {
        path: "/mcquay-ac-repair-in-dubai-mcquay-ac-maintenance-in-dubai-mcquay-ac-fix-in-dubai-mcquay-ac-service-in-dubai-mcquay-air-condition-repair-in-dubai-mcquay-air-condition-maintenance-in-dubai-mcquay-air-con/",
        element: <Navigate to="/services/air-conditioning-repair/brands/mcquay/" replace />
      },
      {
        path: "/midea-ac-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/brands/midea/" replace />
      },
      {
        path: "/mitsubishi-ac-repair-in-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/brands/mitsubishi/" replace />
      },
      {
        path: "/nikai-ac-repair-in-dubai-nikai-ac-maintenance-in-dubai-nikai-ac-fix-in-dubai-nikai-ac-service-in-dubai-nikai-air-condition-repair-in-dubai-nikai-air-condition-maintenance-in-dubai-nikai-air-condition/",
        element: <Navigate to="/services/air-conditioning-repair/brands/nikai/" replace />
      },
      {
        path: "/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/",
        element: <Navigate to="/services/air-conditioning-repair/brands/o-general/" replace />
      },
      {
        path: "/panasonic-ac-repair-in-dubai-panasonic-ac-maintenance-in-dubai-panasonic-ac-fix-in-dubai-panasonic-ac-service-in-dubai-panasonic-air-condition-repair-in-dubai-panasonic-air-condition-maintenance-in-du/",
        element: <Navigate to="/services/air-conditioning-repair/brands/panasonic/" replace />
      },
      {
        path: "/rheem-ac-maintenance-in-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/brands/rheem/" replace />
      },
      {
        path: "/ruud-ac-repair-in-dubai-ruud-ac-maintenance-in-dubai-ruud-ac-fix-in-dubai-ruud-ac-service-in-dubai-ruud-air-condition-repair-in-dubai-ruud-air-condition-maintenance-in-dubai-ruud-air-condition-mainten/",
        element: <Navigate to="/services/air-conditioning-repair/brands/ruud/" replace />
      },
      {
        path: "/samsung-ac-repair-in-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/brands/samsung/" replace />
      },
      {
        path: "/sanyo-ac-repair-in-dubai-sanyo-ac-maintenance-in-dubai-sanyo-ac-fix-in-dubai-sanyo-ac-service-in-dubai-sanyo-air-condition-repair-in-dubai-sanyo-air-condition-maintenance-in-dubai-sanyo-air-condition/",
        element: <Navigate to="/services/air-conditioning-repair/brands/sanyo/" replace />
      },
      {
        path: "/skm-ac-repair-in-dubai-skm-ac-maintenance-in-dubai-skm-ac-fix-in-dubai-skm-ac-service-in-dubai-skm-air-condition-repair-in-dubai-skm-air-condition-maintenance-in-dubai-skm-air-condition-maintenance-in/",
        element: <Navigate to="/services/air-conditioning-repair/brands/skm/" replace />
      },
      {
        path: "/sub-zero-ac-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/brands/sub-zero/" replace />
      },
      {
        path: "/super-general-ac-repair-in-dubai-super-general-ac-maintenance-in-dubai-super-general-ac-fix-in-dubai-super-general-ac-service-in-dubai-super-general-air-condition-repair-in-dubai-super-general-air-con/",
        element: <Navigate to="/services/air-conditioning-repair/brands/super-general/" replace />
      },
      {
        path: "/tcl-ac-repair-in-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/brands/tcl/" replace />
      },
      {
        path: "/trane-ac-repair-in-dubai-trane-ac-maintenance-in-dubai-trane-ac-fix-in-dubai-trane-ac-service-in-dubai-trane-air-condition-repair-in-dubai-trane-air-condition-maintenance-in-dubai-trane-air-condition/",
        element: <Navigate to="/services/air-conditioning-repair/brands/trane/" replace />
      },
      {
        path: "/westpoint-ac-repair-in-dubai-westpoint-ac-maintenance-in-dubai-westpoint-ac-fix-in-dubai-westpoint-ac-service-in-dubai-west-point-air-condition-repair-in-dubai-west-point-air-condition-maintenance-in/",
        element: <Navigate to="/services/air-conditioning-repair/brands/westpoint/" replace />
      },
      {
        path: "/whirlpool-air-condition-repair-in-dubai-ac-maintenance-in-dubai-air-conditioning-fix-repairs-service-in-dubai/",
        element: <Navigate to="/services/air-conditioning-repair/brands/whirlpool/" replace />
      },
      {
        path: "/white-westinghouse-ac-repair-in-dubai-white-westinghouse-ac-maintenance-in-dubai-white-westinghouse-ac-fix-in-dubai-white-westinghouse-ac-service-in-dubai-white-westinghouse-air-condition-repair-in-du/",
        element: <Navigate to="/services/air-conditioning-repair/brands/white-westinghouse/" replace />
      },
      {
        path: "/york-ac-repair-in-dubai-york-ac-maintenance-in-dubai-york-ac-fix-in-dubai-york-ac-service-in-dubai-york-air-condition-repair-in-dubai-york-air-condition-maintenance-in-dubai-york-air-condition-mainten/",
        element: <Navigate to="/services/air-conditioning-repair/brands/york/" replace />
      },
      {
        path: "/services/air-conditioning-repair/coverage-area/alaweer/",
        element: <Navigate to="/services/air-conditioning-repair/coverage-area/al-aweer/" replace />
      },

      // Home Appliances Brands
       {
        path: "/admiral-fridge-repair-in-dubai-admiral-washing-machine-repair-in-dubai-admiral-cooker-repair-in-dubai-admiral-oven-repair-in-dubai-admiral-appliances-maintenance-in-dubai-admiral-refrigerator-fix-repa/",
        element: <Navigate to="/services/home-appliances-repair/brands/admiral/" replace />
      },
      {
        path: "/aeg-fridge-repair-in-dubai-aeg-washing-machine-repair-in-dubai-aeg-cooker-repair-in-dubai-aeg-oven-repair-in-dubai-aeg-appliances-maintenance-in-dubai-aeg-refrigerator-fix-repairs-service-in-dubai-aeg/",
        element: <Navigate to="/services/home-appliances-repair/brands/aeg/" replace />
      },
      {
        path: "/aftron-fridge-repair-in-dubai-aftron-washing-machine-repair-in-dubai-aftron-cooker-repair-in-dubai-aftron-oven-repair-in-dubai-aftron-appliances-maintenance-in-dubai-aftron-refrigerator-fix-repairs-se/",
        element: <Navigate to="/services/home-appliances-repair/brands/aftron/" replace />
      },
      {
        path: "/ariston-fridge-repair-in-dubai-ariston-washing-machine-repair-in-dubai-ariston-cooker-repair-in-dubai-ariston-oven-repair-in-dubai-ariston-appliances-maintenance-in-dubai-ariston-refrigerator-fix-repairs-service-in-dubai-ariston/",
        element: <Navigate to="/services/home-appliances-repair/brands/ariston/" replace />
      },
      {
        path: "/baumatic-appliances/",
        element: <Navigate to="/services/home-appliances-repair/brands/baumatic/" replace />
      },
      {
        path: "/baumatic-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai-error/",
        element: <Navigate to="/services/home-appliances-repair/brands/baumatic/" replace />
      },
      {
        path: "/beko-fridge-repair-in-dubai-beko-washing-machine-repair-in-dubai-beko-cooker-repair-in-dubai-beko-oven-repair-in-dubai-beko-appliances-maintenance-in-dubai-beko-refrigerator-fix-repairs-service-in-dub/",
        element: <Navigate to="/services/home-appliances-repair/brands/beko/" replace />
      },
      {
        path: "/bertazzoni-refrigerator-repair-in-dubai-bertazzoni-appliances-service-bertazzoni-fridge-repair-in-dubai-bertazzoni-washing-machine-washer-bertazzoni-dryer-repair-in-dubai-bertazzoni-dishwasher-cooker/",
        element: <Navigate to="/services/home-appliances-repair/brands/bertazzoni/" replace />
      },
      {
        path: "/blomberg-fridge-repair-in-dubai-blomberg-washing-machine-repair-in-dubai-blomberg-cooker-repair-in-dubai-blomberg-oven-repair-in-dubai-blomberg-appliances-maintenance-in-dubai-blomberg-refrigerator-fi/",
        element: <Navigate to="/services/home-appliances-repair/brands/blomberg/" replace />
      },
      {
        path: "/bompani-fridge-repair-in-dubai-bompani-washing-machine-repair-in-dubai-bompani-cooker-repair-in-dubai-bompani-oven-repair-in-dubai-bompani-appliances-maintenance-in-dubai-bompani-refrigerator-fix-repa/",
        element: <Navigate to="/services/home-appliances-repair/brands/bompani/" replace />
      },
      {
        path: "/bosch-home-appliances-repair/",
        element: <Navigate to="/" replace />
      },
      {
        path: "/boston-refrigerator-repair-in-dubai-boston-appliances-service-boston-fridge-repair-in-dubai-boston-washing-machine-washer-boston-dryer-repair-in-dubai-boston-dishwasher-cooker/",
        element: <Navigate to="/services/home-appliances-repair/brands/boston/" replace />
      },
      {
        path: "/brandt-fridge-repair-in-dubai-brandt-washing-machine-repair-in-dubai-brandt-cooker-repair-in-dubai-brandt-oven-repair-in-dubai-brandt-appliances-maintenance-in-dubai-brandt-refrigerator-fix-repairs-se/",
        element: <Navigate to="/services/home-appliances-repair/brands/brandt/" replace />
      },
      {
        path: "/candy-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/candy/" replace />
      },
      {
        path: "/daewoo-home-appliances-repair/",
        element: <Navigate to="/services/home-appliances-repair/brands/daewoo/" replace />
      },
       {
        path: "/daewoo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/daewoo/" replace />
      },
      {
        path: "/de-dietrich-fridge-repair-in-dubai-de-dietrich-washing-machine-repair-in-dubai-de-dietrich-cooker-repair-in-dubai-de-dietrich-oven-repair-in-dubai-de-dietrich-appliances-maintenance-in-dubai-de-dietri/",
        element: <Navigate to="/services/home-appliances-repair/brands/de-dietrich/" replace />
      },
      {
        path: "/delonghi-coffee-machine-repair/",
        element: <Navigate to="/services/home-appliances-repair/brands/delonghi/" replace />
      },
      {
        path: "/electrolux-fridge-repair-in-dubai-electrolux-washing-machine-repair-in-dubai-electrolux-cooker-repair-in-dubai-electrolux-oven-repair-in-dubai-electrolux-appliances-maintenance-in-dubai-electrolux-ref/",
        element: <Navigate to="/services/home-appliances-repair/brands/electrolux/" replace />
      },
      {
        path: "/electrolux-home-appliances-repair/",
        element: <Navigate to="/services/home-appliances-repair/brands/electrolux/" replace />
      },
      {
        path: "/elica-appliances-service/",
        element: <Navigate to="/services/home-appliances-repair/brands/elica/" replace />
      },
      {
        path: "/faber-appliances-service/",
        element: <Navigate to="/services/home-appliances-repair/brands/faber/" replace />
      },
      {
        path: "/fagor-fridge-repair-in-dubai-fagor-washing-machine-repair-in-dubai-fagor-cooker-repair-in-dubai-fagor-oven-repair-in-dubai-fagor-appliances-maintenance-in-dubai-fagor-refrigerator-fix-repairs-service/",
        element: <Navigate to="/services/home-appliances-repair/brands/fagor/" replace />
      },
      {
        path: "/fisher-and-paykel-fridge-repair-in-dubai-fisher-and-paykel-washing-machine-repair-in-dubai-fisher-and-paykel-cooker-repair-in-dubai-fisher-and-paykel-oven-repair-in-dubai-fisher-and-paykel-appliances/",
        element: <Navigate to="/services/home-appliances-repair/brands/fisher-paykel/" replace />
      },
      {
        path: "/foster-appliances-service/",
        element: <Navigate to="/services/home-appliances-repair/brands/foster/" replace />
      },
      {
        path: "/foster-appliances-services-foster-dishwasher-repair-service-in-dubai-foster-cooking-range-repair-service-in-dubai-foster-cooktop-repair-service-in-dubai-foster-oven-repair-in-dubai-foster-rangetop-r/",
        element: <Navigate to="/services/home-appliances-repair/brands/foster/" replace />
      },
      {
        path: "/franke-appliances-repair-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/franke/" replace />
      },
      {
        path: "/frigidaire-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/frigidaire/" replace />
      },
      {
        path: "/gaggenau-fridge-repair-in-dubai-gaggenau-washing-machine-repair-in-dubai-gaggenau-cooker-repair-in-dubai-gaggenau-oven-repair-in-dubai-gaggenau-appliances-maintenance-in-dubai-gaggenau-refrigerator-fi/",
        element: <Navigate to="/services/home-appliances-repair/brands/gaggenau/" replace />
      },
      {
        path: "/ge-general-electric-fridge-repair-in-dubai-ge-general-electric-washing-machine-repair-in-dubai-ge-general-electric-cooker-repair-in-dubai-ge-general-electric-oven-repair-in-dubai-ge-general-electric-a/",
        element: <Navigate to="/services/home-appliances-repair/brands/ge-general-electric/" replace />
      },
      {
        path: "/gibson-fridge-repair-in-dubai-gibson-washing-machine-repair-in-dubai-gibson-cooker-repair-in-dubai-gibson-oven-repair-in-dubai-gibson-appliances-maintenance-in-dubai-gibson-refrigerator-fix-repairs-se/",
        element: <Navigate to="/services/home-appliances-repair/brands/gibson/" replace />
      },
      {
        path: "/gorenje-fridge-repair-in-dubai-gorenje-washing-machine-repair-in-dubai-gorenje-cooker-repair-in-dubai-gorenje-oven-repair-in-dubai-gorenje-appliances-maintenance-in-dubai-gorenje-refrigerator-fix-repa/",
        element: <Navigate to="/services/home-appliances-repair/brands/gorenje/" replace />
      },
      {
        path: "/haier-fridge-repair-in-dubai-haier-washing-machine-repair-in-dubai-haier-cooker-repair-in-dubai-haier-oven-repair-in-dubai-haier-appliances-maintenance-in-dubai-haier-refrigerator-fix-repairs-service/",
        element: <Navigate to="/services/home-appliances-repair/brands/haier/" replace />
      },
      {
        path: "/hisense-fridge-repair-in-dubai-hisense-washing-machine-repair-in-dubai-hisense-cooker-repair-in-dubai-hisense-oven-repair-in-dubai-hisense-appliances-maintenance-in-dubai-hisense-refrigerator-fix-repa/",
        element: <Navigate to="/services/home-appliances-repair/brands/hisense/" replace />
      },
      {
        path: "/hitachi-fridge-repair-in-dubai-hitachi-washing-machine-repair-in-dubai-hitachi-cooker-repair-in-dubai-hitachi-oven-repair-in-dubai-hitachi-appliances-maintenance-in-dubai-hitachi-refrigerator-fix-repa/",
        element: <Navigate to="/services/home-appliances-repair/brands/hitachi/" replace />
      },
      {
        path: "/hoover-fridge-repair-in-dubai-hoover-washing-machine-repair-in-dubai-hoover-cooker-repair-in-dubai-hoover-oven-repair-in-dubai-hoover-appliances-maintenance-in-dubai-hoover-refrigerator-fix-repairs-se/",
        element: <Navigate to="/services/home-appliances-repair/brands/hoover/" replace />
      },
      {
        path: "/hotpoint-refrigerator-repair-in-dubai-hotpoint-fridge-repair-in-dubai-hotpoint-washing-machine-repair-in-dubai-hotpoint-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/hotpoint/" replace />
      },
      {
        path: "/ifb-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/ifb/" replace />
      },
      {
        path: "/indesit-fridge-repair-in-dubai-indesit-washing-machine-repair-in-dubai-indesit-cooker-repair-in-dubai-indesit-oven-repair-in-dubai-indesit-appliances-maintenance-in-dubai-indesit-refrigerator-fix-repa/",
        element: <Navigate to="/services/home-appliances-repair/brands/indesit/" replace />
      },
      {
        path: "/kelvinator-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/kelvinator/" replace />
      },
      {
        path: "/kenmore-appliances-service/",
        element: <Navigate to="/services/home-appliances-repair/brands/kenmore/" replace />
      },
      {
        path: "/kenwood-stand-mixer-repair-service-near-me-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/kenwood/" replace />
      },
      {
        path: "/kitchenaid-refrigerator-repair-in-dubai-fridge-repair-in-dubai-kitchenaid-freezer-maintenance-in-dubai-washing-machine-repair-in-dubai-dishwasher-kitchenaid-cooker-oven-repairs-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/kitchenaid/" replace />
      },
      {
        path: "/kitchenaid-stand-mixer-repair-service-near-me-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/kitchenaid-stand-mixer-repair/" replace />
      },
      {
        path: "/la-germania-cooking-range-repair-in-dubai-la-germania-oven-repair-in-dubai-la-germania-cooker-repair-in-dubai-la-germania-cooker-oven-maintenance-service-in-dubai-refrigerator-repair-in-dubai-fridge-r/",
        element: <Navigate to="/services/home-appliances-repair/brands/la-germania/" replace />
      },
      {
        path: "/lg-fridge-repair-in-dubai-lg-washing-machine-repair-in-dubai-lg-cooker-repair-in-dubai-lg-oven-repair-in-dubai-lg-appliances-maintenance-in-dubai-lg-refrigerator-fix-repairs-service-in-dubai-lg-dishwa/",
        element: <Navigate to="/services/home-appliances-repair/brands/lg/" replace />
      },
      {
        path: "/liebherr-refrigerator-repair-in-dubai-liebherr-fridge-repair-in-dubai-liebherr-freezer-maintenance-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/liebherr/" replace />
      },
      {
        path: "/marvel-fridge-repair-in-dubai-marvel-washing-machine-repair-in-dubai-marvel-cooker-repair-in-dubai-marvel-oven-repair-in-dubai-marvel-appliances-maintenance-in-dubai-marvel-refrigerator-fix-repairs-se/",
        element: <Navigate to="/services/home-appliances-repair/brands/marvel/" replace />
      },
      {
        path: "/maytag-fridge-repair-in-dubai-maytag-washing-machine-repair-in-dubai-maytag-cooker-repair-in-dubai-maytag-oven-repair-in-dubai-maytag-appliances-maintenance-in-dubai-maytag-refrigerator-fix-repairs-se/",
        element: <Navigate to="/services/home-appliances-repair/brands/maytag/" replace />
      },
      {
        path: "/miele-fridge-repair-in-dubai-miele-washing-machine-repair-in-dubai-miele-cooker-repair-in-dubai-miele-oven-repair-in-dubai-miele-appliances-maintenance-in-dubai-miele-refrigerator-fix-repairs-service/",
        element: <Navigate to="/services/home-appliances-repair/brands/miele/" replace />
      },
      {
        path: "/neff-fridge-repair-in-dubai-neff-washing-machine-repair-in-dubai-neff-cooker-repair-in-dubai-neff-oven-repair-in-dubai-neff-appliances-maintenance-in-dubai-neff-refrigerator-fix-repairs-service-in-dub/",
        element: <Navigate to="/services/home-appliances-repair/brands/neff/" replace />
      },
      {
        path: "/panasonic-fridge-repair-in-dubai-panasonic-washing-machine-repair-in-dubai-panasonic-cooker-repair-in-dubai-panasonic-oven-repair-in-dubai-panasonic-appliances-maintenance-in-dubai-panasonic-refrigera/",
        element: <Navigate to="/services/home-appliances-repair/brands/panasonic/" replace />
      },
      {
        path: "/samsung-fridge-repair-in-dubai-samsung-washing-machine-repair-in-dubai-samsung-cooker-repair-in-dubai-samsung-oven-repair-in-dubai-samsung-appliances-maintenance-in-dubai-samsung-refrigerator-fix-repa/",
        element: <Navigate to="/services/home-appliances-repair/brands/samsung/" replace />,
      },
      {
        path: "/samsung-home-appliances-repair/",
        element: <Navigate to="/services/home-appliances-repair/brands/samsung/" replace />
      },
      {
        path: "/sanyo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/sanyo/" replace />
      },
      {
        path: "/sears-home-appliances-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/sears/" replace />
      },
      {
        path: "/sharp-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/sharp/" replace />
      },
      {
        path: "/siemens-home-appliances-repair/",
        element: <Navigate to="/services/home-appliances-repair/brands/siemens/" replace />
      },
      {
        path: "/siemens-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/siemens/" replace />
      },
      {
        path: "/smeg-fridge-repair-in-dubai-smeg-washing-machine-repair-in-dubai-smeg-cooker-repair-in-dubai-smeg-oven-repair-in-dubai-smeg-appliances-maintenance-in-dubai-smeg-refrigerator-fix-repairs-service-in-dub/",
        element: <Navigate to="/services/home-appliances-repair/brands/smeg/" replace />
      },
      {
        path: "/smeg-mixer-repair-service-near-me-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/smeg-mixer-repair/" replace />
      },
      {
        path: "/speed-queen-washing-machine-repair-in-dubai-speed-queen-dryer-repair-in-dubai-speed-queen-washer-dryer-repair-in-dubai-maintenance-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/speed-queen/" replace />
      },
      {
        path: "/sub-zero-fridge-repair-in-dubai-sub-zero-washing-machine-repair-in-dubai-sub-zero-cooker-repair-in-dubai-sub-zero-oven-repair-in-dubai-sub-zero-appliances-maintenance-in-dubai-sub-zero-refrigerator-fi/",
        element: <Navigate to="/services/home-appliances-repair/brands/sub-zero/" replace />
      },
      {
        path: "/teka-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/teka/" replace />
      },
      {
        path: "/terim-appliances-service/",
        element: <Navigate to="/services/home-appliances-repair/brands/terim/" replace />
      },
      {
        path: "/thermador-appliances-service/",
        element: <Navigate to="/services/home-appliances-repair/brands/thermador/" replace />
      },
      {
        path: "/toshiba-home-appliance-installation-maintenance-repair-fix-service-in-dubai-2/",
        element: <Navigate to="/services/home-appliances-repair/brands/toshiba/" replace />
      },
      {
        path: "/unimac-washing-machine-repair-in-dubai-unimac-dryer-repair-in-dubai-unimac-washer-dryer-repair-in-dubai-unimac-maintenance-in-dubai-unimac-laundry-service-in-dubai-unimac-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/unimac/" replace />
      },
      {
        path: "/viking-appliances-service/",
        element: <Navigate to="/services/home-appliances-repair/brands/viking/" replace />
      },
      {
        path: "/westpoint-fridge-repair-in-dubai-westpoint-washing-machine-repair-in-dubai-westpoint-cooker-repair-in-dubai-westpoint-oven-repair-in-dubai-westpoint-refrigerator-fix-repairs-service-in-dubai-west-poin/",
        element: <Navigate to="/services/home-appliances-repair/brands/westpoint/" replace />
      },
      {
        path: "/whirlpool-fridge-repair-in-dubai-whirlpool-washing-machine-repair-in-dubai-whirlpool-cooker-repair-in-dubai-whirlpool-oven-repair-in-dubai-whirlpool-appliances-maintenance-in-dubai-whirlpool-refrigera/",
        element: <Navigate to="/services/home-appliances-repair/brands/whirlpool/" replace />
      },
      {
        path: "/white-westinghouse-fridge-repair-in-dubai-white-westinghouse-washing-machine-repair-in-dubai-white-westinghouse-cooker-repair-in-dubai-white-westinghouse-oven-repair-in-dubai-white-westinghouse-applia/",
        element: <Navigate to="/services/home-appliances-repair/brands/white-westinghouse/" replace />
      },
      {
        path: "/wolf-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/brands/wolf/" replace />
      },
      {
        path: "/zanussi-fridge-repair-in-dubai-zanussi-washing-machine-repair-in-dubai-zanussi-cooker-repair-in-dubai-zanussi-oven-repair-in-dubai-zanussi-appliances-maintenance-in-dubai-zanussi-refrigerator-fix-repa/",
        element: <Navigate to="/services/home-appliances-repair/brands/zanussi/" replace />
      },
      {
        path:"/commercial-dishwasher-repair/",
        element: <Navigate to="/services/commercial-dishwasher-repair/" replace />
      },
      {
        path:"/services/commercial-laundry-equipment-service/",
        element: <Navigate to="/services/commercial-laundry-equipment-service/" replace />
      },
      {
        path:"/commercial-washing-machine-repair/",
        element: <Navigate to="/services/commercial-washing-machine-repair/" replace />
      },
      {
        path:"/ecovacs-vacuum-cleaner-repair-and-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/ecovacs-vacuum-cleaner-repair-and-service-in-dubai/" replace />
      },
      {
        path:"/roborock-vacuum-cleaner-repair-service-in-dubai/",
        element: <Navigate to="/services/home-appliances-repair/roborock-vacuum-cleaner-repair-service-in-dubai/" replace />
      },
      {
        path:"/ariston-fridge-repair-in-dubai-ariston-washing-machine-repair-in-dubai-ariston-cooker-repair-in-dubai-ariston-oven-repair-in-dubai-ariston-appliances-maintenance-in-dubai-ariston-refrigerator-fix-repa/",
        element: <Navigate to="/services/home-appliances-repair/brands/ariston/" replace />
      },
      {
        path:"/تصليح-مكيفات-الهواء-خدمة-وصيانة-دبي/",
        element: <Navigate to="/services/air-conditioning-repair/تصليح-مكيفات-الهواء-خدمة-وصيانة-دبي/" replace />
      },
      {
        path:"/de-dietrich-appliance-repair-service/",
        element: <Navigate to="/services/home-appliances-repair/brands/de-dietrich/" replace />
      },
      {
        path:"/services/air-conditioning-repair/brands/ogeneral/",
        element: <Navigate to="/services/air-conditioning-repair/brands/o-general/" replace />
      },
    ],
  }
]);