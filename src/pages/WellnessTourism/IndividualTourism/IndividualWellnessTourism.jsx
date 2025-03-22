import React from "react";
import { useParams } from "react-router-dom";
import image02 from "/src/assets/images/medical.webp";
import { trainingDetails } from "../../../data/mockData";
import { IoLocationSharp } from "react-icons/io5";
import { CiShare1 } from "react-icons/ci";
import "./IndividualWellnessTourism.css";
import SelectForm from "../../../components/forms/select";
import InputForm from "../../../components/forms/input";
import useCustomState from "../../../hooks/useCustomState";
import Button from "/src/components/buttons.jsx";
import { IoLogoWhatsapp } from "react-icons/io";

const IndividualPage = () => {
  const [guest, setGuest] = useCustomState("");

  const handleGuestCount = (value) => {
    setGuest(value);
  };

  const { id } = useParams();
  const tourismDetail = trainingDetails.find((item) => item.id === Number(id));

  return (
    <div className=" mx-15 mr-15">
      <div className="tourismHeadImg">
        <div className="tourismHead">
          <h1>{tourismDetail.title}</h1>
          <div className="tourismRateShare">
            <div className="reviews">
              <div className="reviewsRate">
                <div className="star">
                  <img src={image02} alt="star" />
                </div>
                <div className="reviewsValue">
                  <p className="reviewsRating">{tourismDetail.rating.score}</p>
                  <p>({tourismDetail.rating.reviews} reviews)</p>
                </div>
              </div>
              <div className="reviewsLocation mx-50">
                <IoLocationSharp className="reviewsIcon" />
                <p>{tourismDetail.location}</p>
              </div>
            </div>
            <div className="tourismShare">
              <CiShare1 />
              <p>share</p>
            </div>
          </div>
        </div>
        <div className="tourismImg">
          <div className="tourismFirstImg">
            <img
              src={tourismDetail.images[0].src}
              alt={tourismDetail.images[0].alt}
            />
          </div>
          <div className="tourismSecondImg">
            {tourismDetail.images.slice(1, 5).map((image, index) => (
              <div className="viewMoreOverlay" key={index}>
                <img key={index} src={image.src} alt={image.alt} />
                {index === 3 && (
                  <div className="overlay">
                    <Button
                      className="overlayBtn"
                      label="View More"
                    // onClick={() => setModalOpen(true)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="tourismDescContainer">
        <div className="tourismDesc shadow-2xl p-5 ">
          <div className="tourismDescAlign">
            <div className="tourismMainDesc ">
              <h1 className="text-3xl ">{tourismDetail.mainDescHead}</h1>
              <p className="text-[20px] leading-relaxed">{tourismDetail.mainDesc}</p>
            </div>
            {tourismDetail.description.map((item, index) => (
              <div className="tourismSubContent" key={index}>
                <h5>{item.title}</h5>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="priceInfo">
          <div className="priceInfoAlign">
            <h6>{tourismDetail.pricing.pricePerPerson} / Person</h6>
            <div className="checkInDetail">
              <div className="gridCheck">
                <InputForm
                  type="date"
                  className="inputCheck"
                  label="CHECK-IN"
                />
              </div>
              <div className="gridCheck">
                <InputForm
                  type="date"
                  className="inputCheck"
                  label="CHECK-OUT"
                />
              </div>
              <div className="gridCheck">
                <SelectForm
                  value={guest}
                  options={tourismDetail.booking}
                  onChange={handleGuestCount}
                  label="GUESTS"
                  className="selectCheck"
                />
              </div>
            </div>
            <div className="taxDetails">
              {tourismDetail.pricing.breakdown.map((item, index) => (
                <div key={index} className="taxDetailInfo">
                  <p>{item.label}</p>
                  <p
                    className={
                      item.label === "Weekly discount" ? "taxColor" : ""
                    }
                  >
                    {item.amount}
                  </p>
                </div>
              ))}
            </div>
            <div className="priceTotal">
              <p>Total</p>
              <p>{tourismDetail.pricing.totalCost}</p>
            </div>
            <div className="priceBtns">
              <div className="priceBtn">
                <Button label="Reserve" />
              </div>
              <div className="priceBtn">
                <IoLogoWhatsapp className="priceWhatsappIcon" />
                <Button label="Chat Support" />
              </div>
            </div>
            <p className="priceLastText">You won’t be charged yet</p>
          </div>
        </div>
      </div>

      <div className="w-full mb-15">
        <h1 className="text-3xl mb-8">Where you'll be</h1>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15555.821358092993!2d80.2193408!3d12.910592!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1740396334607!5m2!1sen!2sin"
            height="500"
            width="1780"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer"
            title="TourismMap"
          ></iframe>
        </div>
        <h3 className="mt-8 text-3xl">{tourismDetail.hospital}, location</h3>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat
          quisquam inventore. Aspernatur dolore numquam soluta, voluptatibus ut
          non natus!
        </p>
      </div>
    </div>
  );
};

export default IndividualPage;
