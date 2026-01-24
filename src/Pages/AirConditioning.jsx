import BreadCumb from "../Components/Common/BreadCumb";
import AirConditioningCatg from "../Components/Services/aircondtioning/AirConditioningCatg";

const AirConditioning = () => {
 
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-service-in-dubai-desktop-faj.avif"
        mobileBgImg="img/banners/ac-service-in-dubai-mobile-faj.avif"
        Title="Ac Service in Dubai"
      ></BreadCumb>
      <AirConditioningCatg />
    </div>
  )
}

export default AirConditioning