"use client";

import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import Card from "./Card";

const imgsrc =
  "https://plus.unsplash.com/premium_photo-1672256330854-98c717493128?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const title = "Mechanic";
const detail =
  "A card component has a figure, a body part, and inside body there are title and actions parts";

const cards = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  img: imgsrc,
  title,
  detail,
}));

export default function CardSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: -75,
    },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: -125 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: -175 } },
      "(min-width: 1280px)": { slides: { perView: 4, spacing: -600 } },
    },
    loop: false,
    mode: "free-snap",
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  const scrollPrev = () => slider?.current?.prev();
  const scrollNext = () => slider?.current?.next();
  const totalSlides = slider?.current?.track.details.slides.length || 0;

  return (
    <div className="relative w-full mx-auto">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {cards.map((card) => (
          <div key={card.id} className="keen-slider__slide py-8 px-2">
            <Card img={card.img} title={card.title} detail={card.detail} />
          </div>
        ))}
      </div>

      {/* Conditional Navigation Buttons */}
      {currentSlide > 0 && (
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-neutral-content bg-neutral/40 p-3 rounded-2xl shadow hover:bg-neutral/80 transition"
        >
          ◀
        </button>
      )}
      {currentSlide < totalSlides - slider?.current?.options.slides?.perView! && (
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-7 -translate-y-1/2 text-neutral-content bg-neutral/40 p-3 rounded-2xl shadow hover:bg-neutral/80 transition"
        >
          ▶
        </button>
      )}
    </div>
  );
}
