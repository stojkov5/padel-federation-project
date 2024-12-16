import { Card, Col, Row } from "antd";
import { useRef } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

const cards = [
  {
    image: "/images/Tournament/first-card.png",
    title: "National Padel ",
    type: "Championship",
    date: "Yearly, every August",
    location: "Skopje",
    category: "All",
  },
  {
    image: "/images/Tournament/second-img.jpg",
    title: "National Club ",
    type: "League",
    date: "March-November",

    category: "All",
  },
  {
    image: "/images/Tournament/third-img.jpg",
    title: "National Junior ",
    type: "League",
    date: "March-November",

    category: "All",
  },
  {
    image: "/images/Tournament/first-card.png",
    title: "Regional Open ",
    type: "Tournaments",
    date: "Every two months",
    location: "Skopje",
    category: "All",
  },
  {
    image: "/images/Tournament/second-img.jpg",
    title: "National Veteran ",
    type: "Championship",
    date: "Every July",
    location: "Different locations",
    category: "Senior",
  },
  {
    image: "/images/Tournament/third-img.jpg",
    title: "National Festival and ",
    type: "Exhibition Competitions",
    date: "Every May",
    location: "Skopje",
    category: "All",
  },
  {
    image: "/images/Tournament/first-card.png",
    title: "International ",
    type: "Invitational Tournament",
    date: "Every September",
    location: "Skopje",
    category: "Top 8 and guests",
  },
  {
    image: "/images/Tournament/second-img.jpg",
    title: "Women's National ",
    type: "Padel Cup",
    date: "Every April",
    location: "Skopje",
    category: "Women",
  },
  {
    image: "/images/Tournament/third-img.jpg",
    title: "Mixed Doubles ",
    type: "Championship",
    date: "Every June",
    category: "Doubles-Male and Female",
  },
  {
    image: "/images/Tournament/third-img.jpg",
    title: "Regional youth ",
    type: "development camps",
    date: "June-August",
    location: "Skopje",
    category: "Junior",
  },
];

const TournamentCard = () => {
  const scrollContainerRef = useRef(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const onMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft = scrollContainerRef.current.scrollLeft;
  };

  const onMouseLeaveOrUp = () => {
    isDragging = false;
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed here
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="scroll-container"
      ref={scrollContainerRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeaveOrUp}
      onMouseUp={onMouseLeaveOrUp}
    >
      <Row className="card-row" gutter={16}>
        {cards.map((card, index) => (
          <Col key={index} lg={7} xs={24}>
            <Card className="card h-full relative overflow-hidden">
              <img
                className="card-img object-cover w-full h-full"
                src={card.image}
                alt=""
              />
              <div className="card-content w-full h-full absolute  left-0 top-0  p-3 m-0">
                <div className="d-flex flex-col ">
                  <h3 className="d-flex t-card-title justify-between">
                    {card.title} <IoArrowUpCircleOutline className="arrow" />
                  </h3>
                  <h3 className="t-card-title">{card.type}</h3>
                  <div className=" blur-background ">
                    <span className="t-card-date  ">{card.date}</span>
                  </div>

                  <p className="text-right t-card-cat ">Category</p>
                  <div className="d-flex justify-between">
                    <p className="t-card-location">{card.location}</p>
                    <p className="t-card-category"> {card.category} </p>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TournamentCard;
