// import { wellnessData } from "../data/constants";
import "/src/components/wellnessCardComp/wellnessCard.jsx"

function WellnessCard({ title, rating, reviews, country, price, discount, duration, persons }) {

    return (

        <div className="results-container">
              <div className="result-card">
                <div className="result-details">
                  <h3>{title}</h3>
                  <p>⭐ {rating} ({reviews} reviews) • {country}</p>
                  <div className="hospital-images">
                    {/* {images.map((img, idx) => (
                    <img key={idx} src={img} alt="Hospital" />
                    ))} */}
                  </div>
                  <p className="description">Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="price-container">
                  <div>
                    <p className="price">{price}</p>
                    <span className="discount">{discount}</span>
                    <p className="duration">{duration}</p>
                    <p className="person">{persons}</p>
                  </div>
                  <button className="explore-btn">Explore Package</button>
                </div>
              </div>
        </div>
    );
}
export default WellnessCard ;