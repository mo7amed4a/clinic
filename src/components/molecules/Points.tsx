
import {  CustomCarousel } from "../ui/CustomCarousel";
import { CarouselItem } from "../ui/carousel";
import { CardForPoint } from "./CardForPoint";

export default function Points() {

  return (
    <CustomCarousel title="Points">
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <CardForPoint />
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <CardForPoint />
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <CardForPoint />
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <CardForPoint />
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <CardForPoint />
    </CarouselItem>
  </CustomCarousel>
  );
}
