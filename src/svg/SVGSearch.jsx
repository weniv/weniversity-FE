import React from "react";

export default function SVGSearch(props) {
  const { color, width, height } = props;
  return (
    <svg
      width={width ? width : "40"}
      height={height ? height : "40"}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ fill: `${color ? `var(--${color})` : "var(--grayLv3)"}` }}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 5.5C11.5442 5.5 5.5 11.5442 5.5 19C5.5 26.4558 11.5442 32.5 19 32.5C26.4558 32.5 32.5 26.4558 32.5 19C32.5 11.5442 26.4558 5.5 19 5.5ZM2.5 19C2.5 9.8873 9.8873 2.5 19 2.5C28.1127 2.5 35.5 9.8873 35.5 19C35.5 28.1127 28.1127 35.5 19 35.5C9.8873 35.5 2.5 28.1127 2.5 19Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5 10C17.5 9.17157 18.1716 8.5 19 8.5C24.799 8.5 29.5 13.201 29.5 19C29.5 19.8284 28.8284 20.5 28 20.5C27.1716 20.5 26.5 19.8284 26.5 19C26.5 14.8579 23.1421 11.5 19 11.5C18.1716 11.5 17.5 10.8284 17.5 10Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.9393 28.9393C29.5251 28.3536 30.4749 28.3536 31.0607 28.9393L37.0607 34.9393C37.6464 35.5251 37.6464 36.4749 37.0607 37.0607C36.4749 37.6464 35.5251 37.6464 34.9393 37.0607L28.9393 31.0607C28.3536 30.4749 28.3536 29.5251 28.9393 28.9393Z"
        />
      </g>
    </svg>
  );
}