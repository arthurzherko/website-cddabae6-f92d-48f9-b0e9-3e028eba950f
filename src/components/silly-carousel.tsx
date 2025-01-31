import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";
import { type ReactNode } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface SillyCarouselProps {
  items: ReactNode[];
}

export function SillyCarousel({ items }: SillyCarouselProps) {
  if (!items.length) {
    return (
      <Typography.P className="text-center text-muted-foreground">
        Нет элементов для отображения
      </Typography.P>
    );
  }

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious>
        <FaArrowLeft />
      </CarouselPrevious>
      <CarouselNext>
        <FaArrowRight />
      </CarouselNext>
    </Carousel>
  );
}