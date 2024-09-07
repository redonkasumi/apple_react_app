import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import IPhone15Pro from "../../images/home/iphone15-pro.png"
import IPhone15 from "../../images/home/iphone_15.png"

class IPhone extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    render() {
        console.log(this.state.products)
        let order = 1;
        return (
            <div>
                <section className="internal-page-wrapper">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12">
                                <div className="title-wraper">
                                    iPhones
                                </div>
                                <div className="brief-description">
                                    The best for the brightest
                                </div>
                            </div>
                        </div>

                        <div key={2} className="row justify-content-center text-center product-holder h-100">
                            <div className={`col-sm-12 col-md-6 my-auto order-1}`}>
                                <div className="product-title">
                                    {"IPhone 15 Pro"}
                                </div>
                                <div className="description-wraper">
                                    {"The ultimate iPhone."}
                                </div>
                                <div className="price-wrapper">
                                    {`Starting at $999 `}
                                </div>
                                <div className="monthly-price">
                                    {"From $999 or $41.62/mo. for 24 mo"}
                                </div>

                                <div className="links-wrapper">
                                    <ul>
                                        <li>
                                            <Link to={"productPage"}>Learn more
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className={`col-sm-12 col-md-6 order-2`}>
                                <div className="prodict-image">
                                    <img src={IPhone15Pro} />
                                </div>
                            </div>
                        </div>

                        <div key={1} className="row justify-content-center text-center product-holder h-100">
                            <div className={`col-sm-12 col-md-6 my-auto order-1`}>
                                <div className="product-title">
                                    {"IPhone 15"}
                                </div>
                                <div className="description-wraper">
                                    {"A total powerhouse"}
                                </div>
                                <div className="price-wrapper">
                                    {`Starting at $799`}
                                </div>
                                <div className="monthly-price">
                                    {"$799 or $33.29/mo. for 24 mo"}
                                </div>

                                <div className="links-wrapper">
                                    <ul>
                                        <li>
                                            <Link to={"productPage"}>Learn more
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className={`col-sm-12 col-md-6 order-2`}>
                                <div className="prodict-image">
                                    <img src={IPhone15} />
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
            </div>
        )
    }
}

export default IPhone
