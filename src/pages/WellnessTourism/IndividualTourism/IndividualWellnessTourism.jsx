import React from "react";
import { useParams } from "react-router-dom";
import image02 from "/src/assets/images/medical.webp";
import { trainingDetails } from "../../../data/mockData";
// import images  from "/../src/assets";
// import { IoLocationSharp } from "react-icons/io5";
// import { CiShare1 } from "react-icons/ci";
import "./IndividualWellnessTourism.css";
// import SelectForm from "../../../components/forms/select";
// import InputForm from "../../../components/forms/input";
import useCustomState from "../../../hooks/useCustomState";
// import Button from "../../../components/common/buttons";
// import { IoLogoWhatsapp } from "react-icons/io";
// import Modal from "../../../components/common/modal";
import { headSubHead } from "../../../data/constants";
// import RelatedTourPack from "../../../components/common/relatedTourPack";

const IndividualPage = () => {
  const [guest, setGuest] = useCustomState("");

  const [isModalOpen, setModalOpen] = useCustomState(false);

  const handleGuestCount = (value) => {
    setGuest(value);
  };

  const { id } = useParams();
  const tourismDetail = trainingDetails.find((item) => item.id === Number(id));

  if (!tourismDetail) return <p>Package Not Found.</p>;

  const relatedTours = trainingDetails.filter((item) => item.id !== tourismDetail.id && (item.location === tourismDetail.location || item.treatment === tourismDetail.treatment));

  return (
    <div className="container">
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
              <div className="reviewsLocation">
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
                      onClick={() => setModalOpen(true)}
                    />
                  </div>
                )}
              </div>
            ))}

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
              <div className="modalImages">
                {tourismDetail.images.map((image, index) => (
                  <img key={index} src={image.src} alt={image.alt} />
                ))}
              </div>
            </Modal>
          </div>
        </div>
      </div>

      <div className="tourismDescContainer">
        <div className="tourismDesc">
          <div className="tourismDescAlign">
            <div className="tourismMainDesc">
              <h4>{tourismDetail.mainDescHead}</h4>
              <p>{tourismDetail.mainDesc}</p>
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

      <div className="whereYou">
        <h2>Where you'll be</h2>
        <div className="whereYouMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15555.821358092993!2d80.2193408!3d12.910592!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1740396334607!5m2!1sen!2sin"
            height="480"
            style={{ border: 0, borderRadius: "4px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer"
            title="TourismMap"
          ></iframe>
        </div>
        <h3>{tourismDetail.hospital}, location</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat
          quisquam inventore. Aspernatur dolore numquam soluta, voluptatibus ut
          non natus!
        </p>
      </div>

        <div className="relatedTourHead">
          <p className="head">{headSubHead.relatedTourPack.head}</p>
          <p className="subHead">{headSubHead.relatedTourPack.subHead}</p>
        </div>
      <div className="relatedTourPack">
        {relatedTours.length > 0 && (<RelatedTourPack relatedTours = {relatedTours} />)}
      </div>
    </div>
  );
};

export default IndividualPage;
