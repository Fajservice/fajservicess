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
        path: "/ac-service-in-dubai/",
        element: <Components.AcServiceInDubai />,
      },
      {
        path: "/تصليح-مكيفات-الهواء-خدمة-وصيانة-دبي/",
        element: <Components.AcServiceInDubaiArabic />,
      },
      {
        path: "/ac-maintenance-dubai/",
        element: <Components.AcMaintenanceDubai />,
      },
      {
        path: "/ac-annual-maintenance-contract/",
        element: <Components.AcAnnualMaintenanceContract />,
      },
      {
        path: "/electrical-plumbing-service/",
        element: <Components.ElectricalPlumbingService />,
      },
      {
        path: "/ac-repair-dubai/",
        element: <Components.AcRepairDubai />,
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
        path: "/appliances-repair-service/",
        element: < Components.FreestandingHomeAppliancesRepairService />,
      },
      {
        path: "/coffee-machine-service-center-in-dubai/",
        element: < Components.CoffeeMachineServiceCenterInDubai />,
      },
      {
        path: "/coffee-machine-repairs/",
        element: < Components.CommercialCoffeeMachineRepair />,
      },
      {
        path: "/hob-repair-service/",
        element: <Components.HobRepair />,
      },
      {
        path: "/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/",
        element: <Components.BBQService />,
      },
      {
        path: "/cigar-humidor-repair/",
        element: <Components.CigarcabnitService />,
      },
      {
        path: "/our-portfolio/",
        element: <Components.PortfolioPage />,
      },
      {
        path: "/oven-repair-service/",
        element: <Components.OvenRepairService />,
      },
      {
        path: "/commercial-cooking-appliances-repair-service/",
        element: <Components.CookingEquipmentService />,
      },
      {
        path: "/meat-grinder-repair/",
        element: <Components.MeatGrinderRepair />,
      },
      {
        path: "/commercial-dishwasher-repair/",
        element: <Components.CommercialDishwasherServices />,
      },
      {
        path: "/commercial-washing-machine-repair/",
        element: <Components.CommercialWashingMachineRepair />,
      },
      {
        path: "/commercial-laundry-equipment-service/",
        element: <Components.CommercialLaundryEquipmentService />,
      },
      {
        path: "/commercial-kitchen-equipment-amc/",
        element: <Components.KitchenEquipmentAMC />,
      },
      {
        path: "/commercial-kitchen-equipment-maintenance-services/",
        element: <Components.KitchenEquipmentRepair />,
      },
      {
        path: "/ice-maker-repair/",
        element: <Components.IceMakerRepair />,
      },
      {
        path: "/commercial-refrigeration-maintenance-contact-services/",
        element: <Components.RefrigerationAMCServices />,
      },
      {
        path: "/commercial-refrigeration-maintenance/",
        element: <Components.CommercialRefrigerationMaintence />,
      },
      {
        path: "/gas-cooker-repair-service/",
        element: <Components.GasRangeRepairService />,
      },
      {
        path: "/dishwasher-repair-service/",
        element: <Components.DishwasherRepair />,
      },
      {
        path: "/oven-repair/",
        element: <Components.OvenRepair />,
      },
      {
        path: "/robot-vacuum-cleaner-repair/",
        element: <Components.VacuumCleanerRepair />,
      },
      {
        path: "/small-home-appliances-service-center-in-dubai/",
        element: <Components.SmallAppliancesRepair />,
      },
      {
        path: "/built-in-appliances-repair-service/",
        element: <Components.IntegratedApplianceRepair />,
      },
      {
        path: "/appliances-amc-service/",
        element: <Components.AppliancesMaintenanceContract />,
      },
      {
        path: "/washing-machine-repair-service-dubai/",
        element: <Components.WashingMachineRepairServiceDubai />,
      },
      {
        path: "/refrigerator-repair-service/",
        element: <Components.RefrigeratorRepairInDubai />,
      },
      {
        path: "/coleman-ac-repair-in-dubai-coleman-ac-maintenance-in-dubai-coleman-ac-fix-in-dubai-coleman-ac-service-in-dubai-coleman-air-condition-repair-in-dubai-coleman-air-condition-maintenance-in-dubai-coleman/",
        element: <Components.ColemenAcRepair />,
      },
      {
        path: "/supra-ac-repair-in-dubai-supra-ac-maintenance-in-dubai-supra-ac-fix-in-dubai-supra-ac-service-in-dubai-supra-air-condition-repair-in-dubai-supra-air-condition-maintenance-in-dubai-supra-air-condition/",
        element: <Components.SupraAcRepair />,
      },
      {
        path: "/midea-ac-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Components.MideaAcRepair />,
      },
      {
        path: "/fujitsu-ac-repair-in-dubai-fujitsu-ac-maintenance-in-dubai-fujitsu-ac-fix-in-dubai-fujitsu-ac-service-in-dubai-fujitsu-air-condition-repair-in-dubai-fujitsu-air-condition-maintenance-in-dubai-fujitsu/",
        element: <Components.FujitsuAcRepair />,
      },
      {
        path: "/daikin-ac-repair-in-dubai-daikin-ac-maintenance-in-dubai-daikin-ac-fix-in-dubai-daikin-ac-service-in-dubai-daikin-air-condition-repair-in-dubai-daikin-air-condition-maintenance-in-dubai-daikin-air-con/",
        element: <Components.DaikinAcRepair />,
      },
      {
        path: "/daewoo-ac-repair-in-dubai-daewoo-ac-maintenance-in-dubai-daewoo-ac-fix-in-dubai-daewoo-ac-service-in-dubai-daewoo-air-condition-repair-in-dubai-daewoo-air-condition-maintenance-in-dubai-daewoo-air-con/",
        element: <Components.DaewooAcRepair />,
      },
      {
        path: "/skm-ac-repair-in-dubai-skm-ac-maintenance-in-dubai-skm-ac-fix-in-dubai-skm-ac-service-in-dubai-skm-air-condition-repair-in-dubai-skm-air-condition-maintenance-in-dubai-skm-air-condition-maintenance-in/",
        element: <Components.SkmAcRepair />,
      },
      {
        path: "/cooline-ac-repair-in-dubai-cooline-ac-maintenance-in-dubai-cooline-ac-fix-in-dubai-cooline-ac-service-in-dubai-cooline-air-condition-repair-in-dubai-cooline-air-condition-maintenance-in-dubai-cooline/",
        element: <Components.CoolineAcRepair />,
      },
      {
        path: "/westpoint-ac-repair-in-dubai-westpoint-ac-maintenance-in-dubai-westpoint-ac-fix-in-dubai-westpoint-ac-service-in-dubai-west-point-air-condition-repair-in-dubai-west-point-air-condition-maintenance-in/",
        element: <Components.WestpointAcRepair />,
      },
      {
        path: "/york-ac-repair-in-dubai-york-ac-maintenance-in-dubai-york-ac-fix-in-dubai-york-ac-service-in-dubai-york-air-condition-repair-in-dubai-york-air-condition-maintenance-in-dubai-york-air-condition-mainten/",
        element: <Components.YorkAcRepair />,
      },
      {
        path: "/blue-star-ac-repair-in-dubai-blue-star-ac-maintenance-in-dubai-blue-star-ac-fix-in-dubai-blue-star-ac-service-in-dubai-blue-star-air-condition-repair-in-dubai-blue-star-air-condition-maintenance-in-du/",
        element: <Components.BlueStarAcRepair />,
      },
      {
        path: "/rheem-ac-maintenance-in-dubai/",
        element: <Components.RheemAcRepair />,
      },
      {
        path: "/ruud-ac-repair-in-dubai-ruud-ac-maintenance-in-dubai-ruud-ac-fix-in-dubai-ruud-ac-service-in-dubai-ruud-air-condition-repair-in-dubai-ruud-air-condition-maintenance-in-dubai-ruud-air-condition-mainten/",
        element: <Components.RuudAcRepair />,
      },
      {
        path: "/trane-ac-repair-in-dubai-trane-ac-maintenance-in-dubai-trane-ac-fix-in-dubai-trane-ac-service-in-dubai-trane-air-condition-repair-in-dubai-trane-air-condition-maintenance-in-dubai-trane-air-condition/",
        element: <Components.TraneAcRepair />,
      },
      {
        path: "/super-general-ac-repair-in-dubai-super-general-ac-maintenance-in-dubai-super-general-ac-fix-in-dubai-super-general-ac-service-in-dubai-super-general-air-condition-repair-in-dubai-super-general-air-con/",
        element: <Components.SuperGeneralAcRepair />,
      },
      {
        path: "/toshiba-ac-repair-in-dubai-toshiba-ac-maintenance-in-dubai-toshiba-ac-fix-in-dubai-toshiba-ac-service-in-dubai-toshiba-air-condition-repair-in-dubai-toshiba-air-condition-maintenance-in-dubai-toshiba/",
        element: <Components.ToshibaAcRepair />,
      },
      {
        path: "/lg-ac-repair-in-dubai/",
        element: <Components.LgAcRepair />,
      },
      {
        path: "/aftron-ac-repair-maintenance-service-in-dubai-2/",
        element: <Components.AftronAcRepair />,
      },
      {
        path: "/frigidaire-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: <Components.FrigidaireRefrigeratorRepair />,
      },
      {
        path: "/panasonic-ac-repair-in-dubai-panasonic-ac-maintenance-in-dubai-panasonic-ac-fix-in-dubai-panasonic-ac-service-in-dubai-panasonic-air-condition-repair-in-dubai-panasonic-air-condition-maintenance-in-du/",
        element: <Components.PanasonicAcRepair />,
      },
      {
        path: "/whirlpool-air-condition-repair-in-dubai-ac-maintenance-in-dubai-air-conditioning-fix-repairs-service-in-dubai/",
        element: <Components.WhirlpoolAcRepair />,
      },
      {
        path: "/samsung-ac-repair-in-dubai/",
        element: <Components.SamsungAcRepair />,
      },
      {
        path: "/mcquay-ac-repair-in-dubai-mcquay-ac-maintenance-in-dubai-mcquay-ac-fix-in-dubai-mcquay-ac-service-in-dubai-mcquay-air-condition-repair-in-dubai-mcquay-air-condition-maintenance-in-dubai-mcquay-air-con/",
        element: <Components.McquayAcRepair />,
      },
      {
        path: "/nikai-ac-repair-in-dubai-nikai-ac-maintenance-in-dubai-nikai-ac-fix-in-dubai-nikai-ac-service-in-dubai-nikai-air-condition-repair-in-dubai-nikai-air-condition-maintenance-in-dubai-nikai-air-condition/",
        element: <Components.NikaiAcRepair />,
      },
      {
        path: "/crafft-ac-repair-in-dubai-crafft-ac-maintenance-in-dubai-crafft-ac-fix-in-dubai-crafft-ac-service-in-dubai-crafft-air-condition-repair-in-dubai-crafft-air-condition-maintenance-in-dubai-crafft-air-con/",
        element: <Components.CrafftAcRepair />,
      },
      {
        path: "/lennox-ac-repair-in-dubai-lennox-ac-maintenance-in-dubai-lennox-ac-fix-in-dubai-lennox-ac-service-in-dubai-lennox-air-condition-repair-in-dubai-lennox-air-condition-maintenance-in-dubai-lennox-air-con/",
        element: <Components.LennoxAcRepair />,
      },
      {
        path: "/hitachi-ac-repair-in-dubai-hitachi-ac-maintenance-in-dubai-hitachi-ac-fix-in-dubai-hitachi-ac-service-in-dubai-hitachi-air-condition-repair-in-dubai-hitachi-air-condition-maintenance-in-dubai-hitachi/",
        element: <Components.HitachiAcRepair />,
      },
      {
        path: "/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/",
        element: <Components.OGeneralAcRepair />,
      },
      {
        path: "/bryant-ac-repair-in-dubai-bryant-ac-maintenance-in-dubai-bryant-ac-fix-in-dubai-bryant-ac-service-in-dubai-bryant-air-condition-repair-in-dubai-bryant-air-condition-maintenance-in-dubai-bryant-air-con/",
        element: <Components.BryantAcRepair />,
      },
      {
        path: "/white-westinghouse-ac-repair-in-dubai-white-westinghouse-ac-maintenance-in-dubai-white-westinghouse-ac-fix-in-dubai-white-westinghouse-ac-service-in-dubai-white-westinghouse-air-condition-repair-in-du/",
        element: <Components.WhiteWestingHouseAcRepair />,
      },
      {
        path: "/mitsubishi-ac-repair-in-dubai/",
        element: <Components.MitsubishiAcRepair />,
      },
      {
        path: "/sanyo-ac-repair-in-dubai-sanyo-ac-maintenance-in-dubai-sanyo-ac-fix-in-dubai-sanyo-ac-service-in-dubai-sanyo-air-condition-repair-in-dubai-sanyo-air-condition-maintenance-in-dubai-sanyo-air-condition/",
        element: <Components.SanyoAcRepair />,
      },
      {
        path: "/daikool-ac-repair-in-dubai-daikool-ac-maintenance-in-dubai-daikool-ac-fix-in-dubai-daikool-ac-service-in-dubai-daikool-air-condition-repair-in-dubai-daikool-air-condition-maintenance-in-dubai-daikool/",
        element: <Components.DaikoolAcRepair />,
      },
      {
        path: "/goodman-ac-repair-in-dubai-goodman-ac-maintenance-in-dubai-goodman-ac-fix-in-dubai-goodman-ac-service-in-dubai-goodman-air-condition-repair-in-dubai-goodman-air-condition-maintenance-in-dubai-goodman/",
        element: <Components.GoodmanAcRepair />,
      },
      {
        path: "/sub-zero-ac-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Components.SubZeroAcRepair />,
      },
      {
        path: "/gree-ac-repair-in-dubai/",
        element: <Components.GreeAcRepair />,
      },
      {
        path: "/haier-ac-repair-in-dubai-haier-ac-maintenance-in-dubai-haier-ac-fix-in-dubai-haier-ac-service-in-dubai-haier-air-condition-repair-in-dubai-haier-air-condition-maintenance-in-dubai-haier-air-condition/",
        element: <Components.HaierAcRepair />,
      },
      {
        path: "/tcl-ac-repair-in-dubai/",
        element: <Components.TCLAcRepair />,
      },
      {
        path: "/indesit-fridge-repair-in-dubai-indesit-washing-machine-repair-in-dubai-indesit-cooker-repair-in-dubai-indesit-oven-repair-in-dubai-indesit-appliances-maintenance-in-dubai-indesit-refrigerator-fix-repa/",
        element: <Components.IndesitWashingMachine />,
      },
      {
        path: "/elica-appliances-service/",
        element: <Components.ElicaAppliancesService />,
      },
      {
        path: "/fagor-fridge-repair-in-dubai-fagor-washing-machine-repair-in-dubai-fagor-cooker-repair-in-dubai-fagor-oven-repair-in-dubai-fagor-appliances-maintenance-in-dubai-fagor-refrigerator-fix-repairs-service/",
        element: <Components.FagorFridgeRepair />,
      },
      {
        path: "/neff-fridge-repair-in-dubai-neff-washing-machine-repair-in-dubai-neff-cooker-repair-in-dubai-neff-oven-repair-in-dubai-neff-appliances-maintenance-in-dubai-neff-refrigerator-fix-repairs-service-in-dub/",
        element: <Components.NeffFridgeRepair />,
      },
      {
        path: "/ariston-fridge-repair-in-dubai-ariston-washing-machine-repair-in-dubai-ariston-cooker-repair-in-dubai-ariston-oven-repair-in-dubai-ariston-appliances-maintenance-in-dubai-ariston-refrigerator-fix-repa/",
        element: <Components.AristonFrideRepair />,
      },
      {
        path: "/fisher-and-paykel-fridge-repair-in-dubai-fisher-and-paykel-washing-machine-repair-in-dubai-fisher-and-paykel-cooker-repair-in-dubai-fisher-and-paykel-oven-repair-in-dubai-fisher-and-paykel-appliances/",
        element: <Components.FisherPaykelFridgeRepair />,
      },
      {
        path: "/siemens-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Components.SiemensHomeAppUnstallation />,
      },
      {
        path: "/maytag-fridge-repair-in-dubai-maytag-washing-machine-repair-in-dubai-maytag-cooker-repair-in-dubai-maytag-oven-repair-in-dubai-maytag-appliances-maintenance-in-dubai-maytag-refrigerator-fix-repairs-se/",
        element: <Components.MaytagFridgeRepair />,
      },
      {
        path: "/smeg-fridge-repair-in-dubai-smeg-washing-machine-repair-in-dubai-smeg-cooker-repair-in-dubai-smeg-oven-repair-in-dubai-smeg-appliances-maintenance-in-dubai-smeg-refrigerator-fix-repairs-service-in-dub/",
        element: <Components.SmegFridgeRepair />,
      },
      {
        path: "/sub-zero-fridge-repair-in-dubai-sub-zero-washing-machine-repair-in-dubai-sub-zero-cooker-repair-in-dubai-sub-zero-oven-repair-in-dubai-sub-zero-appliances-maintenance-in-dubai-sub-zero-refrigerator-fi/",
        element: <Components.SubZeroFridgeRepair />,
      },
      {
        path: "/hitachi-fridge-repair-in-dubai-hitachi-washing-machine-repair-in-dubai-hitachi-cooker-repair-in-dubai-hitachi-oven-repair-in-dubai-hitachi-appliances-maintenance-in-dubai-hitachi-refrigerator-fix-repa/",
        element: <Components.HitachiFridgeRepair />,
      },
      {
        path: "/gaggenau-fridge-repair-in-dubai-gaggenau-washing-machine-repair-in-dubai-gaggenau-cooker-repair-in-dubai-gaggenau-oven-repair-in-dubai-gaggenau-appliances-maintenance-in-dubai-gaggenau-refrigerator-fi/",
        element: <Components.GaggenauFridgeRepair />,
      },
      {
        path: "/whirlpool-fridge-repair-in-dubai-whirlpool-washing-machine-repair-in-dubai-whirlpool-cooker-repair-in-dubai-whirlpool-oven-repair-in-dubai-whirlpool-appliances-maintenance-in-dubai-whirlpool-refrigera/",
        element: <Components.WhirlpoolFridgeRepair />,
      },
      {
        path: "/foster-appliances-services-foster-dishwasher-repair-service-in-dubai-foster-cooking-range-repair-service-in-dubai-foster-cooktop-repair-service-in-dubai-foster-oven-repair-in-dubai-foster-rangetop-r/",
        element: <Components.FosterAppliancesServices />,
      },
      {
        path: "/teka-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Components.TekaHomeAppInstllation />,
      },
      {
        path: "/gorenje-fridge-repair-in-dubai-gorenje-washing-machine-repair-in-dubai-gorenje-cooker-repair-in-dubai-gorenje-oven-repair-in-dubai-gorenje-appliances-maintenance-in-dubai-gorenje-refrigerator-fix-repa/",
        element: <Components.GorenjeFridgeRepair />,
      },
      {
        path: "/miele-fridge-repair-in-dubai-miele-washing-machine-repair-in-dubai-miele-cooker-repair-in-dubai-miele-oven-repair-in-dubai-miele-appliances-maintenance-in-dubai-miele-refrigerator-fix-repairs-service/",
        element: <Components.MieleFridgeRepair />,
      },
      {
        path: "/wolf-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Components.WolfHomeAppMaintenance />,
      },
      {
        path: "/toshiba-home-appliance-installation-maintenance-repair-fix-service-in-dubai-2/",
        element: <Components.ToshibaHomeAppMaintenance />,
      },
      {
        path: "/gibson-fridge-repair-in-dubai-gibson-washing-machine-repair-in-dubai-gibson-cooker-repair-in-dubai-gibson-oven-repair-in-dubai-gibson-appliances-maintenance-in-dubai-gibson-refrigerator-fix-repairs-se/",
        element: <Components.GibsoneFridgeRepair />,
      },
      {
        path: "/project",
        element: <Components.ProjectPage />,
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
        path: "/terms-and-conditions/",
        element: <Components.TermsConditionsPage />,
      },
      {
        path: "/dubai-ac-service-price-list/",
        element: <Components.DubaiAcServicePriceList />,
      },
      {
        path: "/ac-services-in-the-ritz-carlton-difc/",
        element: <Components.AcRepairInRitz />,
      },
      {
        path: "/ac-services-in-dubai-silicon-oasis/",
        element: <Components.AcRepairInSiliconOasis />,
      },
      {
        path: "/ac-services-in-metha/",
        element: <Components.AcRepairInMetha />,
      },
      {
        path: "/ac-services-in-jumeirah-village/",
        element: <Components.AcRepairInJumeirahVillage />,
      },
      {
        path: "/ac-services-in-jebel-ali-free-zone/",
        element: <Components.AcRepairInJebelAliFreeZone />,
      },
      {
        path: "/ac-services-in-umm-al-sheif/",
        element: <Components.AcRepairInUmmAlSheif />,
      },
      {
        path: "/ac-services-in-the-greens/",
        element: <Components.AcRepairinTheGreens />,
      },
      {
        path: "/ac-services-in-al-jafiliya/",
        element: <Components.AcRepairinAlJafiliya />,
      },
      {
        path: "/ac-services-in-the-meadows/",
        element: <Components.AcRepairinTheMeadows />,
      },
      {
        path: "/ac-services-in-academy-city/",
        element: <Components.AcRepairInAcademyCity />,
      },
      {
        path: "/ac-services-in-limestone-house-difc/",
        element: <Components.AcRepairInLimestoneHouseDifc />,
      },
      {
        path: "/ac-services-in-jumeirah-village-triangle/",
        element: <Components.AcRepairInJumeriahVillageTriangle />,
      },
      {
        path: "/ac-services-in-arabian-ranches-2/",
        element: <Components.AcRepairInArabianRanches2 />,
      },
      {
        path: "/ac-services-in-dubai-studio-city/",
        element: <Components.AcRepairInDubaiStudioCity />,
      },
      {
        path: "/ac-services-jumeirah-islands/",
        element: <Components.AcRepairInJumeirahIslands />,
      },
      {
        path: "/ac-repair-al-qusais/",
        element: <Components.AcRepairInAlQusais />,
      },
      {
        path: "/ac-services-in-the-springs/",
        element: <Components.AcRepairInTheSprings />,
      },
      {
        path: "/ac-services-in-al-mirdif/",
        element: <Components.AcRepairInAlMirdif />,
      },
      {
        path: "/ac-services-in-international-media-and-production-zone/",
        element: <Components.AcRepairInInternationalMediaAndProductionZone />,
      },
      {
        path: "/ac-services-in-jumeirah-village-circle/",
        element: <Components.AcRepairInJumeirahVillageCircle />,
      },
      {
        path: "/ac-services-in-business-bay/",
        element: <Components.AcRepairInBusinessBay />,
      },
      {
        path: "/ac-services-in-arabian-ranches/",
        element: <Components.AcRepairInArabianRanches />,
      },
      {
        path: "/ac-services-in-dip/",
        element: <Components.AcRepairInDip />,
      },
      {
        path: "/ac-services-in-discovery-gardens/",
        element: <Components.AcRepairInDiscoveryGardens />,
      },
      {
        path: "/ac-services-in-al-waha-community/",
        element: <Components.AcRepairInAlWahaCommunity />,
      },
      {
        path: "/ac-services-in-hudaiba/",
        element: <Components.AcRepairInHudaiba />,
      },
      {
        path: "/ac-services-in-impz/",
        element: <Components.AcRepairInImpz />,
      },
      {
        path: "/ac-services-in-al-satwa/",
        element: <Components.AcRepairInAlSatwa />,
      },
      {
        path: "/ac-repair-in-jafza-air-condition-maintenance-in-jafza-air-conditioning-fix-amc-service-in-jebel-ali-free-zone-dubai/",
        element: <Components.AcRepairInAlJafza />,
      },
      {
        path: "/ac-services-in-al-khawaneej/",
        element: <Components.AcRepairInAlKhawaneej />,
      },
      {
        path: "/ac-services-in-al-manara/",
        element: <Components.AcRepairInAlManara />,
      },
      {
        path: "/ac-services-in-jumeirah-golf-estates/",
        element: <Components.AcRepairInJumeirahGolfEstates />,
      },
      {
        path: "/ac-services-in-layan-community/",
        element: <Components.AcRepairInLayanCommunity />,
      },
      {
        path: "/ac-services-in-al-badaa/",
        element: <Components.AcRepairInAlBadaa />,
      },
      {
        path: "/ac-services-dubai-internet-city/",
        element: <Components.AcRepairInDubaiInternetCity />,
      },
      {
        path: "/ac-services-in-jumeirah-lake-towers/",
        element: <Components.AcRepairInJumeirahLakeTowers />,
      },
      {
        path: "/ac-services-in-al-tawar/",
        element: <Components.AcRepairinAlTawar />,
      },
      {
        path: "/ac-services-in-al-barsha-south/",
        element: <Components.AcRepairInAlBarshaSouth />,
      },
      {
        path: "/ac-services-in-the-gardens/",
        element: <Components.AcRepairInGardens />,
      },
      {
        path: "/ac-services-in-jbr/",
        element: <Components.AcRepairInJBR />,
      },
      {
        path: "/ac-services-in-flamingo-villas/",
        element: <Components.AcRepairInFlamingoVillas />,
      },
      {
        path: "/ac-services-in-al-quoz/",
        element: <Components.AcRepairInAlQuoz />,
      },
      {
        path: "/ac-services-in-jebel-ali-dip/",
        element: <Components.AcRepairInJebelAliDip />,
      },
      {
        path: "/ac-services-in-al-sufouh/",
        element: <Components.AcRepairInSufouh />,
      },
      {
        path: "/ac-services-in-jumeirah-beach-residence/",
        element: <Components.AcRepairInJumeirahBeachResidence />,
      },
      {
        path: "/ac-services-in-the-villa/",
        element: <Components.AcRepairInTheVilla />,
      },
      {
        path: "/ac-services-in-jumeirah-heights/",
        element: <Components.AcRepairInJumeirahHeights />,
      },
      {
        path: "/ac-services-in-al-quoz-industrial-area/",
        element: <Components.AcRepairInQuozIndustrialArea />,
      },
      {
        path: "/ac-services-in-the-lakes/",
        element: <Components.AcRepairInTheLakes />,
      },
      {
        path: "/ac-services-in-umm-suqeim/",
        element: <Components.AcRepairInUmmSuqeim />,
      },
      {
        path: "/ac-services-in-jvt/",
        element: <Components.AcRepairInJvt />,
      },
      {
        path: "/ac-services-in-jumeirah/",
        element: <Components.AcRepairInJumeirah />,
      },
      {
        path: "/ac-services-in-jebel-ali/",
        element: <Components.AcRepairInJebelAli />,
      },
      {
        path: "/ac-services-in-emirates-hills/",
        element: <Components.AcRepairInEmiratesHills />,
      },
      {
        path: "/ac-services-jlt/",
        element: <Components.AcRepairInJLT />,
      },
      {
        path: "/ac-services-in-index-tower-difc/",
        element: <Components.AcRepairInIndexTowerDifc />,
      },
      {
        path: "/ac-services-in-al-rashidiya/",
        element: <Components.AcRepairInAlRashidiya />,
      },
      {
        path: "/ac-services-in-al-karama/",
        element: <Components.AcRepairInAlkarama />,
      },
      {
        path: "/ac-services-in-south-ridge/",
        element: <Components.AcRepairInsouthRidge />,
      },
      {
        path: "/ac-services-in-nad-al-hammar/",
        element: <Components.AcRepairInNadAlHammar />,
      },
      {
        path: "/ac-services-in-nad-al-hammar/",
        element: <Components.AcRepairInMudon />,
      },
      {
        path: "/ac-services-in-dubai-healthcare-city/",
        element: <Components.AcRepairInDubaiHealthcareCity />,
      },
      {
        path: "/ac-services-in-knowledge-village/",
        element: <Components.AcRepairInKnowledgeVillage />,
      },
      {
        path: "/ac-services-in-deira/",
        element: <Components.AcRepairInDeira />,
      },
      {
        path: "/ac-services-in-al-furjan/",
        element: <Components.AcRepairInAlFurjan />,
      },
      {
        path: "/ac-services-jumeirah-park/",
        element: <Components.AcRepairInJumeirahPark />,
      },
      {
        path: "/ac-services-in-ras-al-khor-industrial-area/",
        element: <Components.AcRepairInRasAlKhorIndustrialArea />,
      },
      {
        path: "/ac-services-in-al-warqa/",
        element: <Components.AcRepairInAlWarqa />,
      },
      {
        path: "/ac-services-in-dubailand-the-villa-point/",
        element: <Components.AcRepairInDubailandTheVillaPoint />,
      },
      {
        path: "/ac-services-in-al-wasl/",
        element: <Components.AcRepairInAlWasl />,
      },
      {
        path: "/ac-services-in-dubai-investments-park/",
        element: <Components.AcRepairInInvestmentsPark />,
      },
      {
        path: "/ac-services-in-al-aweer/",
        element: <Components.AcRepairInAlaweer />,
      },
      {
        path: "/ac-services-in-difc/",
        element: <Components.AcRepairInDifc />,
      },
      {
        path: "/ac-repair-in-al-barsha-air-condition-maintenance-in-al-barsha-air-conditioning-fix-amc-service-in-al-barsha-dubai/",
        element: <Components.AcRepairInAlBarsha />,
      },
      {
        path: "/ac-services-in-al-raffa/",
        element: <Components.AcRepairInAlRaffa />,
      },
      {
        path: "/ac-services-in-dubai-international-financial-centre/",
        element: <Components.AcRepairInDubaiInternationalFinancialCenter />,
      },
      {
        path: "/ac-services-in-bur-dubai/",
        element: <Components.AcRepairInBurDubai />,
      },
      {
        path: "/ac-services-in-silicon-oasis-dubai/",
        element: <Components.AcRepairInSiliconOasisDubai />,
      },
      {
        path: "/ac-services-in-burj-khalifa-lake/",
        element: <Components.AcRepairInBurjKhalifaLake />,
      },
      {
        path: "/ac-services-in-dubailand-mazaya-queue/",
        element: <Components.AcRepairInDubailandMazayaQueue />,
      },
      {
        path: "/ac-services-in-al-bada/",
        element: <Components.AcRepairInAlBada />,
      },
      {
        path: "/ac-services-in-mudon/",
        element: <Components.AcRepairInMudon />,
      },
      {
        path: "/ac-services-in-nad-al-sheba/",
        element: <Components.AcRepairInNadAlSheba />,
      },
      {
        path: "/ac-services-in-downtown/",
        element: <Components.AcRepairInDownTown />,
      },
      {
        path: "/ac-services-in-al-barari/",
        element: <Components.AcRepairInAlBarari />,
      },
      {
        path: "/ac-services-in-bay-square/",
        element: <Components.AcRepairInBaySquare />,
      },
      {
        path: "/ac-services-in-media-city/",
        element: <Components.AcRepairInMediaCity />,
      },
      {
        path: "/ac-services-in-umm-ramool/",
        element: <Components.AcRepairInUmmRamool />,
      },
      {
        path: "/ac-services-in-cedre-villas-silicon-oasis-dubai/",
        element: <Components.AcRepairInCedreVillasSiliconOasisDubai />,
      },
      {
        path: "/ac-services-in-motor-city/",
        element: <Components.AcRepairInMotorCity />,
      },
      {
        path: "/ac-services-in-victory-heights/",
        element: <Components.AcRepairInVictoryHeights />,
      },
      {
        path: "/ac-services-in-remraam-2/",
        element: <Components.AcRepairInRemraam2 />,
      },
      {
        path: "/ac-services-in-al-safa/",
        element: <Components.AcRepairInAlSafa />,
      },
      {
        path: "/ac-services-in-remraam/",
        element: <Components.AcRepairInRemraam />,
      },
      {
        path: "/ac-services-in-jge/",
        element: <Components.AcRepairInJqe />,
      },
      {
        path: "/ac-services-in-dubai-sport-city/",
        element: <Components.AcRepairInDubaiSportCity />,
      },
      {
        path: "/ac-services-in-dubai-marina/",
        element: <Components.AcRepairInDubaiMarina />,
      },
      {
        path: "/ac-services-in-jebel-ali-village/",
        element: <Components.AcRepairInJebelAliVillage />,
      },
      {
        path: "/ac-services-in-mankhool/",
        element: <Components.AcRepairInMankhool />,
      },
      {
        path: "/ac-services-in-the-views/",
        element: <Components.AcRepairInTheViews />,
      },
      {
        path: "/ac-services-in-palm-jumeirah/",
        element: <Components.AcRepairInPalmJumeirah />,
      },
      {
        path: "/ac-services-in-jvc/",
        element: <Components.AcRepairInJvc />,
      },
      {
        path: "/ac-repair-and-ac-service-in-al-mamzar/",
        element: <Components.AcRepairInAlMamzar />,
      },
      {
        path: "/ac-repair-and-ac-service-in-al-mizhar/",
        element: <Components.AcRepairInAlMizhar />,
      },
      {
        path: "/ac-repair-and-ac-service-in-damac-hills/",
        element: <Components.AcRepairInDamacHills />,
      },
      {
        path: "/ac-repair-and-ac-service-in-dubai-hills-estate/",
        element: <Components.AcRepairInDubaiHillsEstate />,
      },
      {
        path: "/ac-repair-and-ac-service-in-dubai-production-city/",
        element: <Components.AcRepairInProductionCity />,
      },
      {
        path: "/ac-repair-and-ac-service-in-emirates-hills/",
        element: <Components.AcRepairandServiceInEmiratesHills />,
      },
      {
        path: "/ac-repair-and-ac-service-in-town-square/",
        element: <Components.AcRepairandServiceInTownSquare />,
      },
      {
        path: "/ac-services-in-old-town-dubai/",
        element: <Components.AcRepairInOldTown />,
      },
      {
        path: "/indesit-fridge-repair-in-dubai-indesit-washing-machine-repair-in-dubai-indesit-cooker-repair-in-dubai-indesit-oven-repair-in-dubai-indesit-appliances-maintenance-in-dubai-indesit-refrigerator-fix-repa/",
        element: <Components.IndesitWashingMachine />,
      },
      {
        path: "/viking-appliances-service/",
        element: <Components.VikingAppliancesService />,
      },
      {
        path: "/samsung-fridge-repair-in-dubai-samsung-washing-machine-repair-in-dubai-samsung-cooker-repair-in-dubai-samsung-oven-repair-in-dubai-samsung-appliances-maintenance-in-dubai-samsung-refrigerator-fix-repa/",
        element: <Components.SamsungFridgeRepair />,
      },
      {
        path: "/sanyo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Components.SanyoHomeAppliance />,
      },
      {
        path: "/electrolux-home-appliances-repair/",
        element: <Components.ElectroluxHomeAppliance />,
      },
      {
        path: "/beko-fridge-repair-in-dubai-beko-washing-machine-repair-in-dubai-beko-cooker-repair-in-dubai-beko-oven-repair-in-dubai-beko-appliances-maintenance-in-dubai-beko-refrigerator-fix-repairs-service-in-dub/",
        element: <Components.BekoFridgeRepair />,
      },
      {
        path: "/aeg-fridge-repair-in-dubai-aeg-washing-machine-repair-in-dubai-aeg-cooker-repair-in-dubai-aeg-oven-repair-in-dubai-aeg-appliances-maintenance-in-dubai-aeg-refrigerator-fix-repairs-service-in-dubai-aeg/",
        element: <Components.AegFridgeRepair />,
      },
      {
        path: "/bosch-home-appliances-repair/",
        element: <Components.BoschHomeAppliance />,
      },
      {
        path: "/hisense-fridge-repair-in-dubai-hisense-washing-machine-repair-in-dubai-hisense-cooker-repair-in-dubai-hisense-oven-repair-in-dubai-hisense-appliances-maintenance-in-dubai-hisense-refrigerator-fix-repa/",
        element: <Components.HisenseFridgeRepair />,
      },
      {
        path: "/panasonic-fridge-repair-in-dubai-panasonic-washing-machine-repair-in-dubai-panasonic-cooker-repair-in-dubai-panasonic-oven-repair-in-dubai-panasonic-appliances-maintenance-in-dubai-panasonic-refrigera/",
        element: <Components.PanasonicFridgeRepair />,
      },
      {
        path: "/siemens-home-appliances-repair/",
        element: <Components.SiemensHomeAppliance />,
      },
      {
        path: "/terim-appliances-service/",
        element: <Components.TerimAppliance />,
      },
      {
        path: "/blomberg-fridge-repair-in-dubai-blomberg-washing-machine-repair-in-dubai-blomberg-cooker-repair-in-dubai-blomberg-oven-repair-in-dubai-blomberg-appliances-maintenance-in-dubai-blomberg-refrigerator-fi/",
        element: <Components.BlombergFridgeRepair />,
      },
      {
        path: "/daewoo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Components.DaewooHomeApplianceRepair />,
      },
      {
        path: "/aftron-fridge-repair-in-dubai-aftron-washing-machine-repair-in-dubai-aftron-cooker-repair-in-dubai-aftron-oven-repair-in-dubai-aftron-appliances-maintenance-in-dubai-aftron-refrigerator-fix-repairs-se/",
        element: <Components.AftronFridgeRepair />,
      },
      {
        path: "/hoover-fridge-repair-in-dubai-hoover-washing-machine-repair-in-dubai-hoover-cooker-repair-in-dubai-hoover-oven-repair-in-dubai-hoover-appliances-maintenance-in-dubai-hoover-refrigerator-fix-repairs-se/",
        element: <Components.HooverFridgeRepair />,
      },
      {
        path: "/lg-fridge-repair-in-dubai-lg-washing-machine-repair-in-dubai-lg-cooker-repair-in-dubai-lg-oven-repair-in-dubai-lg-appliances-maintenance-in-dubai-lg-refrigerator-fix-repairs-service-in-dubai-lg-dishwa/",
        element: <Components.LgFridgeRepair />,
      },
      {
        path: "/daewoo-home-appliances-repair/",
        element: <Components.DaewooHomeAppliance />,
      },
      {
        path: "/bosch-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Components.BoschHomeApplianceRepair />,
      },
      {
        path: "/foster-appliances-service/",
        element: <Components.FosterAppliance />,
      },
      {
        path: "/samsung-home-appliances-repair/",
        element: <Components.SamsungHomeApplianceRepair />,
      },
      {
        path: "/electrolux-fridge-repair-in-dubai-electrolux-washing-machine-repair-in-dubai-electrolux-cooker-repair-in-dubai-electrolux-oven-repair-in-dubai-electrolux-appliances-maintenance-in-dubai-electrolux-ref/",
        element: <Components.ElectroluxFridgeRepair />,
      },
      {
        path: "/admiral-fridge-repair-in-dubai-admiral-washing-machine-repair-in-dubai-admiral-cooker-repair-in-dubai-admiral-oven-repair-in-dubai-admiral-appliances-maintenance-in-dubai-admiral-refrigerator-fix-repa/",
        element: <Components.AdmiralFridgeRepair />,
      },
      {
        path: "/bompani-fridge-repair-in-dubai-bompani-washing-machine-repair-in-dubai-bompani-cooker-repair-in-dubai-bompani-oven-repair-in-dubai-bompani-appliances-maintenance-in-dubai-bompani-refrigerator-fix-repa/",
        element: <Components.BompaniFridgeRepair />,
      },
      {
        path: "/kenmore-appliances-service/",
        element: <Components.KenmoreAppliancesService />,
      },
      {
        path: "/sharp-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Components.SharpHomeAppliancesInstallation />,
      },
      {
        path: "/unimac-washing-machine-repair-in-dubai-unimac-dryer-repair-in-dubai-unimac-washer-dryer-repair-in-dubai-unimac-maintenance-in-dubai-unimac-laundry-service-in-dubai-unimac-dubai/",
        element: <Components.UnimacWashingMachineRepair />,
      },
      {
        path: "/haier-fridge-repair-in-dubai-haier-washing-machine-repair-in-dubai-haier-cooker-repair-in-dubai-haier-oven-repair-in-dubai-haier-appliances-maintenance-in-dubai-haier-refrigerator-fix-repairs-service/",
        element: <Components.HaierFridgeRepair />,
      },
      {
        path: "/baumatic-appliances/",
        element: <Components.BaumaticAppliances />,
      },
      {
        path: "/faber-appliances-service/",
        element: <Components.FaberAppliancesService />,
      },
      {
        path: "/marvel-fridge-repair-in-dubai-marvel-washing-machine-repair-in-dubai-marvel-cooker-repair-in-dubai-marvel-oven-repair-in-dubai-marvel-appliances-maintenance-in-dubai-marvel-refrigerator-fix-repairs-se/",
        element: <Components.MarvelFridgeRepair />,
      },
      {
        path: "/brandt-fridge-repair-in-dubai-brandt-washing-machine-repair-in-dubai-brandt-cooker-repair-in-dubai-brandt-oven-repair-in-dubai-brandt-appliances-maintenance-in-dubai-brandt-refrigerator-fix-repairs-se/",
        element: <Components.BrandtFridgeRepair />,
      },
      {
        path: "/thermador-appliances-service/",
        element: <Components.ThemadorAppliancesService />,
      },
      {
        path: "/bertazzoni-refrigerator-repair-in-dubai-bertazzoni-appliances-service-bertazzoni-fridge-repair-in-dubai-bertazzoni-washing-machine-washer-bertazzoni-dryer-repair-in-dubai-bertazzoni-dishwasher-cooker/",
        element: <Components.BertazzoniRefrigeratorRepair />,
      },
      {
        path: "/boston-refrigerator-repair-in-dubai-boston-appliances-service-boston-fridge-repair-in-dubai-boston-washing-machine-washer-boston-dryer-repair-in-dubai-boston-dishwasher-cooker/",
        element: <Components.BostonRefrigeratorRepair />,
      },
      {
        path: "/kelvinator-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Components.KelvinatorHomeAppInstallation />,
      },
      {
        path: "/zanussi-fridge-repair-in-dubai-zanussi-washing-machine-repair-in-dubai-zanussi-cooker-repair-in-dubai-zanussi-oven-repair-in-dubai-zanussi-appliances-maintenance-in-dubai-zanussi-refrigerator-fix-repa/",
        element: <Components.ZanussiFridgeRepair />,
      },
      {
        path: "/sears-home-appliances-installation-maintenance-repair-fix-service-in-dubai/",
        element: <Components.SearsHomeAppInstallation />,
      },
      {
        path: "/baumatic-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai-error/",
        element: <Components.BaumaticRefrigeratorRepair />,
      },
      {
        path: "/ge-general-electric-fridge-repair-in-dubai-ge-general-electric-washing-machine-repair-in-dubai-ge-general-electric-cooker-repair-in-dubai-ge-general-electric-oven-repair-in-dubai-ge-general-electric-a/",
        element: <Components.GeGeneralElectricFridgeRepair />,
      },
      {
        path: "/kitchenaid-refrigerator-repair-in-dubai-fridge-repair-in-dubai-kitchenaid-freezer-maintenance-in-dubai-washing-machine-repair-in-dubai-dishwasher-kitchenaid-cooker-oven-repairs-fix-service-in-dubai/",
        element: <Components.KitchenaidRefrigeratorRepair />,
      },
      {
        path: "/westpoint-fridge-repair-in-dubai-westpoint-washing-machine-repair-in-dubai-westpoint-cooker-repair-in-dubai-westpoint-oven-repair-in-dubai-westpoint-refrigerator-fix-repairs-service-in-dubai-west-poin/",
        element: <Components.WestpointFridgeRepair />,
      },
      {
        path: "/liebherr-refrigerator-repair-in-dubai-liebherr-fridge-repair-in-dubai-liebherr-freezer-maintenance-service-in-dubai/",
        element: <Components.LiebherrRefrigeratorRepair />,
      },
      {
        path: "/white-westinghouse-fridge-repair-in-dubai-white-westinghouse-washing-machine-repair-in-dubai-white-westinghouse-cooker-repair-in-dubai-white-westinghouse-oven-repair-in-dubai-white-westinghouse-applia/",
        element: <Components.WhiteWestinghouseFridgeRepair />,
      },
      {
        path: "/speed-queen-washing-machine-repair-in-dubai-speed-queen-dryer-repair-in-dubai-speed-queen-washer-dryer-repair-in-dubai-maintenance-fix-service-in-dubai/",
        element: <Components.SpeedQueenWashingMachineRepair />,
      },
      {
        path: "/franke-appliances-repair-service-in-dubai/",
        element: <Components.FrankeAppliancesRepairService />,
      },
      {
        path: "/ifb-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: <Components.IfbRefrigeratorRepair />,
      },
      {
        path: "/kitchenaid-stand-mixer-repair-service-near-me-dubai/",
        element: <Components.KitchenaidStandMixerRepairService />,
      },
      {
        path: "/kenwood-stand-mixer-repair-service-near-me-dubai/",
        element: <Components.KenwoodStandMixerRepairService />,
      },
      {
        path: "/candy-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: <Components.CandyRefrigeratorRepair />,
      },
      {
        path: "/hotpoint-refrigerator-repair-in-dubai-hotpoint-fridge-repair-in-dubai-hotpoint-washing-machine-repair-in-dubai-hotpoint-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: <Components.HotpointRefrigeratorRepair />,
      },
      {
        path: "/de-dietrich-fridge-repair-in-dubai-de-dietrich-washing-machine-repair-in-dubai-de-dietrich-cooker-repair-in-dubai-de-dietrich-oven-repair-in-dubai-de-dietrich-appliances-maintenance-in-dubai-de-dietri/",
        element: <Components.DeDietrichFridgeRepair />,
      },
      {
        path: "/smeg-mixer-repair-service-near-me-dubai/",
        element: <Components.SmegMixerRepairService />,
      },
      {
        path: "/la-germania-cooking-range-repair-in-dubai-la-germania-oven-repair-in-dubai-la-germania-cooker-repair-in-dubai-la-germania-cooker-oven-maintenance-service-in-dubai-refrigerator-repair-in-dubai-fridge-r/",
        element: <Components.LaGermaniaCookingRangeRepair />,
      },
      {
        path: "/delonghi-coffee-machine-repair/",
        element: <Components.DelonghiCoffeeMachineRepair />,
      },
      {
        path: "/appliances-services-in-al-mamzar/",
        element: <Components.AppliancesServiceInAlMamzar />,
      },
      {
        path: "/appliances-services-in-al-mizhar/",
        element: <Components.AppliancesServiceInAlMizhar />,
      },
      {
        path: "/appliances-services-in-damac-hills/",
        element: <Components.AppliancesServiceInDamacHills />,
      },
      {
        path: "/appliances-services-in-dubai-hills-estate/",
        element: <Components.AppliancesServiceInDubaiHillsEstate />,
      },
      {
        path: "/appliances-services-in-dubai-production-city/",
        element: <Components.AppliancesServiceInDubaiProductionCity />,
      },
      {
        path: "/appliances-services-in-town-square/",
        element: <Components.AppliancesServiceInTownSquare />,
      },
      {
        path: "/appliances-services-in-business-bay/",
        element: <Components.AppliancesServiceInBusinessBay />,
      },
      {
        path: "/appliances-services-in-al-ghadeer-community/",
        element: <Components.AppliancesServiceInAlGhadeerCommunity />,
      },
      {
        path: "/appliances-services-in-the-gardens/",
        element: <Components.AppliancesServiceInTheGardens />,
      },
      {
        path: "/appliances-services-in-the-limestone-house-difc/",
        element: <Components.AppliancesServiceInLimestoneHouseDifc />,
      },
      {
        path: "/appliances-services-in-international-media-and-production-zone/",
        element: <Components.AppliancesServiceInInternationalMediaAndProductionZone />,
      },
      {
        path: "/appliances-services-in-jlt/",
        element: <Components.AppliancesServicesInJlt />,
      },
      {
        path: "/appliances-services-in-the-views/",
        element: <Components.AppliancesServicesInTheViews />,
      },
      {
        path: "/appliances-services-in-al-safa/",
        element: <Components.AppliancesServicesInAlSafa />,
      },
      {
        path: "/appliances-services-in-jumeirah/",
        element: <Components.AppliancesServicesInJumeirah />,
      },
      {
        path: "/appliances-services-jumeirah/",
        element: <Components.AppliancesServicesJumeirah />,
      },
      {
        path: "/appliances-services-in-discovery-gardens/",
        element: <Components.AppliancesServicesInDiscoveryGardens />,
      },
      {
        path: "/appliances-services-in-the-lakes/",
        element: <Components.AppliancesServicesInTheLakes />,
      },
      {
        path: "/appliances-services-in-jumeirah-golf-estates/",
        element: <Components.AppliancesServicesInJumeirahGolfEstates />,
      },
      {
        path: "/home-appliances-installation-maintenance-repair-fix-service-centre-in-jlt-dubai/",
        element: <Components.HomeAppliancesServiceCentreInJltDubai />,
      },
      {
        path: "/appliances-services-in-emirates-hills/",
        element: <Components.AppliancesServicesInEmiratesHills />,
      },
      {
        path: "/appliances-services-in-silicon-oasis-dubai/",
        element: <Components.AppliancesServicesInSiliconOasisDubai />,
      },
      {
        path: "/appliances-services-in-victory-heights/",
        element: <Components.AppliancesServicesInVictoryHeights />,
      },
      {
        path: "/appliances-services-in-remraam/",
        element: <Components.AppliancesServicesInRemraam />,
      },
      {
        path: "/appliances-services-in-al-jafiliya/",
        element: <Components.AppliancesServicesInAlJafiliya />,
      },
      {
        path: "/appliances-services-in-al-furjan/",
        element: <Components.AppliancesServicesInAlFurjan />,
      },
      {
        path: "/appliances-services-in-dubai-investments-park/",
        element: <Components.AppliancesServicesInDubaiInvestmentsPark />,
      },
      {
        path: "/appliances-services-in-tecom/",
        element: <Components.AppliancesServicesInTecom />,
      },
      {
        path: "/appliances-services-in-al-barsha-south/",
        element: <Components.AppliancesServicesInAlBarshaSouth />,
      },
      {
        path: "/appliances-services-in-jumeirah-village/",
        element: <Components.AppliancesServicesInJumeirahVillage />,
      },
      {
        path: "/appliances-services-in-al-badaa/",
        element: <Components.AppliancesServicesInAlBadaa />,
      },
      {
        path: "/appliances-services-in-al-satwa/",
        element: <Components.AppliancesServicesInAlSatwa />,
      },
      {
        path: "/appliances-services-in-dubai-healthcare-city/",
        element: <Components.AppliancesServicesInDubaiHealthcareCity />,
      },
      {
        path: "/appliances-services-in-jumeirah-islands/",
        element: <Components.AppliancesServicesInJumeirahIslands />,
      },
      {
        path: "/appliances-services-in-jebel-ali-village/",
        element: <Components.AppliancesServicesInJebelAliVillage />,
      },
      {
        path: "/appliances-services-in-palm-jumeirah/",
        element: <Components.AppliancesServicesInPalmJumeirah />,
      },
      {
        path: "/appliances-services-in-dubailand-mazaya/",
        element: <Components.AppliancesServicesInDubailandMazaya />,
      },
      {
        path: "/appliances-services-in-falcon-city-dubai/",
        element: <Components.AppliancesServicesInFalconCityDubai />,
      },
      {
        path: "/appliances-services-in-arabian-ranches/",
        element: <Components.ApplianceServiceInArabianRanches />,
      },
      {
        path: "/washing-machine-repair-in-al-quoz-refrigerator-repair-in-al-quoz-fridge-repair-in-al-quoz-dishwasher-oven-cooker-stove-appliance-maintenance-fix-service-in-al-quoz-dubai/",
        element: <Components.WashingMachineRepairInAlQuoz />,
      },
      {
        path: "/washing-machine-repair-town-dubai-fridge-repair-town-dubai-refrigerator-repairing-town-dubai-cooker-stove-oven-cooking-range-repairs-fix-service-centre-town-dubai-dishwasher-installation-fixing-mainte/",
        element: <Components.WashingMachineRepairTownDubai />,
      },
      {
        path: "/washing-machine-repair-business-bay-fridge-repair-business-bay-refrigerator-repairing-business-bay-cooker-stove-oven-cooking-range-repairs-fix-service-centre-business-bay-dishwasher-installation-fixin/",
        element: <Components.WashingMachineRepairBusinessBay />,
      },
      {
        path: "/washing-machine-repair-in-dubai-marina-fridge-repair-in-dubai-marina-refrigerator-repairing-in-dubai-marina-cooker-stove-oven-cooking-range-repairs-fix-service-centre-in-dubai-marina-dishwasher-instal/",
        element: <Components.WashingMachineRepairInDubaiMarina />,
      },
      {
        path: "/fridge-repair-in-dubai-marina-washing-machine-repair-in-dubai-marina-dishwasher-repair-in-dubai-marina-refrigerator-repair-maintenance-in-dubai-marina-cooker-oven-repair-fix-service-in-cooking-range-e/",
        element: <Components.FridgeRepairInDubaiMarina />,
      },
      {
        path: "/washing-machine-repair-al-barsha-dubai-fridge-repair-al-barsha-dubai-refrigerator-repairing-al-barsha-dubai-cooker-stove-oven-cooking-range-repairs-fix-service-centre-al-barsha-dubai-dishwasher-inst-2/",
        element: <Components.WashingMachineRepairAlBarsha />,
      },
      {
        path: "/washing-machine-repair-palm-jumeirah-fridge-repair-palm-jumeirah-refrigerator-repairing-palm-jumeirah-cooker-stove-oven-cooking-range-repairs-fix-service-centre-palm-jumeirah-dishwasher-installation-f/",
        element: <Components.WashingMachineRepairPalmJumeirah />,
      },
      {
        path: "/fridge-repair-dubai-marina/",
        element: <Components.FridgeRepairDubaiMarina />,
      },
      {
        path: "/appliances-services-in-the-ritz-carlton-difc/",
        element: <Components.ApplianceServiceInTheRitzCarltonDifc />,
      },
      {
        path: "/appliances-services-in-oud-metha/",
        element: <Components.ApplianceServiceInOudMetha />,
      },
      {
        path: "/appliances-services-in-umm-al-sheif/",
        element: <Components.ApplianceServiceInUmmAlSheif />,
      },
      {
        path: "/appliances-services-in-umm-suqeim/",
        element: <Components.ApplianceServiceInUmmSuqeim />,
      },
      {
        path: "/appliances-services-in-jebel-ali-industrial-area/",
        element: <Components.ApplianceServiceInJebelAliIndustrialArea />,
      },
      {
        path: "/home-appliances-installation-maintenance-repair-fix-service-centre-in-jumeirah-dubai/",
        element: <Components.ApplianceServiceInJumeriahDubai />,
      },
      {
        path: "/appliances-services-in-jumeirah-heights/",
        element: <Components.ApplianceServiceInJumeriahHeights />,
      },
      {
        path: "/appliances-services-in-dubai-silicon-oasis/",
        element: <Components.ApplianceServiceInDubaiSiliconOasis />,
      },
      {
        path: "/appliances-services-in-the-villa/",
        element: <Components.ApplianceServiceInTheVilla />,
      },
      {
        path: "/appliances-services-in-al-waha-community/",
        element: <Components.ApplianceServiceInAlWahaCommunity />,
      },
      {
        path: "/appliances-services-in-bur-dubai/",
        element: <Components.ApplianceServiceInBurDubai />,
      },
      {
        path: "/appliances-services-in-jumeirah-village-triangle/",
        element: <Components.ApplianceServiceInJumeirahVillageTriangle />,
      },
      {
        path: "/appliances-services-in-mankhool/",
        element: <Components.ApplianceServiceInMankhool />,
      },
      {
        path: "/appliances-services-in-the-springs/",
        element: <Components.ApplianceServiceInTheSprings />,
      },
      {
        path: "/appliances-services-in-al-manara/",
        element: <Components.ApplianceServiceInAlManara />,
      },
      {
        path: "/appliances-services-in-al-barari/",
        element: <Components.ApplianceServiceInAlbarari />,
      },
      {
        path: "/appliances-services-in-jvt/",
        element: <Components.ApplianceServiceInJvt />,
      },
      {
        path: "/appliances-services-in-nad-al-sheba/",
        element: <Components.ApplianceServiceInNadAlSheba />,
      },
      {
        path: "/appliances-services-in-dubai-marina/",
        element: <Components.ApplianceServiceInDubaiMarina />,
      },
      {
        path: "/appliances-services-in-al-barsha/",
        element: <Components.ApplianceServiceInAlBarsha />,
      },
      {
        path: "/appliances-services-in-jumeirah-village-circle/",
        element: <Components.ApplianceServiceInJumeirahVillageCircle />,
      },
      {
        path: "/appliances-services-in-dubai-motor-city/",
        element: <Components.ApplianceServiceInDubaiMotorCity />,
      },
      {
        path: "/appliances-services-in-al-wasl/",
        element: <Components.ApplianceServiceInAlWasl />,
      },
      {
        path: "/appliances-services-in-jebel-ali-dip/",
        element: <Components.ApplianceServiceInJebelAliDip />,
      },
      {
        path: "/appliances-services-in-academy-city/",
        element: <Components.ApplianceServiceInAcademyCity />,
      },
      {
        path: "/appliances-services-in-dubailand-the-villa/",
        element: <Components.ApplianceServiceInDubailandTheVilla />,
      },
      {
        path: "/appliances-services-in-layan-community/",
        element: <Components.ApplianceServiceInLayanComminity />,
      },
      {
        path: "/appliances-services-in-jvc/",
        element: <Components.ApplianceServiceInJvc />,
      },
      {
        path: "/appliances-services-in-deira/",
        element: <Components.ApplianceServiceInDeira />,
      },
      {
        path: "/appliances-services-in-jumeirah-beach-residence/",
        element: <Components.ApplianceServiceInJumeirahBeachResidence />,
      },
      {
        path: "/appliances-services-in-jge/",
        element: <Components.ApplianceServiceInJge />,
      },
      {
        path: "/appliances-services-in-hudaiba/",
        element: <Components.ApplianceServiceInHudaiba />,
      },
      {
        path: "/appliances-services-in-jebel-ali-free-zone/",
        element: <Components.ApplianceServiceInJebelAliFreeZone />,
      },
      {
        path: "/appliances-services-in-dubai-sports-city/",
        element: <Components.ApplianceServiceInDubaiSportCity />,
      },
      {
        path: "/appliances-services-in-dubai-internet-city/",
        element: <Components.ApplianceServiceInDubaiInternetCity />,
      },
      {
        path: "/appliances-washing-machine-fridge-dishwasher-service-jbr-dubai/",
        element: <Components.ApplianceServiceInJbrDubai />,
      },
      {
        path: "/appliances-services-in-mudon/",
        element: <Components.ApplianceServiceInMudon />,
      },
      {
        path: "/appliances-services-in-jebel-ali/",
        element: <Components.ApplianceServiceInJebelAli />,
      },
      {
        path: "/appliances-services-in-dip/",
        element: <Components.ApplianceServiceInDip />,
      },
      {
        path: "/appliances-services-in-index-tower-difc/",
        element: <Components.ApplianceServiceInIndexTowerDifc />,
      },
      {
        path: "/appliances-services-in-impzy/",
        element: <Components.ApplianceServiceInImpzy />,
      },
      {
        path: "/appliances-services-in-jbr/",
        element: <Components.ApplianceServiceInJbr />,
      },
      {
        path: "/appliances-services-in-dubailand-mazaya-queue-point/",
        element: <Components.ApplianceServiceInDubailandMazayaQueuePoint />,
      },
      {
        path: "/appliances-services-in-flamingo-villas-dubai/",
        element: <Components.ApplianceServiceInFlamingoVillasDubai />,
      },
      {
        path: "/appliances-services-in-cedre-villas-silicon-oasis-dubai/",
        element: <Components.ApplianceServiceInCedreVillasSiliconOasisDubai />,
      },
      {
        path: "/appliances-services-in-al-karama/",
        element: <Components.ApplianceServiceInAlKaram />,
      },
      {
        path: "/appliances-services-in-the-greens/",
        element: <Components.ApplianceServiceInTheGreens />,
      },
      {
        path: "/appliances-services-in-arabian-ranches-2/",
        element: <Components.ApplianceServiceInArabianRanches2 />,
      },
      {
        path: "/appliances-services-in-jumeirah-lake-towers/",
        element: <Components.ApplianceServiceInJumeirahLakeTowers />,
      },
      {
        path: "/appliances-services-in-dubai-media-city/",
        element: <Components.ApplianceServiceInDubaiMediaCity />,
      },
      {
        path: "/appliances-services-in-the-meadows/",
        element: <Components.ApplianceServiceInMeadows />,
      },
      {
        path: "/appliances-services-in-dubai-studio-city/",
        element: <Components.ApplianceServiceInDubaiStudioCity />,
      },
      {
        path: "/appliances-services-in-al-sufouh/",
        element: <Components.AppliancesServicesInAlSufouh />,
      },
      {
        path: "/appliances-services-in-al-bada/",
        element: <Components.AppliancesServicesInAlBada />,
      },
      {
        path: "/appliances-services-in-al-raffa/",
        element: <Components.ApplianceServiceInAlRaffa />,
      },
      {
        path: "/appliances-services-in-difc/",
        element: <Components.ApplianceServiceInDifc />,
      },
      {
        path: "/appliances-services-in-jumeirah-park/",
        element: <Components.ApplianceServiceInJumeirahPark />,
      },
      {
        path: "/ac-services-in-jebel-ali-industrial-area/",
        element: <Components.AcRepairInJebelAliIndustrialArea />,
      },
      {
        path: "/career/",
        element: <Components.Career />,
      },
    ],
  }
], {
  //  basename: "/fajservicess"
});
