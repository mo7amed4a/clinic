"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "./button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function CustomCarousel({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="mx-auto">
      <div className="py-2 flex justify-between text-center text-sm text-muted-foreground">
        <div></div>
        <div
          className="w-full text-center mt-5"
          data-aos="fade-right"
          data-aos-duration="5000"
        >
          <h3 className="text-[2rem] font-bold text-main">{title}</h3>
          <div className="flex w-full items-center justify-center pb-5">
            <img src="/media/icons/icon/section-img.png" alt="" />
          </div>
        </div>
        <div className="flex justify-center gap-x-2">
          <Button
            onClick={() => handleDotClick(current - 2)}
            size="icon"
            className="bg-transparent rounded-full bg-gray-100 text-main hover:bg-main hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />{" "}
          </Button>
          <Button
            onClick={() => handleDotClick(current + 1)}
            size="icon"
            className="bg-transparent rounded-full bg-gray-100 text-main hover:bg-main hover:text-white"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ loop: true, direction: "ltr" }}
      >
        <CarouselContent className="flex">{children}</CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
