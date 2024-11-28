"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export function CustomCarouselForTravel({
  children,
}: {
  children: React.ReactNode;
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
      // console.log(index);

      api.scrollTo(index);
    }
  };

  return (
    <div className="md:grid md:grid-cols-8 w-full">
      <div className="md:col-span-2 py-2 space-y-4 text-start text-sm text-muted-foreground">
        <h1 className="text-xl md:text-3xl font-bold text-primary">
          {"mkkm"}
        </h1>
        <p className="md:text-lg text-gray-400 font-bold">
          {"dmk"}
        </p>
        <div className="flex gap-x-4">
          <Button
            color="primary"
            variant={"outline"}
            size={"icon"}
            className="size-14 rounded-full text-xl ltr:rotate-180"
            onClick={() => handleDotClick(current - 2)}
          >
            <MdOutlineArrowRightAlt />
          </Button>
          <Button
            color="primary"
            variant={"outline"}
            size={"icon"}
            className="size-14 rounded-full text-xl"
            onClick={() => handleDotClick(current + 1)}
          >
            <MdOutlineArrowRightAlt className="rtl:rotate-180" />
          </Button>
        </div>
      </div>
      <Carousel
        setApi={setApi}
        className="w-full md:col-span-6"
        opts={{ loop: true, direction: "ltr" }}
      >
        <CarouselContent className="flex">{children}</CarouselContent>
      </Carousel>
    </div>
  );
}
