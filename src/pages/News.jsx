import Gallery from "../components/Gallery";
import NewsComponent from "../components/NewsPage/NewsComponent";
import Sponsors from "../components/LandingPage/Sponsors";
import Clubs from "../components/LandingPage/Clubs";
const News = () => {
  return (
    <div>
      <NewsComponent />
      <Gallery />
      <Clubs />
      <Sponsors />
    </div>
  );
};

export default News;
