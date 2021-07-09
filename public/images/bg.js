export default function BG(props) {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f)">
        <path
          d="M37.5 74.035C53.8255 74.035 67.06 60.8005 67.06 44.475C67.06 28.1494 53.8255 14.915 37.5 14.915C21.1745 14.915 7.93999 28.1494 7.93999 44.475C7.93999 60.8005 21.1745 74.035 37.5 74.035Z"
          fill="#FFFC79"
        />
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="7.92338"
          y="14.8984"
          width="59.1532"
          height="59.1532"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.0083011"
            result="effect1_foregroundBlur"
          />
        </filter>
      </defs>
    </svg>
  );
}
