import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BarGraph1 from "../FinalSelection/Bar_graph_example1.png";
import BarGraph2 from "../FinalSelection/Bar_graph_example2.png";
import BarGraph3 from "../FinalSelection/Bar_graph_example3.png";
import BarGraph5 from "../FinalSelection/Bar_graph_example5.png";
import BarGraph6 from "../FinalSelection/Bar_graph_example6.png";
import BarGraph10 from "../FinalSelection/Bar_graph_example10.png";
import Diagram_example1 from "../FinalSelection/Diagram_example1.png";
import Diagram_example2 from "../FinalSelection/Diagram_example2.png";
import Diagram_example3 from "../FinalSelection/Diagram_example3.png";
import Diagram_example4 from "../FinalSelection/Diagram_example4.png";
import Diagram_example6 from "../FinalSelection/Diagram_example6.png";
import Graph_comparison1 from "../FinalSelection/Graph_comparison1.png";
import Graph_example1 from "../FinalSelection/Graph_example1.png";
import Graph_example2 from "../FinalSelection/Graph_example2.png";

import Infographic_example1 from "../FinalSelection/Infographic_example1.png";
import Line_graph_example1 from "../FinalSelection/Line_graph_example1.png";

import Range_graph_example2 from "../FinalSelection/Range_graph_example2.png";
import Scatter_graph_example1 from "../FinalSelection/Scatter_graph_example1.png";
import Scatter_graph_example3 from "../FinalSelection/Scatter_graph_example3.png";

const HorizontalCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    width: "500px",
    textAlign: "center",
  };

  const imagesWithText = [
    {
      image: BarGraph1,
      text: "Description 1",
    },
    {
      image: BarGraph2,
      text: "Description 2",
    },
    {
      image: BarGraph3,
      text: "Description 3",
    },
    {
      image: BarGraph5,
      text: "Description 4",
    },
    {
      image: BarGraph6,
      text: "Description 5",
    },
    {
      image: BarGraph10,
      text: "Description 6",
    },
    {
      image: Diagram_example1,
      text: "Description 7",
    },
    {
      image: Diagram_example2,
      text: "Description 8",
    },
    {
      image: Diagram_example3,
      text: "Description 9",
    },
    {
      image: Diagram_example4,
      text: "Description 10",
    },
    {
      image: Diagram_example6,
      text: "Description 11",
    },
    // Add more images with text
    {
      image: Graph_comparison1,
      text: "Description 12",
    },
    {
      image: Infographic_example1,
      text: "Description 13",
    },
    {
      image: Line_graph_example1,
      text: "Description 14",
    },
    {
      image: Range_graph_example2,
      text: "Description 15",
    },
    {
      image: Scatter_graph_example3,
      text: "Description 16",
    },
    {
      image: Scatter_graph_example1,
      text: "Description 17",
    },
    {
      image: Graph_example1,
      text: "Description 18",
    },
    {
      image: Graph_example2,
      text: "Description 19",
    },
  ];

  return (
    <Slider {...settings}>
      {imagesWithText.map((item, index) => (
        <div className="ImageCarouselDiv" key={index}>
          <img
            className="ImageCarousel"
            src={item.image}
            alt={`Slide ${index}`}
          />
          <p>{item.text}</p>
        </div>
      ))}
    </Slider>
  );
};

export default HorizontalCarousel;
