import { placeholderForFutureErrorLogText } from "../placeholder";
import { XNGSlide } from "../types/slide";

export interface IXNGSlideshow {
  view: number;
  slides: XNGSlide[];
}
export function XNGSlideshow(props: IXNGSlideshow) {
  const slide = props.slides.find((s) => s.id === props.view);
  if (slide === undefined) throw new Error(placeholderForFutureErrorLogText);

  return slide.content;
}
