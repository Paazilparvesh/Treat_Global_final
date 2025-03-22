import "/src/components/wellnessCardComp/wellnessCard.jsx";
import { Icon } from "@iconify/react";
import mayoClinic from "/src/assets/images/mayoClinic.jpg";
import logo from "/src/assets/images/Label.png";
import clock from "/src/assets/svg/Vector.svg";
import person from "/src/assets/svg/person.svg";
import hospital from "/src/assets/images/hospital.webp";
import routesPath from "/src/routes/routesPath.jsx";
import { wellnessData } from "../../data/constants";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Wellness Card",
    image: { mayoClinic, hospital }
  },
];

const start = [
  {
    logoImage: logo,
  },
];

function WellnessCard({ title, rating, reviews, country, price, duration, persons }) {
  return (
    <div className=" bg-white rounded-3xl p-8 mb-3 flex items-center justify-between gap-3">
      <div className="bg-white">
        <h3 className="text-[24px] font-manrope font-extrabold">{title}</h3>
        <div className="flex items-center gap-1">
          <Icon
            icon="mdi:star"
            height={25}
            width={25}
            className="text-yellow-500"
          />
          <p className="text-[14px] font-bold font-manrope">{rating}</p>
          <p className="text-[14px] font-manrope text-gray-500">
            ({reviews} reviews)
          </p>
          <Icon
            icon="mdi:location"
            height={28}
            width={28}
            className="text-gray-500"
          />
          <p className="text-[16px] font-medium font-manrope text-gray-600">
            {country}
          </p>
        </div>
        <div>
          {data.map((item, index) => {
            return (
              <div className="flex gap-[15.34px] mt-5" key={index}>
                <img
                  src={item.image.mayoClinic}
                  alt=""
                  className="w-[200px] h-[200px] rounded-xl"
                />
                <img
                  src={item.image.hospital}
                  alt=""
                  className="w-[200px] h-[200px] rounded-xl"
                />
                <img
                  src={item.image.mayoClinic}
                  alt=""
                  className="w-[200px] h-[200px] rounded-xl"
                />
                <img
                  src={item.image.hospital}
                  alt=""
                  className="w-[200px] h-[200px] rounded-xl"
                />
              </div>
            );
          })}
        </div>
        <div className="w-[900px] text-[14px] font-medium">
          <h1 className="mt-2 text-[26px]">Description</h1>
          <p className=" mt-2 text-[16px] text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos minima fuga vitae eos modi nobis ex provident reiciendis
            tenetur explicabo unde reprehenderit doloremque quia perferendis,
            obcaecati facere! Cupiditate mollitia, voluptas ducimus alias vero,
            inventore est debitis, asperiores sed placeat ab?
          </p>
        </div>
      </div>
      <div
        className="w-[350px] h-[430px] bg-[#F1F4FB] p-5 rounded-xl relative"
        id="box"
      >
        <div className="text-[26px] flex items-center gap-1">
          <Icon icon="mdi:currency-inr" width={30} height={30}></Icon>
          <p className="text-[26px] font-bold">{price}</p>
          <p className="text-[16px]">/ Total</p>
          <h1></h1>
          <div className="absolute top-0 right-6">
            {start.map((item) => {
              return (
                <div>
                  <img src={item.logoImage} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-3 mt-5 flex gap-1.5 items-center">
          <img src={clock} className="w-[25px] h-[25px]" />
          <p className="text-[18px]  text-gray-500">{duration}</p>
        </div>
        <div className="p-3 flex gap-1.5 items-center ">
          <img src={person} />
          <p className="text-[18px] text-gray-500">{persons}</p>
        </div>
        <Link to={`${routesPath.WELLNESS_TOURISM_ID.replace(":id", wellnessData[0].id)}`}>
          <button
            className="bg-[#3D77F6] rounded-[50px] mt-40 w-full"
            style={{
              padding: "12px 38px 12px 38px",
              color: "white",
              fontSize: "24px",
              fontWeight: "700px",
            }}
          >
            Explore Package
          </button>
        </Link>
      </div>
    </div>
  );
}
export default WellnessCard;
