import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
}

export const HomeIcon: React.FC<IconProps> = ({
  width = 19,
  height = 19,
  fill = "none",
  stroke = "#292928",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 19"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.34655 17.9553H2.98376C1.74494 17.9553 0.741211 16.9516 0.741211 15.7128V9.11598C0.741966 8.6354 0.845406 8.16053 1.0446 7.72318C1.2438 7.28583 1.53415 6.8961 1.89621 6.58008L7.95742 1.3008C8.36557 0.945737 8.88831 0.750183 9.42928 0.750183C9.97026 0.750183 10.493 0.945737 10.9011 1.3008L16.9624 6.5811C17.3243 6.897 17.6146 7.28657 17.8138 7.72374C18.0129 8.1609 18.1165 8.63557 18.1174 9.11598V15.7128C18.1174 16.3074 17.8812 16.8776 17.4609 17.2981C17.0406 17.7187 16.4704 17.9551 15.8758 17.9553H12.7921V11.2287C12.7921 10.3006 12.0398 9.54731 11.1107 9.54731H8.02897C7.09986 9.54731 6.34757 10.3006 6.34757 11.2287L6.34655 17.9553ZM6.34655 17.9553H12.7931"
      stroke={stroke}
      strokeWidth={1.3}
      strokeLinejoin="round"
    />
  </svg>
);
