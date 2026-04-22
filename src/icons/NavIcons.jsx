// Nav icons are lazy-loaded from one shared module to avoid one request per icon.
import { lazy } from 'react';

const lazyNavIcon = (exportName) =>
  lazy(() =>
    import('./components/index.jsx').then((module) => ({
      default: module[exportName],
    }))
  );

export const ACIcon = lazyNavIcon('ACIcon');
export const MACIcon = lazyNavIcon('MACIcon');
export const ApplianceAmcIcon = lazyNavIcon('ApplianceAmcIcon');
export const Bbqcon = lazyNavIcon('Bbqcon');
export const CdishwasherIcon = lazyNavIcon('CdishwasherIcon');
export const CigarIcon = lazyNavIcon('CigarIcon');
export const CLaundryIcon = lazyNavIcon('CLaundryIcon');
export const CoffeeMachineIcon = lazyNavIcon('CoffeeMachineIcon');
export const DCoffeeMachineIcon = lazyNavIcon('DCoffeeMachineIcon');
export const CommercialOvenIcon = lazyNavIcon('CommercialOvenIcon');
export const CommercialRefrigerationIcon = lazyNavIcon('CommercialRefrigerationIcon');
export const DishwasherIcon = lazyNavIcon('DishwasherIcon');
export const FreestandApplianceIcon = lazyNavIcon('FreestandApplianceIcon');
export const GasRangeIcon = lazyNavIcon('GasRangeIcon');
export const HobIcon = lazyNavIcon('HobIcon');
export const HomeApplianceIcon = lazyNavIcon('HomeApplianceIcon');
export const IntegeratedApplianceIcon = lazyNavIcon('IntegeratedApplianceIcon');
export const KitchenEqIcon = lazyNavIcon('KitchenEqIcon');
export const KitchenEqRepairIcon = lazyNavIcon('KitchenEqRepairIcon');
export const KitchenEquipmentAMCIcon = lazyNavIcon('KitchenEquipmentAMCIcon');
export const KitchenEquipmentIcon = lazyNavIcon('KitchenEquipmentIcon');
export const MeatGrinderIcon = lazyNavIcon('MeatGrinderIcon');
export const ovenIcon = lazyNavIcon('ovenIcon');
export const PcbBoardIcon = lazyNavIcon('PcbBoardIcon');
export const RefrigerationIcon = lazyNavIcon('RefrigerationIcon');
export const SmallApplianceIcon = lazyNavIcon('SmallApplianceIcon');
export const VacuumIcon = lazyNavIcon('VacuumIcon');
export const WashingMachineIcon = lazyNavIcon('WashingMachineIcon');
export const CommercialRefrigerationIco = lazyNavIcon('CommercialRefrigerationIco');
export const ComercialcoffeeIcon = lazyNavIcon('ComercialcoffeeIcon');
export const CookingEquipmentServiceIcon = lazyNavIcon('CookingEquipmentServiceIcon');
export const IceMachineIcon = lazyNavIcon('IceMachineIcon');
export const AmcAcIcon = lazyNavIcon('AmcAcIcon');
