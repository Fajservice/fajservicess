import { useEffect, useState } from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import AirConditioningCatg from "../Components/Services/aircondtioning/AirConditioningCatg";

const AirConditioning = () => {
  const [ServicesPageData, setServicesPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/ServicesPageContent.json`);
        const data = await response.json();
        setServicesPageData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="serviceDetails">
      <BreadCumb></BreadCumb>
      <AirConditioningCatg />
    </div>
  )
}

export default AirConditioning