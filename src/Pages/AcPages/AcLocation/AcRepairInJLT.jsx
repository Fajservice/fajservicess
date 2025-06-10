import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJLTDetail from "../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJLTDetail";
const AcRepairInJLT = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in JLT"
      ></BreadCumb>
      <AcRepairInJLTDetail />

    </div>
  )
}

export default AcRepairInJLT
