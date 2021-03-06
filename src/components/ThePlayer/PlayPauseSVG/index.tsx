import React from "react";

/**
 *
 * Interface for component
 *
 * @interface
 *
 */
interface IPlayPauseSVG {
  isPlay: boolean;
  color?: string;
}

/**
 *
 * PlayPauseSVG button for ThePlayer component
 *
 * @param {boolean} isPlay
 * @param {string} color
 *
 * @returns {React.FunctionComponent}
 *
 */
const PlayPauseSVG: React.FunctionComponent<IPlayPauseSVG> = ({ isPlay, color }) => {
  return (
    <>
      {!isPlay && (
        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#play)">
            <path
              style={{ fill: color }}
              d="M27.3355 11.9781L6.42685 0.462051C4.20895 -0.763294 1.94775 0.576802 1.94775 2.98658V27.0275C1.94775 29.0691 3.32118 30 4.59768 30C5.19881 30 5.81128 29.8164 6.41963 29.4582L27.4221 17.0172C28.4779 16.3895 29.0708 15.4606 29.0523 14.4677C29.0347 13.4739 28.4099 12.5658 27.3355 11.9781ZM26.0146 14.795L5.01321 27.233C4.87195 27.3169 4.76059 27.3588 4.68429 27.3797C4.66367 27.3059 4.64305 27.1921 4.64305 27.0275V2.98758C4.64305 2.74011 4.68945 2.61539 4.68945 2.58445C4.77193 2.58944 4.91629 2.63035 5.09776 2.73014L26.0033 14.2462C26.2611 14.3889 26.3374 14.5126 26.3621 14.4857C26.3487 14.5196 26.2611 14.6463 26.0146 14.795Z"
              fill="#F96243"
            />
          </g>
          <defs>
            <clipPath id="play">
              <rect width="31" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
      {isPlay && (
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9" y="2" width="3" height="27" rx="1.5" fill={color} />
          <rect x="20" y="2" width="3" height="27" rx="1.5" fill={color} />
        </svg>
      )}
    </>
  );
};

export default PlayPauseSVG;
