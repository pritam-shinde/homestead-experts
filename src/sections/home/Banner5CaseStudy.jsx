import React from 'react'
import HammerIcon from '../icons/HammerIcon'

const Banner5CaseStudy = () => {
    return (
        <>
            <section className="portfolio-one" id="caseStudy">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                            <HammerIcon />
                            Case Study
                        </div>
                        {/* <!-- /.sec-title__tagline --> */}

                        <h3 className="sec-title__title bw-split-in-up">
                            Our Recently Completed <br />
                            <span>Latest Case Study</span>
                        </h3>
                        {/* <!-- /.sec-title__title --> */}
                    </div>
                    {/* <!-- /.sec-title --> */}
                </div>
                <div className="container">
                    <div className="portfolio-one__wrapper">
                        <div className="portfolio-one__item">
                            <img
                                src="assets/images/portfolio/portfolio-1-1.jpg"
                                alt="procounsel"
                            />
                            <div className="portfolio-one__item__rm">
                                <a href="portfolio-details.html">
                                    <i className="icon-right-arrow-1-4"></i>
                                </a>
                            </div>
                            <div className="portfolio-one__item__content">
                                <div className="portfolio-one__item__cat">
                                    <i className="icon-pin"></i>United State
                                </div>
                                <h3 className="portfolio-one__item__title">
                                    <a href="portfolio-details.html">Domestic Violence</a>
                                </h3>
                            </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="portfolio-one__item">
                            <img
                                src="assets/images/portfolio/portfolio-1-2.jpg"
                                alt="procounsel"
                            />
                            <div className="portfolio-one__item__rm">
                                <a href="portfolio-details.html">
                                    <i className="icon-right-arrow-1-4"></i>
                                </a>
                            </div>
                            <div className="portfolio-one__item__content">
                                <div className="portfolio-one__item__cat">
                                    <i className="icon-pin"></i>United State
                                </div>
                                <h3 className="portfolio-one__item__title">
                                    <a href="portfolio-details.html">Domestic Violence</a>
                                </h3>
                            </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="portfolio-one__item active">
                            <img
                                src="assets/images/portfolio/portfolio-1-3.jpg"
                                alt="procounsel"
                            />
                            <div className="portfolio-one__item__rm">
                                <a href="portfolio-details.html">
                                    <i className="icon-right-arrow-1-4"></i>
                                </a>
                            </div>
                            <div className="portfolio-one__item__content">
                                <div className="portfolio-one__item__cat">
                                    <i className="icon-pin"></i>United State
                                </div>
                                <h3 className="portfolio-one__item__title">
                                    <a href="portfolio-details.html">Domestic Violence</a>
                                </h3>
                            </div>
                        </div>
                        {/* <!-- item --> */}
                    </div>
                    {/* <!-- portfolio-one__wrapper --> */}
                </div>
            </section>
        </>
    )
}

export default Banner5CaseStudy