import JumboCarousel from "../components/JumboCarousel";
import Tournaments from "../components/Tournaments";
import Clubs from "../components/Clubs";
import Programs from "../components/Programs";
import JoinUs from "../components/JoinUs";
import Sponsors from "../components/Sponsors";
const Landing = () => {
  return (
    <div>
      <JumboCarousel />
      <Tournaments />
      <br />
      <div className="red-line"></div>
      <br />
      <Clubs />
      <br />
      <Programs />
      <br />
      <JoinUs />
      
      <br />
      <Sponsors />
    </div>
  );
};
export default Landing;
