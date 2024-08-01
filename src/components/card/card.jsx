import "./card.scss";
function Card({ className, cardimg,cardtitle }) {
  return (
    <>
      <div className={`card ${className} `}>
        <div>
          <img src={cardimg} alt="" className="cardimg_style" />
        </div>
        <div className="card-items">
          <h5>{cardtitle} </h5>
        </div>
      </div>
    </>
  );
}
export default Card;
