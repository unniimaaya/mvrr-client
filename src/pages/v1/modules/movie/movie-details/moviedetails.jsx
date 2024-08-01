import "./moviedetails.scss";
import img1 from "../../../../../assets/images/mobimg1.jpg";
import Card from "../../../../../components/card/card";
function MovieDetails() {
  return (
    <>
    <div className="moviedetails">
      <div className="section1">
    
      </div>
      <div className="section2">
        <div className="movie-card">
          <div className="movie-info">
            <h1 >
              Despicable Me 4 <span>2024</span>
            </h1>
            <div className="tags">
              <span className="tag">Animation</span>
              <span className="tag">Adventure</span>
              <span className="tag">Comedy</span>
            </div>
            <p>
              Gru, Lucy, Margo, Edith, and Agnes welcome a new member to the
              family. Gru Jr., who is intent on tormenting his dad. Gru faces a
              new nemesis in Maxime Le Mal and his girlfriend Vlslentina, and
              the family is forced to go on the run.
            </p>

            <div className="movie_directors">
              <div className="director_name">
              <h5>Director</h5>
              </div>
              <div className="director">
                <img src={img1} alt="Director 1" />
                <p>Chris Renaud</p>
              </div>
            </div>

            <div className="movie_actors">
            <div className="actor_name">
              <h5>Artists</h5>
              </div>
            

            <div className="artists">
              <div className="artist_details">
                <img src={img1} alt="Actor 1" />
                <p>
                  Steve Carell
                  <br />
                  <span>as Gru</span>
                </p>
              </div>
              <div className="artist_details">
                <img src={img1} alt="Actor 2" />
                <p>
                  Kristen Wiig
                  <br />
                  <span>as Lucy Wilde</span>
                </p>
              </div>
              <div className="artist_details">
                <img src={img1} alt="Actor 3" />
                <p>
                  Miranda Cosgrove
                  <br />
                  <span>as Margo</span>
                </p>
              </div>
            </div>
            </div>

            <div className="release-date">
              <h5>Released Date</h5>
               <span>05 Jul 2024</span>
            </div>
          
          </div>
          <div className="movie-poster">
            <img src={img1} alt="Despicable Me 4 Poster" />
            <div className="actions">
              <button className="download">Download</button>
              <button className="upload">Upload</button>
            </div>
          </div>
        </div>
      
      </div>
      <div className="section3"> </div>
      </div>
      <div className="movie_images_container">
      <div className="movie_images_cards">
              <Card className="item1" cardimg={img1} cardtitle="title" />
              <Card cardimg={img1} cardtitle="title" />
              <Card cardimg={img1} cardtitle="title" />
              <Card cardimg={img1} cardtitle="title" />
              <Card cardimg={img1} cardtitle="title" />
              <Card cardimg={img1} cardtitle="title" />
              <Card cardimg={img1} cardtitle="title" />
              <Card cardimg={img1} cardtitle="title" />
              <Card cardimg={img1} cardtitle="title" />
            </div>
            <div className="movie_images_catgories"></div>
      </div>
    </>
  );
}
export default MovieDetails;
