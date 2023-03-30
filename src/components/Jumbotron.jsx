import React from "react";
import iPhone from "../assets/images/iphone-14.jpg";
import holdingIphone from "../assets/images/iphone-hand.png";

const Jumbotron = () => {
    return (
        <section className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <img className="logo" src={iPhone} alt="iPhone-14-Pro" />
            <p className="text">Big and bigger</p>
            <span className="description">
                From $41.62/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                    <a className="link">Learn more</a>
                </li>
            </ul>
            <img className="iphone-img" src={holdingIphone} alt="iPhone" />
        </section>
    );
};

export default Jumbotron;
