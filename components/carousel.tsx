import { Carousel } from "@/lib/types";

import Image from "next/image";
import { useState } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useSwipeable } from "react-swipeable";

export default function Carousel({ images }: { images: Carousel }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  return (
    <div
      {...handlers}
      className="w-[350px] h-[250px] sm:w-[400px] sm:h-[350px] sm:mt-10 m-auto relative group"
    >
      <Image
        alt={images[currentIndex].alt}
        src={images[currentIndex].image}
        className="w-full h-full rounded-lg bg-center bg-cover duration-500 object-cover"
      />
      <div>
        <BsChevronCompactLeft
          size={30}
          className="carouselNavigation left-5"
          onClick={prevSlide}
        />
      </div>
      <div>
        <BsChevronCompactRight
          size={30}
          className="carouselNavigation right-5"
          onClick={nextSlide}
        />
      </div>
      <div className="flex justify-center py-2 absolute bottom-0 w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => goToSlide(index)}
          >
            <RxDotFilled
              size={20}
              className={`${
                index === currentIndex ? "text-slate-50" : "text-slate-400"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
