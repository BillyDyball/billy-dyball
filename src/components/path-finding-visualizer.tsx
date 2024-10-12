import { DetailedHTMLProps, HTMLAttributes } from "react";

export function PathFindingVisualizerLogo(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  return (
    <div {...props}>
      <svg
        height={"100%"}
        width={"100%"}
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="180"
          height="180"
          rx="46"
          fill="url(#paint0_linear_48_131)"
        />
        <path d="M61 140H68.8947V40H61V140Z" fill="#0B0808" />
        <path
          d="M72.3154 88.6842V43.9474C72.3154 43.9474 82.9976 40 89.4207 40C95.8438 40 99.0275 46.3334 105.21 46.5789C110.858 46.8032 119.684 43.9474 119.684 43.9474V88.6842C119.684 88.6842 110.862 91.3158 105.21 91.3158C99.044 91.3158 95.5869 83.4211 89.4207 83.4211C82.7407 83.4211 72.3154 88.6842 72.3154 88.6842Z"
          fill="#FF0404"
        />
        <defs>
          <linearGradient
            id="paint0_linear_48_131"
            x1="90"
            y1="0"
            x2="90"
            y2="180"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#999999" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
