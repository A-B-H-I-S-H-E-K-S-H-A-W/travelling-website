import { AnimatedTestimonials } from "../ui/animated-testimonials";

export function AnimatedImages() {
  const testimonials = [
    {
      src: "/src/assets/images/bg.jpg",
    },
    {
      src: "/src/assets/images/bg_1.jpg",
    },
    {
      src: "/src/assets/images/bg_2.jpg",
    },
    {
      src: "/src/assets/images/bg_3.jpg",
    },
    {
      src: "/src/assets/images/bg_4.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
