import React, { Component } from 'react';

import StructureOne from './Structures/StructureOne';
import StructureTwo from './Structures/StructureTwo';

import AppleTvLogo from "../../images/icons/apple-tv-logo.png"
import WatchSeries5Logo from "../../images/icons/watch-series5-logo.png"
import tvtitle from "../../images/icons/tv-title-large.png"

import "./main.css";


class Main extends Component {
    render() {
        return (
            <div>
                <section className="first-hightlight-wrapper">
                    <StructureOne alert="New" titleColor="black" title="iPad Pro"
                        colorClass="black"
                    />
                    <div className="ipod-caption row">
                        <div className="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
                        <div className="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
                    </div>
                </section>

                <section className="third-hightlight-wrapper" >
                    <StructureOne titleColor="white" title="iPhone 15 Pro" priceColor="grey"
                        price="From $24.95/mo. or $599 with trade‑in."
                        colorClass="white" description="Pro cameras. Pro display. Pro performance."
                    />
                </section>

                <section className="second-hightlight-wrapper">
                    <StructureOne alert="New" titleColor="black" title="MacBook Pro" priceColor="grey" price="From $999."
                        colorClass="black" description="Twice the speed. Twice the storage."
                    />

                </section>

                <section className="fourth-heghlight-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <StructureTwo wrapperClass="left-side-wrapper"
                                innerClassName="left-side-container"
                                title="iPhone 15" description="Just the right amount of everything."
                                price="From $18.70/mo. or $499 with trade‑in."
                                link="Apply now"><a href="">Learn more</a></StructureTwo>
                            <StructureTwo wrapperClass="right-side-wrapper"
                                innerClassName="right-side-container" titleColor="white" linkColor="white"
                                title="Apple Intelligence"
                                link="AI for the rest of us" />
                        </div>
                    </div>
                </section>

                <section className="fifth-heghlight-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="left-side-wrapper col-sm-12 col-md-6">
                                <div className="left-side-container">
                                    <div className="top-logo-wrapper">
                                        <div className="logo-wrapper">
                                            <img src={AppleTvLogo} />
                                        </div>
                                    </div>

                                    <div className="tvshow-logo-wraper">
                                        <img src={tvtitle} />
                                    </div>

                                    <div className="watch-more-wrapper">
                                        <a href="#">Watch now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="right-side-wrapper col-sm-12 col-md-6">
                                <div className="right-side-container">
                                    <div className="top-logo-wrapper">
                                        <div className="logo-wrapper">
                                            <img src={WatchSeries5Logo} />
                                        </div>
                                    </div>
                                    <div className="description-wraper">
                                        With the Always-On Retina display.<br></br>
                                        You’ve never seen a watch like this.
                                    </div>
                                    <div className="links-wrapper">
                                        <ul>
                                            <li><a href="">Learn more</a></li>
                                            <li><a href="">Buy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

        );
    }

}

export default Main;