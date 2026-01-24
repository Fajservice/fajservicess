import React from 'react'
import CoffeeMachineCatg from '../Components/Services/coffeemachine/CoffeeMachineCatg'

const CoffeeMachine = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-service-in-dubai-desktop-faj.avif"
        mobileBgImg="img/banners/ac-service-in-dubai-mobile-faj.avif"
        Title="Ac Service in Dubai"
      ></BreadCumb>
      <CoffeeMachineCatg />
    </div>
  )
}

export default CoffeeMachine