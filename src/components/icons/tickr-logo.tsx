import { DetailedHTMLProps, HTMLAttributes } from "react";

export function TickrLogo(
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
          fill="url(#paint0_linear_47_74)"
        />
        <path
          d="M82.0371 132.928H63.6051V61.3403H40V46H105.642V61.3403H82.0371V132.928ZM129.124 65.2051C130.035 65.2051 131.086 65.2645 132.275 65.3835C133.504 65.4627 134.495 65.5816 135.248 65.7403L133.88 82.7454C133.286 82.5472 132.433 82.4084 131.324 82.3291C130.253 82.2102 129.322 82.1507 128.529 82.1507C126.19 82.1507 123.911 82.448 121.691 83.0426C119.511 83.6372 117.549 84.6084 115.805 85.9561C114.061 87.2642 112.673 89.0083 111.643 91.1885C110.652 93.329 110.156 95.9649 110.156 99.0965V132.928H92.0214V66.4537H105.756L108.432 77.6319H109.324C110.632 75.3724 112.257 73.3113 114.199 71.4483C116.181 69.5456 118.421 68.0393 120.918 66.9293C123.455 65.7798 126.19 65.2051 129.124 65.2051ZM119.189 124.426C119.189 120.7 120.2 118.084 122.222 116.577C124.283 115.071 126.76 114.318 129.654 114.318C132.468 114.318 134.886 115.071 136.908 116.577C138.969 118.084 140 120.7 140 124.426C140 127.993 138.969 130.57 136.908 132.155C134.886 133.741 132.468 134.534 129.654 134.534C126.76 134.534 124.283 133.741 122.222 132.155C120.2 130.57 119.189 127.993 119.189 124.426Z"
          fill="url(#paint1_linear_47_74)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_47_74"
            x1="90"
            y1="180"
            x2="90"
            y2="-6.70552e-07"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0C0869" />
            <stop offset="1" stop-color="#102ACF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_47_74"
            x1="90"
            y1="46"
            x2="90"
            y2="134.534"
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
