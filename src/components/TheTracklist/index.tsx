import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../redux/interface";
import { ITheTracklist } from "./interface";
import "./index.styl";

/**
 *
 * Tracklist music component. Absolute postion width: 100vw, height: 100vh
 *
 * @function
 * @component
 *
 * @param {Array} data Array of music
 * @param {Function} setPlayFromTheTracklist Function for changing music. Accepts in itself "nowPlay"
 * @param {string} mainColor Color title current song
 *
 * @returns {React.FunctionComponent | React.FC} JSX Component
 *
 */
const TheTracklist: React.FunctionComponent<ITheTracklist> = ({ data, setPlayFromTheTracklist, mainColor }) => {
  /**
   *
   * Get nowPlay value from global redux state
   *
   */
  const { nowPlay, isTracklist } = useSelector((store: IStore) => {
    return {
      nowPlay: store.nowPlay,
      isTracklist: store.isTracklist,
    };
  });

  /**
   * Styles object
   *
   * @namespace {Object} selected Styles object
   *
   */
  const selected = { color: mainColor, marginLeft: "20px", opacity: "1" };

  return (
    <>
      <div id="theTracklist" className={isTracklist ? "openTracklist" : "closeTracklist"}>
        {data.map(({ title, artist }, key) => {
          return (
            <div key={key}>
              <h1
                onClick={() => {
                  setPlayFromTheTracklist(key);
                }}
                style={nowPlay === key ? selected : {}}
              >
                {title} - <span> {artist}</span>
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TheTracklist;
