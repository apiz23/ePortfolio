import { HTMLAttributes } from "react";

type SVGIconProps = {
  svg: string;
  className?: string;
};

export default function SVGIcon({ svg, className }: SVGIconProps) {
  return (
    <span
      className={`inline-flex items-center justify-center [&>svg]:w-full [&>svg]:h-full ${className || ""}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}