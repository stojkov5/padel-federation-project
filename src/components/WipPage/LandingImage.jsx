import "../../styles/Wip-Landing.css";
const LandingImage = () => {
  return (
    <div className="image-container">
      <img
        style={{ width: "100%",height: "100%", objectFit: "cover" }}
        className="landing-image"
        src="/images/WIP/Wip-Landing.jpg"
        alt="Landing Image"
      />
    </div>
  );
};
export default LandingImage;
