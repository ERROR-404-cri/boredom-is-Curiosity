export const AccessibilityIcon = (props: { strokeColor: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props?.strokeColor}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-truck"
  >
    <rect x="1" y="3" width="15" height="13"></rect>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
    <circle cx="5.5" cy="18.5" r="2.5"></circle>
    <circle cx="18.5" cy="18.5" r="2.5"></circle>
  </svg>
);

export const ActivityIcon = (props: { strokeColor: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props?.strokeColor}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-activity"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

export const KeyIcon = (props: { strokeColor: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props?.strokeColor}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-key"
  >
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
  </svg>
);

export const LinkIcon = (props: { strokeColor: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props?.strokeColor}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-link-2"
  >
    <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

export const ParticipantsIcon = (props: { strokeColor: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props?.strokeColor}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-user"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export const PriceIcon = (props: { strokeColor: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props?.strokeColor}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-dollar-sign"
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

export const TypeIcon = (props: { strokeColor: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props?.strokeColor}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-flag"
  >
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
    <line x1="4" y1="22" x2="4" y2="15"></line>
  </svg>
);

export const FilterIcon = (props: { strokeColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props?.strokeColor || "teal"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-filter"
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

export const LikeIcon = (props: { strokeColor: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props?.strokeColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-heart"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

export const ShareIcon = (props: { strokeColor: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props?.strokeColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-share"
  >
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
    <polyline points="16 6 12 2 8 6"></polyline>
    <line x1="12" y1="2" x2="12" y2="15"></line>
  </svg>
);

export const FilledLikeIcon2 = (props: { strokeColor: string }) => (
  <svg
    fill={props?.strokeColor || "#ff6347"}
    width="24px"
    height="24px"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    stroke={props?.strokeColor || "#ff6347"}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M30.943 8.494c-0.816-2.957-3.098-5.239-5.994-6.040l-0.060-0.014c-0.651-0.159-1.399-0.25-2.169-0.25-2.624 0-5 1.062-6.722 2.779l0-0c-1.558-1.505-3.682-2.433-6.023-2.433-0.77 0-1.516 0.1-2.226 0.288l0.060-0.014c-3.104 0.882-5.499 3.277-6.365 6.317l-0.016 0.065c-0.171 0.648-0.269 1.393-0.269 2.16 0 2.588 1.117 4.915 2.896 6.525l0.008 0.007 11.381 12.619c0.138 0.153 0.336 0.248 0.557 0.248s0.419-0.095 0.556-0.247l0.001-0.001 11.369-12.605c2.002-1.789 3.256-4.379 3.256-7.261 0-0.759-0.087-1.498-0.252-2.208l0.013 0.066z"></path>{" "}
    </g>
  </svg>
);

export const getSvgIconComponent = (
  key: string,
  props: { strokeColor: string }
) => {
  switch (key) {
    case "participants":
      return <ParticipantsIcon {...props} />;

    case "price":
      return <PriceIcon {...props} />;

    case "accessibility":
      return <AccessibilityIcon {...props} />;

    case "type":
      return <TypeIcon {...props} />;

    case "like":
      return <LikeIcon {...props} />;

    case "filledLike":
      return <FilledLikeIcon2 {...props} />;

    case "share":
      return <ShareIcon {...props} />;

    default:
      return null;
  }
};
