import React from "react";
import "./index.styl";

const ThePlayer:React.FunctionComponent = () => {
    return <>
        <div id="ThePlayer">
            <div id="ThePlayer__controls">
                <div id="ThePlayer__empty"></div>
                <div id="ThePlayer__play">
                    <div />
                </div>
                <div id="ThePlayer__prev">
                    <div />
                </div>
                <div id="ThePlayer__next">
                    <div />
                </div>
            </div>
            <div id="ThePlayer__timer">
                <section>
                    <div id="ThePlayer__time">
                        <h2>0:00</h2>
                        <h2>4:20</h2>
                    </div>
                    <div id="ThePlayer__timeline">
                        <div id="timeline"></div>
                    </div>
                </section>
            </div>
        </div>
    </>
}

export default ThePlayer;