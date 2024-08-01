import Navbar from "../../../components/navbar/navbar";
import HomeImg from "../../../assets/images/spider.jpg";
import "./home.scss";
import Card from "../../../components/card/card";
import img1 from "../../../assets/images/mobimg1.jpg";
import img2 from "../../../assets/images/lkimg.jpg";
import img3 from "../../../assets/images/mobimg2.jpeg";
import img4 from "../../../assets/images/mobimg1.jpg";
import img5 from "../../../assets/images/mobimg4.jpeg";
import img6 from "../../../assets/images/mobimg5.jpeg";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div
          className="container"
          style={{ backgroundImage: `url(${HomeImg})` }}
        >
          <div className="heading_section">
            <h1>Movie Rating & Reviews</h1>
          </div>

          <div className="search_box">
            <input
              type="text"
              placeholder="Search movies"
              className="input_style"
            />
          </div>
          <div className="totalwidth_container">
            <div className="card_left-container"></div>
            <div className="card_container ">
              <Card className="item1" cardimg={img1} cardtitle="title" />
              <Card cardimg={img2} cardtitle="title" />
              <Card cardimg={img3} cardtitle="title" />
              <Card cardimg={img4} cardtitle="title" />
              <Card cardimg={img5} cardtitle="title" />
              <Card cardimg={img6} cardtitle="title" />
              <Card cardimg={img6} cardtitle="title" />
              <Card cardimg={img6} cardtitle="title" />
              <Card cardimg={img6} cardtitle="title" />
              <Card cardimg={img6} cardtitle="title" />
            </div>
            <div className="card_right-container"></div>
          </div>
        </div>

        <div className="container_second">
          <h2 className="recentmovies">Most Recent Movies</h2>
          <div className="totalwidth_container">
            <div className="card_left-container"></div>
            <div className="card_container ">
              <Card className="item1" cardimg={img1} cardtitle="title" />
              <Card cardimg={img2} cardtitle="title" />
              <Card cardimg={img3} cardtitle="title" />
              <Card cardimg={img4} cardtitle="title" />
              <Card cardimg={img5} cardtitle="title" />
              <Card cardimg={img6} cardtitle="title" />
              <Card cardimg={img6} cardtitle="title" />
              <Card cardimg={img6} cardtitle="title" />
              <Card cardimg={img6} cardtitle="title" />
              <Card cardimg={img6} cardtitle="title" />
            </div>
            <div className="card_right-container"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
