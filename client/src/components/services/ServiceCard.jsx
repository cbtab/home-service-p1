import { useService } from "../../contexts/services";
import { useEffect, useState } from "react";

const ServiceCard = (props) => {
  const [servicesList, setServicesList] = useState(null);
  const service = useService();

  useEffect(() => {
    setServicesList(service.services);
  }, [service]);
  console.log(servicesList);

  let displayedServices = [];

  if (props.number) {
    displayedServices = servicesList ? servicesList.slice(0, props.number) : [];
  } else {
    displayedServices = servicesList || [];
  }

  return (
    <div className="flex flex-row justify-center items-center h-full ">
      {displayedServices.map((name, index) => {
        return (
          <div
            key={index}
            className="h-[370px] w-[350px] bg-utils-white mx-5 rounded-[8px] bg-no-repeat bg-contain "
            style={{
              backgroundImage: `url(${name.service_image})`,
            }}
          >
            <div className="h-[200px]"></div>
            <div className="ml-5 mt-5 ">
              <div className="font-Prompt text-blue-800 text-[12px] font-[400px] leading-[18px] bg-blue-100 py-[4px] px-[10px] w-[80px] rounded-lg">
                {name.service_type}
              </div>
              <div className="font-Prompt text-[20px] font-[500] leading-[30px] text-grey-950 my-1">
                {name.service_name}
              </div>
              <div className="flex flex-row items-center">
                <img src="https://kpxesshawklisjhmjqai.supabase.co/storage/v1/object/sign/dev-storage/icon/sell_black_24dp%201.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXYtc3RvcmFnZS9pY29uL3NlbGxfYmxhY2tfMjRkcCAxLnN2ZyIsImlhdCI6MTY5NDg2MTI2NiwiZXhwIjoxNzI2Mzk3MjY2fQ.Z66mFTPf1zOc3Hh5KHWDBFphrEvXb8qPljt6qnyU9b0&t=2023-09-16T10%3A47%3A46.537Z"></img>
                <p className="ml-1 font-Prompt text-grey-700 text-[14px] font-[400] leading-[21px] my-1">
                  ค่าบริการประมาณ
                </p>
              </div>
              <div className="font-Prompt underline text-blue-600 pt-3 cursor-pointer">
                เลือกบริการ
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;
