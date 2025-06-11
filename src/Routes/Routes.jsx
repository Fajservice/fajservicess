import { createBrowserRouter, Navigate } from "react-router-dom";
import * as Components from "./allComponents.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Components.Main />,
    children: [
      {
        path: "/",
        element: Components.withSuspense(Components.Home)(),
      },
      {
        path: "/about-us/",
        element: Components.withSuspense(Components.AboutPage)(),
      },
      {
        path: "/ac-tonnage-calculator/",
        element: Components.withSuspense(Components.ContactPage)(),
      },
      {
        path: "/orphan/",
        element: Components.withSuspense(Components.Orphan)(),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
      {
        path: "/services/",
        element: Components.withSuspense(Components.ServicesPage)(),
      },
      {
        path: "/faj-price-list/",
        element: Components.withSuspense(Components.FajPriceList)(),
      },
      {
        path: "/ac-service-in-dubai/",
        element: Components.withSuspense(Components.AcServiceInDubai)(),
      },
      {
        path: "/ac-maintenance-dubai/",
        element: Components.withSuspense(Components.AcMaintenanceDubai)(),
      },
      {
        path: "/ac-annual-maintenance-contract/",
        element: Components.withSuspense(Components.AcAnnualMaintenanceContract)(),
      },
      {
        path: "/electrical-plumbing-service/",
        element: Components.withSuspense(Components.ElectricalPlumbingService)(),
      },
      {
        path: "/ac-repair-dubai/",
        element: Components.withSuspense(Components.AcRepairDubai)(),
      },
      {
        path: "/dubai/near-me/",
        element: Components.withSuspense(Components.NearMe)(),
      },
      {
        path: "/dubai/ac-repair-near-me/",
        element: Components.withSuspense(Components.AcRepairNearMe)(),
      },
      {
        path: "/dubai/refrigerator-repair-near-me/",
        element: Components.withSuspense(Components.RefrigeratorRepairNearMe)(),
      },
      {
        path: "/dubai/washing-machine-repair-near-me/",
        element: Components.withSuspense(Components.WashingMachineRepairNearMe)(),
      },
      {
        path: "/appliances-repair-service/",
        element: Components.withSuspense(Components.FreestandingHomeAppliancesRepairService)(),
      },
      {
        path: "/coffee-machine-service-center-in-dubai/",
        element: Components.withSuspense(Components.CoffeeMachineServiceCenterInDubai)(),
      },
      {
        path: "/coffee-machine-repairs/",
        element: Components.withSuspense(Components.CommercialCoffeeMachineRepair)(),
      },
      {
        path: "/hob-repair-service/",
        element: Components.withSuspense(Components.HobRepair)(),
      },
      {
        path: "/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/",
        element: Components.withSuspense(Components.BBQService)(),
      },
      {
        path: "/cigar-humidor-repair/",
        element: Components.withSuspense(Components.CigarcabnitService)(),
      },
      {
        path: "/our-portfolio/",
        element: Components.withSuspense(Components.PortfolioPage)(),
      },
      {
        path: "/oven-repair-service/",
        element: Components.withSuspense(Components.OvenRepairService)(),
      },
      {
        path: "/commercial-cooking-appliances-repair-service/",
        element: Components.withSuspense(Components.CookingEquipmentService)(),
      },
      {
        path: "/meat-grinder-repair/",
        element: Components.withSuspense(Components.MeatGrinderRepair)(),
      },
      {
        path: "/commercial-dishwasher-repair/",
        element: Components.withSuspense(Components.CommercialDishwasherServices)(),
      },
      {
        path: "/commercial-washing-machine-repair/",
        element: Components.withSuspense(Components.CommercialWashingMachineRepair)(),
      },
      {
        path: "/commercial-laundry-equipment-service/",
        element: Components.withSuspense(Components.CommercialLaundryEquipmentService)(),
      },
      {
        path: "/commercial-kitchen-equipment-amc/",
        element: Components.withSuspense(Components.KitchenEquipmentAMC)(),
      },
      {
        path: "/commercial-kitchen-equipment-maintenance-services/",
        element: Components.withSuspense(Components.KitchenEquipmentRepair)(),
      },
      {
        path: "/ice-maker-repair/",
        element: Components.withSuspense(Components.IceMakerRepair)(),
      },
      {
        path: "/commercial-refrigeration-maintenance-contact-services/",
        element: Components.withSuspense(Components.RefrigerationAMCServices)(),
      },
      {
        path: "/commercial-refrigeration-maintenance/",
        element: Components.withSuspense(Components.CommercialRefrigerationMaintence)(),
      },
      {
        path: "/gas-cooker-repair-service/",
        element: Components.withSuspense(Components.GasRangeRepairService)(),
      },
      {
        path: "/dishwasher-repair-service/",
        element: Components.withSuspense(Components.DishwasherRepair)(),
      },
      {
        path: "/oven-repair/",
        element: Components.withSuspense(Components.OvenRepair)(),
      },
      {
        path: "/robot-vacuum-cleaner-repair/",
        element: Components.withSuspense(Components.VacuumCleanerRepair)(),
      },
      {
        path: "/small-home-appliances-service-center-in-dubai/",
        element: Components.withSuspense(Components.SmallAppliancesRepair)(),
      },
      {
        path: "/built-in-appliances-repair-service/",
        element: Components.withSuspense(Components.IntegratedApplianceRepair)(),
      },
      {
        path: "/appliances-amc-service/",
        element: Components.withSuspense(Components.AppliancesMaintenanceContract)(),
      },
      {
        path: "/washing-machine-repair-service-dubai/",
        element: Components.withSuspense(Components.WashingMachineRepairServiceDubai)(),
      },
      {
        path: "/refrigerator-repair-service/",
        element: Components.withSuspense(Components.RefrigeratorRepairInDubai)(),
      },
      {
        path: "/coleman-ac-repair-in-dubai-coleman-ac-maintenance-in-dubai-coleman-ac-fix-in-dubai-coleman-ac-service-in-dubai-coleman-air-condition-repair-in-dubai-coleman-air-condition-maintenance-in-dubai-coleman/",
        element: Components.withSuspense(Components.ColemenAcRepair)(),
      },
      {
        path: "/supra-ac-repair-in-dubai-supra-ac-maintenance-in-dubai-supra-ac-fix-in-dubai-supra-ac-service-in-dubai-supra-air-condition-repair-in-dubai-supra-air-condition-maintenance-in-dubai-supra-air-condition/",
        element: Components.withSuspense(Components.SupraAcRepair)(),
      },
      {
        path: "/midea-ac-installation-maintenance-repair-fix-service-in-dubai/",
        element: Components.withSuspense(Components.MideaAcRepair)(),
      },
      {
        path: "/fujitsu-ac-repair-in-dubai-fujitsu-ac-maintenance-in-dubai-fujitsu-ac-fix-in-dubai-fujitsu-ac-service-in-dubai-fujitsu-air-condition-repair-in-dubai-fujitsu-air-condition-maintenance-in-dubai-fujitsu/",
        element: Components.withSuspense(Components.FujitsuAcRepair)(),
      },
      {
        path: "/daikin-ac-repair-in-dubai-daikin-ac-maintenance-in-dubai-daikin-ac-fix-in-dubai-daikin-ac-service-in-dubai-daikin-air-condition-repair-in-dubai-daikin-air-condition-maintenance-in-dubai-daikin-air-con/",
        element: Components.withSuspense(Components.DaikinAcRepair)(),
      },
      {
        path: "/daewoo-ac-repair-in-dubai-daewoo-ac-maintenance-in-dubai-daewoo-ac-fix-in-dubai-daewoo-ac-service-in-dubai-daewoo-air-condition-repair-in-dubai-daewoo-air-condition-maintenance-in-dubai-daewoo-air-con/",
        element: Components.withSuspense(Components.DaewooAcRepair)(),
      },
      {
        path: "/skm-ac-repair-in-dubai-skm-ac-maintenance-in-dubai-skm-ac-fix-in-dubai-skm-ac-service-in-dubai-skm-air-condition-repair-in-dubai-skm-air-condition-maintenance-in-dubai-skm-air-condition-maintenance-in/",
        element: Components.withSuspense(Components.SkmAcRepair)(),
      },
      {
        path: "/cooline-ac-repair-in-dubai-cooline-ac-maintenance-in-dubai-cooline-ac-fix-in-dubai-cooline-ac-service-in-dubai-cooline-air-condition-repair-in-dubai-cooline-air-condition-maintenance-in-dubai-cooline/",
        element: Components.withSuspense(Components.CoolineAcRepair)(),
      },
      {
        path: "/westpoint-ac-repair-in-dubai-westpoint-ac-maintenance-in-dubai-westpoint-ac-fix-in-dubai-westpoint-ac-service-in-dubai-west-point-air-condition-repair-in-dubai-west-point-air-condition-maintenance-in/",
        element: Components.withSuspense(Components.WestpointAcRepair)(),
      },
      {
        path: "/york-ac-repair-in-dubai-york-ac-maintenance-in-dubai-york-ac-fix-in-dubai-york-ac-service-in-dubai-york-air-condition-repair-in-dubai-york-air-condition-maintenance-in-dubai-york-air-condition-mainten/",
        element: Components.withSuspense(Components.YorkAcRepair)(),
      },
      {
        path: "/blue-star-ac-repair-in-dubai-blue-star-ac-maintenance-in-dubai-blue-star-ac-fix-in-dubai-blue-star-ac-service-in-dubai-blue-star-air-condition-repair-in-dubai-blue-star-air-condition-maintenance-in-du/",
        element: Components.withSuspense(Components.BlueStarAcRepair)(),
      },
      {
        path: "/rheem-ac-maintenance-in-dubai/",
        element: Components.withSuspense(Components.RheemAcRepair)(),
      },
      {
        path: "/ruud-ac-repair-in-dubai-ruud-ac-maintenance-in-dubai-ruud-ac-fix-in-dubai-ruud-ac-service-in-dubai-ruud-air-condition-repair-in-dubai-ruud-air-condition-maintenance-in-dubai-ruud-air-condition-mainten/",
        element: Components.withSuspense(Components.RuudAcRepair)(),
      },
      {
        path: "/trane-ac-repair-in-dubai-trane-ac-maintenance-in-dubai-trane-ac-fix-in-dubai-trane-ac-service-in-dubai-trane-air-condition-repair-in-dubai-trane-air-condition-maintenance-in-dubai-trane-air-condition/",
        element: Components.withSuspense(Components.TraneAcRepair)(),
      },
      {
        path: "/super-general-ac-repair-in-dubai-super-general-ac-maintenance-in-dubai-super-general-ac-fix-in-dubai-super-general-ac-service-in-dubai-super-general-air-condition-repair-in-dubai-super-general-air-con/",
        element: Components.withSuspense(Components.SuperGeneralAcRepair)(),
      },
      {
        path: "/toshiba-ac-repair-in-dubai-toshiba-ac-maintenance-in-dubai-toshiba-ac-fix-in-dubai-toshiba-ac-service-in-dubai-toshiba-air-condition-repair-in-dubai-toshiba-air-condition-maintenance-in-dubai-toshiba/",
        element: Components.withSuspense(Components.ToshibaAcRepair)(),
      },
      {
        path: "/lg-ac-repair-in-dubai/",
        element: Components.withSuspense(Components.LgAcRepair)(),
      },
      {
        path: "/aftron-ac-repair-maintenance-service-in-dubai-2/",
        element: Components.withSuspense(Components.AftronAcRepair)(),
      },
      {
        path: "/frigidaire-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: Components.withSuspense(Components.FrigidaireRefrigeratorRepair)(),
      },
      {
        path: "/panasonic-ac-repair-in-dubai-panasonic-ac-maintenance-in-dubai-panasonic-ac-fix-in-dubai-panasonic-ac-service-in-dubai-panasonic-air-condition-repair-in-dubai-panasonic-air-condition-maintenance-in-du/",
        element: Components.withSuspense(Components.PanasonicAcRepair)(),
      },
      {
        path: "/whirlpool-air-condition-repair-in-dubai-ac-maintenance-in-dubai-air-conditioning-fix-repairs-service-in-dubai/",
        element: Components.withSuspense(Components.WhirlpoolAcRepair)(),
      },
      {
        path: "/samsung-ac-repair-in-dubai/",
        element: Components.withSuspense(Components.SamsungAcRepair)(),
      },
      {
        path: "/mcquay-ac-repair-in-dubai-mcquay-ac-maintenance-in-dubai-mcquay-ac-fix-in-dubai-mcquay-ac-service-in-dubai-mcquay-air-condition-repair-in-dubai-mcquay-air-condition-maintenance-in-dubai-mcquay-air-con/",
        element: Components.withSuspense(Components.McquayAcRepair)(),
      },
      {
        path: "/nikai-ac-repair-in-dubai-nikai-ac-maintenance-in-dubai-nikai-ac-fix-in-dubai-nikai-ac-service-in-dubai-nikai-air-condition-repair-in-dubai-nikai-air-condition-maintenance-in-dubai-nikai-air-condition/",
        element: Components.withSuspense(Components.NikaiAcRepair)(),
      },
      {
        path: "/crafft-ac-repair-in-dubai-crafft-ac-maintenance-in-dubai-crafft-ac-fix-in-dubai-crafft-ac-service-in-dubai-crafft-air-condition-repair-in-dubai-crafft-air-condition-maintenance-in-dubai-crafft-air-con/",
        element: Components.withSuspense(Components.CrafftAcRepair)(),
      },
      {
        path: "/lennox-ac-repair-in-dubai-lennox-ac-maintenance-in-dubai-lennox-ac-fix-in-dubai-lennox-ac-service-in-dubai-lennox-air-condition-repair-in-dubai-lennox-air-condition-maintenance-in-dubai-lennox-air-con/",
        element: Components.withSuspense(Components.LennoxAcRepair)(),
      },
      {
        path: "/hitachi-ac-repair-in-dubai-hitachi-ac-maintenance-in-dubai-hitachi-ac-fix-in-dubai-hitachi-ac-service-in-dubai-hitachi-air-condition-repair-in-dubai-hitachi-air-condition-maintenance-in-dubai-hitachi/",
        element: Components.withSuspense(Components.HitachiAcRepair)(),
      },
      {
        path: "/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/",
        element: Components.withSuspense(Components.OGeneralAcRepair)(),
      },
      {
        path: "/bryant-ac-repair-in-dubai-bryant-ac-maintenance-in-dubai-bryant-ac-fix-in-dubai-bryant-ac-service-in-dubai-bryant-air-condition-repair-in-dubai-bryant-air-condition-maintenance-in-dubai-bryant-air-con/",
        element: Components.withSuspense(Components.BryantAcRepair)()
      },
      {
        path: "/white-westinghouse-ac-repair-in-dubai-white-westinghouse-ac-maintenance-in-dubai-white-westinghouse-ac-fix-in-dubai-white-westinghouse-ac-service-in-dubai-white-westinghouse-air-condition-repair-in-du/",
        element: Components.withSuspense(Components.WhiteWestingHouseAcRepair)()
      },
      {
        path: "/mitsubishi-ac-repair-in-dubai/",
        element: Components.withSuspense(Components.MitsubishiAcRepair)()
      },
      {
        path: "/sanyo-ac-repair-in-dubai-sanyo-ac-maintenance-in-dubai-sanyo-ac-fix-in-dubai-sanyo-ac-service-in-dubai-sanyo-air-condition-repair-in-dubai-sanyo-air-condition-maintenance-in-dubai-sanyo-air-condition/",
        element: Components.withSuspense(Components.SanyoAcRepair)()
      },
      {
        path: "/daikool-ac-repair-in-dubai-daikool-ac-maintenance-in-dubai-daikool-ac-fix-in-dubai-daikool-ac-service-in-dubai-daikool-air-condition-repair-in-dubai-daikool-air-condition-maintenance-in-dubai-daikool/",
        element: Components.withSuspense(Components.DaikoolAcRepair)()
      },
      {
        path: "/goodman-ac-repair-in-dubai-goodman-ac-maintenance-in-dubai-goodman-ac-fix-in-dubai-goodman-ac-service-in-dubai-goodman-air-condition-repair-in-dubai-goodman-air-condition-maintenance-in-dubai-goodman/",
        element: Components.withSuspense(Components.GoodmanAcRepair)()
      },
      {
        path: "/sub-zero-ac-installation-maintenance-repair-fix-service-in-dubai/",
        element: Components.withSuspense(Components.SubZeroAcRepair)()
      },
      {
        path: "/gree-ac-repair-in-dubai/",
        element: Components.withSuspense(Components.GreeAcRepair)()
      },
      {
        path: "/haier-ac-repair-in-dubai-haier-ac-maintenance-in-dubai-haier-ac-fix-in-dubai-haier-ac-service-in-dubai-haier-air-condition-repair-in-dubai-haier-air-condition-maintenance-in-dubai-haier-air-condition/",
        element: Components.withSuspense(Components.HaierAcRepair)()
      },
      {
        path: "/tcl-ac-repair-in-dubai/",
        element: Components.withSuspense(Components.TCLAcRepair)()
      },
      {
        path: "/indesit-fridge-repair-in-dubai-indesit-washing-machine-repair-in-dubai-indesit-cooker-repair-in-dubai-indesit-oven-repair-in-dubai-indesit-appliances-maintenance-in-dubai-indesit-refrigerator-fix-repa/",
        element: Components.withSuspense(Components.IndesitWashingMachine)()
      },
      {
        path: "/elica-appliances-service/",
        element: Components.withSuspense(Components.ElicaAppliancesService)()
      },
      {
        path: "/fagor-fridge-repair-in-dubai-fagor-washing-machine-repair-in-dubai-fagor-cooker-repair-in-dubai-fagor-oven-repair-in-dubai-fagor-appliances-maintenance-in-dubai-fagor-refrigerator-fix-repairs-service/",
        element: Components.withSuspense(Components.FagorFridgeRepair)()
      },
      {
        path: "/neff-fridge-repair-in-dubai-neff-washing-machine-repair-in-dubai-neff-cooker-repair-in-dubai-neff-oven-repair-in-dubai-neff-appliances-maintenance-in-dubai-neff-refrigerator-fix-repairs-service-in-dub/",
        element: Components.withSuspense(Components.NeffFridgeRepair)()
      },
      {
        path: "/ariston-fridge-repair-in-dubai-ariston-washing-machine-repair-in-dubai-ariston-cooker-repair-in-dubai-ariston-oven-repair-in-dubai-ariston-appliances-maintenance-in-dubai-ariston-refrigerator-fix-repa/",
        element: Components.withSuspense(Components.AristonFrideRepair)()
      },
      {
        path: "/fisher-and-paykel-fridge-repair-in-dubai-fisher-and-paykel-washing-machine-repair-in-dubai-fisher-and-paykel-cooker-repair-in-dubai-fisher-and-paykel-oven-repair-in-dubai-fisher-and-paykel-appliances/",
        element: Components.withSuspense(Components.FisherPaykelFridgeRepair)()
      },
      {
        path: "/siemens-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: Components.withSuspense(Components.SiemensHomeAppUnstallation)()
      },
      {
        path: "/maytag-fridge-repair-in-dubai-maytag-washing-machine-repair-in-dubai-maytag-cooker-repair-in-dubai-maytag-oven-repair-in-dubai-maytag-appliances-maintenance-in-dubai-maytag-refrigerator-fix-repairs-se/",
        element: Components.withSuspense(Components.MaytagFridgeRepair)()
      },
      {
        path: "/smeg-fridge-repair-in-dubai-smeg-washing-machine-repair-in-dubai-smeg-cooker-repair-in-dubai-smeg-oven-repair-in-dubai-smeg-appliances-maintenance-in-dubai-smeg-refrigerator-fix-repairs-service-in-dub/",
        element: Components.withSuspense(Components.SmegFridgeRepair)()
      },
      {
        path: "/sub-zero-fridge-repair-in-dubai-sub-zero-washing-machine-repair-in-dubai-sub-zero-cooker-repair-in-dubai-sub-zero-oven-repair-in-dubai-sub-zero-appliances-maintenance-in-dubai-sub-zero-refrigerator-fi/",
        element: Components.withSuspense(Components.SubZeroFridgeRepair)()
      },
      {
        path: "/hitachi-fridge-repair-in-dubai-hitachi-washing-machine-repair-in-dubai-hitachi-cooker-repair-in-dubai-hitachi-oven-repair-in-dubai-hitachi-appliances-maintenance-in-dubai-hitachi-refrigerator-fix-repa/",
        element: Components.withSuspense(Components.HitachiFridgeRepair)()
      },
      {
        path: "/gaggenau-fridge-repair-in-dubai-gaggenau-washing-machine-repair-in-dubai-gaggenau-cooker-repair-in-dubai-gaggenau-oven-repair-in-dubai-gaggenau-appliances-maintenance-in-dubai-gaggenau-refrigerator-fi/",
        element: Components.withSuspense(Components.GaggenauFridgeRepair)()
      },
      {
        path: "/whirlpool-fridge-repair-in-dubai-whirlpool-washing-machine-repair-in-dubai-whirlpool-cooker-repair-in-dubai-whirlpool-oven-repair-in-dubai-whirlpool-appliances-maintenance-in-dubai-whirlpool-refrigera/",
        element: Components.withSuspense(Components.WhirlpoolFridgeRepair)()
      },
      {
        path: "/foster-appliances-services-foster-dishwasher-repair-service-in-dubai-foster-cooking-range-repair-service-in-dubai-foster-cooktop-repair-service-in-dubai-foster-oven-repair-in-dubai-foster-rangetop-r/",
        element: Components.withSuspense(Components.FosterAppliancesServices)()
      },
      {
        path: "/teka-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: Components.withSuspense(Components.TekaHomeAppInstllation)()
      },
      {
        path: "/gorenje-fridge-repair-in-dubai-gorenje-washing-machine-repair-in-dubai-gorenje-cooker-repair-in-dubai-gorenje-oven-repair-in-dubai-gorenje-appliances-maintenance-in-dubai-gorenje-refrigerator-fix-repa/",
        element: Components.withSuspense(Components.GorenjeFridgeRepair)()
      },
      {
        path: "/miele-fridge-repair-in-dubai-miele-washing-machine-repair-in-dubai-miele-cooker-repair-in-dubai-miele-oven-repair-in-dubai-miele-appliances-maintenance-in-dubai-miele-refrigerator-fix-repairs-service/",
        element: Components.withSuspense(Components.MieleFridgeRepair)()
      },
      {
        path: "/wolf-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: Components.withSuspense(Components.WolfHomeAppMaintenance)()
      },
      {
        path: "/toshiba-home-appliance-installation-maintenance-repair-fix-service-in-dubai-2/",
        element: Components.withSuspense(Components.ToshibaHomeAppMaintenance)()
      },
      {
        path: "/gibson-fridge-repair-in-dubai-gibson-washing-machine-repair-in-dubai-gibson-cooker-repair-in-dubai-gibson-oven-repair-in-dubai-gibson-appliances-maintenance-in-dubai-gibson-refrigerator-fix-repairs-se/",
        element: Components.withSuspense(Components.GibsoneFridgeRepair)()
      },
      {
        path: "/project",
        element: Components.withSuspense(Components.ProjectPage)()
      },
      {
        path: "/project/project-details",
        element: Components.withSuspense(Components.ProjectDetailsPage)()
      },
      {
        path: "/team",
        element: Components.withSuspense(Components.TeamPage)()
      },
      {
        path: "/team/team-details",
        element: Components.withSuspense(Components.TeamDetailsPage)()
      },
      {
        path: "/blogs",
        element: Components.withSuspense(Components.BlogPage)()
      },
      {
        path: "/blog/:slug",
        element: Components.withSuspense(Components.BlogDetailsPage)()
      },
      {
        path: "/contact-us/",
        element: Components.withSuspense(Components.ContactPage)()
      },
      {
        path: "/dubai-ac-service-price-list/",
        element: Components.withSuspense(Components.DubaiAcServicePriceList)(),
      },
      {
        path: "/ac-services-in-the-ritz-carlton-difc/",
        element: Components.withSuspense(Components.AcRepairInRitz)(),
      },
      {
        path: "/ac-services-in-dubai-silicon-oasis/",
        element: Components.withSuspense(Components.AcRepairInSiliconOasis)(),
      },
      {
        path: "/ac-services-in-metha/",
        element: Components.withSuspense(Components.AcRepairInMetha)(),
      },
      {
        path: "/ac-services-in-jumeirah-village/",
        element: Components.withSuspense(Components.AcRepairInJumeirahVillage)(),
      },
      {
        path: "/ac-services-in-jebel-ali-free-zone/",
        element: Components.withSuspense(Components.AcRepairInJebelAliFreeZone)(),
      },
      {
        path: "/ac-services-in-umm-al-sheif/",
        element: Components.withSuspense(Components.AcRepairInUmmAlSheif)(),
      },
      {
        path: "/ac-services-in-the-greens/",
        element: Components.withSuspense(Components.AcRepairinTheGreens)(),
      },
      {
        path: "/ac-services-in-al-jafiliya/",
        element: Components.withSuspense(Components.AcRepairinAlJafiliya)(),
      },
      {
        path: "/ac-services-in-the-meadows/",
        element: Components.withSuspense(Components.AcRepairinTheMeadows)(),
      },
      {
        path: "/ac-services-in-academy-city/",
        element: Components.withSuspense(Components.AcRepairInAcademyCity)(),
      },
      {
        path: "/ac-services-in-limestone-house-difc/",
        element: Components.withSuspense(Components.AcRepairInLimestoneHouseDifc)(),
      },
      {
        path: "/ac-services-in-jumeirah-village-triangle/",
        element: Components.withSuspense(Components.AcRepairInJumeriahVillageTriangle)(),
      },
      {
        path: "/ac-services-in-arabian-ranches-2/",
        element: Components.withSuspense(Components.AcRepairInArabianRanches2)(),
      },
      {
        path: "/ac-services-in-dubai-studio-city/",
        element: Components.withSuspense(Components.AcRepairInDubaiStudioCity)(),
      },
      {
        path: "/ac-services-jumeirah-islands/",
        element: Components.withSuspense(Components.AcRepairInJumeirahIslands)(),
      },
      {
        path: "/ac-repair-al-qusais/",
        element: Components.withSuspense(Components.AcRepairInAlQusais)(),
      },
      {
        path: "/ac-services-in-the-springs/",
        element: Components.withSuspense(Components.AcRepairInTheSprings)(),
      },
      {
        path: "/ac-services-in-al-mirdif/",
        element: Components.withSuspense(Components.AcRepairInAlMirdif)(),
      },
      {
        path: "/ac-services-in-international-media-and-production-zone/",
        element: Components.withSuspense(Components.AcRepairInInternationalMediaAndProductionZone)(),
      },
      {
        path: "/ac-services-in-jumeirah-village-circle/",
        element: Components.withSuspense(Components.AcRepairInJumeirahVillageCircle)(),
      },
      {
        path: "/ac-services-in-business-bay/",
        element: Components.withSuspense(Components.AcRepairInBusinessBay)(),
      },
      {
        path: "/ac-services-in-arabian-ranches/",
        element: Components.withSuspense(Components.AcRepairInArabianRanches)(),
      },
      {
        path: "/ac-services-in-dip/",
        element: Components.withSuspense(Components.AcRepairInDip)(),
      },
      {
        path: "/ac-services-in-discovery-gardens/",
        element: Components.withSuspense(Components.AcRepairInDiscoveryGardens)(),
      },
      {
        path: "/ac-services-in-al-waha-community/",
        element: Components.withSuspense(Components.AcRepairInAlWahaCommunity)(),
      },
      {
        path: "/ac-services-in-hudaiba/",
        element: Components.withSuspense(Components.AcRepairInHudaiba)(),
      },
      {
        path: "/ac-services-in-impz/",
        element: Components.withSuspense(Components.AcRepairInImpz)(),
      },
      {
        path: "/ac-services-in-al-satwa/",
        element: Components.withSuspense(Components.AcRepairInAlSatwa)(),
      },
      {
        path: "/ac-repair-in-jafza-air-condition-maintenance-in-jafza-air-conditioning-fix-amc-service-in-jebel-ali-free-zone-dubai/",
        element: Components.withSuspense(Components.AcRepairInAlJafza)(),
      },
      {
        path: "/ac-services-in-al-khawaneej/",
        element: Components.withSuspense(Components.AcRepairInAlKhawaneej)(),
      },
      {
        path: "/ac-services-in-al-manara/",
        element: Components.withSuspense(Components.AcRepairInAlManara)(),
      },
      {
        path: "/ac-services-in-jumeirah-golf-estates/",
        element: Components.withSuspense(Components.AcRepairInJumeirahGolfEstates)(),
      },
      {
        path: "/ac-services-in-layan-community/",
        element: Components.withSuspense(Components.AcRepairInLayanCommunity)(),
      },
      {
        path: "/ac-services-in-al-badaa/",
        element: Components.withSuspense(Components.AcRepairInAlBadaa)(),
      },
      {
        path: "/ac-services-dubai-internet-city/",
        element: Components.withSuspense(Components.AcRepairInDubaiInternetCity)(),
      },
      {
        path: "/ac-services-in-jumeirah-lake-towers/",
        element: Components.withSuspense(Components.AcRepairInJumeirahLakeTowers)(),
      },
      {
        path: "/ac-services-in-al-tawar/",
        element: Components.withSuspense(Components.AcRepairinAlTawar)(),
      },
      {
        path: "/ac-services-in-al-barsha-south/",
        element: Components.withSuspense(Components.AcRepairInAlBarshaSouth)(),
      },
      {
        path: "/ac-services-in-the-gardens/",
        element: Components.withSuspense(Components.AcRepairInGardens)(),
      },
      {
        path: "/ac-services-in-jbr/",
        element: Components.withSuspense(Components.AcRepairInJBR)(),
      },
      {
        path: "/ac-services-in-flamingo-villas/",
        element: Components.withSuspense(Components.AcRepairInFlamingoVillas)(),
      },
      {
        path: "/ac-services-in-al-quoz/",
        element: Components.withSuspense(Components.AcRepairInAlQuoz)(),
      },
      {
        path: "/ac-services-in-jebel-ali-dip/",
        element: Components.withSuspense(Components.AcRepairInJebelAliDip)(),
      },
      {
        path: "/ac-services-in-al-sufouh/",
        element: Components.withSuspense(Components.AcRepairInSufouh)(),
      },
      {
        path: "/ac-services-in-jumeirah-beach-residence/",
        element: Components.withSuspense(Components.AcRepairInJumeirahBeachResidence)(),
      },
      {
        path: "/ac-services-in-the-villa/",
        element: Components.withSuspense(Components.AcRepairInTheVilla)(),
      },
      {
        path: "/ac-services-in-jumeirah-heights/",
        element: Components.withSuspense(Components.AcRepairInJumeirahHeights)(),
      },
      {
        path: "/ac-services-in-al-quoz-industrial-area/",
        element: Components.withSuspense(Components.AcRepairInQuozIndustrialArea)(),
      },
      {
        path: "/ac-services-in-the-lakes/",
        element: Components.withSuspense(Components.AcRepairInTheLakes)(),
      },
      {
        path: "/ac-services-in-the-lakes/",
        element: Components.withSuspense(Components.AcRepairInBurjKhalifaLake)(),
      },
      {
        path: "/ac-services-in-umm-suqeim/",
        element: Components.withSuspense(Components.AcRepairInUmmSuqeim)(),
      },
      {
        path: "/ac-services-in-jvt/",
        element: Components.withSuspense(Components.AcRepairInJvt)(),
      },
      {
        path: "/ac-services-in-jumeirah/",
        element: Components.withSuspense(Components.AcRepairInJumeirah)(),
      },
      {
        path: "/ac-services-in-jebel-ali/",
        element: Components.withSuspense(Components.AcRepairInJebelAli)(),
      },
      {
        path: "/ac-services-in-emirates-hills/",
        element: Components.withSuspense(Components.AcRepairInEmiratesHills)(),
      },
      {
        path: "/ac-services-jlt/",
        element: Components.withSuspense(Components.AcRepairInJLT)(),
      },
      {
        path: "/ac-services-in-index-tower-difc/",
        element: Components.withSuspense(Components.AcRepairInIndexTowerDifc)(),
      },
      {
        path: "/ac-services-in-al-rashidiya/",
        element: Components.withSuspense(Components.AcRepairInAlRashidiya)(),
      },
      {
        path: "/ac-services-in-al-karama/",
        element: Components.withSuspense(Components.AcRepairInAlkarama)(),
      },
      {
        path: "/ac-services-in-south-ridge/",
        element: Components.withSuspense(Components.AcRepairInsouthRidge)(),
      },
      {
        path: "/ac-services-in-nad-al-hammar/",
        element: Components.withSuspense(Components.AcRepairInNadAlHammar)(),
      },
      {
        path: "/ac-services-in-nad-al-hammar/",
        element: Components.withSuspense(Components.AcRepairInMudon)(),
      },
      {
        path: "/ac-services-in-dubai-healthcare-city/",
        element: Components.withSuspense(Components.AcRepairInDubaiHealthcareCity)(),
      },
      {
        path: "/ac-services-in-knowledge-village/",
        element: Components.withSuspense(Components.AcRepairInKnowledgeVillage)(),
      },
      {
        path: "/ac-services-in-deira/",
        element: Components.withSuspense(Components.AcRepairInDeira)(),
      },
      {
        path: "/ac-services-in-al-furjan/",
        element: Components.withSuspense(Components.AcRepairInAlFurjan)(),
      },
      {
        path: "/ac-services-jumeirah-park/",
        element: Components.withSuspense(Components.AcRepairInJumeirahPark)(),
      },
      {
        path: "/ac-services-in-ras-al-khor-industrial-area/",
        element: Components.withSuspense(Components.AcRepairInRasAlKhorIndustrialArea)(),
      },
      {
        path: "/ac-services-in-al-warqa/",
        element: Components.withSuspense(Components.AcRepairInAlWarqa)(),
      },
      {
        path: "/ac-services-in-dubailand-the-villa-point/",
        element: Components.withSuspense(Components.AcRepairInDubailandTheVillaPoint)(),
      },
      {
        path: "/ac-services-in-al-wasl/",
        element: Components.withSuspense(Components.AcRepairInAlWasl)(),
      },
      {
        path: "/ac-services-in-dubai-investments-park/",
        element: Components.withSuspense(Components.AcRepairInInvestmentsPark)(),
      },
      {
        path: "/ac-services-in-al-aweer/",
        element: Components.withSuspense(Components.AcRepairInAlaweer)(),
      },
      {
        path: "/ac-services-in-difc/",
        element: Components.withSuspense(Components.AcRepairInDifc)(),
      },
      {
        path: "/ac-repair-in-al-barsha-air-condition-maintenance-in-al-barsha-air-conditioning-fix-amc-service-in-al-barsha-dubai/",
        element: Components.withSuspense(Components.AcRepairInAlBarsha)(),
      },
      {
        path: "/ac-services-in-al-raffa/",
        element: Components.withSuspense(Components.AcRepairInAlRaffa)(),
      },
      {
        path: "/ac-services-in-dubai-international-financial-centre/",
        element: Components.withSuspense(Components.AcRepairInDubaiInternationalFinancialCenter)(),
      },
      {
        path: "/ac-services-in-bur-dubai/",
        element: Components.withSuspense(Components.AcRepairInBurDubai)(),
      },
      {
        path: "/ac-services-in-silicon-oasis-dubai/",
        element: Components.withSuspense(Components.AcRepairInSiliconOasisDubai)(),
      },
      {
        path: "/ac-services-in-burj-khalifa-lake/",
        element: Components.withSuspense(Components.AcRepairInBurjKhalifaLake)(),
      },
      {
        path: "/ac-services-in-dubailand-mazaya-queue/",
        element: Components.withSuspense(Components.AcRepairInDubailandMazayaQueue)(),
      },
      {
        path: "/ac-services-in-al-bada/",
        element: Components.withSuspense(Components.AcRepairInAlBadaa)(),
      },
      {
        path: "/ac-services-in-mudon/",
        element: Components.withSuspense(Components.AcRepairInMudon)(),
      },
      {
        path: "/ac-services-in-nad-al-sheba/",
        element: Components.withSuspense(Components.AcRepairInNadAlSheba)(),
      },
      {
        path: "/ac-services-in-downtown/",
        element: Components.withSuspense(Components.AcRepairInDownTown)(),
      },
      {
        path: "/ac-services-in-al-barari/",
        element: Components.withSuspense(Components.AcRepairInAlBarari)(),
      },
      {
        path: "/ac-services-in-bay-square/",
        element: Components.withSuspense(Components.AcRepairInBaySquare)(),
      },
      {
        path: "/ac-services-in-media-city/",
        element: Components.withSuspense(Components.AcRepairInMediaCity)(),
      },
      {
        path: "/ac-services-in-umm-ramool/",
        element: Components.withSuspense(Components.AcRepairInUmmRamool)(),
      },
      {
        path: "/ac-services-in-cedre-villas-silicon-oasis-dubai/",
        element: Components.withSuspense(Components.AcRepairInCedreVillasSiliconOasisDubai)(),
      },
      {
        path: "/ac-services-in-motor-city/",
        element: Components.withSuspense(Components.AcRepairInMotorCity)(),
      },
      {
        path: "/ac-services-in-victory-heights/",
        element: Components.withSuspense(Components.AcRepairInVictoryHeights)(),
      },
      {
        path: "/ac-services-in-remraam-2/",
        element: Components.withSuspense(Components.AcRepairInRemraam2)(),
      },
      {
        path: "/ac-services-in-al-safa/",
        element: Components.withSuspense(Components.AcRepairInAlSafa)(),
      },
      {
        path: "/ac-services-in-remraam/",
        element: Components.withSuspense(Components.AcRepairInRemraam)(),
      },
      {
        path: "/ac-services-in-jge/",
        element: Components.withSuspense(Components.AcRepairInJqe)(),
      },
      {
        path: "/ac-services-in-dubai-sport-city/",
        element: Components.withSuspense(Components.AcRepairInDubaiSportCity)(),
      },
      {
        path: "/ac-services-in-dubai-marina/",
        element: Components.withSuspense(Components.AcRepairInDubaiMarina)(),
      },
      {
        path: "/ac-services-in-jebel-ali-village/",
        element: Components.withSuspense(Components.AcRepairInJebelAliVillage)(),
      },
      {
        path: "/ac-services-in-mankhool/",
        element: Components.withSuspense(Components.AcRepairInMankhool)(),
      },
      {
        path: "/ac-services-in-the-views/",
        element: Components.withSuspense(Components.AcRepairInTheViews)(),
      },
      {
        path: "/ac-services-in-palm-jumeirah/",
        element: Components.withSuspense(Components.AcRepairInPalmJumeirah)(),
      },
      {
        path: "/ac-services-in-jvc/",
        element: Components.withSuspense(Components.AcRepairInJvc)(),
      },
      {
        path: "/ac-repair-and-ac-service-in-al-mamzar/",
        element: Components.withSuspense(Components.AcRepairInAlMamzar)(),
      },
      {
        path: "/ac-repair-and-ac-service-in-al-mizhar/",
        element: Components.withSuspense(Components.AcRepairInAlMizhar)(),
      },
      {
        path: "/ac-repair-and-ac-service-in-damac-hills/",
        element: Components.withSuspense(Components.AcRepairInDamacHills)(),
      },
      {
        path: "/ac-repair-and-ac-service-in-dubai-hills-estate/",
        element: Components.withSuspense(Components.AcRepairInDubaiHillsEstate)(),
      },
      {
        path: "/ac-repair-and-ac-service-in-dubai-production-city/",
        element: Components.withSuspense(Components.AcRepairInProductionCity)(),
      },
      {
        path: "/ac-repair-and-ac-service-in-emirates-hills/",
        element: Components.withSuspense(Components.AcRepairandServiceInEmiratesHills)(),
      },
      {
        path: "/ac-repair-and-ac-service-in-town-square/",
        element: Components.withSuspense(Components.AcRepairandServiceInTownSquare)(),
      },
      {
        path: "/ac-services-in-old-town-dubai/",
        element: Components.withSuspense(Components.AcRepairInOldTown)(),
      },
      {
        path: "/ac-services-in-dubai-international-financial-centre/",
        element: Components.withSuspense(Components.AcRepairInDubaiInternationalFinancialCenter)(),
      },
      {
        path: "/indesit-fridge-repair-in-dubai-indesit-washing-machine-repair-in-dubai-indesit-cooker-repair-in-dubai-indesit-oven-repair-in-dubai-indesit-appliances-maintenance-in-dubai-indesit-refrigerator-fix-repa/",
        element: Components.withSuspense(Components.IndesitWashingMachine)(),
      },
      {
        path: "/viking-appliances-service/",
        element: Components.withSuspense(Components.VikingAppliancesService)(),
      },
      {
        path: "/samsung-fridge-repair-in-dubai-samsung-washing-machine-repair-in-dubai-samsung-cooker-repair-in-dubai-samsung-oven-repair-in-dubai-samsung-appliances-maintenance-in-dubai-samsung-refrigerator-fix-repa/",
        element: Components.withSuspense(Components.SamsungFridgeRepair)(),
      },
      {
        path: "/sanyo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: Components.withSuspense(Components.SanyoHomeAppliance)(),
      },
      {
        path: "/electrolux-home-appliances-repair/",
        element: Components.withSuspense(Components.ElectroluxHomeAppliance)(),
      },
      {
        path: "/beko-fridge-repair-in-dubai-beko-washing-machine-repair-in-dubai-beko-cooker-repair-in-dubai-beko-oven-repair-in-dubai-beko-appliances-maintenance-in-dubai-beko-refrigerator-fix-repairs-service-in-dub/",
        element: Components.withSuspense(Components.BekoFridgeRepair)(),
      },
      {
        path: "/aeg-fridge-repair-in-dubai-aeg-washing-machine-repair-in-dubai-aeg-cooker-repair-in-dubai-aeg-oven-repair-in-dubai-aeg-appliances-maintenance-in-dubai-aeg-refrigerator-fix-repairs-service-in-dubai-aeg/",
        element: Components.withSuspense(Components.AegFridgeRepair)(),
      },
      {
        path: "/bosch-home-appliances-repair/",
        element: Components.withSuspense(Components.BoschHomeAppliance)(),
      },
      {
        path: "/hisense-fridge-repair-in-dubai-hisense-washing-machine-repair-in-dubai-hisense-cooker-repair-in-dubai-hisense-oven-repair-in-dubai-hisense-appliances-maintenance-in-dubai-hisense-refrigerator-fix-repa/",
        element: Components.withSuspense(Components.HisenseFridgeRepair)(),
      },
      {
        path: "/panasonic-fridge-repair-in-dubai-panasonic-washing-machine-repair-in-dubai-panasonic-cooker-repair-in-dubai-panasonic-oven-repair-in-dubai-panasonic-appliances-maintenance-in-dubai-panasonic-refrigera/",
        element: Components.withSuspense(Components.PanasonicFridgeRepair)(),
      },
      {
        path: "/siemens-home-appliances-repair/",
        element: Components.withSuspense(Components.SiemensHomeAppliance)(),
      },
      {
        path: "/terim-appliances-service/",
        element: Components.withSuspense(Components.TerimAppliance)(),
      },
      {
        path: "/blomberg-fridge-repair-in-dubai-blomberg-washing-machine-repair-in-dubai-blomberg-cooker-repair-in-dubai-blomberg-oven-repair-in-dubai-blomberg-appliances-maintenance-in-dubai-blomberg-refrigerator-fi/",
        element: Components.withSuspense(Components.BlombergFridgeRepair)(),
      },
      {
        path: "/daewoo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: Components.withSuspense(Components.DaewooHomeApplianceRepair)(),
      },
      {
        path: "/aftron-fridge-repair-in-dubai-aftron-washing-machine-repair-in-dubai-aftron-cooker-repair-in-dubai-aftron-oven-repair-in-dubai-aftron-appliances-maintenance-in-dubai-aftron-refrigerator-fix-repairs-se/",
        element: Components.withSuspense(Components.AftronFridgeRepair)(),
      },
      {
        path: "/hoover-fridge-repair-in-dubai-hoover-washing-machine-repair-in-dubai-hoover-cooker-repair-in-dubai-hoover-oven-repair-in-dubai-hoover-appliances-maintenance-in-dubai-hoover-refrigerator-fix-repairs-se/",
        element: Components.withSuspense(Components.HooverFridgeRepair)(),
      },
      {
        path: "/lg-fridge-repair-in-dubai-lg-washing-machine-repair-in-dubai-lg-cooker-repair-in-dubai-lg-oven-repair-in-dubai-lg-appliances-maintenance-in-dubai-lg-refrigerator-fix-repairs-service-in-dubai-lg-dishwa/",
        element: Components.withSuspense(Components.LgFridgeRepair)(),
      },
      {
        path: "/daewoo-home-appliances-repair/",
        element: Components.withSuspense(Components.DaewooHomeAppliance)(),
      },
      {
        path: "/bosch-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: Components.withSuspense(Components.BoschHomeApplianceRepair)(),
      },
      {
        path: "/foster-appliances-service/",
        element: Components.withSuspense(Components.FosterAppliance)(),
      },
      {
        path: "/samsung-home-appliances-repair/",
        element: Components.withSuspense(Components.SamsungHomeApplianceRepair)(),
      },
      {
        path: "/electrolux-fridge-repair-in-dubai-electrolux-washing-machine-repair-in-dubai-electrolux-cooker-repair-in-dubai-electrolux-oven-repair-in-dubai-electrolux-appliances-maintenance-in-dubai-electrolux-ref/",
        element: Components.withSuspense(Components.ElectroluxFridgeRepair)(),
      },
      {
        path: "/admiral-fridge-repair-in-dubai-admiral-washing-machine-repair-in-dubai-admiral-cooker-repair-in-dubai-admiral-oven-repair-in-dubai-admiral-appliances-maintenance-in-dubai-admiral-refrigerator-fix-repa/",
        element: Components.withSuspense(Components.AdmiralFridgeRepair)(),
      },
      {
        path: "/bompani-fridge-repair-in-dubai-bompani-washing-machine-repair-in-dubai-bompani-cooker-repair-in-dubai-bompani-oven-repair-in-dubai-bompani-appliances-maintenance-in-dubai-bompani-refrigerator-fix-repa/",
        element: Components.withSuspense(Components.BompaniFridgeRepair)(),
      },
      {
        path: "/kenmore-appliances-service/",
        element: Components.withSuspense(Components.KenmoreAppliancesService)(),
      },
      {
        path: "/sharp-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: Components.withSuspense(Components.SharpHomeAppliancesInstallation)(),
      },
      {
        path: "/unimac-washing-machine-repair-in-dubai-unimac-dryer-repair-in-dubai-unimac-washer-dryer-repair-in-dubai-unimac-maintenance-in-dubai-unimac-laundry-service-in-dubai-unimac-dubai/",
        element: Components.withSuspense(Components.UnimacWashingMachineRepair)(),
      },
      {
        path: "/haier-fridge-repair-in-dubai-haier-washing-machine-repair-in-dubai-haier-cooker-repair-in-dubai-haier-oven-repair-in-dubai-haier-appliances-maintenance-in-dubai-haier-refrigerator-fix-repairs-service/",
        element: Components.withSuspense(Components.HaierFridgeRepair)(),
      },
      {
        path: "/baumatic-appliances/",
        element: Components.withSuspense(Components.BaumaticAppliances)(),
      },
      {
        path: "/faber-appliances-service/",
        element: Components.withSuspense(Components.FaberAppliancesService)(),
      },
      {
        path: "/marvel-fridge-repair-in-dubai-marvel-washing-machine-repair-in-dubai-marvel-cooker-repair-in-dubai-marvel-oven-repair-in-dubai-marvel-appliances-maintenance-in-dubai-marvel-refrigerator-fix-repairs-se/",
        element: Components.withSuspense(Components.MarvelFridgeRepair)(),
      },
      {
        path: "/brandt-fridge-repair-in-dubai-brandt-washing-machine-repair-in-dubai-brandt-cooker-repair-in-dubai-brandt-oven-repair-in-dubai-brandt-appliances-maintenance-in-dubai-brandt-refrigerator-fix-repairs-se/",
        element: Components.withSuspense(Components.BrandtFridgeRepair)(),
      },
      {
        path: "/thermador-appliances-service/",
        element: Components.withSuspense(Components.ThemadorAppliancesService)(),
      },
      {
        path: "/bertazzoni-refrigerator-repair-in-dubai-bertazzoni-appliances-service-bertazzoni-fridge-repair-in-dubai-bertazzoni-washing-machine-washer-bertazzoni-dryer-repair-in-dubai-bertazzoni-dishwasher-cooker/",
        element: Components.withSuspense(Components.BertazzoniRefrigeratorRepair)(),
      },
      {
        path: "/boston-refrigerator-repair-in-dubai-boston-appliances-service-boston-fridge-repair-in-dubai-boston-washing-machine-washer-boston-dryer-repair-in-dubai-boston-dishwasher-cooker/",
        element: Components.withSuspense(Components.BostonRefrigeratorRepair)(),
      },
      {
        path: "/kelvinator-home-appliance-installation-maintenance-repair-fix-service-in-dubai/",
        element: Components.withSuspense(Components.KelvinatorHomeAppInstallation)(),
      },
      {
        path: "/zanussi-fridge-repair-in-dubai-zanussi-washing-machine-repair-in-dubai-zanussi-cooker-repair-in-dubai-zanussi-oven-repair-in-dubai-zanussi-appliances-maintenance-in-dubai-zanussi-refrigerator-fix-repa/",
        element: Components.withSuspense(Components.ZanussiFridgeRepair)(),
      },
      {
        path: "/sears-home-appliances-installation-maintenance-repair-fix-service-in-dubai/",
        element: Components.withSuspense(Components.SearsHomeAppInstallation)(),
      },
      {
        path: "/baumatic-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai-error/",
        element: Components.withSuspense(Components.BaumaticRefrigeratorRepair)(),
      },
      {
        path: "/ge-general-electric-fridge-repair-in-dubai-ge-general-electric-washing-machine-repair-in-dubai-ge-general-electric-cooker-repair-in-dubai-ge-general-electric-oven-repair-in-dubai-ge-general-electric-a/",
        element: Components.withSuspense(Components.GeGeneralElectricFridgeRepair)(),
      },
      {
        path: "/kitchenaid-refrigerator-repair-in-dubai-fridge-repair-in-dubai-kitchenaid-freezer-maintenance-in-dubai-washing-machine-repair-in-dubai-dishwasher-kitchenaid-cooker-oven-repairs-fix-service-in-dubai/",
        element: Components.withSuspense(Components.KitchenaidRefrigeratorRepair)(),
      },
      {
        path: "/westpoint-fridge-repair-in-dubai-westpoint-washing-machine-repair-in-dubai-westpoint-cooker-repair-in-dubai-westpoint-oven-repair-in-dubai-westpoint-refrigerator-fix-repairs-service-in-dubai-west-poin/",
        element: Components.withSuspense(Components.WestpointFridgeRepair)(),
      },
      {
        path: "/liebherr-refrigerator-repair-in-dubai-liebherr-fridge-repair-in-dubai-liebherr-freezer-maintenance-service-in-dubai/",
        element: Components.withSuspense(Components.LiebherrRefrigeratorRepair)(),
      },
      {
        path: "/white-westinghouse-fridge-repair-in-dubai-white-westinghouse-washing-machine-repair-in-dubai-white-westinghouse-cooker-repair-in-dubai-white-westinghouse-oven-repair-in-dubai-white-westinghouse-applia/",
        element: Components.withSuspense(Components.WhiteWestinghouseFridgeRepair)(),
      },
      {
        path: "/speed-queen-washing-machine-repair-in-dubai-speed-queen-dryer-repair-in-dubai-speed-queen-washer-dryer-repair-in-dubai-maintenance-fix-service-in-dubai/",
        element: Components.withSuspense(Components.SpeedQueenWashingMachineRepair)(),
      },
      {
        path: "/franke-appliances-repair-service-in-dubai/",
        element: Components.withSuspense(Components.FrankeAppliancesRepairService)(),
      },
      {
        path: "/ifb-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: Components.withSuspense(Components.IfbRefrigeratorRepair)(),
      },
      {
        path: "/kitchenaid-stand-mixer-repair-service-near-me-dubai/",
        element: Components.withSuspense(Components.KitchenaidStandMixerRepairService)(),
      },
      {
        path: "/kenwood-stand-mixer-repair-service-near-me-dubai/",
        element: Components.withSuspense(Components.KenwoodStandMixerRepairService)(),
      },
      {
        path: "/candy-refrigerator-repair-in-dubai-fridge-repair-in-dubai-washing-machine-repair-in-dubai-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: Components.withSuspense(Components.CandyRefrigeratorRepair)(),
      },
      {
        path: "/hotpoint-refrigerator-repair-in-dubai-hotpoint-fridge-repair-in-dubai-hotpoint-washing-machine-repair-in-dubai-hotpoint-dishwasher-cooker-oven-repairs-fix-service-in-dubai/",
        element: Components.withSuspense(Components.HotpointRefrigeratorRepair)(),
      },
      {
        path: "/de-dietrich-fridge-repair-in-dubai-de-dietrich-washing-machine-repair-in-dubai-de-dietrich-cooker-repair-in-dubai-de-dietrich-oven-repair-in-dubai-de-dietrich-appliances-maintenance-in-dubai-de-dietri/",
        element: Components.withSuspense(Components.DeDietrichFridgeRepair)(),
      },
      {
        path: "/smeg-mixer-repair-service-near-me-dubai/",
        element: Components.withSuspense(Components.SmegMixerRepairService)(),
      },
      {
        path: "/la-germania-cooking-range-repair-in-dubai-la-germania-oven-repair-in-dubai-la-germania-cooker-repair-in-dubai-la-germania-cooker-oven-maintenance-service-in-dubai-refrigerator-repair-in-dubai-fridge-r/",
        element: Components.withSuspense(Components.LaGermaniaCookingRangeRepair)(),
      },
      {
        path: "/delonghi-coffee-machine-repair/",
        element: Components.withSuspense(Components.DelonghiCoffeeMachineRepair)(),
      },
      {
        path: "/appliances-services-in-al-mamzar/",
        element: Components.withSuspense(Components.AppliancesServiceInAlMamzar)(),
      },
      {
        path: "/appliances-services-in-al-mizhar/",
        element: Components.withSuspense(Components.AppliancesServiceInAlMizhar)(),
      },
      {
        path: "/appliances-services-in-damac-hills/",
        element: Components.withSuspense(Components.AppliancesServiceInDamacHills)(),
      },
      {
        path: "/appliances-services-in-dubai-hills-estate/",
        element: Components.withSuspense(Components.AppliancesServiceInDubaiHillsEstate)(),
      },
      {
        path: "/appliances-services-in-dubai-production-city/",
        element: Components.withSuspense(Components.AppliancesServiceInDubaiProductionCity)(),
      },
      {
        path: "/appliances-services-in-town-square/",
        element: Components.withSuspense(Components.AppliancesServiceInTownSquare)(),
      },
      {
        path: "/appliances-services-in-business-bay/",
        element: Components.withSuspense(Components.AppliancesServiceInBusinessBay)(),
      },
      {
        path: "/appliances-services-in-al-ghadeer-community/",
        element: Components.withSuspense(Components.AppliancesServiceInAlGhadeerCommunity)(),
      },
      {
        path: "/appliances-services-in-the-gardens/",
        element: Components.withSuspense(Components.AppliancesServiceInTheGardens)(),
      },
      {
        path: "/appliances-services-in-the-limestone-house-difc/",
        element: Components.withSuspense(Components.AppliancesServiceInLimestoneHouseDifc)(),
      },
      {
        path: "/appliances-services-in-international-media-and-production-zone/",
        element: Components.withSuspense(Components.AppliancesServiceInInternationalMediaAndProductionZone)(),
      },
      {
        path: "/appliances-services-in-jlt/",
        element: Components.withSuspense(Components.AppliancesServicesInJlt)(),
      },
      {
        path: "/appliances-services-in-the-views/",
        element: Components.withSuspense(Components.AppliancesServicesInTheViews)(),
      },
      {
        path: "/appliances-services-in-al-safa/",
        element: Components.withSuspense(Components.AppliancesServicesInAlSafa)(),
      },
      {
        path: "/appliances-services-in-jumeirah/",
        element: Components.withSuspense(Components.AppliancesServicesInJumeirah)(),
      },
      {
        path: "/appliances-services-jumeirah/",
        element: Components.withSuspense(Components.AppliancesServicesJumeirah)(),
      },
      {
        path: "/appliances-services-in-discovery-gardens/",
        element: Components.withSuspense(Components.AppliancesServicesInDiscoveryGardens)(),
      },
      {
        path: "/appliances-services-in-the-lakes/",
        element: Components.withSuspense(Components.AppliancesServicesInTheLakes)(),
      },
      {
        path: "/appliances-services-in-jumeirah-golf-estates/",
        element: Components.withSuspense(Components.AppliancesServicesInJumeirahGolfEstates)(),
      },
      {
        path: "/home-appliances-installation-maintenance-repair-fix-service-centre-in-jlt-dubai/",
        element: Components.withSuspense(Components.HomeAppliancesServiceCentreInJltDubai)(),
      },
      {
        path: "/appliances-services-in-emirates-hills/",
        element: Components.withSuspense(Components.AppliancesServicesInEmiratesHills)(),
      },
      {
        path: "/appliances-services-in-silicon-oasis-dubai/",
        element: Components.withSuspense(Components.AppliancesServicesInSiliconOasisDubai)(),
      },
      {
        path: "/appliances-services-in-victory-heights/",
        element: Components.withSuspense(Components.AppliancesServicesInVictoryHeights)(),
      },
      {
        path: "/appliances-services-in-remraam/",
        element: Components.withSuspense(Components.AppliancesServicesInRemraam)(),
      },
      {
        path: "/appliances-services-in-al-jafiliya/",
        element: Components.withSuspense(Components.AppliancesServicesInAlJafiliya)(),
      },
      {
        path: "/appliances-services-in-al-furjan/",
        element: Components.withSuspense(Components.AppliancesServicesInAlFurjan)(),
      },
      {
        path: "/appliances-services-in-dubai-investments-park/",
        element: Components.withSuspense(Components.AppliancesServicesInDubaiInvestmentsPark)(),
      },
      {
        path: "/appliances-services-in-tecom/",
        element: Components.withSuspense(Components.AppliancesServicesInTecom)(),
      },
      {
        path: "/appliances-services-in-al-barsha-south/",
        element: Components.withSuspense(Components.AppliancesServicesInAlBarshaSouth)(),
      },
      {
        path: "/appliances-services-in-jumeirah-village/",
        element: Components.withSuspense(Components.AppliancesServicesInJumeirahVillage)(),
      },
      {
        path: "/appliances-services-in-al-badaa/",
        element: Components.withSuspense(Components.AppliancesServicesInAlBadaa)(),
      },
      {
        path: "/appliances-services-in-al-satwa/",
        element: Components.withSuspense(Components.AppliancesServicesInAlSatwa)(),
      },
      {
        path: "/appliances-services-in-dubai-healthcare-city/",
        element: Components.withSuspense(Components.AppliancesServicesInDubaiHealthcareCity)(),
      },
      {
        path: "/appliances-services-in-jumeirah-islands/",
        element: Components.withSuspense(Components.AppliancesServicesInJumeirahIslands)(),
      },
      {
        path: "/appliances-services-in-jebel-ali-village/",
        element: Components.withSuspense(Components.AppliancesServicesInJebelAliVillage)(),
      },
      {
        path: "/appliances-services-in-palm-jumeirah/",
        element: Components.withSuspense(Components.AppliancesServicesInPalmJumeirah)(),
      },
      {
        path: "/appliances-services-in-dubailand-mazaya/",
        element: Components.withSuspense(Components.AppliancesServicesInDubailandMazaya)(),
      },
      {
        path: "/appliances-services-in-falcon-city-dubai/",
        element: Components.withSuspense(Components.AppliancesServicesInFalconCityDubai)(),
      },
      {
        path: "/appliances-services-in-arabian-ranches/",
        element: Components.withSuspense(Components.ApplianceServiceInArabianRanches)(),
      },
      {
        path: "/washing-machine-repair-in-al-quoz-refrigerator-repair-in-al-quoz-fridge-repair-in-al-quoz-dishwasher-oven-cooker-stove-appliance-maintenance-fix-service-in-al-quoz-dubai/",
        element: Components.withSuspense(Components.WashingMachineRepairInAlQuoz)(),
      },
      {
        path: "/washing-machine-repair-town-dubai-fridge-repair-town-dubai-refrigerator-repairing-town-dubai-cooker-stove-oven-cooking-range-repairs-fix-service-centre-town-dubai-dishwasher-installation-fixing-mainte/",
        element: Components.withSuspense(Components.WashingMachineRepairTownDubai)(),
      },
      {
        path: "/washing-machine-repair-business-bay-fridge-repair-business-bay-refrigerator-repairing-business-bay-cooker-stove-oven-cooking-range-repairs-fix-service-centre-business-bay-dishwasher-installation-fixin/",
        element: Components.withSuspense(Components.WashingMachineRepairBusinessBay)(),
      },
      {
        path: "/washing-machine-repair-in-dubai-marina-fridge-repair-in-dubai-marina-refrigerator-repairing-in-dubai-marina-cooker-stove-oven-cooking-range-repairs-fix-service-centre-in-dubai-marina-dishwasher-instal/",
        element: Components.withSuspense(Components.WashingMachineRepairInDubaiMarina)(),
      },
      {
        path: "/fridge-repair-in-dubai-marina-washing-machine-repair-in-dubai-marina-dishwasher-repair-in-dubai-marina-refrigerator-repair-maintenance-in-dubai-marina-cooker-oven-repair-fix-service-in-cooking-range-e/",
        element: Components.withSuspense(Components.FridgeRepairInDubaiMarina)(),
      },
      {
        path: "/washing-machine-repair-al-barsha-dubai-fridge-repair-al-barsha-dubai-refrigerator-repairing-al-barsha-dubai-cooker-stove-oven-cooking-range-repairs-fix-service-centre-al-barsha-dubai-dishwasher-inst-2/",
        element: Components.withSuspense(Components.WashingMachineRepairAlBarsha)(),
      },
      {
        path: "/washing-machine-repair-palm-jumeirah-fridge-repair-palm-jumeirah-refrigerator-repairing-palm-jumeirah-cooker-stove-oven-cooking-range-repairs-fix-service-centre-palm-jumeirah-dishwasher-installation-f/",
        element: Components.withSuspense(Components.WashingMachineRepairPalmJumeirah)(),
      },
      {
        path: "/fridge-repair-dubai-marina/",
        element: Components.withSuspense(Components.FridgeRepairDubaiMarina)(),
      },
      {
        path: "/appliances-services-in-the-ritz-carlton-difc/",
        element: Components.withSuspense(Components.ApplianceServiceInTheRitzCarltonDifc)(),
      },
      {
        path: "/appliances-services-in-oud-metha/",
        element: Components.withSuspense(Components.ApplianceServiceInOudMetha)(),
      },
      {
        path: "/appliances-services-in-umm-al-sheif/",
        element: Components.withSuspense(Components.ApplianceServiceInUmmAlSheif)(),
      },
      {
        path: "/appliances-services-in-umm-suqeim/",
        element: Components.withSuspense(Components.ApplianceServiceInUmmSuqeim)(),
      },
      {
        path: "/appliances-services-in-jebel-ali-industrial-area/",
        element: Components.withSuspense(Components.ApplianceServiceInJebelAliIndustrialArea)(),
      },
      {
        path: "/home-appliances-installation-maintenance-repair-fix-service-centre-in-jumeirah-dubai/",
        element: Components.withSuspense(Components.ApplianceServiceInJumeriahDubai)(),
      },
      {
        path: "/appliances-services-in-jumeirah-heights/",
        element: Components.withSuspense(Components.ApplianceServiceInJumeriahHeights)(),
      },
      {
        path: "/appliances-services-in-dubai-silicon-oasis/",
        element: Components.withSuspense(Components.ApplianceServiceInDubaiSiliconOasis)(),
      },
      {
        path: "/appliances-services-in-the-villa/",
        element: Components.withSuspense(Components.ApplianceServiceInTheVilla)(),
      },
      {
        path: "/appliances-services-in-al-waha-community/",
        element: Components.withSuspense(Components.ApplianceServiceInAlWahaCommunity)(),
      },
      {
        path: "/appliances-services-in-bur-dubai/",
        element: Components.withSuspense(Components.ApplianceServiceInBurDubai)(),
      },
      {
        path: "/appliances-services-in-jumeirah-village-triangle/",
        element: Components.withSuspense(Components.ApplianceServiceInJumeirahVillageTriangle)(),
      },
      {
        path: "/appliances-services-in-mankhool/",
        element: Components.withSuspense(Components.ApplianceServiceInMankhool)(),
      },
      {
        path: "/appliances-services-in-the-springs/",
        element: Components.withSuspense(Components.ApplianceServiceInTheSprings)(),
      },
      {
        path: "/appliances-services-in-al-manara/",
        element: Components.withSuspense(Components.ApplianceServiceInAlManara)(),
      },
      {
        path: "/appliances-services-in-al-barari/",
        element: Components.withSuspense(Components.ApplianceServiceInAlbarari)(),
      },
      {
        path: "/appliances-services-in-jvt/",
        element: Components.withSuspense(Components.ApplianceServiceInJvt)(),
      },
      {
        path: "/appliances-services-in-nad-al-sheba/",
        element: Components.withSuspense(Components.ApplianceServiceInNadAlSheba)(),
      },
      {
        path: "/appliances-services-in-dubai-marina/",
        element: Components.withSuspense(Components.ApplianceServiceInDubaiMarina)(),
      },
      {
        path: "/appliances-services-in-al-barsha/",
        element: Components.withSuspense(Components.ApplianceServiceInAlBarsha)(),
      },
      {
        path: "/appliances-services-in-arabian-ranches/",
        element: Components.withSuspense(Components.ApplianceServiceInArabianRanches)(),
      },
      {
        path: "/appliances-services-in-jumeirah-village-circle/",
        element: Components.withSuspense(Components.ApplianceServiceInJumeirahVillageCircle)(),
      },
      {
        path: "/appliances-services-in-dubai-motor-city/",
        element: Components.withSuspense(Components.ApplianceServiceInDubaiMotorCity)(),
      },
      {
        path: "/appliances-services-in-al-wasl/",
        element: Components.withSuspense(Components.ApplianceServiceInAlWasl)(),
      },
      {
        path: "/appliances-services-in-jebel-ali-dip/",
        element: Components.withSuspense(Components.ApplianceServiceInJebelAliDip)(),
      },
      {
        path: "/appliances-services-in-academy-city/",
        element: Components.withSuspense(Components.ApplianceServiceInAcademyCity)(),
      },
      {
        path: "/appliances-services-in-dubailand-the-villa/",
        element: Components.withSuspense(Components.ApplianceServiceInDubailandTheVilla)(),
      },
      {
        path: "/ApplianceServiceInLayanComminity/",
        element: Components.withSuspense(Components.ApplianceServiceInLayanComminity)(),
      },
      {
        path: "/appliances-services-in-layan-community/",
        element: Components.withSuspense(Components.ApplianceServiceInLayanComminity)(),
      },
      {
        path: "/appliances-services-in-jvc/",
        element: Components.withSuspense(Components.ApplianceServiceInJvc)(),
      },
      {
        path: "/appliances-services-in-deira/",
        element: Components.withSuspense(Components.ApplianceServiceInDeira)(),
      },
      {
        path: "/appliances-services-in-jumeirah-beach-residence/",
        element: Components.withSuspense(Components.ApplianceServiceInJumeirahBeachResidence)(),
      },
      {
        path: "/appliances-services-in-jge/",
        element: Components.withSuspense(Components.ApplianceServiceInJge)(),
      },
      {
        path: "/appliances-services-in-hudaiba/",
        element: Components.withSuspense(Components.ApplianceServiceInHudaiba)(),
      },
      {
        path: "/appliances-services-in-jebel-ali-free-zone/",
        element: Components.withSuspense(Components.ApplianceServiceInJebelAliFreeZone)(),
      },
      {
        path: "/appliances-services-in-dubai-sports-city/",
        element: Components.withSuspense(Components.ApplianceServiceInDubaiSportCity)(),
      },
      {
        path: "/appliances-services-in-dubai-internet-city/",
        element: Components.withSuspense(Components.ApplianceServiceInDubaiInternetCity)(),
      },
      {
        path: "/appliances-washing-machine-fridge-dishwasher-service-jbr-dubai/",
        element: Components.withSuspense(Components.ApplianceServiceInJbrDubai)(),
      },
      {
        path: "/appliances-services-in-mudon/",
        element: Components.withSuspense(Components.ApplianceServiceInMudon)(),
      },
      {
        path: "/appliances-services-in-jebel-ali/",
        element: Components.withSuspense(Components.ApplianceServiceInJebelAli)(),
      },
      {
        path: "/appliances-services-in-dip/",
        element: Components.withSuspense(Components.ApplianceServiceInDip)(),
      },
      {
        path: "/appliances-services-in-index-tower-difc/",
        element: Components.withSuspense(Components.ApplianceServiceInIndexTowerDifc)(),
      },
      {
        path: "/appliances-services-in-impzy/",
        element: Components.withSuspense(Components.ApplianceServiceInImpzy)(),
      },
      {
        path: "/appliances-services-in-jbr/",
        element: Components.withSuspense(Components.ApplianceServiceInJbr)(),
      },
      {
        path: "/appliances-services-in-dubailand-mazaya-queue-point/",
        element: Components.withSuspense(Components.ApplianceServiceInDubailandMazayaQueuePoint)(),
      },
      {
        path: "/appliances-services-in-flamingo-villas-dubai/",
        element: Components.withSuspense(Components.ApplianceServiceInFlamingoVillasDubai)(),
      },
      {
        path: "/appliances-services-in-cedre-villas-silicon-oasis-dubai/",
        element: Components.withSuspense(Components.ApplianceServiceInCedreVillasSiliconOasisDubai)(),
      },
      {
        path: "/appliances-services-in-al-karama/",
        element: Components.withSuspense(Components.ApplianceServiceInAlKaram)(),
      },
      {
        path: "/appliances-services-in-the-greens/",
        element: Components.withSuspense(Components.ApplianceServiceInTheGreens)(),
      },
      {
        path: "/appliances-services-in-arabian-ranches-2/",
        element: Components.withSuspense(Components.ApplianceServiceInArabianRanches2)(),
      },
      {
        path: "/appliances-services-in-jumeirah-lake-towers/",
        element: Components.withSuspense(Components.ApplianceServiceInJumeirahLakeTowers)(),
      },
      {
        path: "/appliances-services-in-dubai-media-city/",
        element: Components.withSuspense(Components.ApplianceServiceInDubaiMediaCity)(),
      },
      {
        path: "/appliances-services-in-the-meadows/",
        element: Components.withSuspense(Components.ApplianceServiceInMeadows)(),
      },
      {
        path: "/appliances-services-in-dubai-studio-city/",
        element: Components.withSuspense(Components.ApplianceServiceInDubaiStudioCity)(),
      },
      {
        path: "/appliances-services-in-al-sufouh/",
        element: Components.withSuspense(Components.AppliancesServicesInAlSufouh)(),
      },
      {
        path: "/appliances-services-in-al-bada/",
        element: Components.withSuspense(Components.AppliancesServicesInAlBada)(),
      },
      {
        path: "/appliances-services-in-al-raffa/",
        element: Components.withSuspense(Components.ApplianceServiceInAlRaffa)(),
      },
      {
        path: "/appliances-services-in-difc/",
        element: Components.withSuspense(Components.ApplianceServiceInDifc)(),
      },
      {
        path: "/appliances-services-in-jumeirah-park/",
        element: Components.withSuspense(Components.ApplianceServiceInJumeirahPark)(),
      },
      {
        path: "/ac-services-in-jebel-ali-industrial-area/",
        element: Components.withSuspense(Components.AcRepairInJebelAliIndustrialArea)(),
      },
    ],
  }
], {
  //  basename: "/fajservicess"
});
