
import Breadcrumb from '../Components/Common/BreadCumb'
import CoffeeMachineCatg from '../Components/Services/coffeemachine/CoffeeMachineCatg'

const CoffeeMachine = () => {
  return (
    <div className="serviceDetails">
      <Breadcrumb />
        bgImg="img/banners/ac-service-in-dubai-desktop-faj.avif"
        mobileBgImg="img/banners/ac-service-in-dubai-mobile-faj.avif"
        Title="Ac Service in Dubai"
      <CoffeeMachineCatg />
    </div>
  )
}

export default CoffeeMachine