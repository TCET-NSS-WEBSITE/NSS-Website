import "../../styles/home/testimonials.css";
import { useEffect, useState, useRef } from "react";
import ArrowLeft from "../../assets/static_images/arrow-left-solid.svg";
import ArrowRight from "../../assets/static_images/arrow-right-solid.svg";
import { useNavigate } from "react-router-dom";
import { testimonial_cards } from "./asset";
import data from "./data.json"

function TestimonialCard() {
  const [indexCard, setIndexCard] = useState(2);
  const navigate = useNavigate();
  const displayPrev = () => {
    setIndexCard((prev) => {
      if (prev === 0) return testimonial_cards.length - 1;
      return prev - 1;
    });
  };
  const displayNext = () => {
    setIndexCard((prev) => {
      if (prev === testimonial_cards.length - 1) return 0;
      return prev + 1;
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (indexCard === testimonial_cards.length - 1) setIndexCard(0);
      else setIndexCard(indexCard + 1);
    }, 10000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <div className="testimonial-card-container">
        <div
          className="testimonial-card sub-active"
          onClick={() => navigate("../testimonials")}
        >
          <img
            src={
              testimonial_cards[
                indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1
              ].image
            }
            alt={`${
              testimonial_cards[
                indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1
              ].name
            } Testimonial`}
          />
          <p>
            {testimonial_cards[
              indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1
            ].testament.substring(0, 100) + "... Read More"}
          </p>
          <div>
            <h3>
              {
                testimonial_cards[
                  indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1
                ].name
              }
            </h3>
            <h5>
              {
                testimonial_cards[
                  indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1
                ].position
              }
            </h5>
            <p>
              {
                testimonial_cards[
                  indexCard === 0 ? testimonial_cards.length - 1 : indexCard - 1
                ].period
              }
            </p>
          </div>
        </div>
        <div
          className="testimonial-card active-card"
          onClick={() => navigate("../testimonials")}
        >
          <img
            src={testimonial_cards[indexCard].image}
            alt={`${testimonial_cards[indexCard].name} Testimonial`}
          />
          <p>
            {testimonial_cards[indexCard].testament.substring(0, 100) +
              "... Read More"}
          </p>
          <div>
            <h3>{testimonial_cards[indexCard].name}</h3>
            <h5>{testimonial_cards[indexCard].position}</h5>
            <p>{testimonial_cards[indexCard].period}</p>
          </div>
        </div>
        <div
          className="testimonial-card sub-active"
          onClick={() => navigate("../testimonials")}
        >
          <img
            src={
              testimonial_cards[
                indexCard === testimonial_cards.length - 1 ? 0 : indexCard + 1
              ].image
            }
            alt={`${
              testimonial_cards[
                indexCard === testimonial_cards.length - 1 ? 0 : indexCard + 1
              ].name
            } Testimonial`}
          />
          <p>
            {testimonial_cards[
              indexCard === testimonial_cards.length - 1 ? 0 : indexCard + 1
            ].testament.substring(0, 100) + "... Read More"}
          </p>
          <div>
            <h3>
              {
                testimonial_cards[
                  indexCard === testimonial_cards.length - 1 ? 0 : indexCard + 1
                ].name
              }
            </h3>
            <h5>
              {
                testimonial_cards[
                  indexCard === testimonial_cards.length - 1 ? 0 : indexCard + 1
                ].position
              }
            </h5>
            <p>
              {
                testimonial_cards[
                  indexCard === testimonial_cards.length - 1 ? 0 : indexCard + 1
                ].period
              }
            </p>
          </div>
        </div>
      </div>
      <div className="testimonial-scroller">
        <img src={ArrowLeft} alt="Left Arrow" onClick={displayPrev} />
        {testimonial_cards.map((test, idx) => (
          <div
            key={idx}
            className={idx === indexCard ? "selected" : ""}
            onClick={() => setIndexCard(idx)}
          ></div>
        ))}
        <img src={ArrowRight} alt="Right Arrow" onClick={displayNext} />
      </div>
    </>
  );
}

export default function Testimonials() {
  const sliderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (testimonialsRef.current && sliderRef.current) {
        const rect = testimonialsRef.current.getBoundingClientRect();
        setIsVisible((prev) => rect.top <= window.innerHeight - 200 || prev);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`testimonial ${isVisible ? "appear" : ""}`}
      ref={testimonialsRef}
    >
      <h2 className={isVisible ? "testimonials-header" : ""} ref={sliderRef}>
        {data.section6.title}
      </h2>
      <TestimonialCard />
    </div>
  );
}
