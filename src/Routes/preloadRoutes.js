const routePreloaders = {
  "/": () => import("../Pages/Home"),
  "/services/": () => import("../Pages/ServicesPage"),
  "/about-us/": () => import("../Pages/AboutPage"),
  "/who-we-are/": () => import("../Pages/WhoWeArePage"),
  "/our-vision-and-mission/": () => import("../Pages/OurVisionOurMissionPage"),
  "/our-history/": () => import("../Pages/OurHistoryPage"),
  "/our-team/": () => import("../Pages/OurTeamPage"),
  "/career/": () => import("../Pages/Career/Career"),
  "/our-portfolio/": () => import("../Pages/PortfolioPage"),
  "/blogs/": () => import("../Pages/BlogPage"),
  "/contact-us/": () => import("../Pages/ContactPage"),
  "/services/air-conditioning-repair/": () => import("../Pages/AirConditioning.jsx"),
  "/services/air-conditioning-repair/ac-service/": () => import("../Pages/AcServiceInDubai"),
  "/services/air-conditioning-repair/ac-annual-maintenance-contract/": () => import("../Pages/AcAnnualMaintenanceContract"),
  "/services/coffee-machine/": () => import("../Pages/CoffeeMachine.jsx"),
  "/services/coffee-machine/coffee-machine-service-center/": () => import("../Pages/CoffeeMachineServiceCenterInDubai"),
  "/services/coffee-machine/coffee-machine-repairs/": () => import("../Pages/CommercialCoffeeMachineRepair"),
  "/services/home-appliances-repair/": () => import("../Pages/HomeAppliancesPage.jsx"),
  "/services/home-appliances-repair/hob-repair-service/": () => import("../Pages/HomeAppPages/HobRepair"),
  "/services/home-appliances-repair/oven-repair-service/": () => import("../Pages/HomeAppPages/OvenRepairService"),
  "/services/home-appliances-repair/gas-cooker-repair-service/": () => import("../Pages/HomeAppPages/GasRangeRepairService"),
  "/services/home-appliances-repair/dishwasher-repair-service/": () => import("../Pages/HomeAppPages/DishwasherRepair"),
  "/services/home-appliances-repair/refrigerator-repair-service/": () => import("../Pages/HomeAppPages/RefrigeratorRepairInDubai"),
  "/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/": () => import("../Pages/HomeAppPages/BBQService"),
  "/services/home-appliances-repair/cigar-humidor-repair/": () => import("../Pages/HomeAppPages/CigarcabnitService"),
  "/services/home-appliances-repair/robot-vacuum-cleaner-repair/": () => import("../Pages/HomeAppPages/VacuumCleanerRepair"),
  "/services/home-appliances-repair/small-home-appliances-service-center-in-dubai/": () => import("../Pages/HomeAppPages/SmallAppliancesRepair"),
  "/services/home-appliances-repair/washing-machine-repair-service-dubai/": () => import("../Pages/HomeAppPages/WashingMachineRepairServiceDubai"),
  "/services/home-appliances-repair/built-in-appliances-repair-service/": () => import("../Pages/HomeAppPages/IntegratedApplianceRepair"),
  "/services/home-appliances-repair/appliances-repair-service/": () => import("../Pages/HomeAppPages/FreestandingHomeAppliancesRepairService"),
  "/services/home-appliances-repair/appliances-amc-service/": () => import("../Pages/HomeAppPages/AppliancesMaintenanceContract"),
  "/services/pcb-repair-services/": () => import("../Pages/PcbRepairServicesDubai"),
  "/services/refrigeration-equipment/": () => import("../Pages/RefrigerationEquipmentCategory.jsx"),
  "/services/refrigeration-equipment/ice-maker-repair/": () => import("../Pages/RefrigerationEquipPages/IceMakerRepair"),
  "/services/refrigeration-equipment/commercial-refrigeration-maintenance-contract-services/": () => import("../Pages/RefrigerationEquipPages/RefrigerationAMCServices"),
  "/services/refrigeration-equipment/commercial-refrigeration-maintenance/": () => import("../Pages/RefrigerationEquipPages/CommercialRefrigerationMaintence"),
  "/services/commercial-dishwasher-repair/": () => import("../Pages/CommercialDishwasherServices"),
  "/services/laundry-equipment-repair/": () => import("../Pages/CommercialLaundryEquipPages/CommercialLaundryEquipmentService"),
  "/services/kitchen-equipment-maintenance/": () => import("../Pages/KitchenEquipmentPage.jsx"),
  "/services/kitchen-equipment-maintenance/oven-repair/": () => import("../Pages/KitchenEquipPages/OvenRepair"),
  "/services/kitchen-equipment-maintenance/meat-grinder-repair/": () => import("../Pages/KitchenEquipPages/MeatGrinderRepair"),
  "/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-amc/": () => import("../Pages/KitchenEquipPages/KitchenEquipmentAMC"),
  "/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-maintenance-services/": () => import("../Pages/KitchenEquipPages/KitchenEquipmentRepair"),
  "/services/kitchen-equipment-maintenance/commercial-cooking-appliances-repair-service/": () => import("../Pages/KitchenEquipPages/CookingEquipmentService"),
};

const preloadedRoutes = new Set();

const normalizePath = (path) => {
  if (!path || path.startsWith("http")) return "";
  return path.endsWith("/") ? path : `${path}/`;
};

export const preloadRoute = (path) => {
  const normalizedPath = normalizePath(path);
  const preload = routePreloaders[normalizedPath];

  if (!preload || preloadedRoutes.has(normalizedPath)) return;

  preloadedRoutes.add(normalizedPath);
  preload().catch(() => {
    preloadedRoutes.delete(normalizedPath);
  });
};

export const preloadCommonRoutes = () => {
  [
    "/services/",
    "/contact-us/",
    "/who-we-are/",
    "/blogs/",
    "/services/air-conditioning-repair/",
    "/services/home-appliances-repair/",
    "/services/kitchen-equipment-maintenance/",
    "/services/refrigeration-equipment/",
  ].forEach(preloadRoute);
};
